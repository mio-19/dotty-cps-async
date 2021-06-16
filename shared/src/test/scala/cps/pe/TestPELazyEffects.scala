package cps.pe

import org.junit.{Test,Ignore}
import org.junit.Assert._

import scala.quoted._
import scala.util._

import cps._
import cps.util.FutureCompleter

import scala.concurrent.ExecutionContext.Implicits.global

class TestPELazyEffect:

   
  @Test def testLazyEffectThrow() = 
     val c = async[PureEffect](throw new RuntimeException("AAA"))
     val future = c.unsafeRunFuture().transform{
                      case Failure(ex) => Success(assert(ex.getMessage()=="AAA"))
                      case Success(something) => 
                                          Failure(new RuntimeException("failure expected"))
                  }
     FutureCompleter(future)


  //  pending now
  @Test def testLazyEffectPrint(): Unit = 
     val logger = new ToyLogger()
     val c = Async.async[PureEffect]{ logger.log("W") }
     println(s"logger lines now: ${logger.lines}")
     assert(logger.lines.isEmpty)
     val future = c.unsafeRunFuture().map(x => assert(logger.lines(0)=="W") )
     FutureCompleter(future)



