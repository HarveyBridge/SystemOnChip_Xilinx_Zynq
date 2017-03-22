##############################################################################
## Filename:          C:\SoC\led_interrupt\led_interrupt.srcs\sources_1\edk\system/drivers/led_interrupt_ip_v1_00_a/data/led_interrupt_ip_v2_1_0.tcl
## Description:       Microprocess Driver Command (tcl)
## Date:              Mon Mar 20 16:04:12 2017 (by Create and Import Peripheral Wizard)
##############################################################################

#uses "xillib.tcl"

proc generate {drv_handle} {
  xdefine_include_file $drv_handle "xparameters.h" "led_interrupt_ip" "NUM_INSTANCES" "DEVICE_ID" "C_BASEADDR" "C_HIGHADDR" 
}
