######################################################
#
# XPS Tcl API script generated by PlanAhead
#
######################################################

cd "C:/Users/BowenHsu/Documents/SystemOnChip_Xilinx_Zynq/Lab1_Hardware_LED/LED_counter/LED_counter.srcs/sources_1/edk/system"
if { [xload new system.xmp] != 0 } {
  exit -1
}
xset arch zynq
xset dev xc7z020
xset package clg484
xset speedgrade -1

xset binfo ZEDBOARD

if { [xset hier sub] != 0 } {
  exit -1
}
xset hdl vhdl
save proj
exit
