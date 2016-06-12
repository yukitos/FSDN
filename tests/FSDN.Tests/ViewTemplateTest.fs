﻿module FSDN.Tests.ViewTemplateTest

open System.IO
open System.Xml.Linq
open Persimmon
open UseTestNameByReflection

let ``template sould parse xml`` = test {
  return
    Path.Combine(Directory.GetParent(__SOURCE_DIRECTORY__).FullName, @"../views/tools/templates/template.cshtml")
    |> XDocument.Load
}
