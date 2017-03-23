##############################################################################
## Filename:          C:\Users\BowenHsu\Documents\SystemOnChip_Xilinx_Zynq\Lab1_Hardware_LED\LED_counter\LED_counter.srcs\sources_1\edk\system/drivers/led_counter_v1_00_a/src/Makefile
## Description:       Microprocessor Driver Makefile
## Date:              Thu Mar 23 10:27:25 2017 (by Create and Import Peripheral Wizard)
##############################################################################

COMPILER=
ARCHIVER=
CP=cp
COMPILER_FLAGS=
EXTRA_COMPILER_FLAGS=
LIB=libxil.a

RELEASEDIR=../../../lib
INCLUDEDIR=../../../include
INCLUDES=-I./. -I${INCLUDEDIR}

INCLUDEFILES=*.h
LIBSOURCES=*.c
OUTS = *.o

libs:
	echo "Compiling led_counter"
	$(COMPILER) $(COMPILER_FLAGS) $(EXTRA_COMPILER_FLAGS) $(INCLUDES) $(LIBSOURCES)
	$(ARCHIVER) -r ${RELEASEDIR}/${LIB} ${OUTS}
	make clean

include:
	${CP} $(INCLUDEFILES) $(INCLUDEDIR)

clean:
	rm -rf ${OUTS}
