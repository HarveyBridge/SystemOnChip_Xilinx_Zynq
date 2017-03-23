##############################################################################
## Filename:          C:\Users\BowenHsu\Documents\SystemOnChip_Xilinx_Zynq\Lab1_Hardware_LED\LED_counter\LED_counter.srcs\sources_1\edk\system/drivers/led_counter_v1_00_a/data/led_counter_v2_1_0.tcl
## Description:       Microprocess Driver Command (tcl)
## Date:              Thu Mar 23 10:27:25 2017 (by Create and Import Peripheral Wizard)
##############################################################################

#uses "xillib.tcl"

proc generate {drv_handle} {
  xdefine_include_file $drv_handle "xparameters.h" "led_counter" "NUM_INSTANCES" "DEVICE_ID" "C_BASEADDR" "C_HIGHADDR" 
}
