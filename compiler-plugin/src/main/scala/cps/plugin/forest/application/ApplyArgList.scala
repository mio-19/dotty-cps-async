package cps.plugin.forest.application

import dotty.tools.dotc.*
import core.*
import core.Contexts.*
import core.Types.*
import core.Decorators.*
import core.Symbols.*
import ast.tpd.*

import cps.plugin.*

sealed trait ApplyArgList {
  def isAsync: Boolean
  def isAsyncLambda: Boolean
}


case class ApplyTermArgList(
  originApplyTerm:  Apply,
  args: List[ApplyArg]
) extends ApplyArgList {
  override def isAsync = args.exists(_.isAsync)
  override def isAsyncLambda = ???
} 

case class ApplyTypeArgList(
  originApplyTerm:  TypeApply,
  args: List[Type]
) extends ApplyArgList {
  override def isAsync = false
}


