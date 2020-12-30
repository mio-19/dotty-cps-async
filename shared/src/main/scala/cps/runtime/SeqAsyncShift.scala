package cps.runtime

import cps._
import scala.collection._
import scala.reflect.ClassTag
import scala.collection.mutable.ArrayBuilder

class SeqAsyncShift[A, C[X] <: scala.collection.Seq[X] & scala.collection.SeqOps[X,C,C[X]], CA <: C[A]] 
       extends IterableOpsAsyncShift[A,C,CA]
           with PartialFunctionAsyncShiftBase[Int,A,CA]
   {


  // TODO: move to IndexedSeq
  def aggregate[F[_], B](c:C[A], m: CpsMonad[F])(
        z: () => F[B])(seqop: (B, A) => F[B], combop: (B, B) ⇒ F[B]): F[B] =
     c.aggregate[F[B]](z())(
            (fb, a) => m.flatMap(fb)(b=>seqop(b,a)),
            (fbx, fby) => m.flatMap(fbx)(bx=>m.flatMap(fby)(by=>combop(bx,by)))
     )
                      
  def distinctBy[F[_],B](c:CA, m: CpsMonad[F])(f: (A)=>F[B]): F[C[A]] =
     shiftedFold(c,m)(
       (immutable.Set.empty[B], c.iterableFactory.newBuilder[A]),
       f,
       (s,a,b) => { val (olds, it) = s
         if (olds.contains(b)) then
           s
         else
           (olds.incl(b), it.addOne(a))
       },
       _._2.result
     )

  def indexWhere[F[_]](c:CA, m: CpsMonad[F])(p: A=>F[Boolean], from: Int): F[Int] =
    def run(it: Iterator[A], n: Int): F[Int] =
       if (it.hasNext) then
           m.flatMap(p(it.next)){ c =>
              if (c)  then
                 m.pure(n)
              else
                 run(it, n+1)
           }
       else
           m.pure(-1) 
    val it = c.iterator
    var i = 0
    while(it.hasNext && i < from)
       it.next
       i = i + 1
    run(c.iterator,i)

  def indexWhere[F[_]](c:CA, m: CpsMonad[F])(p: A=>F[Boolean]): F[Int] =
     indexWhere(c,m)(p,0)


}

/*
class SeqOpsAsyncShift[A, C[X] <: Seq[X] & SeqOps[X,C,C[X]], CA <: C[A] ] extends IterableOpsAsyncShift[A,C, CA] {


}
*/

class RangeAsyncShift[ R <: Range ] extends SeqAsyncShift[Int,immutable.IndexedSeq,R]



class IndexedSeqAsyncShift[A, C[X] <: IndexedSeq[X] & IndexedSeqOps[X,C,C[X]], CA <: C[A]] extends SeqAsyncShift[A,C,CA] {


  override def indexWhere[F[_]](c:CA, m: CpsMonad[F])(p: A=>F[Boolean], from:Int): F[Int] =
    def run(n: Int): F[Int] =
       if (n < c.length) then
           m.flatMap(p(c(n))){ c =>
              if (c)  then
                 m.pure(n)
              else
                 run(n+1)
           }
       else
           m.pure(-1)
    run(0)

  override def indexWhere[F[_]](c:CA, m: CpsMonad[F])(p: A=>F[Boolean]): F[Int] =
     indexWhere(c,m)(p,0)

}
