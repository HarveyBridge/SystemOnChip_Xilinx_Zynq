##############################################################################
## Filename:          E:\0152021\led_ipif\led_ipif.srcs\sources_1\edk\system/drivers/led_counter_v1_00_a/data/led_counter_v2_1_0.tcl
## Description:       Microprocess Driver Command (tcl)
## Date:              Mon Mar 13 15:44:49 2017 (by Create and Import Peripheral Wizard)
##############################################################################

#uses "xillib.tcl"

proc generate {drv_handle} {
  xdefine_include_file $drv_handle "xparameters.h" "led_counter" "NUM_INSTANCES" "DEVICE_ID" "C_BASEADDR" "C_HIGHADDR" 
}
