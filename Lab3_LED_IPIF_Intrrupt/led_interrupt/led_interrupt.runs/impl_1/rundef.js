//
// PlanAhead(TM)
// rundef.js: a PlanAhead-generated Runs Script for WSH 5.1/5.6
// Copyright 1986-1999, 2001-2013 Xilinx, Inc. All Rights Reserved.
//

var WshShell = new ActiveXObject( "WScript.Shell" );
var ProcEnv = WshShell.Environment( "Process" );
var PathVal = ProcEnv("PATH");
if ( PathVal.length == 0 ) {
  PathVal = "C:/Xilinx/14.7/ISE_DS/EDK/bin/nt;C:/Xilinx/14.7/ISE_DS/EDK/lib/nt;C:/Xilinx/14.7/ISE_DS/ISE/bin/nt;C:/Xilinx/14.7/ISE_DS/ISE/lib/nt;C:/Xilinx/14.7/ISE_DS/common/bin/nt;C:/Xilinx/14.7/ISE_DS/common/lib/nt;C:/Xilinx/14.7/ISE_DS/PlanAhead/bin;";
} else {
  PathVal = "C:/Xilinx/14.7/ISE_DS/EDK/bin/nt;C:/Xilinx/14.7/ISE_DS/EDK/lib/nt;C:/Xilinx/14.7/ISE_DS/ISE/bin/nt;C:/Xilinx/14.7/ISE_DS/ISE/lib/nt;C:/Xilinx/14.7/ISE_DS/common/bin/nt;C:/Xilinx/14.7/ISE_DS/common/lib/nt;C:/Xilinx/14.7/ISE_DS/PlanAhead/bin;" + PathVal;
}

ProcEnv("PATH") = PathVal;

var RDScrFP = WScript.ScriptFullName;
var RDScrN = WScript.ScriptName;
var RDScrDir = RDScrFP.substr( 0, RDScrFP.length - RDScrN.length - 1 );
var ISEJScriptLib = RDScrDir + "/ISEWrap.js";
eval( EAInclude(ISEJScriptLib) );


ISEStep( "ngdbuild",
         "-intstyle ise -p xc7z020clg484-1 -dd _ngo -uc \"system_stub.ucf\" \"system_stub.edf\"" );
ISEStep( "map",
         "-intstyle pa -w \"system_stub.ngd\"" );
ISEStep( "par",
         "-intstyle pa \"system_stub.ncd\" -w \"system_stub_routed.ncd\"" );
ISEStep( "trce",
         "-intstyle ise -o \"system_stub.twr\" -v 30 -l 30 \"system_stub_routed.ncd\" \"system_stub.pcf\"" );
ISEStep( "xdl",
         "-secure -ncd2xdl -nopips \"system_stub_routed.ncd\" \"system_stub_routed.xdl\"" );
ISEStep( "bitgen",
         "\"system_stub_routed.ncd\" \"system_stub.bit\" \"system_stub.pcf\" -w -intstyle pa" );



function EAInclude( EAInclFilename ) {
  var EAFso = new ActiveXObject( "Scripting.FileSystemObject" );
  var EAInclFile = EAFso.OpenTextFile( EAInclFilename );
  var EAIFContents = EAInclFile.ReadAll();
  EAInclFile.Close();
  return EAIFContents;
}
