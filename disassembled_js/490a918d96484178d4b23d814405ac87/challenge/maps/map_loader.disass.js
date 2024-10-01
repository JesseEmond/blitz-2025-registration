<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1cbba5024f18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1cbba5024f18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1cbba5024f1c @    4 : c4                Star0 
10444 S> 0x1cbba5024f1d @    5 : a9                Return 
Constant pool (size = 1)
0x1cbba5024f21: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 1
           0: 0x1cbba5024f39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1cbba502ae29 <ByteArray[8]>
0x1cbba5024f39 points to: [0x1cbba5024fa8]
=== [0x1cbba5024fa8] DISASSEMBLY ===
Parameter count 6
Register count 20
Frame size 160
OSR urgency: 0
Bytecode age: 0
   10 E> 0x1cbba5024fa8 @    0 : 83 00 0e          CreateFunctionContext [0], [14]
         0x1cbba5024fab @    3 : 1a f7             PushContext r3
         0x1cbba5024fad @    5 : 10                LdaTheHole 
         0x1cbba5024fae @    6 : 25 04             StaCurrentContextSlot [4]
         0x1cbba5024fb0 @    8 : 10                LdaTheHole 
         0x1cbba5024fb1 @    9 : 25 05             StaCurrentContextSlot [5]
         0x1cbba5024fb3 @   11 : 10                LdaTheHole 
         0x1cbba5024fb4 @   12 : 25 06             StaCurrentContextSlot [6]
         0x1cbba5024fb6 @   14 : 10                LdaTheHole 
         0x1cbba5024fb7 @   15 : 25 07             StaCurrentContextSlot [7]
         0x1cbba5024fb9 @   17 : 10                LdaTheHole 
         0x1cbba5024fba @   18 : 25 08             StaCurrentContextSlot [8]
         0x1cbba5024fbc @   20 : 10                LdaTheHole 
         0x1cbba5024fbd @   21 : 25 0a             StaCurrentContextSlot [10]
         0x1cbba5024fbf @   23 : 10                LdaTheHole 
         0x1cbba5024fc0 @   24 : 25 0b             StaCurrentContextSlot [11]
         0x1cbba5024fc2 @   26 : 10                LdaTheHole 
         0x1cbba5024fc3 @   27 : 25 0c             StaCurrentContextSlot [12]
         0x1cbba5024fc5 @   29 : 10                LdaTheHole 
         0x1cbba5024fc6 @   30 : 25 0d             StaCurrentContextSlot [13]
         0x1cbba5024fc8 @   32 : 10                LdaTheHole 
         0x1cbba5024fc9 @   33 : 25 0e             StaCurrentContextSlot [14]
         0x1cbba5024fcb @   35 : 10                LdaTheHole 
         0x1cbba5024fcc @   36 : 25 0f             StaCurrentContextSlot [15]
   98 S> 0x1cbba5024fce @   38 : 0b 02             Ldar <this>
         0x1cbba5024fd0 @   40 : 97 06             JumpIfToBooleanFalse [6] (0x1cbba5024fd6 @ 46)
  112 E> 0x1cbba5024fd2 @   42 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x1cbba5024fd6 @   46 : 96 16             JumpIfToBooleanTrue [22] (0x1cbba5024fec @ 68)
  133 E> 0x1cbba5024fd8 @   48 : 21 02 02          LdaGlobal [2], [2]
         0x1cbba5024fdb @   51 : c0                Star4 
  140 E> 0x1cbba5024fdc @   52 : 2d f6 03 04       GetNamedProperty r4, [3], [4]
         0x1cbba5024fe0 @   56 : 97 08             JumpIfToBooleanFalse [8] (0x1cbba5024fe8 @ 64)
         0x1cbba5024fe2 @   58 : 80 04 00 02       CreateClosure [4], [0], #2
         0x1cbba5024fe6 @   62 : 8a 06             Jump [6] (0x1cbba5024fec @ 68)
         0x1cbba5024fe8 @   64 : 80 05 01 02       CreateClosure [5], [1], #2
   98 E> 0x1cbba5024fec @   68 : 25 02             StaCurrentContextSlot [2]
  578 S> 0x1cbba5024fee @   70 : 0b 02             Ldar <this>
         0x1cbba5024ff0 @   72 : 97 06             JumpIfToBooleanFalse [6] (0x1cbba5024ff6 @ 78)
  592 E> 0x1cbba5024ff2 @   74 : 2d 02 06 06       GetNamedProperty <this>, [6], [6]
         0x1cbba5024ff6 @   78 : 96 16             JumpIfToBooleanTrue [22] (0x1cbba502500c @ 100)
  616 E> 0x1cbba5024ff8 @   80 : 21 02 02          LdaGlobal [2], [2]
         0x1cbba5024ffb @   83 : c0                Star4 
  623 E> 0x1cbba5024ffc @   84 : 2d f6 03 04       GetNamedProperty r4, [3], [4]
         0x1cbba5025000 @   88 : 97 08             JumpIfToBooleanFalse [8] (0x1cbba5025008 @ 96)
         0x1cbba5025002 @   90 : 80 07 02 02       CreateClosure [7], [2], #2
         0x1cbba5025006 @   94 : 8a 06             Jump [6] (0x1cbba502500c @ 100)
         0x1cbba5025008 @   96 : 80 08 03 02       CreateClosure [8], [3], #2
  578 E> 0x1cbba502500c @  100 : 25 03             StaCurrentContextSlot [3]
  790 S> 0x1cbba502500e @  102 : 0b 02             Ldar <this>
         0x1cbba5025010 @  104 : 97 06             JumpIfToBooleanFalse [6] (0x1cbba5025016 @ 110)
  804 E> 0x1cbba5025012 @  106 : 2d 02 09 08       GetNamedProperty <this>, [9], [8]
         0x1cbba5025016 @  110 : 96 06             JumpIfToBooleanTrue [6] (0x1cbba502501c @ 116)
         0x1cbba5025018 @  112 : 80 0a 04 02       CreateClosure [10], [4], #2
         0x1cbba502501c @  116 : c4                Star0 
 1125 S> 0x1cbba502501d @  117 : 0b 02             Ldar <this>
         0x1cbba502501f @  119 : 97 06             JumpIfToBooleanFalse [6] (0x1cbba5025025 @ 125)
 1139 E> 0x1cbba5025021 @  121 : 2d 02 0b 0a       GetNamedProperty <this>, [11], [10]
         0x1cbba5025025 @  125 : 96 06             JumpIfToBooleanTrue [6] (0x1cbba502502b @ 131)
         0x1cbba5025027 @  127 : 80 0c 05 02       CreateClosure [12], [5], #2
         0x1cbba502502b @  131 : c3                Star1 
 1242 S> 0x1cbba502502c @  132 : 21 02 02          LdaGlobal [2], [2]
         0x1cbba502502f @  135 : bf                Star5 
 1249 E> 0x1cbba5025030 @  136 : 2d f5 0d 0c       GetNamedProperty r5, [13], [12]
         0x1cbba5025034 @  140 : c0                Star4 
         0x1cbba5025035 @  141 : 13 0e             LdaConstant [14]
         0x1cbba5025037 @  143 : bd                Star7 
 1264 E> 0x1cbba5025038 @  144 : 7c 0f 0e 29       CreateObjectLiteral [15], [14], #41
         0x1cbba502503c @  148 : bc                Star8 
         0x1cbba502503d @  149 : 19 03 f4          Mov a0, r6
 1249 E> 0x1cbba5025040 @  152 : 5c f6 f5 04 0f    CallProperty r4, r5-r8, [15]
 1305 S> 0x1cbba5025045 @  157 : 0e                LdaUndefined 
         0x1cbba5025046 @  158 : be                Star6 
 1346 E> 0x1cbba5025047 @  159 : 32 03 10 11       SetNamedProperty a0, [16], [17]
         0x1cbba502504b @  163 : 0b f4             Ldar r6
 1326 E> 0x1cbba502504d @  165 : 32 03 11 13       SetNamedProperty a0, [17], [19]
 1373 S> 0x1cbba5025051 @  169 : 13 12             LdaConstant [18]
         0x1cbba5025053 @  171 : bf                Star5 
 1373 E> 0x1cbba5025054 @  172 : 62 04 f5 15       CallUndefinedReceiver1 a1, r5, [21]
 1373 E> 0x1cbba5025058 @  176 : 25 04             StaCurrentContextSlot [4]
 1410 S> 0x1cbba502505a @  178 : 13 13             LdaConstant [19]
         0x1cbba502505c @  180 : be                Star6 
 1423 E> 0x1cbba502505d @  181 : 62 04 f4 17       CallUndefinedReceiver1 a1, r6, [23]
         0x1cbba5025061 @  185 : bf                Star5 
 1410 E> 0x1cbba5025062 @  186 : 62 fa f5 19       CallUndefinedReceiver1 r0, r5, [25]
 1410 E> 0x1cbba5025066 @  190 : 25 05             StaCurrentContextSlot [5]
 1454 S> 0x1cbba5025068 @  192 : 13 14             LdaConstant [20]
         0x1cbba502506a @  194 : be                Star6 
 1470 E> 0x1cbba502506b @  195 : 62 04 f4 1b       CallUndefinedReceiver1 a1, r6, [27]
         0x1cbba502506f @  199 : bf                Star5 
 1454 E> 0x1cbba5025070 @  200 : 62 f9 f5 1d       CallUndefinedReceiver1 r1, r5, [29]
 1454 E> 0x1cbba5025074 @  204 : 25 06             StaCurrentContextSlot [6]
 1504 S> 0x1cbba5025076 @  206 : 13 15             LdaConstant [21]
         0x1cbba5025078 @  208 : bf                Star5 
 1504 E> 0x1cbba5025079 @  209 : 62 04 f5 1f       CallUndefinedReceiver1 a1, r5, [31]
 1504 E> 0x1cbba502507d @  213 : 25 07             StaCurrentContextSlot [7]
 1539 S> 0x1cbba502507f @  215 : 13 16             LdaConstant [22]
         0x1cbba5025081 @  217 : bf                Star5 
 1539 E> 0x1cbba5025082 @  218 : 62 04 f5 21       CallUndefinedReceiver1 a1, r5, [33]
 1539 E> 0x1cbba5025086 @  222 : 25 08             StaCurrentContextSlot [8]
 1584 S> 0x1cbba5025088 @  224 : 80 17 06 02       CreateClosure [23], [6], #2
         0x1cbba502508c @  228 : c0                Star4 
         0x1cbba502508d @  229 : 16 09             LdaCurrentContextSlot [9]
 2239 E> 0x1cbba502508f @  231 : 96 05             JumpIfToBooleanTrue [5] (0x1cbba5025094 @ 236)
         0x1cbba5025091 @  233 : 7d                CreateEmptyObjectLiteral 
 2261 E> 0x1cbba5025092 @  234 : 25 09             StaCurrentContextSlot [9]
         0x1cbba5025094 @  236 : bf                Star5 
 2238 E> 0x1cbba5025095 @  237 : 62 f6 f5 23       CallUndefinedReceiver1 r4, r5, [35]
 2289 S> 0x1cbba5025099 @  241 : 79 18 25 04       CreateArrayLiteral [24], [37], #4
         0x1cbba502509d @  245 : bf                Star5 
         0x1cbba502509e @  246 : 0c                LdaZero 
         0x1cbba502509f @  247 : c0                Star4 
         0x1cbba50250a0 @  248 : 7c 19 26 08       CreateObjectLiteral [25], [38], #8
         0x1cbba50250a4 @  252 : be                Star6 
         0x1cbba50250a5 @  253 : 16 09             LdaCurrentContextSlot [9]
         0x1cbba50250a7 @  255 : bd                Star7 
 2320 E> 0x1cbba50250a8 @  256 : 2d f3 1a 27       GetNamedProperty r7, [26], [39]
         0x1cbba50250ac @  260 : 33 f4 1b 29       DefineNamedOwnProperty r6, [27], [41]
         0x1cbba50250b0 @  264 : 0b f4             Ldar r6
         0x1cbba50250b2 @  266 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x1cbba50250b6 @  270 : 0d 01             LdaSmi [1]
         0x1cbba50250b8 @  272 : c0                Star4 
         0x1cbba50250b9 @  273 : 7c 1c 2d 08       CreateObjectLiteral [28], [45], #8
         0x1cbba50250bd @  277 : be                Star6 
         0x1cbba50250be @  278 : 16 09             LdaCurrentContextSlot [9]
         0x1cbba50250c0 @  280 : bd                Star7 
 2416 E> 0x1cbba50250c1 @  281 : 2d f3 1d 2e       GetNamedProperty r7, [29], [46]
         0x1cbba50250c5 @  285 : 33 f4 1b 30       DefineNamedOwnProperty r6, [27], [48]
         0x1cbba50250c9 @  289 : 0b f4             Ldar r6
         0x1cbba50250cb @  291 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x1cbba50250cf @  295 : 0d 02             LdaSmi [2]
         0x1cbba50250d1 @  297 : c0                Star4 
         0x1cbba50250d2 @  298 : 7c 1e 32 08       CreateObjectLiteral [30], [50], #8
         0x1cbba50250d6 @  302 : be                Star6 
         0x1cbba50250d7 @  303 : 16 09             LdaCurrentContextSlot [9]
         0x1cbba50250d9 @  305 : bd                Star7 
 2514 E> 0x1cbba50250da @  306 : 2d f3 1f 33       GetNamedProperty r7, [31], [51]
         0x1cbba50250de @  310 : 33 f4 1b 35       DefineNamedOwnProperty r6, [27], [53]
         0x1cbba50250e2 @  314 : 0b f4             Ldar r6
         0x1cbba50250e4 @  316 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x1cbba50250e8 @  320 : 0d 03             LdaSmi [3]
         0x1cbba50250ea @  322 : c0                Star4 
         0x1cbba50250eb @  323 : 7c 20 37 08       CreateObjectLiteral [32], [55], #8
         0x1cbba50250ef @  327 : be                Star6 
         0x1cbba50250f0 @  328 : 16 09             LdaCurrentContextSlot [9]
         0x1cbba50250f2 @  330 : bd                Star7 
 2608 E> 0x1cbba50250f3 @  331 : 2d f3 21 38       GetNamedProperty r7, [33], [56]
         0x1cbba50250f7 @  335 : 33 f4 1b 3a       DefineNamedOwnProperty r6, [27], [58]
         0x1cbba50250fb @  339 : 0b f4             Ldar r6
         0x1cbba50250fd @  341 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x1cbba5025101 @  345 : 0d 04             LdaSmi [4]
         0x1cbba5025103 @  347 : c0                Star4 
         0x1cbba5025104 @  348 : 7c 22 3c 08       CreateObjectLiteral [34], [60], #8
         0x1cbba5025108 @  352 : be                Star6 
         0x1cbba5025109 @  353 : 16 09             LdaCurrentContextSlot [9]
         0x1cbba502510b @  355 : bd                Star7 
 2709 E> 0x1cbba502510c @  356 : 2d f3 23 3d       GetNamedProperty r7, [35], [61]
         0x1cbba5025110 @  360 : 33 f4 1b 3f       DefineNamedOwnProperty r6, [27], [63]
         0x1cbba5025114 @  364 : 0b f4             Ldar r6
         0x1cbba5025116 @  366 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x1cbba502511a @  370 : 0d 05             LdaSmi [5]
         0x1cbba502511c @  372 : c0                Star4 
         0x1cbba502511d @  373 : 7c 24 41 08       CreateObjectLiteral [36], [65], #8
         0x1cbba5025121 @  377 : be                Star6 
         0x1cbba5025122 @  378 : 16 09             LdaCurrentContextSlot [9]
         0x1cbba5025124 @  380 : bd                Star7 
 2814 E> 0x1cbba5025125 @  381 : 2d f3 25 42       GetNamedProperty r7, [37], [66]
         0x1cbba5025129 @  385 : 33 f4 1b 44       DefineNamedOwnProperty r6, [27], [68]
         0x1cbba502512d @  389 : 0b f4             Ldar r6
         0x1cbba502512f @  391 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x1cbba5025133 @  395 : 0d 06             LdaSmi [6]
         0x1cbba5025135 @  397 : c0                Star4 
         0x1cbba5025136 @  398 : 7c 26 46 08       CreateObjectLiteral [38], [70], #8
         0x1cbba502513a @  402 : be                Star6 
         0x1cbba502513b @  403 : 16 09             LdaCurrentContextSlot [9]
         0x1cbba502513d @  405 : bd                Star7 
 2920 E> 0x1cbba502513e @  406 : 2d f3 27 47       GetNamedProperty r7, [39], [71]
         0x1cbba5025142 @  410 : 33 f4 1b 49       DefineNamedOwnProperty r6, [27], [73]
         0x1cbba5025146 @  414 : 0b f4             Ldar r6
         0x1cbba5025148 @  416 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x1cbba502514c @  420 : 0d 07             LdaSmi [7]
         0x1cbba502514e @  422 : c0                Star4 
         0x1cbba502514f @  423 : 7c 28 4b 08       CreateObjectLiteral [40], [75], #8
         0x1cbba5025153 @  427 : be                Star6 
         0x1cbba5025154 @  428 : 16 09             LdaCurrentContextSlot [9]
         0x1cbba5025156 @  430 : bd                Star7 
 3030 E> 0x1cbba5025157 @  431 : 2d f3 29 4c       GetNamedProperty r7, [41], [76]
         0x1cbba502515b @  435 : 33 f4 1b 4e       DefineNamedOwnProperty r6, [27], [78]
         0x1cbba502515f @  439 : 0b f4             Ldar r6
         0x1cbba5025161 @  441 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x1cbba5025165 @  445 : 0d 08             LdaSmi [8]
         0x1cbba5025167 @  447 : c0                Star4 
         0x1cbba5025168 @  448 : 7c 2a 50 08       CreateObjectLiteral [42], [80], #8
         0x1cbba502516c @  452 : be                Star6 
         0x1cbba502516d @  453 : 16 09             LdaCurrentContextSlot [9]
         0x1cbba502516f @  455 : bd                Star7 
 3158 E> 0x1cbba5025170 @  456 : 2d f3 2b 51       GetNamedProperty r7, [43], [81]
         0x1cbba5025174 @  460 : 33 f4 1b 53       DefineNamedOwnProperty r6, [27], [83]
         0x1cbba5025178 @  464 : 0b f4             Ldar r6
         0x1cbba502517a @  466 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x1cbba502517e @  470 : 0b f5             Ldar r5
 2289 E> 0x1cbba5025180 @  472 : 25 0a             StaCurrentContextSlot [10]
 3254 S> 0x1cbba5025182 @  474 : 79 2c 55 04       CreateArrayLiteral [44], [85], #4
         0x1cbba5025186 @  478 : bf                Star5 
 3372 E> 0x1cbba5025187 @  479 : 2d f5 2d 56       GetNamedProperty r5, [45], [86]
         0x1cbba502518b @  483 : c0                Star4 
         0x1cbba502518c @  484 : 80 2e 07 02       CreateClosure [46], [7], #2
         0x1cbba5025190 @  488 : be                Star6 
 3372 E> 0x1cbba5025191 @  489 : 5e f6 f5 f4 58    CallProperty1 r4, r5, r6, [88]
 3254 E> 0x1cbba5025196 @  494 : 25 0b             StaCurrentContextSlot [11]
 3449 S> 0x1cbba5025198 @  496 : 13 2f             LdaConstant [47]
 3449 E> 0x1cbba502519a @  498 : 25 0c             StaCurrentContextSlot [12]
 3486 S> 0x1cbba502519c @  500 : 13 30             LdaConstant [48]
 3486 E> 0x1cbba502519e @  502 : 25 0d             StaCurrentContextSlot [13]
 3528 S> 0x1cbba50251a0 @  504 : 13 31             LdaConstant [49]
 3528 E> 0x1cbba50251a2 @  506 : 25 0e             StaCurrentContextSlot [14]
         0x1cbba50251a4 @  508 : 81 32             CreateBlockContext [50]
         0x1cbba50251a6 @  510 : 1a f6             PushContext r4
         0x1cbba50251a8 @  512 : 10                LdaTheHole 
         0x1cbba50251a9 @  513 : 25 02             StaCurrentContextSlot [2]
         0x1cbba50251ab @  515 : 10                LdaTheHole 
         0x1cbba50251ac @  516 : bc                Star8 
         0x1cbba50251ad @  517 : 80 34 08 02       CreateClosure [52], [8], #2
         0x1cbba50251b1 @  521 : bf                Star5 
         0x1cbba50251b2 @  522 : 13 33             LdaConstant [51]
         0x1cbba50251b4 @  524 : be                Star6 
         0x1cbba50251b5 @  525 : 80 35 09 02       CreateClosure [53], [9], #2
         0x1cbba50251b9 @  529 : bb                Star9 
         0x1cbba50251ba @  530 : 80 36 0a 02       CreateClosure [54], [10], #2
         0x1cbba50251be @  534 : ba                Star10 
         0x1cbba50251bf @  535 : 80 37 0b 02       CreateClosure [55], [11], #2
         0x1cbba50251c3 @  539 : b9                Star11 
         0x1cbba50251c4 @  540 : 80 38 0c 02       CreateClosure [56], [12], #2
         0x1cbba50251c8 @  544 : b8                Star12 
         0x1cbba50251c9 @  545 : 80 39 0d 02       CreateClosure [57], [13], #2
         0x1cbba50251cd @  549 : b7                Star13 
         0x1cbba50251ce @  550 : 80 3a 0e 02       CreateClosure [58], [14], #2
         0x1cbba50251d2 @  554 : b6                Star14 
         0x1cbba50251d3 @  555 : 80 3b 0f 02       CreateClosure [59], [15], #2
         0x1cbba50251d7 @  559 : b5                Star15 
         0x1cbba50251d8 @  560 : 80 3c 10 02       CreateClosure [60], [16], #2
         0x1cbba50251dc @  564 : 18 ea             Star r16
         0x1cbba50251de @  566 : 80 3d 11 02       CreateClosure [61], [17], #2
         0x1cbba50251e2 @  570 : 18 e9             Star r17
         0x1cbba50251e4 @  572 : 80 3e 12 02       CreateClosure [62], [18], #2
         0x1cbba50251e8 @  576 : 18 e8             Star r18
         0x1cbba50251ea @  578 : 80 3f 13 02       CreateClosure [63], [19], #2
         0x1cbba50251ee @  582 : 18 e7             Star r19
         0x1cbba50251f0 @  584 : 19 f5 f3          Mov r5, r7
         0x1cbba50251f3 @  587 : 65 28 00 f4 0e    CallRuntime [DefineClass], r6-r19
         0x1cbba50251f8 @  592 : be                Star6 
         0x1cbba50251f9 @  593 : 0b f3             Ldar r7
         0x1cbba50251fb @  595 : 25 02             StaCurrentContextSlot [2]
         0x1cbba50251fd @  597 : 1b f6             PopContext r4
         0x1cbba50251ff @  599 : c2                Star2 
 9606 S> 0x1cbba5025200 @  600 : 0b f8             Ldar r2
 9624 E> 0x1cbba5025202 @  602 : 32 03 10 11       SetNamedProperty a0, [16], [17]
         0x1cbba5025206 @  606 : 81 40             CreateBlockContext [64]
         0x1cbba5025208 @  608 : 1a f6             PushContext r4
         0x1cbba502520a @  610 : 10                LdaTheHole 
         0x1cbba502520b @  611 : 25 02             StaCurrentContextSlot [2]
         0x1cbba502520d @  613 : 10                LdaTheHole 
         0x1cbba502520e @  614 : bc                Star8 
         0x1cbba502520f @  615 : 80 42 14 02       CreateClosure [66], [20], #2
         0x1cbba5025213 @  619 : bf                Star5 
         0x1cbba5025214 @  620 : 13 41             LdaConstant [65]
         0x1cbba5025216 @  622 : be                Star6 
         0x1cbba5025217 @  623 : 80 43 15 02       CreateClosure [67], [21], #2
         0x1cbba502521b @  627 : bb                Star9 
         0x1cbba502521c @  628 : 80 44 16 02       CreateClosure [68], [22], #2
         0x1cbba5025220 @  632 : ba                Star10 
         0x1cbba5025221 @  633 : 80 45 17 02       CreateClosure [69], [23], #2
         0x1cbba5025225 @  637 : b9                Star11 
         0x1cbba5025226 @  638 : 80 46 18 02       CreateClosure [70], [24], #2
         0x1cbba502522a @  642 : b8                Star12 
         0x1cbba502522b @  643 : 19 f5 f3          Mov r5, r7
         0x1cbba502522e @  646 : 65 28 00 f4 07    CallRuntime [DefineClass], r6-r12
         0x1cbba5025233 @  651 : be                Star6 
         0x1cbba5025234 @  652 : 0b f3             Ldar r7
         0x1cbba5025236 @  654 : 25 02             StaCurrentContextSlot [2]
         0x1cbba5025238 @  656 : 1b f6             PopContext r4
 9637 E> 0x1cbba502523a @  658 : 25 0f             StaCurrentContextSlot [15]
10365 S> 0x1cbba502523c @  660 : 17 0f             LdaImmutableCurrentContextSlot [15]
10386 E> 0x1cbba502523e @  662 : 32 03 11 13       SetNamedProperty a0, [17], [19]
         0x1cbba5025242 @  666 : 0e                LdaUndefined 
10441 S> 0x1cbba5025243 @  667 : a9                Return 
Constant pool (size = 71)
0x1cbba5025249: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 71
           0: 0x1cbba5025491 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1cbba50255b9 <String[15]: #__createBinding>
           2: 0x0a02bbf85ab9 <String[6]: #Object>
           3: 0x3e42d675a7c9 <String[6]: #create>
           4: 0x1cbba5025779 <SharedFunctionInfo>
           5: 0x1cbba5025cd1 <SharedFunctionInfo>
           6: 0x1cbba50255d9 <String[18]: #__setModuleDefault>
           7: 0x1cbba5025de1 <SharedFunctionInfo>
           8: 0x1cbba5025f79 <SharedFunctionInfo>
           9: 0x1cbba502a179 <String[12]: #__importStar>
          10: 0x1cbba5026091 <SharedFunctionInfo>
          11: 0x1cbba502a199 <String[15]: #__importDefault>
          12: 0x1cbba50262a9 <SharedFunctionInfo>
          13: 0x0a02bbf84c11 <String[14]: #defineProperty>
          14: 0x1cbba5025961 <String[10]: #__esModule>
          15: 0x1cbba502a1b9 <ObjectBoilerplateDescription[3]>
          16: 0x1cbba5026c19 <String[9]: #MapLoader>
          17: 0x1cbba5025741 <String[12]: #MapImageFile>
          18: 0x1cbba502a1e1 <String[13]: #@blitz/engine>
          19: 0x3e42d674cb69 <String[2]: #fs>
          20: 0x3e42d674c629 <String[4]: #path>
          21: 0x1cbba502a219 <String[5]: #pngjs>
          22: 0x1cbba502a231 <String[18]: #../geometry/vector>
          23: 0x1cbba5026411 <SharedFunctionInfo>
          24: 0x1cbba502a259 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x1cbba502a271 <FixedArray[9]>>
          25: 0x1cbba502a2c9 <ObjectBoilerplateDescription[5]>
          26: 0x1cbba5026569 <String[12]: #NON_WALKABLE>
          27: 0x0a02bbf84469 <String[4]: #type>
          28: 0x1cbba502a349 <ObjectBoilerplateDescription[5]>
          29: 0x1cbba5026551 <String[8]: #WALKABLE>
          30: 0x1cbba502a3c9 <ObjectBoilerplateDescription[5]>
          31: 0x1cbba5026589 <String[9]: #CHARACTER>
          32: 0x1cbba502a449 <ObjectBoilerplateDescription[5]>
          33: 0x1cbba50265a9 <String[17]: #THREAT_STRAITHEAD>
          34: 0x1cbba502a4c9 <ObjectBoilerplateDescription[5]>
          35: 0x1cbba50265d1 <String[16]: #THREAT_GIROUETTE>
          36: 0x1cbba502a549 <ObjectBoilerplateDescription[5]>
          37: 0x1cbba50265f1 <String[17]: #THREAT_AGGRESSIVE>
          38: 0x1cbba502a5c9 <ObjectBoilerplateDescription[5]>
          39: 0x1cbba5026619 <String[19]: #THREAT_SURVEILLANCE>
          40: 0x1cbba502a649 <ObjectBoilerplateDescription[5]>
          41: 0x1cbba5026641 <String[36]: #THREAT_LE_FANTOME_ORANGE_DANS_PACMAN>
          42: 0x1cbba502a6c9 <ObjectBoilerplateDescription[5]>
          43: 0x1cbba5026679 <String[14]: #THREAT_SHERIFF>
          44: 0x1cbba502a749 <ArrayBoilerplateDescription PACKED_ELEMENTS, 0x1cbba502a761 <FixedArray[4]>>
          45: 0x3e42d6749ea9 <String[3]: #map>
          46: 0x1cbba5026769 <SharedFunctionInfo>
          47: 0x1cbba502a8b1 <String[6]: #./maps>
          48: 0x1cbba502a8c9 <String[9]: #meta.json>
          49: 0x1cbba502a8e9 <String[10]: #layout.png>
          50: 0x1cbba5026bd1 <ScopeInfo CLASS_SCOPE>
          51: 0x1cbba502a909 <FixedArray[7]>
          52: 0x1cbba50297a1 <SharedFunctionInfo MapLoader>
          53: 0x1cbba50268f9 <SharedFunctionInfo listMaps>
          54: 0x1cbba5027211 <SharedFunctionInfo mapHasAllRequiredFiles>
          55: 0x1cbba50275a1 <SharedFunctionInfo listMapsWithDifficulty>
          56: 0x1cbba50279a1 <SharedFunctionInfo loadFromMapName>
          57: 0x1cbba5027c59 <SharedFunctionInfo loadFromComponents>
          58: 0x1cbba5027ec1 <SharedFunctionInfo loadMetadata>
          59: 0x1cbba5028031 <SharedFunctionInfo loadRandomMap>
          60: 0x1cbba5028451 <SharedFunctionInfo loadEntities>
          61: 0x1cbba5028f91 <SharedFunctionInfo get_tile_type>
          62: 0x1cbba5029111 <SharedFunctionInfo get_team>
          63: 0x1cbba5029271 <SharedFunctionInfo get_best_match>
          64: 0x1cbba50299f1 <ScopeInfo CLASS_SCOPE>
          65: 0x1cbba502ab49 <FixedArray[7]>
          66: 0x1cbba5029881 <SharedFunctionInfo MapImageFile>
          67: 0x1cbba5029a51 <SharedFunctionInfo loadFromFile>
          68: 0x1cbba5029c79 <SharedFunctionInfo get width>
          69: 0x1cbba5029da9 <SharedFunctionInfo get height>
          70: 0x1cbba5029ed9 <SharedFunctionInfo getPixel>
Handler Table (size = 0)
Source Position Table (size = 179)
0x1cbba502ad11 <ByteArray[179]>
0x1cbba5025779 points to: [0x1cbba50257e8]
=== [0x1cbba50257e8] DISASSEMBLY ===
Parameter count 5
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
  158 E> 0x1cbba50257e8 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x1cbba50257eb @    3 : 1a f9             PushContext r1
         0x1cbba50257ed @    5 : 0b 04             Ldar a1
         0x1cbba50257ef @    7 : 25 03             StaCurrentContextSlot [3]
         0x1cbba50257f1 @    9 : 0b 05             Ldar a2
         0x1cbba50257f3 @   11 : 25 02             StaCurrentContextSlot [2]
  178 S> 0x1cbba50257f5 @   13 : 0b 06             Ldar a3
         0x1cbba50257f7 @   15 : 9d 06             JumpIfNotUndefined [6] (0x1cbba50257fd @ 21)
  200 S> 0x1cbba50257f9 @   17 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1cbba50257fb @   19 : 18 06             Star a3
  223 S> 0x1cbba50257fd @   21 : 21 01 00          LdaGlobal [1], [0]
         0x1cbba5025800 @   24 : c1                Star3 
  230 E> 0x1cbba5025801 @   25 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x1cbba5025805 @   29 : c2                Star2 
         0x1cbba5025806 @   30 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1cbba5025808 @   32 : c0                Star4 
         0x1cbba5025809 @   33 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1cbba502580b @   35 : bf                Star5 
  230 E> 0x1cbba502580c @   36 : 5f f8 f7 f6 f5 04 CallProperty2 r2, r3, r4, r5, [4]
         0x1cbba5025812 @   42 : c4                Star0 
  266 S> 0x1cbba5025813 @   43 : 97 22             JumpIfToBooleanFalse [34] (0x1cbba5025835 @ 77)
         0x1cbba5025815 @   45 : 13 03             LdaConstant [3]
         0x1cbba5025817 @   47 : c2                Star2 
         0x1cbba5025818 @   48 : 0b fa             Ldar r0
  286 E> 0x1cbba502581a @   50 : 72 f8 06          TestIn r2, [6]
         0x1cbba502581d @   53 : 99 0c             JumpIfFalse [12] (0x1cbba5025829 @ 65)
         0x1cbba502581f @   55 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1cbba5025821 @   57 : c2                Star2 
  299 E> 0x1cbba5025822 @   58 : 2d f8 04 08       GetNamedProperty r2, [4], [8]
         0x1cbba5025826 @   62 : 55                ToBooleanLogicalNot 
         0x1cbba5025827 @   63 : 8a 0c             Jump [12] (0x1cbba5025833 @ 75)
  317 E> 0x1cbba5025829 @   65 : 2d fa 05 0a       GetNamedProperty r0, [5], [10]
         0x1cbba502582d @   69 : 96 06             JumpIfToBooleanTrue [6] (0x1cbba5025833 @ 75)
  334 E> 0x1cbba502582f @   71 : 2d fa 06 0c       GetNamedProperty r0, [6], [12]
         0x1cbba5025833 @   75 : 97 14             JumpIfToBooleanFalse [20] (0x1cbba5025847 @ 95)
  357 S> 0x1cbba5025835 @   77 : 7c 07 0e 29       CreateObjectLiteral [7], [14], #41
         0x1cbba5025839 @   81 : c2                Star2 
  389 E> 0x1cbba502583a @   82 : 80 08 00 02       CreateClosure [8], [0], #2
         0x1cbba502583e @   86 : 33 f8 03 0f       DefineNamedOwnProperty r2, [3], [15]
         0x1cbba5025842 @   90 : 19 f8 fa          Mov r2, r0
         0x1cbba5025845 @   93 : 0b f8             Ldar r2
  430 S> 0x1cbba5025847 @   95 : 21 01 00          LdaGlobal [1], [0]
         0x1cbba502584a @   98 : c1                Star3 
  437 E> 0x1cbba502584b @   99 : 2d f7 09 11       GetNamedProperty r3, [9], [17]
         0x1cbba502584f @  103 : c2                Star2 
         0x1cbba5025850 @  104 : 19 03 f6          Mov a0, r4
         0x1cbba5025853 @  107 : 19 06 f5          Mov a3, r5
         0x1cbba5025856 @  110 : 19 fa f4          Mov r0, r6
  437 E> 0x1cbba5025859 @  113 : 5c f8 f7 04 13    CallProperty r2, r3-r6, [19]
         0x1cbba502585e @  118 : 0e                LdaUndefined 
  466 S> 0x1cbba502585f @  119 : a9                Return 
Constant pool (size = 10)
0x1cbba5025861: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 10
           0: 0x1cbba50258c1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x0a02bbf85ab9 <String[6]: #Object>
           2: 0x0a02bbf85129 <String[24]: #getOwnPropertyDescriptor>
           3: 0x0a02bbf850e9 <String[3]: #get>
           4: 0x1cbba5025961 <String[10]: #__esModule>
           5: 0x0a02bbf864f9 <String[8]: #writable>
           6: 0x0a02bbf849c9 <String[12]: #configurable>
           7: 0x1cbba5025981 <ObjectBoilerplateDescription[5]>
           8: 0x1cbba50259b9 <SharedFunctionInfo get>
           9: 0x0a02bbf84c11 <String[14]: #defineProperty>
Handler Table (size = 0)
Source Position Table (size = 40)
0x1cbba502a121 <ByteArray[40]>
Boilerplate at 0x1cbba5025981: 
0x1cbba5025981: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84e19 <String[10]: #enumerable>
           2: 0x0a02bbf81729 <true>
           3: 0x0a02bbf850e9 <String[3]: #get>
           4: 0x0a02bbf81501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1cbba50259b9 points to: [0x1cbba5025a28]
=== [0x1cbba5025a28] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  402 S> 0x1cbba5025a28 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1cbba5025a2a @    2 : c4                Star0 
         0x1cbba5025a2b @    3 : 17 02             LdaImmutableCurrentContextSlot [2]
  410 E> 0x1cbba5025a2d @    5 : 2f fa 00          GetKeyedProperty r0, [0]
  414 S> 0x1cbba5025a30 @    8 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 9)
0x1cbba5025a39 <ByteArray[9]>
0x1cbba5025cd1 points to: [0x1cbba5025d40]
=== [0x1cbba5025d40] DISASSEMBLY ===
Parameter count 5
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  500 S> 0x1cbba5025d40 @    0 : 0b 06             Ldar a3
         0x1cbba5025d42 @    2 : 9d 07             JumpIfNotUndefined [7] (0x1cbba5025d49 @ 9)
  522 S> 0x1cbba5025d44 @    4 : 19 05 06          Mov a2, a3
         0x1cbba5025d47 @    7 : 0b 06             Ldar a3
  534 S> 0x1cbba5025d49 @    9 : 0b 05             Ldar a2
  543 E> 0x1cbba5025d4b @   11 : 2f 04 00          GetKeyedProperty a1, [0]
  540 E> 0x1cbba5025d4e @   14 : 34 03 06 02       SetKeyedProperty a0, a3, [2]
         0x1cbba5025d52 @   18 : 0e                LdaUndefined 
  548 S> 0x1cbba5025d53 @   19 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 15)
0x1cbba5025d59 <ByteArray[15]>
0x1cbba5025de1 points to: [0x1cbba5025e50]
=== [0x1cbba5025e50] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  654 S> 0x1cbba5025e50 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x1cbba5025e53 @    3 : c3                Star1 
  661 E> 0x1cbba5025e54 @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x1cbba5025e58 @    8 : c4                Star0 
         0x1cbba5025e59 @    9 : 13 02             LdaConstant [2]
         0x1cbba5025e5b @   11 : c1                Star3 
  676 E> 0x1cbba5025e5c @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x1cbba5025e60 @   16 : c0                Star4 
         0x1cbba5025e61 @   17 : 0b 04             Ldar a1
  717 E> 0x1cbba5025e63 @   19 : 33 f6 04 05       DefineNamedOwnProperty r4, [4], [5]
         0x1cbba5025e67 @   23 : 19 03 f8          Mov a0, r2
  661 E> 0x1cbba5025e6a @   26 : 5c fa f9 04 07    CallProperty r0, r1-r4, [7]
         0x1cbba5025e6f @   31 : 0e                LdaUndefined 
  723 S> 0x1cbba5025e70 @   32 : a9                Return 
Constant pool (size = 5)
0x1cbba5025e79: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 5
           0: 0x0a02bbf85ab9 <String[6]: #Object>
           1: 0x0a02bbf84c11 <String[14]: #defineProperty>
           2: 0x0a02bbf84bf9 <String[7]: #default>
           3: 0x1cbba5025eb1 <ObjectBoilerplateDescription[5]>
           4: 0x0a02bbf86419 <String[5]: #value>
Handler Table (size = 0)
Source Position Table (size = 18)
0x1cbba5025ee9 <ByteArray[18]>
Boilerplate at 0x1cbba5025eb1: 
0x1cbba5025eb1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84e19 <String[10]: #enumerable>
           2: 0x0a02bbf81729 <true>
           3: 0x0a02bbf86419 <String[5]: #value>
           4: 0x0a02bbf81501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1cbba5025f79 points to: [0x1cbba5025fe8]
=== [0x1cbba5025fe8] DISASSEMBLY ===
Parameter count 3
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  749 S> 0x1cbba5025fe8 @    0 : 0b 04             Ldar a1
  762 E> 0x1cbba5025fea @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
         0x1cbba5025fee @    6 : 0e                LdaUndefined 
  767 S> 0x1cbba5025fef @    7 : a9                Return 
Constant pool (size = 1)
0x1cbba5025ff1: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 1
           0: 0x0a02bbf84bf9 <String[7]: #default>
Handler Table (size = 0)
Source Position Table (size = 9)
0x1cbba5026009 <ByteArray[9]>
0x1cbba5026091 points to: [0x1cbba5026100]
=== [0x1cbba5026100] DISASSEMBLY ===
Parameter count 2
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
  842 S> 0x1cbba5026100 @    0 : 0b 03             Ldar a0
         0x1cbba5026102 @    2 : 97 0b             JumpIfToBooleanFalse [11] (0x1cbba502610d @ 13)
  857 E> 0x1cbba5026104 @    4 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1cbba5026108 @    8 : 97 05             JumpIfToBooleanFalse [5] (0x1cbba502610d @ 13)
  869 S> 0x1cbba502610a @   10 : 0b 03             Ldar a0
  880 S> 0x1cbba502610c @   12 : a9                Return 
  898 S> 0x1cbba502610d @   13 : 7d                CreateEmptyObjectLiteral 
         0x1cbba502610e @   14 : c4                Star0 
  906 S> 0x1cbba502610f @   15 : 0b 03             Ldar a0
         0x1cbba5026111 @   17 : 1d                TestUndetectable 
         0x1cbba5026112 @   18 : 98 56             JumpIfTrue [86] (0x1cbba5026168 @ 104)
  937 S> 0x1cbba5026114 @   20 : 0b 03             Ldar a0
         0x1cbba5026116 @   22 : 9e 52             JumpIfUndefinedOrNull [82] (0x1cbba5026168 @ 104)
         0x1cbba5026118 @   24 : 76 f7             ToObject r3
         0x1cbba502611a @   26 : a1 f7             ForInEnumerate r3
         0x1cbba502611c @   28 : a2 f6 02          ForInPrepare r4-r6, [2]
         0x1cbba502611f @   31 : 0c                LdaZero 
         0x1cbba5026120 @   32 : bd                Star7 
  932 S> 0x1cbba5026121 @   33 : a3 f3 f4          ForInContinue r7, r6
         0x1cbba5026124 @   36 : 99 44             JumpIfFalse [68] (0x1cbba5026168 @ 104)
         0x1cbba5026126 @   38 : a4 f7 f3 f6 02    ForInNext r3, r7, r4-r5, [2]
         0x1cbba502612b @   43 : 9c 37             JumpIfUndefined [55] (0x1cbba5026162 @ 98)
         0x1cbba502612d @   45 : c2                Star2 
  932 S> 0x1cbba502612e @   46 : c3                Star1 
  942 S> 0x1cbba502612f @   47 : 13 01             LdaConstant [1]
  948 E> 0x1cbba5026131 @   49 : 6c f9 03          TestEqualStrict r1, [3]
         0x1cbba5026134 @   52 : 98 2e             JumpIfTrue [46] (0x1cbba5026162 @ 98)
  965 E> 0x1cbba5026136 @   54 : 21 02 04          LdaGlobal [2], [4]
         0x1cbba5026139 @   57 : bb                Star9 
  972 E> 0x1cbba502613a @   58 : 2d f1 03 06       GetNamedProperty r9, [3], [6]
         0x1cbba502613e @   62 : bb                Star9 
  982 E> 0x1cbba502613f @   63 : 2d f1 04 08       GetNamedProperty r9, [4], [8]
         0x1cbba5026143 @   67 : bb                Star9 
  997 E> 0x1cbba5026144 @   68 : 2d f1 05 0a       GetNamedProperty r9, [5], [10]
         0x1cbba5026148 @   72 : bc                Star8 
  997 E> 0x1cbba5026149 @   73 : 5f f2 f1 03 f9 0c CallProperty2 r8, r9, a0, r1, [12]
         0x1cbba502614f @   79 : 97 13             JumpIfToBooleanFalse [19] (0x1cbba5026162 @ 98)
 1011 S> 0x1cbba5026151 @   81 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1cbba5026153 @   83 : bc                Star8 
         0x1cbba5026154 @   84 : 19 fa f1          Mov r0, r9
         0x1cbba5026157 @   87 : 19 03 f0          Mov a0, r10
         0x1cbba502615a @   90 : 19 f9 ef          Mov r1, r11
 1011 E> 0x1cbba502615d @   93 : 60 f2 f1 03 0e    CallUndefinedReceiver r8, r9-r11, [14]
         0x1cbba5026162 @   98 : a5 f3             ForInStep r7
         0x1cbba5026164 @  100 : bd                Star7 
  923 E> 0x1cbba5026165 @  101 : 89 44 00          JumpLoop [68], [0] (0x1cbba5026121 @ 33)
 1048 S> 0x1cbba5026168 @  104 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1cbba502616a @  106 : c1                Star3 
 1048 E> 0x1cbba502616b @  107 : 63 f7 fa 03 10    CallUndefinedReceiver2 r3, r0, a0, [16]
 1085 S> 0x1cbba5026170 @  112 : 0b fa             Ldar r0
 1099 S> 0x1cbba5026172 @  114 : a9                Return 
Constant pool (size = 6)
0x1cbba5026179: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 6
           0: 0x1cbba5025961 <String[10]: #__esModule>
           1: 0x0a02bbf84bf9 <String[7]: #default>
           2: 0x0a02bbf85ab9 <String[6]: #Object>
           3: 0x0a02bbf85cb1 <String[9]: #prototype>
           4: 0x3e42d675a8a9 <String[14]: #hasOwnProperty>
           5: 0x3e42d675a6c1 <String[4]: #call>
Handler Table (size = 0)
Source Position Table (size = 52)
0x1cbba50261f1 <ByteArray[52]>
0x1cbba50262a9 points to: [0x1cbba5026318]
=== [0x1cbba5026318] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1180 S> 0x1cbba5026318 @    0 : 0b 03             Ldar a0
         0x1cbba502631a @    2 : 97 0c             JumpIfToBooleanFalse [12] (0x1cbba5026326 @ 14)
 1199 E> 0x1cbba502631c @    4 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1cbba5026320 @    8 : 97 06             JumpIfToBooleanFalse [6] (0x1cbba5026326 @ 14)
         0x1cbba5026322 @   10 : 0b 03             Ldar a0
         0x1cbba5026324 @   12 : 8a 0f             Jump [15] (0x1cbba5026333 @ 27)
 1213 E> 0x1cbba5026326 @   14 : 7c 01 02 29       CreateObjectLiteral [1], [2], #41
         0x1cbba502632a @   18 : c4                Star0 
         0x1cbba502632b @   19 : 0b 03             Ldar a0
 1232 E> 0x1cbba502632d @   21 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x1cbba5026331 @   25 : 0b fa             Ldar r0
 1238 S> 0x1cbba5026333 @   27 : a9                Return 
Constant pool (size = 3)
0x1cbba5026339: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 3
           0: 0x1cbba5025961 <String[10]: #__esModule>
           1: 0x1cbba5026361 <ObjectBoilerplateDescription[3]>
           2: 0x0a02bbf84bf9 <String[7]: #default>
Handler Table (size = 0)
Source Position Table (size = 13)
0x1cbba5026389 <ByteArray[13]>
Boilerplate at 0x1cbba5026361: 
0x1cbba5026361: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 3
           0: 8
           1: 0x0a02bbf84bf9 <String[7]: #default>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba502a1b9: 
0x1cbba502a1b9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 3
           0: 8
           1: 0x0a02bbf86419 <String[5]: #value>
           2: 0x0a02bbf81729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1cbba5026411 points to: [0x1cbba5026480]
=== [0x1cbba5026480] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1611 S> 0x1cbba5026480 @    0 : 0c                LdaZero 
         0x1cbba5026481 @    1 : c2                Star2 
 1641 E> 0x1cbba5026482 @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
         0x1cbba5026486 @    6 : 13 00             LdaConstant [0]
 1646 E> 0x1cbba5026488 @    8 : 34 03 f8 02       SetKeyedProperty a0, r2, [2]
 1664 S> 0x1cbba502648c @   12 : 0d 01             LdaSmi [1]
         0x1cbba502648e @   14 : c2                Star2 
 1698 E> 0x1cbba502648f @   15 : 32 03 01 04       SetNamedProperty a0, [1], [4]
         0x1cbba5026493 @   19 : 13 01             LdaConstant [1]
 1703 E> 0x1cbba5026495 @   21 : 34 03 f8 06       SetKeyedProperty a0, r2, [6]
 1725 S> 0x1cbba5026499 @   25 : 0d 02             LdaSmi [2]
         0x1cbba502649b @   27 : c2                Star2 
 1756 E> 0x1cbba502649c @   28 : 32 03 02 08       SetNamedProperty a0, [2], [8]
         0x1cbba50264a0 @   32 : 13 02             LdaConstant [2]
 1761 E> 0x1cbba50264a2 @   34 : 34 03 f8 0a       SetKeyedProperty a0, r2, [10]
 1780 S> 0x1cbba50264a6 @   38 : 0d 03             LdaSmi [3]
         0x1cbba50264a8 @   40 : c2                Star2 
 1819 E> 0x1cbba50264a9 @   41 : 32 03 03 0c       SetNamedProperty a0, [3], [12]
         0x1cbba50264ad @   45 : 13 03             LdaConstant [3]
 1824 E> 0x1cbba50264af @   47 : 34 03 f8 0e       SetKeyedProperty a0, r2, [14]
 1851 S> 0x1cbba50264b3 @   51 : 0d 04             LdaSmi [4]
         0x1cbba50264b5 @   53 : c2                Star2 
 1889 E> 0x1cbba50264b6 @   54 : 32 03 04 10       SetNamedProperty a0, [4], [16]
         0x1cbba50264ba @   58 : 13 04             LdaConstant [4]
 1894 E> 0x1cbba50264bc @   60 : 34 03 f8 12       SetKeyedProperty a0, r2, [18]
 1920 S> 0x1cbba50264c0 @   64 : 0d 05             LdaSmi [5]
         0x1cbba50264c2 @   66 : c2                Star2 
 1959 E> 0x1cbba50264c3 @   67 : 32 03 05 14       SetNamedProperty a0, [5], [20]
         0x1cbba50264c7 @   71 : 13 05             LdaConstant [5]
 1964 E> 0x1cbba50264c9 @   73 : 34 03 f8 16       SetKeyedProperty a0, r2, [22]
 1991 S> 0x1cbba50264cd @   77 : 0d 06             LdaSmi [6]
         0x1cbba50264cf @   79 : c2                Star2 
 2032 E> 0x1cbba50264d0 @   80 : 32 03 06 18       SetNamedProperty a0, [6], [24]
         0x1cbba50264d4 @   84 : 13 06             LdaConstant [6]
 2037 E> 0x1cbba50264d6 @   86 : 34 03 f8 1a       SetKeyedProperty a0, r2, [26]
 2066 S> 0x1cbba50264da @   90 : 0d 07             LdaSmi [7]
         0x1cbba50264dc @   92 : c2                Star2 
 2124 E> 0x1cbba50264dd @   93 : 32 03 07 1c       SetNamedProperty a0, [7], [28]
         0x1cbba50264e1 @   97 : 13 07             LdaConstant [7]
 2129 E> 0x1cbba50264e3 @   99 : 34 03 f8 1e       SetKeyedProperty a0, r2, [30]
 2175 S> 0x1cbba50264e7 @  103 : 0d 08             LdaSmi [8]
         0x1cbba50264e9 @  105 : c2                Star2 
 2211 E> 0x1cbba50264ea @  106 : 32 03 08 20       SetNamedProperty a0, [8], [32]
         0x1cbba50264ee @  110 : 13 08             LdaConstant [8]
 2216 E> 0x1cbba50264f0 @  112 : 34 03 f8 22       SetKeyedProperty a0, r2, [34]
         0x1cbba50264f4 @  116 : 0e                LdaUndefined 
 2236 S> 0x1cbba50264f5 @  117 : a9                Return 
Constant pool (size = 9)
0x1cbba50264f9: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 9
           0: 0x1cbba5026551 <String[8]: #WALKABLE>
           1: 0x1cbba5026569 <String[12]: #NON_WALKABLE>
           2: 0x1cbba5026589 <String[9]: #CHARACTER>
           3: 0x1cbba50265a9 <String[17]: #THREAT_STRAITHEAD>
           4: 0x1cbba50265d1 <String[16]: #THREAT_GIROUETTE>
           5: 0x1cbba50265f1 <String[17]: #THREAT_AGGRESSIVE>
           6: 0x1cbba5026619 <String[19]: #THREAT_SURVEILLANCE>
           7: 0x1cbba5026641 <String[36]: #THREAT_LE_FANTOME_ORANGE_DANS_PACMAN>
           8: 0x1cbba5026679 <String[14]: #THREAT_SHERIFF>
Handler Table (size = 0)
Source Position Table (size = 67)
0x1cbba5026699 <ByteArray[67]>
Boilerplate at 0x1cbba502a2c9: 
0x1cbba502a2c9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84469 <String[4]: #type>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf8a0c9 <String[5]: #color>
           4: 0x1cbba502a301 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x1cbba502a301: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 7
           0: 8
           1: 0x3e42d676b141 <String[1]: #r>
           2: 0
           3: 0x0a02bbf885c9 <String[1]: #g>
           4: 0
           5: 0x0a02bbf8a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba502a349: 
0x1cbba502a349: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84469 <String[4]: #type>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf8a0c9 <String[5]: #color>
           4: 0x1cbba502a381 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x1cbba502a381: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 7
           0: 8
           1: 0x3e42d676b141 <String[1]: #r>
           2: 255
           3: 0x0a02bbf885c9 <String[1]: #g>
           4: 255
           5: 0x0a02bbf8a069 <String[1]: #b>
           6: 255
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba502a3c9: 
0x1cbba502a3c9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84469 <String[4]: #type>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf8a0c9 <String[5]: #color>
           4: 0x1cbba502a401 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x1cbba502a401: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 7
           0: 8
           1: 0x3e42d676b141 <String[1]: #r>
           2: 0
           3: 0x0a02bbf885c9 <String[1]: #g>
           4: 0
           5: 0x0a02bbf8a069 <String[1]: #b>
           6: 255
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba502a449: 
0x1cbba502a449: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84469 <String[4]: #type>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf8a0c9 <String[5]: #color>
           4: 0x1cbba502a481 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x1cbba502a481: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 7
           0: 8
           1: 0x3e42d676b141 <String[1]: #r>
           2: 255
           3: 0x0a02bbf885c9 <String[1]: #g>
           4: 0
           5: 0x0a02bbf8a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba502a4c9: 
0x1cbba502a4c9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84469 <String[4]: #type>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf8a0c9 <String[5]: #color>
           4: 0x1cbba502a501 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x1cbba502a501: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 7
           0: 8
           1: 0x3e42d676b141 <String[1]: #r>
           2: 255
           3: 0x0a02bbf885c9 <String[1]: #g>
           4: 125
           5: 0x0a02bbf8a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba502a549: 
0x1cbba502a549: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84469 <String[4]: #type>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf8a0c9 <String[5]: #color>
           4: 0x1cbba502a581 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x1cbba502a581: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 7
           0: 8
           1: 0x3e42d676b141 <String[1]: #r>
           2: 255
           3: 0x0a02bbf885c9 <String[1]: #g>
           4: 255
           5: 0x0a02bbf8a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba502a5c9: 
0x1cbba502a5c9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84469 <String[4]: #type>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf8a0c9 <String[5]: #color>
           4: 0x1cbba502a601 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x1cbba502a601: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 7
           0: 8
           1: 0x3e42d676b141 <String[1]: #r>
           2: 0
           3: 0x0a02bbf885c9 <String[1]: #g>
           4: 125
           5: 0x0a02bbf8a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba502a649: 
0x1cbba502a649: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84469 <String[4]: #type>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf8a0c9 <String[5]: #color>
           4: 0x1cbba502a681 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x1cbba502a681: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 7
           0: 8
           1: 0x3e42d676b141 <String[1]: #r>
           2: 0
           3: 0x0a02bbf885c9 <String[1]: #g>
           4: 255
           5: 0x0a02bbf8a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba502a6c9: 
0x1cbba502a6c9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84469 <String[4]: #type>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf8a0c9 <String[5]: #color>
           4: 0x1cbba502a701 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x1cbba502a701: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 7
           0: 8
           1: 0x3e42d676b141 <String[1]: #r>
           2: 125
           3: 0x0a02bbf885c9 <String[1]: #g>
           4: 125
           5: 0x0a02bbf8a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1cbba5026769 points to: [0x1cbba50267d8]
=== [0x1cbba50267d8] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 3395 S> 0x1cbba50267d8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x1cbba50267dc @    4 : c4                Star0 
         0x1cbba50267dd @    5 : 0b 04             Ldar a1
 3408 E> 0x1cbba50267df @    7 : 33 fa 01 01       DefineNamedOwnProperty r0, [1], [1]
         0x1cbba50267e3 @   11 : 0b 03             Ldar a0
 3415 E> 0x1cbba50267e5 @   13 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x1cbba50267e9 @   17 : 0b fa             Ldar r0
 3423 S> 0x1cbba50267eb @   19 : a9                Return 
Constant pool (size = 3)
0x1cbba50267f1: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 3
           0: 0x1cbba5026819 <ObjectBoilerplateDescription[5]>
           1: 0x1cbba5026851 <String[9]: #teamIndex>
           2: 0x0a02bbf8a0c9 <String[5]: #color>
Handler Table (size = 0)
Source Position Table (size = 11)
0x1cbba5026871 <ByteArray[11]>
Boilerplate at 0x1cbba5026819: 
0x1cbba5026819: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x1cbba5026851 <String[9]: #teamIndex>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf8a0c9 <String[5]: #color>
           4: 0x0a02bbf81501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x1cbba502a909 has 7 elements:
0x1cbba502a909: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 7
           0: 14
           1: 0x1cbba502a951 <DescriptorArray[15]>
           2: 0x0a02bbf83301 <NumberDictionary[7]>
           3: 0x0a02bbf81329 <FixedArray[0]>
           4: 0x1cbba502ab19 <DescriptorArray[1]>
           5: 0x0a02bbf83301 <NumberDictionary[7]>
           6: 0x0a02bbf81329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xe (14)
Element[1]
0x1cbba502a951: [DescriptorArray] in OldSpace
 - map: 0x0a02bbf87761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 15
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0xa02bbf855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 6, attrs: [__C]) @ 0x3e42d6774fe1 <AccessorInfo>
  [1]: 0xa02bbf858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 9, attrs: [__C]) @ 0x3e42d6774f71 <AccessorInfo>
  [2]: 0xa02bbf85cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 2, attrs: [___]) @ 0x3e42d6775051 <AccessorInfo>
  [3]: 0x0a02bbf865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 8, attrs: [W_C]) @ 0x1cbba502ab01 <ClassPositions 3542, 9605>
  [4]: 0x1cbba50271d9: [String] in OldSpace: #listMaps (const data descriptor, p: 3, attrs: [W_C]) @ 3
  [5]: 0x1cbba5026e19: [String] in OldSpace: #mapHasAllRequiredFiles (const data descriptor, p: 11, attrs: [W_C]) @ 4
  [6]: 0x1cbba5027709: [String] in OldSpace: #listMapsWithDifficulty (const data descriptor, p: 4, attrs: [W_C]) @ 5
  [7]: 0x1cbba5027c11: [String] in OldSpace: #loadFromMapName (const data descriptor, p: 7, attrs: [W_C]) @ 6
  [8]: 0x1cbba5027b51: [String] in OldSpace: #loadFromComponents (const data descriptor, p: 13, attrs: [W_C]) @ 7
  [9]: 0x1cbba5027e01: [String] in OldSpace: #loadMetadata (const data descriptor, p: 12, attrs: [W_C]) @ 8
  [10]: 0x1cbba5028409: [String] in OldSpace: #loadRandomMap (const data descriptor, p: 1, attrs: [W_C]) @ 9
  [11]: 0x1cbba5027de1: [String] in OldSpace: #loadEntities (const data descriptor, p: 5, attrs: [W_C]) @ 10
  [12]: 0x1cbba5028b19: [String] in OldSpace: #get_tile_type (const data descriptor, p: 14, attrs: [W_C]) @ 11
  [13]: 0x1cbba5029241: [String] in OldSpace: #get_team (const data descriptor, p: 0, attrs: [W_C]) @ 12
  [14]: 0x1cbba5029061: [String] in OldSpace: #get_best_match (const data descriptor, p: 10, attrs: [W_C]) @ 13
Element[2]
0xa02bbf83301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0xa02bbf81329: [FixedArray] in ReadOnlySpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 0
Element[4]
0x1cbba502ab19: [DescriptorArray] in OldSpace
 - map: 0x0a02bbf87761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 1
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0xa02bbf84a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
Element[5]
0xa02bbf83301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0xa02bbf81329: [FixedArray] in ReadOnlySpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 0
0x1cbba50297a1 points to: [0x1cbba5029810]
=== [0x1cbba5029810] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
         0x1cbba5029810 @    0 : 0e                LdaUndefined 
 3542 S> 0x1cbba5029811 @    1 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 5)
0x1cbba5029819 <ByteArray[5]>
0x1cbba50268f9 points to: [0x1cbba5026968]
=== [0x1cbba5026968] DISASSEMBLY ===
Parameter count 1
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 3592 S> 0x1cbba5026968 @    0 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
         0x1cbba502696c @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1cbba502696e @    6 : bf                Star5 
 3615 E> 0x1cbba502696f @    7 : 2d f5 01 00       GetNamedProperty r5, [1], [0]
         0x1cbba5026973 @   11 : c0                Star4 
         0x1cbba5026974 @   12 : 15 ff 0c 01       LdaImmutableContextSlot <context>, [12], [1]
 3627 E> 0x1cbba5026978 @   16 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1cbba502697a @   18 : be                Star6 
         0x1cbba502697b @   19 : 7c 03 02 29       CreateObjectLiteral [3], [2], #41
         0x1cbba502697f @   23 : bd                Star7 
 3615 E> 0x1cbba5026980 @   24 : 5f f6 f5 f4 f3 03 CallProperty2 r4, r5, r6, r7, [3]
         0x1cbba5026986 @   30 : c0                Star4 
 3680 E> 0x1cbba5026987 @   31 : 2d f6 04 05       GetNamedProperty r4, [4], [5]
         0x1cbba502698b @   35 : c1                Star3 
         0x1cbba502698c @   36 : 80 05 00 02       CreateClosure [5], [0], #2
         0x1cbba5026990 @   40 : bf                Star5 
 3681 E> 0x1cbba5026991 @   41 : 5e f7 f6 f5 07    CallProperty1 r3, r4, r5, [7]
         0x1cbba5026996 @   46 : c1                Star3 
 3724 E> 0x1cbba5026997 @   47 : 2d f7 06 09       GetNamedProperty r3, [6], [9]
         0x1cbba502699b @   51 : c2                Star2 
         0x1cbba502699c @   52 : 80 07 01 02       CreateClosure [7], [1], #2
         0x1cbba50269a0 @   56 : c0                Star4 
 3725 E> 0x1cbba50269a1 @   57 : 5e f8 f7 f6 0b    CallProperty1 r2, r3, r4, [11]
         0x1cbba50269a6 @   62 : c2                Star2 
 3756 E> 0x1cbba50269a7 @   63 : 2d f8 04 0d       GetNamedProperty r2, [4], [13]
         0x1cbba50269ab @   67 : c3                Star1 
         0x1cbba50269ac @   68 : 80 08 02 02       CreateClosure [8], [2], #2
         0x1cbba50269b0 @   72 : c1                Star3 
 3757 E> 0x1cbba50269b1 @   73 : 5e f9 f8 f7 0f    CallProperty1 r1, r2, r3, [15]
         0x1cbba50269b6 @   78 : c3                Star1 
 3864 E> 0x1cbba50269b7 @   79 : 2d f9 06 11       GetNamedProperty r1, [6], [17]
         0x1cbba50269bb @   83 : c4                Star0 
         0x1cbba50269bc @   84 : 80 09 03 02       CreateClosure [9], [3], #2
         0x1cbba50269c0 @   88 : c2                Star2 
 3865 E> 0x1cbba50269c1 @   89 : 5e fa f9 f8 13    CallProperty1 r0, r1, r2, [19]
 4066 S> 0x1cbba50269c6 @   94 : a9                Return 
Constant pool (size = 10)
0x1cbba50269c9: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 10
           0: 0x3e42d674cb69 <String[2]: #fs>
           1: 0x3e42d674daf9 <String[11]: #readdirSync>
           2: 0x1cbba50256d1 <String[14]: #MAPS_DIRECTORY>
           3: 0x1cbba5026a49 <ObjectBoilerplateDescription[3]>
           4: 0x3e42d6749f61 <String[6]: #filter>
           5: 0x1cbba5026aa9 <SharedFunctionInfo>
           6: 0x3e42d6749ea9 <String[3]: #map>
           7: 0x1cbba5026c69 <SharedFunctionInfo>
           8: 0x1cbba5026d79 <SharedFunctionInfo>
           9: 0x1cbba5026ec9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 33)
0x1cbba5027151 <ByteArray[33]>
Boilerplate at 0x1cbba5026a49: 
0x1cbba5026a49: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 3
           0: 8
           1: 0x1cbba5026a71 <String[13]: #withFileTypes>
           2: 0x0a02bbf81729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1cbba5026aa9 points to: [0x1cbba5026b18]
=== [0x1cbba5026b18] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 3697 S> 0x1cbba5026b18 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1cbba5026b1c @    4 : c4                Star0 
 3697 E> 0x1cbba5026b1d @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 3710 S> 0x1cbba5026b21 @    9 : a9                Return 
Constant pool (size = 1)
0x1cbba5026b29: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 1
           0: 0x3e42d674f529 <String[11]: #isDirectory>
Handler Table (size = 0)
Source Position Table (size = 9)
0x1cbba5026b61 <ByteArray[9]>
0x1cbba5026c69 points to: [0x1cbba5026cd8]
=== [0x1cbba5026cd8] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 3738 S> 0x1cbba5026cd8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 3742 S> 0x1cbba5026cdc @    4 : a9                Return 
Constant pool (size = 1)
0x1cbba5026ce1: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 1
           0: 0x0a02bbf858f1 <String[4]: #name>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1cbba5026cf9 <ByteArray[7]>
0x1cbba5026d79 points to: [0x1cbba5026de8]
=== [0x1cbba5026de8] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3791 S> 0x1cbba5026de8 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x1cbba5026dea @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1cbba5026dec @    4 : c3                Star1 
 3808 E> 0x1cbba5026ded @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x1cbba5026df1 @    9 : c4                Star0 
 3808 E> 0x1cbba5026df2 @   10 : 5e fa f9 03 02    CallProperty1 r0, r1, a0, [2]
 3840 S> 0x1cbba5026df7 @   15 : a9                Return 
Constant pool (size = 2)
0x1cbba5026df9: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 2
           0: 0x1cbba5026c19 <String[9]: #MapLoader>
           1: 0x1cbba5026e19 <String[22]: #mapHasAllRequiredFiles>
Handler Table (size = 0)
Source Position Table (size = 12)
0x1cbba5026e41 <ByteArray[12]>
0x1cbba5026ec9 points to: [0x1cbba5026f38]
=== [0x1cbba5026f38] DISASSEMBLY ===
Parameter count 2
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
 3891 S> 0x1cbba5026f38 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x1cbba5026f3c @    4 : c4                Star0 
         0x1cbba5026f3d @    5 : 0b 03             Ldar a0
 3911 E> 0x1cbba5026f3f @    7 : 33 fa 01 01       DefineNamedOwnProperty r0, [1], [1]
 3943 E> 0x1cbba5026f43 @   11 : 21 02 03          LdaGlobal [2], [3]
         0x1cbba5026f46 @   14 : c0                Star4 
 3948 E> 0x1cbba5026f47 @   15 : 2d f6 03 05       GetNamedProperty r4, [3], [5]
         0x1cbba5026f4b @   19 : c1                Star3 
         0x1cbba5026f4c @   20 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
 3954 E> 0x1cbba5026f50 @   24 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1cbba5026f52 @   26 : be                Star6 
 3957 E> 0x1cbba5026f53 @   27 : 2d f4 05 07       GetNamedProperty r6, [5], [7]
         0x1cbba5026f57 @   31 : bf                Star5 
         0x1cbba5026f58 @   32 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
 3970 E> 0x1cbba5026f5c @   36 : aa 06             ThrowReferenceErrorIfHole [6]
         0x1cbba5026f5e @   38 : bc                Star8 
 3977 E> 0x1cbba5026f5f @   39 : 2d f2 07 09       GetNamedProperty r8, [7], [9]
         0x1cbba5026f63 @   43 : bc                Star8 
 3985 E> 0x1cbba5026f64 @   44 : 2d f2 08 0b       GetNamedProperty r8, [8], [11]
         0x1cbba5026f68 @   48 : bd                Star7 
         0x1cbba5026f69 @   49 : 15 ff 0c 01       LdaImmutableContextSlot <context>, [12], [1]
 3990 E> 0x1cbba5026f6d @   53 : aa 09             ThrowReferenceErrorIfHole [9]
         0x1cbba5026f6f @   55 : bb                Star9 
         0x1cbba5026f70 @   56 : 15 ff 0d 01       LdaImmutableContextSlot <context>, [13], [1]
 4023 E> 0x1cbba5026f74 @   60 : aa 0a             ThrowReferenceErrorIfHole [10]
         0x1cbba5026f76 @   62 : b9                Star11 
         0x1cbba5026f77 @   63 : 19 03 f0          Mov a0, r10
 3985 E> 0x1cbba5026f7a @   66 : 5c f3 f2 04 0d    CallProperty r7, r8-r11, [13]
         0x1cbba5026f7f @   71 : bd                Star7 
         0x1cbba5026f80 @   72 : 13 0b             LdaConstant [11]
         0x1cbba5026f82 @   74 : bc                Star8 
 3957 E> 0x1cbba5026f83 @   75 : 5f f5 f4 f3 f2 0f CallProperty2 r5, r6, r7, r8, [15]
         0x1cbba5026f89 @   81 : bf                Star5 
 3948 E> 0x1cbba5026f8a @   82 : 5e f7 f6 f5 11    CallProperty1 r3, r4, r5, [17]
         0x1cbba5026f8f @   87 : c2                Star2 
         0x1cbba5026f90 @   88 : 19 fa f9          Mov r0, r1
         0x1cbba5026f93 @   91 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x1cbba5026f97 @   95 : 0b f9             Ldar r1
 4064 S> 0x1cbba5026f99 @   97 : a9                Return 
Constant pool (size = 12)
0x1cbba5026fa1: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 12
           0: 0x1cbba5027011 <ObjectBoilerplateDescription[4]>
           1: 0x0a02bbf858f1 <String[4]: #name>
           2: 0x3e42d675c529 <String[4]: #JSON>
           3: 0x3e42d674cb31 <String[5]: #parse>
           4: 0x3e42d674cb69 <String[2]: #fs>
           5: 0x3e42d674d7e9 <String[12]: #readFileSync>
           6: 0x1cbba5025631 <String[6]: #path_1>
           7: 0x0a02bbf84bf9 <String[7]: #default>
           8: 0x0a02bbf88c89 <String[4]: #join>
           9: 0x1cbba50256d1 <String[14]: #MAPS_DIRECTORY>
          10: 0x1cbba50256f1 <String[18]: #MAPS_META_FILENAME>
          11: 0x3e42d67631d1 <String[4]: #utf8>
Handler Table (size = 0)
Source Position Table (size = 37)
0x1cbba50270a9 <ByteArray[37]>
Boilerplate at 0x1cbba5027011: 
0x1cbba5027011: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 4
           0: 8
           1: 0x0a02bbf858f1 <String[4]: #name>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 2
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1cbba5027211 points to: [0x1cbba5027280]
=== [0x1cbba5027280] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4106 E> 0x1cbba5027280 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1cbba5027283 @    3 : 1a fa             PushContext r0
         0x1cbba5027285 @    5 : 0b 03             Ldar a0
         0x1cbba5027287 @    7 : 25 02             StaCurrentContextSlot [2]
 4126 S> 0x1cbba5027289 @    9 : 79 01 00 25       CreateArrayLiteral [1], [0], #37
         0x1cbba502728d @   13 : c1                Star3 
         0x1cbba502728e @   14 : 0c                LdaZero 
         0x1cbba502728f @   15 : c2                Star2 
         0x1cbba5027290 @   16 : 15 ff 0d 02       LdaImmutableContextSlot <context>, [13], [2]
 4134 E> 0x1cbba5027294 @   20 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1cbba5027296 @   22 : 36 f7 f8 01       StaInArrayLiteral r3, r2, [1]
         0x1cbba502729a @   26 : 0d 01             LdaSmi [1]
         0x1cbba502729c @   28 : c2                Star2 
         0x1cbba502729d @   29 : 15 ff 0e 02       LdaImmutableContextSlot <context>, [14], [2]
 4154 E> 0x1cbba50272a1 @   33 : aa 03             ThrowReferenceErrorIfHole [3]
         0x1cbba50272a3 @   35 : 36 f7 f8 01       StaInArrayLiteral r3, r2, [1]
 4176 E> 0x1cbba50272a7 @   39 : 2d f7 04 03       GetNamedProperty r3, [4], [3]
         0x1cbba50272ab @   43 : c3                Star1 
         0x1cbba50272ac @   44 : 80 05 00 02       CreateClosure [5], [0], #2
         0x1cbba50272b0 @   48 : 19 f7 f8          Mov r3, r2
         0x1cbba50272b3 @   51 : c1                Star3 
 4176 E> 0x1cbba50272b4 @   52 : 5e f9 f8 f7 05    CallProperty1 r1, r2, r3, [5]
 4267 S> 0x1cbba50272b9 @   57 : a9                Return 
Constant pool (size = 6)
0x1cbba50272c1: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 6
           0: 0x1cbba5027301 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1cbba5027379 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x1cbba5027391 <FixedArray[2]>>
           2: 0x1cbba50256f1 <String[18]: #MAPS_META_FILENAME>
           3: 0x1cbba5025719 <String[20]: #MAPS_LAYOUT_FILENAME>
           4: 0x3e42d6749ff1 <String[5]: #every>
           5: 0x1cbba50273c9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 19)
0x1cbba5027561 <ByteArray[19]>
0x1cbba50273c9 points to: [0x1cbba5027438]
=== [0x1cbba5027438] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 4199 S> 0x1cbba5027438 @    0 : 15 ff 05 02       LdaImmutableContextSlot <context>, [5], [2]
         0x1cbba502743c @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1cbba502743e @    6 : c3                Star1 
 4199 E> 0x1cbba502743f @    7 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x1cbba5027443 @   11 : c4                Star0 
         0x1cbba5027444 @   12 : 15 ff 06 02       LdaImmutableContextSlot <context>, [6], [2]
 4210 E> 0x1cbba5027448 @   16 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1cbba502744a @   18 : c1                Star3 
 4217 E> 0x1cbba502744b @   19 : 2d f7 03 02       GetNamedProperty r3, [3], [2]
         0x1cbba502744f @   23 : c1                Star3 
 4225 E> 0x1cbba5027450 @   24 : 2d f7 04 04       GetNamedProperty r3, [4], [4]
         0x1cbba5027454 @   28 : c2                Star2 
         0x1cbba5027455 @   29 : 15 ff 0c 02       LdaImmutableContextSlot <context>, [12], [2]
 4230 E> 0x1cbba5027459 @   33 : aa 05             ThrowReferenceErrorIfHole [5]
         0x1cbba502745b @   35 : c0                Star4 
         0x1cbba502745c @   36 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1cbba502745e @   38 : bf                Star5 
         0x1cbba502745f @   39 : 19 03 f4          Mov a0, r6
 4225 E> 0x1cbba5027462 @   42 : 5c f8 f7 04 06    CallProperty r2, r3-r6, [6]
         0x1cbba5027467 @   47 : c2                Star2 
 4199 E> 0x1cbba5027468 @   48 : 5e fa f9 f8 08    CallProperty1 r0, r1, r2, [8]
 4265 S> 0x1cbba502746d @   53 : a9                Return 
Constant pool (size = 6)
0x1cbba5027471: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 6
           0: 0x3e42d674cb69 <String[2]: #fs>
           1: 0x3e42d674d7b1 <String[10]: #existsSync>
           2: 0x1cbba5025631 <String[6]: #path_1>
           3: 0x0a02bbf84bf9 <String[7]: #default>
           4: 0x0a02bbf88c89 <String[4]: #join>
           5: 0x1cbba50256d1 <String[14]: #MAPS_DIRECTORY>
Handler Table (size = 0)
Source Position Table (size = 23)
0x1cbba50274d1 <ByteArray[23]>
0x1cbba50275a1 points to: [0x1cbba5027610]
=== [0x1cbba5027610] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 4307 E> 0x1cbba5027610 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x1cbba5027613 @    3 : 1a fa             PushContext r0
         0x1cbba5027615 @    5 : 0b 03             Ldar a0
         0x1cbba5027617 @    7 : 25 02             StaCurrentContextSlot [2]
 4342 S> 0x1cbba5027619 @    9 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x1cbba502761d @   13 : c1                Star3 
 4342 E> 0x1cbba502761e @   14 : 5d f7 02 02       CallProperty0 r3, <this>, [2]
         0x1cbba5027622 @   18 : c1                Star3 
 4365 E> 0x1cbba5027623 @   19 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x1cbba5027627 @   23 : c2                Star2 
         0x1cbba5027628 @   24 : 80 03 00 02       CreateClosure [3], [0], #2
         0x1cbba502762c @   28 : c0                Star4 
 4366 E> 0x1cbba502762d @   29 : 5e f8 f7 f6 06    CallProperty1 r2, r3, r4, [6]
         0x1cbba5027632 @   34 : c2                Star2 
 4420 E> 0x1cbba5027633 @   35 : 2d f8 04 08       GetNamedProperty r2, [4], [8]
         0x1cbba5027637 @   39 : c3                Star1 
         0x1cbba5027638 @   40 : 80 05 01 02       CreateClosure [5], [1], #2
         0x1cbba502763c @   44 : c1                Star3 
 4421 E> 0x1cbba502763d @   45 : 5e f9 f8 f7 0a    CallProperty1 r1, r2, r3, [10]
 4440 S> 0x1cbba5027642 @   50 : a9                Return 
Constant pool (size = 6)
0x1cbba5027649: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 6
           0: 0x1cbba5027689 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1cbba50271d9 <String[8]: #listMaps>
           2: 0x3e42d6749f61 <String[6]: #filter>
           3: 0x1cbba5027731 <SharedFunctionInfo>
           4: 0x3e42d6749ea9 <String[3]: #map>
           5: 0x1cbba5027851 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 22)
0x1cbba5027961 <ByteArray[22]>
0x1cbba5027731 points to: [0x1cbba50277a0]
=== [0x1cbba50277a0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 4382 S> 0x1cbba50277a0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x1cbba50277a4 @    4 : c4                Star0 
         0x1cbba50277a5 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
 4393 E> 0x1cbba50277a7 @    7 : 6b fa 02          TestEqual r0, [2]
 4406 S> 0x1cbba50277aa @   10 : a9                Return 
Constant pool (size = 1)
0x1cbba50277b1: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 1
           0: 0x1cbba50276e9 <String[10]: #difficulty>
Handler Table (size = 0)
Source Position Table (size = 10)
0x1cbba50277c9 <ByteArray[10]>
0x1cbba5027851 points to: [0x1cbba50278c0]
=== [0x1cbba50278c0] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 4434 S> 0x1cbba50278c0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 4438 S> 0x1cbba50278c4 @    4 : a9                Return 
Constant pool (size = 1)
0x1cbba50278c9: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 1
           0: 0x0a02bbf858f1 <String[4]: #name>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1cbba50278e1 <ByteArray[8]>
0x1cbba50279a1 points to: [0x1cbba5027a10]
=== [0x1cbba5027a10] DISASSEMBLY ===
Parameter count 2
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
 4515 S> 0x1cbba5027a10 @    0 : 15 ff 0f 01       LdaImmutableContextSlot <context>, [15], [1]
         0x1cbba5027a14 @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1cbba5027a16 @    6 : c1                Star3 
 4528 E> 0x1cbba5027a17 @    7 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x1cbba5027a1b @   11 : c2                Star2 
         0x1cbba5027a1c @   12 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
 4541 E> 0x1cbba5027a20 @   16 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1cbba5027a22 @   18 : bf                Star5 
 4548 E> 0x1cbba5027a23 @   19 : 2d f5 03 02       GetNamedProperty r5, [3], [2]
         0x1cbba5027a27 @   23 : bf                Star5 
 4556 E> 0x1cbba5027a28 @   24 : 2d f5 04 04       GetNamedProperty r5, [4], [4]
         0x1cbba5027a2c @   28 : c0                Star4 
         0x1cbba5027a2d @   29 : 15 ff 0c 01       LdaImmutableContextSlot <context>, [12], [1]
 4561 E> 0x1cbba5027a31 @   33 : aa 05             ThrowReferenceErrorIfHole [5]
         0x1cbba5027a33 @   35 : be                Star6 
         0x1cbba5027a34 @   36 : 15 ff 0e 01       LdaImmutableContextSlot <context>, [14], [1]
 4586 E> 0x1cbba5027a38 @   40 : aa 06             ThrowReferenceErrorIfHole [6]
         0x1cbba5027a3a @   42 : bc                Star8 
         0x1cbba5027a3b @   43 : 19 03 f3          Mov a0, r7
 4556 E> 0x1cbba5027a3e @   46 : 5c f6 f5 04 06    CallProperty r4, r5-r8, [6]
         0x1cbba5027a43 @   51 : c0                Star4 
 4528 E> 0x1cbba5027a44 @   52 : 5e f8 f7 f6 08    CallProperty1 r2, r3, r4, [8]
         0x1cbba5027a49 @   57 : c4                Star0 
 4749 S> 0x1cbba5027a4a @   58 : 21 07 0a          LdaGlobal [7], [10]
         0x1cbba5027a4d @   61 : c1                Star3 
 4754 E> 0x1cbba5027a4e @   62 : 2d f7 08 0c       GetNamedProperty r3, [8], [12]
         0x1cbba5027a52 @   66 : c2                Star2 
         0x1cbba5027a53 @   67 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
 4760 E> 0x1cbba5027a57 @   71 : aa 09             ThrowReferenceErrorIfHole [9]
         0x1cbba5027a59 @   73 : bf                Star5 
 4763 E> 0x1cbba5027a5a @   74 : 2d f5 0a 0e       GetNamedProperty r5, [10], [14]
         0x1cbba5027a5e @   78 : c0                Star4 
         0x1cbba5027a5f @   79 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
 4776 E> 0x1cbba5027a63 @   83 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1cbba5027a65 @   85 : bd                Star7 
 4783 E> 0x1cbba5027a66 @   86 : 2d f3 03 02       GetNamedProperty r7, [3], [2]
         0x1cbba5027a6a @   90 : bd                Star7 
 4791 E> 0x1cbba5027a6b @   91 : 2d f3 04 10       GetNamedProperty r7, [4], [16]
         0x1cbba5027a6f @   95 : be                Star6 
         0x1cbba5027a70 @   96 : 15 ff 0c 01       LdaImmutableContextSlot <context>, [12], [1]
 4796 E> 0x1cbba5027a74 @  100 : aa 05             ThrowReferenceErrorIfHole [5]
         0x1cbba5027a76 @  102 : bc                Star8 
         0x1cbba5027a77 @  103 : 15 ff 0d 01       LdaImmutableContextSlot <context>, [13], [1]
 4821 E> 0x1cbba5027a7b @  107 : aa 0b             ThrowReferenceErrorIfHole [11]
         0x1cbba5027a7d @  109 : ba                Star10 
         0x1cbba5027a7e @  110 : 19 03 f1          Mov a0, r9
 4791 E> 0x1cbba5027a81 @  113 : 5c f4 f3 04 12    CallProperty r6, r7-r10, [18]
         0x1cbba5027a86 @  118 : be                Star6 
         0x1cbba5027a87 @  119 : 13 0c             LdaConstant [12]
         0x1cbba5027a89 @  121 : bd                Star7 
 4763 E> 0x1cbba5027a8a @  122 : 5f f6 f5 f4 f3 14 CallProperty2 r4, r5, r6, r7, [20]
         0x1cbba5027a90 @  128 : c0                Star4 
 4754 E> 0x1cbba5027a91 @  129 : 5e f8 f7 f6 16    CallProperty1 r2, r3, r4, [22]
         0x1cbba5027a96 @  134 : c3                Star1 
 4872 S> 0x1cbba5027a97 @  135 : 2d 02 0d 18       GetNamedProperty <this>, [13], [24]
         0x1cbba5027a9b @  139 : c2                Star2 
         0x1cbba5027a9c @  140 : 19 02 f7          Mov <this>, r3
         0x1cbba5027a9f @  143 : 19 03 f6          Mov a0, r4
         0x1cbba5027aa2 @  146 : 19 fa f5          Mov r0, r5
         0x1cbba5027aa5 @  149 : 19 f9 f4          Mov r1, r6
 4872 E> 0x1cbba5027aa8 @  152 : 5c f8 f7 04 1a    CallProperty r2, r3-r6, [26]
 4925 S> 0x1cbba5027aad @  157 : a9                Return 
Constant pool (size = 14)
0x1cbba5027ab1: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 14
           0: 0x1cbba5025741 <String[12]: #MapImageFile>
           1: 0x1cbba5027b31 <String[12]: #loadFromFile>
           2: 0x1cbba5025631 <String[6]: #path_1>
           3: 0x0a02bbf84bf9 <String[7]: #default>
           4: 0x0a02bbf88c89 <String[4]: #join>
           5: 0x1cbba50256d1 <String[14]: #MAPS_DIRECTORY>
           6: 0x1cbba5025719 <String[20]: #MAPS_LAYOUT_FILENAME>
           7: 0x3e42d675c529 <String[4]: #JSON>
           8: 0x3e42d674cb31 <String[5]: #parse>
           9: 0x3e42d674cb69 <String[2]: #fs>
          10: 0x3e42d674d7e9 <String[12]: #readFileSync>
          11: 0x1cbba50256f1 <String[18]: #MAPS_META_FILENAME>
          12: 0x3e42d67631d1 <String[4]: #utf8>
          13: 0x1cbba5027b51 <String[18]: #loadFromComponents>
Handler Table (size = 0)
Source Position Table (size = 56)
0x1cbba5027b79 <ByteArray[56]>
0x1cbba5027c59 points to: [0x1cbba5027cc8]
=== [0x1cbba5027cc8] DISASSEMBLY ===
Parameter count 4
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5006 S> 0x1cbba5027cc8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x1cbba5027ccc @    4 : c4                Star0 
         0x1cbba5027ccd @    5 : 0b 03             Ldar a0
 5033 E> 0x1cbba5027ccf @    7 : 33 fa 01 01       DefineNamedOwnProperty r0, [1], [1]
 5075 E> 0x1cbba5027cd3 @   11 : 2d 04 02 03       GetNamedProperty a1, [2], [3]
         0x1cbba5027cd7 @   15 : 33 fa 02 05       DefineNamedOwnProperty r0, [2], [5]
 5116 E> 0x1cbba5027cdb @   19 : 2d 04 03 07       GetNamedProperty a1, [3], [7]
         0x1cbba5027cdf @   23 : 33 fa 03 09       DefineNamedOwnProperty r0, [3], [9]
         0x1cbba5027ce3 @   27 : 16 02             LdaCurrentContextSlot [2]
 5139 E> 0x1cbba5027ce5 @   29 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1cbba5027ce7 @   31 : c0                Star4 
 5149 E> 0x1cbba5027ce8 @   32 : 2d f6 05 0b       GetNamedProperty r4, [5], [11]
         0x1cbba5027cec @   36 : c1                Star3 
 5149 E> 0x1cbba5027ced @   37 : 5e f7 f6 04 0d    CallProperty1 r3, r4, a1, [13]
         0x1cbba5027cf2 @   42 : c2                Star2 
         0x1cbba5027cf3 @   43 : 19 fa f9          Mov r0, r1
         0x1cbba5027cf6 @   46 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x1cbba5027cfa @   50 : 16 02             LdaCurrentContextSlot [2]
 5193 E> 0x1cbba5027cfc @   52 : aa 04             ThrowReferenceErrorIfHole [4]
         0x1cbba5027cfe @   54 : c0                Star4 
 5203 E> 0x1cbba5027cff @   55 : 2d f6 06 0f       GetNamedProperty r4, [6], [15]
         0x1cbba5027d03 @   59 : c1                Star3 
 5203 E> 0x1cbba5027d04 @   60 : 5e f7 f6 05 11    CallProperty1 r3, r4, a2, [17]
         0x1cbba5027d09 @   65 : c2                Star2 
         0x1cbba5027d0a @   66 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x1cbba5027d0e @   70 : 0b f9             Ldar r1
 5237 S> 0x1cbba5027d10 @   72 : a9                Return 
Constant pool (size = 7)
0x1cbba5027d19: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 7
           0: 0x1cbba5027d61 <ObjectBoilerplateDescription[8]>
           1: 0x0a02bbf858f1 <String[4]: #name>
           2: 0x1cbba5027db1 <String[5]: #width>
           3: 0x1cbba5027dc9 <String[6]: #height>
           4: 0x1cbba5026c19 <String[9]: #MapLoader>
           5: 0x1cbba5027de1 <String[12]: #loadEntities>
           6: 0x1cbba5027e01 <String[12]: #loadMetadata>
Handler Table (size = 0)
Source Position Table (size = 31)
0x1cbba5027e21 <ByteArray[31]>
Boilerplate at 0x1cbba5027d61: 
0x1cbba5027d61: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 8
           0: 8
           1: 0x0a02bbf858f1 <String[4]: #name>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x1cbba5027db1 <String[5]: #width>
           4: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           5: 0x1cbba5027dc9 <String[6]: #height>
           6: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           7: 5
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1cbba5027ec1 points to: [0x1cbba5027f30]
=== [0x1cbba5027f30] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5288 S> 0x1cbba5027f30 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x1cbba5027f34 @    4 : c4                Star0 
 5324 E> 0x1cbba5027f35 @    5 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
         0x1cbba5027f39 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 5363 E> 0x1cbba5027f3d @   13 : 2d 03 02 05       GetNamedProperty a0, [2], [5]
         0x1cbba5027f41 @   17 : 33 fa 02 07       DefineNamedOwnProperty r0, [2], [7]
         0x1cbba5027f45 @   21 : 0b fa             Ldar r0
 5385 S> 0x1cbba5027f47 @   23 : a9                Return 
Constant pool (size = 3)
0x1cbba5027f49: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 3
           0: 0x1cbba5027f71 <ObjectBoilerplateDescription[5]>
           1: 0x0a02bbf84469 <String[4]: #type>
           2: 0x1cbba50276e9 <String[10]: #difficulty>
Handler Table (size = 0)
Source Position Table (size = 14)
0x1cbba5027fa9 <ByteArray[14]>
Boilerplate at 0x1cbba5027f71: 
0x1cbba5027f71: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf84469 <String[4]: #type>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x1cbba50276e9 <String[10]: #difficulty>
           4: 0x0a02bbf81501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1cbba5028031 points to: [0x1cbba50280a0]
=== [0x1cbba50280a0] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5439 S> 0x1cbba50280a0 @    0 : 0b 03             Ldar a0
         0x1cbba50280a2 @    2 : 1d                TestUndetectable 
         0x1cbba50280a3 @    3 : 99 06             JumpIfFalse [6] (0x1cbba50280a9 @ 9)
 5475 S> 0x1cbba50280a5 @    5 : 13 00             LdaConstant [0]
         0x1cbba50280a7 @    7 : 18 03             Star a0
 5519 S> 0x1cbba50280a9 @    9 : 13 00             LdaConstant [0]
 5530 E> 0x1cbba50280ab @   11 : 6c 03 00          TestEqualStrict a0, [0]
         0x1cbba50280ae @   14 : 99 22             JumpIfFalse [34] (0x1cbba50280d0 @ 48)
         0x1cbba50280b0 @   16 : 16 02             LdaCurrentContextSlot [2]
 5542 E> 0x1cbba50280b2 @   18 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba50280b4 @   20 : c1                Star3 
 5552 E> 0x1cbba50280b5 @   21 : 2d f7 02 01       GetNamedProperty r3, [2], [1]
         0x1cbba50280b9 @   25 : c2                Star2 
 5552 E> 0x1cbba50280ba @   26 : 5d f8 f7 03       CallProperty0 r2, r3, [3]
         0x1cbba50280be @   30 : c2                Star2 
 5562 E> 0x1cbba50280bf @   31 : 2d f8 03 05       GetNamedProperty r2, [3], [5]
         0x1cbba50280c3 @   35 : c3                Star1 
         0x1cbba50280c4 @   36 : 80 04 00 02       CreateClosure [4], [0], #2
         0x1cbba50280c8 @   40 : c1                Star3 
 5563 E> 0x1cbba50280c9 @   41 : 5e f9 f8 f7 07    CallProperty1 r1, r2, r3, [7]
         0x1cbba50280ce @   46 : 8a 11             Jump [17] (0x1cbba50280df @ 63)
         0x1cbba50280d0 @   48 : 16 02             LdaCurrentContextSlot [2]
 5584 E> 0x1cbba50280d2 @   50 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba50280d4 @   52 : c2                Star2 
 5594 E> 0x1cbba50280d5 @   53 : 2d f8 05 09       GetNamedProperty r2, [5], [9]
         0x1cbba50280d9 @   57 : c3                Star1 
 5594 E> 0x1cbba50280da @   58 : 5e f9 f8 03 0b    CallProperty1 r1, r2, a0, [11]
         0x1cbba50280df @   63 : c4                Star0 
 5650 S> 0x1cbba50280e0 @   64 : 2d fa 06 0d       GetNamedProperty r0, [6], [13]
         0x1cbba50280e4 @   68 : c3                Star1 
         0x1cbba50280e5 @   69 : 0c                LdaZero 
 5657 E> 0x1cbba50280e6 @   70 : 6c f9 0f          TestEqualStrict r1, [15]
         0x1cbba50280e9 @   73 : 99 2f             JumpIfFalse [47] (0x1cbba5028118 @ 120)
 5678 S> 0x1cbba50280eb @   75 : 21 07 10          LdaGlobal [7], [16]
         0x1cbba50280ee @   78 : c3                Star1 
         0x1cbba50280ef @   79 : 13 08             LdaConstant [8]
         0x1cbba50280f1 @   81 : c2                Star2 
         0x1cbba50280f2 @   82 : 15 ff 0c 01       LdaImmutableContextSlot <context>, [12], [1]
 5724 E> 0x1cbba50280f6 @   86 : aa 09             ThrowReferenceErrorIfHole [9]
         0x1cbba50280f8 @   88 : 77                ToString 
         0x1cbba50280f9 @   89 : 39 f8 12          Add r2, [18]
         0x1cbba50280fc @   92 : c2                Star2 
         0x1cbba50280fd @   93 : 13 0a             LdaConstant [10]
         0x1cbba50280ff @   95 : 39 f8 12          Add r2, [18]
         0x1cbba5028102 @   98 : c2                Star2 
         0x1cbba5028103 @   99 : 0b 03             Ldar a0
 5760 E> 0x1cbba5028105 @  101 : 77                ToString 
         0x1cbba5028106 @  102 : 39 f8 12          Add r2, [18]
         0x1cbba5028109 @  105 : c2                Star2 
         0x1cbba502810a @  106 : 13 0b             LdaConstant [11]
         0x1cbba502810c @  108 : 39 f8 12          Add r2, [18]
         0x1cbba502810f @  111 : c2                Star2 
         0x1cbba5028110 @  112 : 0b f9             Ldar r1
 5684 E> 0x1cbba5028112 @  114 : 69 f9 f8 01 13    Construct r1, r2-r2, [19]
 5678 E> 0x1cbba5028117 @  119 : a7                Throw 
 5806 S> 0x1cbba5028118 @  120 : 2d 02 0c 15       GetNamedProperty <this>, [12], [21]
         0x1cbba502811c @  124 : c3                Star1 
         0x1cbba502811d @  125 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 5826 E> 0x1cbba5028121 @  129 : aa 0d             ThrowReferenceErrorIfHole [13]
         0x1cbba5028123 @  131 : c0                Star4 
 5835 E> 0x1cbba5028124 @  132 : 2d f6 0e 17       GetNamedProperty r4, [14], [23]
         0x1cbba5028128 @  136 : c1                Star3 
 5843 E> 0x1cbba5028129 @  137 : 62 f7 fa 19       CallUndefinedReceiver1 r3, r0, [25]
         0x1cbba502812d @  141 : c1                Star3 
         0x1cbba502812e @  142 : 0c                LdaZero 
 5852 E> 0x1cbba502812f @  143 : 2f f7 1b          GetKeyedProperty r3, [27]
         0x1cbba5028132 @  146 : c1                Star3 
 5806 E> 0x1cbba5028133 @  147 : 5e f9 02 f7 1d    CallProperty1 r1, <this>, r3, [29]
 5857 S> 0x1cbba5028138 @  152 : a9                Return 
Constant pool (size = 15)
0x1cbba5028141: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 15
           0: 0x0a02bbf89711 <String[3]: #all>
           1: 0x1cbba5026c19 <String[9]: #MapLoader>
           2: 0x1cbba50271d9 <String[8]: #listMaps>
           3: 0x3e42d6749ea9 <String[3]: #map>
           4: 0x1cbba50281c9 <SharedFunctionInfo>
           5: 0x1cbba5027709 <String[22]: #listMapsWithDifficulty>
           6: 0x0a02bbf855f9 <String[6]: #length>
           7: 0x0a02bbf84de1 <String[5]: #Error>
           8: 0x1cbba50282d9 <String[27]: #No map in the maps folder '>
           9: 0x1cbba50256d1 <String[14]: #MAPS_DIRECTORY>
          10: 0x1cbba5028309 <String[19]: #' with difficulty '>
          11: 0x3e42d6774c49 <String[1]: #'>
          12: 0x1cbba5027c11 <String[15]: #loadFromMapName>
          13: 0x1cbba5025601 <String[8]: #engine_1>
          14: 0x1cbba5028349 <String[7]: #shuffle>
Handler Table (size = 0)
Source Position Table (size = 65)
0x1cbba5028361 <ByteArray[65]>
0x1cbba50281c9 points to: [0x1cbba5028238]
=== [0x1cbba5028238] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 5576 S> 0x1cbba5028238 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 5580 S> 0x1cbba502823c @    4 : a9                Return 
Constant pool (size = 1)
0x1cbba5028241: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 1
           0: 0x0a02bbf858f1 <String[4]: #name>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1cbba5028259 <ByteArray[8]>
0x1cbba5028451 points to: [0x1cbba50284c0]
=== [0x1cbba50284c0] DISASSEMBLY ===
Parameter count 2
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
 5928 S> 0x1cbba50284c0 @    0 : 7c 00 00 0c       CreateObjectLiteral [0], [0], #12
         0x1cbba50284c4 @    4 : c0                Star4 
         0x1cbba50284c5 @    5 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 6047 E> 0x1cbba50284c9 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba50284cb @   11 : bf                Star5 
 6056 E> 0x1cbba50284cc @   12 : 2d f5 02 01       GetNamedProperty r5, [2], [1]
         0x1cbba50284d0 @   16 : bf                Star5 
         0x1cbba50284d1 @   17 : 0c                LdaZero 
         0x1cbba50284d2 @   18 : be                Star6 
         0x1cbba50284d3 @   19 : 0c                LdaZero 
         0x1cbba50284d4 @   20 : bd                Star7 
         0x1cbba50284d5 @   21 : 0b f5             Ldar r5
 6043 E> 0x1cbba50284d7 @   23 : 69 f5 f4 02 03    Construct r5, r6-r7, [3]
         0x1cbba50284dc @   28 : 33 f6 03 05       DefineNamedOwnProperty r4, [3], [5]
         0x1cbba50284e0 @   32 : 19 f6 fa          Mov r4, r0
 6107 S> 0x1cbba50284e3 @   35 : 0c                LdaZero 
         0x1cbba50284e4 @   36 : c3                Star1 
 6133 S> 0x1cbba50284e5 @   37 : 2d 03 04 07       GetNamedProperty a0, [4], [7]
 6117 E> 0x1cbba50284e9 @   41 : 6d f9 09          TestLessThan r1, [9]
         0x1cbba50284ec @   44 : 92 2b             JumpIfFalseConstant [43] (0x1cbba502887c @ 956)
 6183 S> 0x1cbba50284ee @   46 : 0c                LdaZero 
         0x1cbba50284ef @   47 : c2                Star2 
 6209 S> 0x1cbba50284f0 @   48 : 2d 03 05 0a       GetNamedProperty a0, [5], [10]
 6193 E> 0x1cbba50284f4 @   52 : 6d f8 0c          TestLessThan r2, [12]
         0x1cbba50284f7 @   55 : 92 2a             JumpIfFalseConstant [42] (0x1cbba5028871 @ 945)
 6272 S> 0x1cbba50284f9 @   57 : 2d 03 06 0d       GetNamedProperty a0, [6], [13]
         0x1cbba50284fd @   61 : c0                Star4 
 6272 E> 0x1cbba50284fe @   62 : 5f f6 03 f8 f9 0f CallProperty2 r4, a0, r2, r1, [15]
         0x1cbba5028504 @   68 : c1                Star3 
 6324 S> 0x1cbba5028505 @   69 : 2d f7 07 11       GetNamedProperty r3, [7], [17]
         0x1cbba5028509 @   73 : c0                Star4 
         0x1cbba502850a @   74 : 00 0d ff 00       LdaSmi.Wide [255]
 6326 E> 0x1cbba502850e @   78 : 6d f6 13          TestLessThan r4, [19]
         0x1cbba5028511 @   81 : 99 04             JumpIfFalse [4] (0x1cbba5028515 @ 85)
 6355 S> 0x1cbba5028513 @   83 : 8b 29             JumpConstant [41] (0x1cbba5028866 @ 934)
 6412 S> 0x1cbba5028515 @   85 : 2d 02 08 14       GetNamedProperty <this>, [8], [20]
         0x1cbba5028519 @   89 : c0                Star4 
 6412 E> 0x1cbba502851a @   90 : 5e f6 02 f7 16    CallProperty1 r4, <this>, r3, [22]
         0x1cbba502851f @   95 : c0                Star4 
         0x1cbba5028520 @   96 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x1cbba5028524 @  100 : bf                Star5 
 6470 E> 0x1cbba5028525 @  101 : 2d f5 09 19       GetNamedProperty r5, [9], [25]
         0x1cbba5028529 @  105 : 6c f6 18          TestEqualStrict r4, [24]
         0x1cbba502852c @  108 : 98 74             JumpIfTrue [116] (0x1cbba50285a0 @ 224)
         0x1cbba502852e @  110 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x1cbba5028532 @  114 : bf                Star5 
 6640 E> 0x1cbba5028533 @  115 : 2d f5 0a 1b       GetNamedProperty r5, [10], [27]
         0x1cbba5028537 @  119 : 6c f6 18          TestEqualStrict r4, [24]
         0x1cbba502853a @  122 : 98 91             JumpIfTrue [145] (0x1cbba50285cb @ 267)
         0x1cbba502853c @  124 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x1cbba5028540 @  128 : bf                Star5 
 6803 E> 0x1cbba5028541 @  129 : 2d f5 0b 1d       GetNamedProperty r5, [11], [29]
         0x1cbba5028545 @  133 : 6c f6 18          TestEqualStrict r4, [24]
         0x1cbba5028548 @  136 : 98 ae             JumpIfTrue [174] (0x1cbba50285f6 @ 310)
         0x1cbba502854a @  138 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x1cbba502854e @  142 : bf                Star5 
 7047 E> 0x1cbba502854f @  143 : 2d f5 0c 1f       GetNamedProperty r5, [12], [31]
         0x1cbba5028553 @  147 : 6c f6 18          TestEqualStrict r4, [24]
         0x1cbba5028556 @  150 : 98 e8             JumpIfTrue [232] (0x1cbba502863e @ 382)
         0x1cbba5028558 @  152 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x1cbba502855c @  156 : bf                Star5 
 7336 E> 0x1cbba502855d @  157 : 2d f5 0d 21       GetNamedProperty r5, [13], [33]
         0x1cbba5028561 @  161 : 6c f6 18          TestEqualStrict r4, [24]
         0x1cbba5028564 @  164 : 91 18             JumpIfTrueConstant [24] (0x1cbba502869a @ 474)
         0x1cbba5028566 @  166 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x1cbba502856a @  170 : bf                Star5 
 7623 E> 0x1cbba502856b @  171 : 2d f5 0e 23       GetNamedProperty r5, [14], [35]
         0x1cbba502856f @  175 : 6c f6 18          TestEqualStrict r4, [24]
         0x1cbba5028572 @  178 : 91 1a             JumpIfTrueConstant [26] (0x1cbba50286f6 @ 566)
         0x1cbba5028574 @  180 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x1cbba5028578 @  184 : bf                Star5 
 7912 E> 0x1cbba5028579 @  185 : 2d f5 0f 25       GetNamedProperty r5, [15], [37]
         0x1cbba502857d @  189 : 6c f6 18          TestEqualStrict r4, [24]
         0x1cbba5028580 @  192 : 91 1c             JumpIfTrueConstant [28] (0x1cbba5028752 @ 658)
         0x1cbba5028582 @  194 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x1cbba5028586 @  198 : bf                Star5 
 8205 E> 0x1cbba5028587 @  199 : 2d f5 10 27       GetNamedProperty r5, [16], [39]
         0x1cbba502858b @  203 : 6c f6 18          TestEqualStrict r4, [24]
         0x1cbba502858e @  206 : 91 1e             JumpIfTrueConstant [30] (0x1cbba50287ae @ 750)
         0x1cbba5028590 @  208 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x1cbba5028594 @  212 : bf                Star5 
 8532 E> 0x1cbba5028595 @  213 : 2d f5 11 29       GetNamedProperty r5, [17], [41]
         0x1cbba5028599 @  217 : 6c f6 18          TestEqualStrict r4, [24]
         0x1cbba502859c @  220 : 91 20             JumpIfTrueConstant [32] (0x1cbba502880a @ 842)
         0x1cbba502859e @  222 : 8b 22             JumpConstant [34] (0x1cbba5028866 @ 934)
 6515 S> 0x1cbba50285a0 @  224 : 2d fa 12 2b       GetNamedProperty r0, [18], [43]
         0x1cbba50285a4 @  228 : be                Star6 
 6532 E> 0x1cbba50285a5 @  229 : 2d f4 13 2d       GetNamedProperty r6, [19], [45]
         0x1cbba50285a9 @  233 : bf                Star5 
         0x1cbba50285aa @  234 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 6541 E> 0x1cbba50285ae @  238 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba50285b0 @  240 : bd                Star7 
 6550 E> 0x1cbba50285b1 @  241 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x1cbba50285b5 @  245 : bd                Star7 
         0x1cbba50285b6 @  246 : 0b f3             Ldar r7
         0x1cbba50285b8 @  248 : 19 f8 f2          Mov r2, r8
         0x1cbba50285bb @  251 : 19 f9 f1          Mov r1, r9
 6537 E> 0x1cbba50285be @  254 : 69 f3 f2 02 2f    Construct r7, r8-r9, [47]
         0x1cbba50285c3 @  259 : bd                Star7 
 6532 E> 0x1cbba50285c4 @  260 : 5e f5 f4 f3 31    CallProperty1 r5, r6, r7, [49]
 6599 S> 0x1cbba50285c9 @  265 : 8b 23             JumpConstant [35] (0x1cbba5028866 @ 934)
 6681 S> 0x1cbba50285cb @  267 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x1cbba50285cf @  271 : be                Star6 
 6695 E> 0x1cbba50285d0 @  272 : 2d f4 13 35       GetNamedProperty r6, [19], [53]
         0x1cbba50285d4 @  276 : bf                Star5 
         0x1cbba50285d5 @  277 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 6704 E> 0x1cbba50285d9 @  281 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba50285db @  283 : bd                Star7 
 6713 E> 0x1cbba50285dc @  284 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x1cbba50285e0 @  288 : bd                Star7 
         0x1cbba50285e1 @  289 : 0b f3             Ldar r7
         0x1cbba50285e3 @  291 : 19 f8 f2          Mov r2, r8
         0x1cbba50285e6 @  294 : 19 f9 f1          Mov r1, r9
 6700 E> 0x1cbba50285e9 @  297 : 69 f3 f2 02 37    Construct r7, r8-r9, [55]
         0x1cbba50285ee @  302 : bd                Star7 
 6695 E> 0x1cbba50285ef @  303 : 5e f5 f4 f3 39    CallProperty1 r5, r6, r7, [57]
 6762 S> 0x1cbba50285f4 @  308 : 8b 24             JumpConstant [36] (0x1cbba5028866 @ 934)
 6838 S> 0x1cbba50285f6 @  310 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 6861 E> 0x1cbba50285fa @  314 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba50285fc @  316 : be                Star6 
 6870 E> 0x1cbba50285fd @  317 : 2d f4 02 01       GetNamedProperty r6, [2], [1]
         0x1cbba5028601 @  321 : be                Star6 
         0x1cbba5028602 @  322 : 0b f4             Ldar r6
         0x1cbba5028604 @  324 : 19 f8 f3          Mov r2, r7
         0x1cbba5028607 @  327 : 19 f9 f2          Mov r1, r8
 6857 E> 0x1cbba502860a @  330 : 69 f4 f3 02 3b    Construct r6, r7-r8, [59]
 6855 E> 0x1cbba502860f @  335 : 32 fa 03 3d       SetNamedProperty r0, [3], [61]
 6925 S> 0x1cbba5028613 @  339 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x1cbba5028617 @  343 : be                Star6 
 6939 E> 0x1cbba5028618 @  344 : 2d f4 13 3f       GetNamedProperty r6, [19], [63]
         0x1cbba502861c @  348 : bf                Star5 
         0x1cbba502861d @  349 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 6948 E> 0x1cbba5028621 @  353 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba5028623 @  355 : bd                Star7 
 6957 E> 0x1cbba5028624 @  356 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x1cbba5028628 @  360 : bd                Star7 
         0x1cbba5028629 @  361 : 0b f3             Ldar r7
         0x1cbba502862b @  363 : 19 f8 f2          Mov r2, r8
         0x1cbba502862e @  366 : 19 f9 f1          Mov r1, r9
 6944 E> 0x1cbba5028631 @  369 : 69 f3 f2 02 41    Construct r7, r8-r9, [65]
         0x1cbba5028636 @  374 : bd                Star7 
 6939 E> 0x1cbba5028637 @  375 : 5e f5 f4 f3 43    CallProperty1 r5, r6, r7, [67]
 7006 S> 0x1cbba502863c @  380 : 8b 25             JumpConstant [37] (0x1cbba5028866 @ 934)
 7097 S> 0x1cbba502863e @  382 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x1cbba5028642 @  386 : be                Star6 
 7105 E> 0x1cbba5028643 @  387 : 2d f4 13 47       GetNamedProperty r6, [19], [71]
         0x1cbba5028647 @  391 : bf                Star5 
         0x1cbba5028648 @  392 : 7c 16 49 29       CreateObjectLiteral [22], [73], #41
         0x1cbba502864c @  396 : bd                Star7 
         0x1cbba502864d @  397 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7126 E> 0x1cbba5028651 @  401 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba5028653 @  403 : bc                Star8 
 7135 E> 0x1cbba5028654 @  404 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x1cbba5028658 @  408 : bc                Star8 
         0x1cbba5028659 @  409 : 0b f2             Ldar r8
         0x1cbba502865b @  411 : 19 f8 f1          Mov r2, r9
         0x1cbba502865e @  414 : 19 f9 f0          Mov r1, r10
 7122 E> 0x1cbba5028661 @  417 : 69 f2 f1 02 4a    Construct r8, r9-r10, [74]
         0x1cbba5028666 @  422 : 33 f3 17 4c       DefineNamedOwnProperty r7, [23], [76]
 7105 E> 0x1cbba502866a @  426 : 5e f5 f4 f3 4e    CallProperty1 r5, r6, r7, [78]
 7214 S> 0x1cbba502866f @  431 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x1cbba5028673 @  435 : be                Star6 
 7228 E> 0x1cbba5028674 @  436 : 2d f4 13 50       GetNamedProperty r6, [19], [80]
         0x1cbba5028678 @  440 : bf                Star5 
         0x1cbba5028679 @  441 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7237 E> 0x1cbba502867d @  445 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba502867f @  447 : bd                Star7 
 7246 E> 0x1cbba5028680 @  448 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x1cbba5028684 @  452 : bd                Star7 
         0x1cbba5028685 @  453 : 0b f3             Ldar r7
         0x1cbba5028687 @  455 : 19 f8 f2          Mov r2, r8
         0x1cbba502868a @  458 : 19 f9 f1          Mov r1, r9
 7233 E> 0x1cbba502868d @  461 : 69 f3 f2 02 52    Construct r7, r8-r9, [82]
         0x1cbba5028692 @  466 : bd                Star7 
 7228 E> 0x1cbba5028693 @  467 : 5e f5 f4 f3 54    CallProperty1 r5, r6, r7, [84]
 7295 S> 0x1cbba5028698 @  472 : 8b 26             JumpConstant [38] (0x1cbba5028866 @ 934)
 7385 S> 0x1cbba502869a @  474 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x1cbba502869e @  478 : be                Star6 
 7393 E> 0x1cbba502869f @  479 : 2d f4 13 56       GetNamedProperty r6, [19], [86]
         0x1cbba50286a3 @  483 : bf                Star5 
         0x1cbba50286a4 @  484 : 7c 19 58 29       CreateObjectLiteral [25], [88], #41
         0x1cbba50286a8 @  488 : bd                Star7 
         0x1cbba50286a9 @  489 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7414 E> 0x1cbba50286ad @  493 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba50286af @  495 : bc                Star8 
 7423 E> 0x1cbba50286b0 @  496 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x1cbba50286b4 @  500 : bc                Star8 
         0x1cbba50286b5 @  501 : 0b f2             Ldar r8
         0x1cbba50286b7 @  503 : 19 f8 f1          Mov r2, r9
         0x1cbba50286ba @  506 : 19 f9 f0          Mov r1, r10
 7410 E> 0x1cbba50286bd @  509 : 69 f2 f1 02 59    Construct r8, r9-r10, [89]
         0x1cbba50286c2 @  514 : 33 f3 17 5b       DefineNamedOwnProperty r7, [23], [91]
 7393 E> 0x1cbba50286c6 @  518 : 5e f5 f4 f3 5d    CallProperty1 r5, r6, r7, [93]
 7501 S> 0x1cbba50286cb @  523 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x1cbba50286cf @  527 : be                Star6 
 7515 E> 0x1cbba50286d0 @  528 : 2d f4 13 5f       GetNamedProperty r6, [19], [95]
         0x1cbba50286d4 @  532 : bf                Star5 
         0x1cbba50286d5 @  533 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7524 E> 0x1cbba50286d9 @  537 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba50286db @  539 : bd                Star7 
 7533 E> 0x1cbba50286dc @  540 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x1cbba50286e0 @  544 : bd                Star7 
         0x1cbba50286e1 @  545 : 0b f3             Ldar r7
         0x1cbba50286e3 @  547 : 19 f8 f2          Mov r2, r8
         0x1cbba50286e6 @  550 : 19 f9 f1          Mov r1, r9
 7520 E> 0x1cbba50286e9 @  553 : 69 f3 f2 02 61    Construct r7, r8-r9, [97]
         0x1cbba50286ee @  558 : bd                Star7 
 7515 E> 0x1cbba50286ef @  559 : 5e f5 f4 f3 63    CallProperty1 r5, r6, r7, [99]
 7582 S> 0x1cbba50286f4 @  564 : 8b 27             JumpConstant [39] (0x1cbba5028866 @ 934)
 7673 S> 0x1cbba50286f6 @  566 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x1cbba50286fa @  570 : be                Star6 
 7681 E> 0x1cbba50286fb @  571 : 2d f4 13 65       GetNamedProperty r6, [19], [101]
         0x1cbba50286ff @  575 : bf                Star5 
         0x1cbba5028700 @  576 : 7c 1b 67 29       CreateObjectLiteral [27], [103], #41
         0x1cbba5028704 @  580 : bd                Star7 
         0x1cbba5028705 @  581 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7702 E> 0x1cbba5028709 @  585 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba502870b @  587 : bc                Star8 
 7711 E> 0x1cbba502870c @  588 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x1cbba5028710 @  592 : bc                Star8 
         0x1cbba5028711 @  593 : 0b f2             Ldar r8
         0x1cbba5028713 @  595 : 19 f8 f1          Mov r2, r9
         0x1cbba5028716 @  598 : 19 f9 f0          Mov r1, r10
 7698 E> 0x1cbba5028719 @  601 : 69 f2 f1 02 68    Construct r8, r9-r10, [104]
         0x1cbba502871e @  606 : 33 f3 17 6a       DefineNamedOwnProperty r7, [23], [106]
 7681 E> 0x1cbba5028722 @  610 : 5e f5 f4 f3 6c    CallProperty1 r5, r6, r7, [108]
 7790 S> 0x1cbba5028727 @  615 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x1cbba502872b @  619 : be                Star6 
 7804 E> 0x1cbba502872c @  620 : 2d f4 13 6e       GetNamedProperty r6, [19], [110]
         0x1cbba5028730 @  624 : bf                Star5 
         0x1cbba5028731 @  625 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7813 E> 0x1cbba5028735 @  629 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba5028737 @  631 : bd                Star7 
 7822 E> 0x1cbba5028738 @  632 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x1cbba502873c @  636 : bd                Star7 
         0x1cbba502873d @  637 : 0b f3             Ldar r7
         0x1cbba502873f @  639 : 19 f8 f2          Mov r2, r8
         0x1cbba5028742 @  642 : 19 f9 f1          Mov r1, r9
 7809 E> 0x1cbba5028745 @  645 : 69 f3 f2 02 70    Construct r7, r8-r9, [112]
         0x1cbba502874a @  650 : bd                Star7 
 7804 E> 0x1cbba502874b @  651 : 5e f5 f4 f3 72    CallProperty1 r5, r6, r7, [114]
 7871 S> 0x1cbba5028750 @  656 : 8b 28             JumpConstant [40] (0x1cbba5028866 @ 934)
 7964 S> 0x1cbba5028752 @  658 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x1cbba5028756 @  662 : be                Star6 
 7972 E> 0x1cbba5028757 @  663 : 2d f4 13 74       GetNamedProperty r6, [19], [116]
         0x1cbba502875b @  667 : bf                Star5 
         0x1cbba502875c @  668 : 7c 1d 76 29       CreateObjectLiteral [29], [118], #41
         0x1cbba5028760 @  672 : bd                Star7 
         0x1cbba5028761 @  673 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7993 E> 0x1cbba5028765 @  677 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba5028767 @  679 : bc                Star8 
 8002 E> 0x1cbba5028768 @  680 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x1cbba502876c @  684 : bc                Star8 
         0x1cbba502876d @  685 : 0b f2             Ldar r8
         0x1cbba502876f @  687 : 19 f8 f1          Mov r2, r9
         0x1cbba5028772 @  690 : 19 f9 f0          Mov r1, r10
 7989 E> 0x1cbba5028775 @  693 : 69 f2 f1 02 77    Construct r8, r9-r10, [119]
         0x1cbba502877a @  698 : 33 f3 17 79       DefineNamedOwnProperty r7, [23], [121]
 7972 E> 0x1cbba502877e @  702 : 5e f5 f4 f3 7b    CallProperty1 r5, r6, r7, [123]
 8083 S> 0x1cbba5028783 @  707 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x1cbba5028787 @  711 : be                Star6 
 8097 E> 0x1cbba5028788 @  712 : 2d f4 13 7d       GetNamedProperty r6, [19], [125]
         0x1cbba502878c @  716 : bf                Star5 
         0x1cbba502878d @  717 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 8106 E> 0x1cbba5028791 @  721 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba5028793 @  723 : bd                Star7 
 8115 E> 0x1cbba5028794 @  724 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x1cbba5028798 @  728 : bd                Star7 
         0x1cbba5028799 @  729 : 0b f3             Ldar r7
         0x1cbba502879b @  731 : 19 f8 f2          Mov r2, r8
         0x1cbba502879e @  734 : 19 f9 f1          Mov r1, r9
 8102 E> 0x1cbba50287a1 @  737 : 69 f3 f2 02 7f    Construct r7, r8-r9, [127]
         0x1cbba50287a6 @  742 : bd                Star7 
 8097 E> 0x1cbba50287a7 @  743 : 5e f5 f4 f3 81    CallProperty1 r5, r6, r7, [129]
 8164 S> 0x1cbba50287ac @  748 : 8a ba             Jump [186] (0x1cbba5028866 @ 934)
 8274 S> 0x1cbba50287ae @  750 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x1cbba50287b2 @  754 : be                Star6 
 8282 E> 0x1cbba50287b3 @  755 : 2d f4 13 83       GetNamedProperty r6, [19], [131]
         0x1cbba50287b7 @  759 : bf                Star5 
         0x1cbba50287b8 @  760 : 7c 1f 85 29       CreateObjectLiteral [31], [133], #41
         0x1cbba50287bc @  764 : bd                Star7 
         0x1cbba50287bd @  765 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 8303 E> 0x1cbba50287c1 @  769 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba50287c3 @  771 : bc                Star8 
 8312 E> 0x1cbba50287c4 @  772 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x1cbba50287c8 @  776 : bc                Star8 
         0x1cbba50287c9 @  777 : 0b f2             Ldar r8
         0x1cbba50287cb @  779 : 19 f8 f1          Mov r2, r9
         0x1cbba50287ce @  782 : 19 f9 f0          Mov r1, r10
 8299 E> 0x1cbba50287d1 @  785 : 69 f2 f1 02 86    Construct r8, r9-r10, [134]
         0x1cbba50287d6 @  790 : 33 f3 17 88       DefineNamedOwnProperty r7, [23], [136]
 8282 E> 0x1cbba50287da @  794 : 5e f5 f4 f3 8a    CallProperty1 r5, r6, r7, [138]
 8410 S> 0x1cbba50287df @  799 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x1cbba50287e3 @  803 : be                Star6 
 8424 E> 0x1cbba50287e4 @  804 : 2d f4 13 8c       GetNamedProperty r6, [19], [140]
         0x1cbba50287e8 @  808 : bf                Star5 
         0x1cbba50287e9 @  809 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 8433 E> 0x1cbba50287ed @  813 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba50287ef @  815 : bd                Star7 
 8442 E> 0x1cbba50287f0 @  816 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x1cbba50287f4 @  820 : bd                Star7 
         0x1cbba50287f5 @  821 : 0b f3             Ldar r7
         0x1cbba50287f7 @  823 : 19 f8 f2          Mov r2, r8
         0x1cbba50287fa @  826 : 19 f9 f1          Mov r1, r9
 8429 E> 0x1cbba50287fd @  829 : 69 f3 f2 02 8e    Construct r7, r8-r9, [142]
         0x1cbba5028802 @  834 : bd                Star7 
 8424 E> 0x1cbba5028803 @  835 : 5e f5 f4 f3 90    CallProperty1 r5, r6, r7, [144]
 8491 S> 0x1cbba5028808 @  840 : 8a 5e             Jump [94] (0x1cbba5028866 @ 934)
 8579 S> 0x1cbba502880a @  842 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x1cbba502880e @  846 : be                Star6 
 8587 E> 0x1cbba502880f @  847 : 2d f4 13 92       GetNamedProperty r6, [19], [146]
         0x1cbba5028813 @  851 : bf                Star5 
         0x1cbba5028814 @  852 : 7c 21 94 29       CreateObjectLiteral [33], [148], #41
         0x1cbba5028818 @  856 : bd                Star7 
         0x1cbba5028819 @  857 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 8608 E> 0x1cbba502881d @  861 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba502881f @  863 : bc                Star8 
 8617 E> 0x1cbba5028820 @  864 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x1cbba5028824 @  868 : bc                Star8 
         0x1cbba5028825 @  869 : 0b f2             Ldar r8
         0x1cbba5028827 @  871 : 19 f8 f1          Mov r2, r9
         0x1cbba502882a @  874 : 19 f9 f0          Mov r1, r10
 8604 E> 0x1cbba502882d @  877 : 69 f2 f1 02 95    Construct r8, r9-r10, [149]
         0x1cbba5028832 @  882 : 33 f3 17 97       DefineNamedOwnProperty r7, [23], [151]
 8587 E> 0x1cbba5028836 @  886 : 5e f5 f4 f3 99    CallProperty1 r5, r6, r7, [153]
 8693 S> 0x1cbba502883b @  891 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x1cbba502883f @  895 : be                Star6 
 8707 E> 0x1cbba5028840 @  896 : 2d f4 13 9b       GetNamedProperty r6, [19], [155]
         0x1cbba5028844 @  900 : bf                Star5 
         0x1cbba5028845 @  901 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 8716 E> 0x1cbba5028849 @  905 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba502884b @  907 : bd                Star7 
 8725 E> 0x1cbba502884c @  908 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x1cbba5028850 @  912 : bd                Star7 
         0x1cbba5028851 @  913 : 0b f3             Ldar r7
         0x1cbba5028853 @  915 : 19 f8 f2          Mov r2, r8
         0x1cbba5028856 @  918 : 19 f9 f1          Mov r1, r9
 8712 E> 0x1cbba5028859 @  921 : 69 f3 f2 02 9d    Construct r7, r8-r9, [157]
         0x1cbba502885e @  926 : bd                Star7 
 8707 E> 0x1cbba502885f @  927 : 5e f5 f4 f3 9f    CallProperty1 r5, r6, r7, [159]
 8774 S> 0x1cbba5028864 @  932 : 8a 02             Jump [2] (0x1cbba5028866 @ 934)
 6222 S> 0x1cbba5028866 @  934 : 0b f8             Ldar r2
         0x1cbba5028868 @  936 : 51 a1             Inc [161]
         0x1cbba502886a @  938 : c2                Star2 
 6165 E> 0x1cbba502886b @  939 : 00 89 7c 03 01 00 JumpLoop.Wide [892], [1] (0x1cbba50284f0 @ 48)
 6147 S> 0x1cbba5028871 @  945 : 0b f9             Ldar r1
         0x1cbba5028873 @  947 : 51 a2             Inc [162]
         0x1cbba5028875 @  949 : c3                Star1 
 6089 E> 0x1cbba5028876 @  950 : 00 89 92 03 00 00 JumpLoop.Wide [914], [0] (0x1cbba50284e5 @ 37)
 8831 S> 0x1cbba502887c @  956 : 0b fa             Ldar r0
 8845 S> 0x1cbba502887e @  958 : a9                Return 
Constant pool (size = 44)
0x1cbba5028881: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 44
           0: 0x1cbba50289f1 <ObjectBoilerplateDescription[9]>
           1: 0x1cbba5025661 <String[8]: #vector_1>
           2: 0x1cbba5028ae9 <String[6]: #Vector>
           3: 0x0a02bbf84939 <String[9]: #character>
           4: 0x1cbba5027dc9 <String[6]: #height>
           5: 0x1cbba5027db1 <String[5]: #width>
           6: 0x1cbba5028b01 <String[8]: #getPixel>
           7: 0x0a02bbf89fa9 <String[1]: #a>
           8: 0x1cbba5028b19 <String[13]: #get_tile_type>
           9: 0x1cbba5026569 <String[12]: #NON_WALKABLE>
          10: 0x1cbba5026551 <String[8]: #WALKABLE>
          11: 0x1cbba5026589 <String[9]: #CHARACTER>
          12: 0x1cbba50265a9 <String[17]: #THREAT_STRAITHEAD>
          13: 0x1cbba50265d1 <String[16]: #THREAT_GIROUETTE>
          14: 0x1cbba50265f1 <String[17]: #THREAT_AGGRESSIVE>
          15: 0x1cbba5026619 <String[19]: #THREAT_SURVEILLANCE>
          16: 0x1cbba5026641 <String[36]: #THREAT_LE_FANTOME_ORANGE_DANS_PACMAN>
          17: 0x1cbba5026679 <String[14]: #THREAT_SHERIFF>
          18: 0x1cbba5028a81 <String[16]: #nonWalkableTiles>
          19: 0x3e42d6749551 <String[4]: #push>
          20: 0x1cbba5028a49 <String[13]: #walkableTiles>
          21: 0x1cbba5028ab9 <String[7]: #threats>
          22: 0x1cbba5028b51 <ObjectBoilerplateDescription[5]>
          23: 0x0a02bbf85c19 <String[8]: #position>
          24: 310
          25: 0x1cbba5028ba9 <ObjectBoilerplateDescription[5]>
          26: 388
          27: 0x1cbba5028c01 <ObjectBoilerplateDescription[5]>
          28: 466
          29: 0x1cbba5028c59 <ObjectBoilerplateDescription[5]>
          30: 544
          31: 0x1cbba5028cb1 <ObjectBoilerplateDescription[5]>
          32: 622
          33: 0x1cbba5028d19 <ObjectBoilerplateDescription[5]>
          34: 712
          35: 669
          36: 626
          37: 554
          38: 462
          39: 370
          40: 278
          41: 851
          42: 890
          43: 912
Handler Table (size = 0)
Source Position Table (size = 321)
0x1cbba5028d69 <ByteArray[321]>
Boilerplate at 0x1cbba50289f1: 
0x1cbba50289f1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 9
           0: 8
           1: 0x1cbba5028a49 <String[13]: #walkableTiles>
           2: 0x1cbba5028a69 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x0a02bbf81329 <FixedArray[0]>>
           3: 0x1cbba5028a81 <String[16]: #nonWalkableTiles>
           4: 0x1cbba5028aa1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x0a02bbf81329 <FixedArray[0]>>
           5: 0x1cbba5028ab9 <String[7]: #threats>
           6: 0x1cbba5028ad1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x0a02bbf81329 <FixedArray[0]>>
           7: 0x0a02bbf84939 <String[9]: #character>
           8: 0x0a02bbf81501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba5028b51: 
0x1cbba5028b51: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf85c19 <String[8]: #position>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf84381 <String[5]: #style>
           4: 0x1cbba5028b89 <String[10]: #straitHead>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba5028ba9: 
0x1cbba5028ba9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf85c19 <String[8]: #position>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf84381 <String[5]: #style>
           4: 0x1cbba5028be1 <String[9]: #girouette>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba5028c01: 
0x1cbba5028c01: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf85c19 <String[8]: #position>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf84381 <String[5]: #style>
           4: 0x1cbba5028c39 <String[10]: #aggressive>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba5028c59: 
0x1cbba5028c59: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf85c19 <String[8]: #position>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf84381 <String[5]: #style>
           4: 0x1cbba5028c91 <String[12]: #surveillance>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba5028cb1: 
0x1cbba5028cb1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf85c19 <String[8]: #position>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf84381 <String[5]: #style>
           4: 0x1cbba5028ce9 <String[29]: #le_fantome_orange_dans_pacman>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x1cbba5028d19: 
0x1cbba5028d19: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 5
           0: 8
           1: 0x0a02bbf85c19 <String[8]: #position>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf84381 <String[5]: #style>
           4: 0x1cbba5028d51 <String[7]: #sheriff>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1cbba5028f91 points to: [0x1cbba5029000]
=== [0x1cbba5029000] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 8906 S> 0x1cbba5029000 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1cbba5029004 @    4 : c4                Star0 
         0x1cbba5029005 @    5 : 15 ff 0a 01       LdaImmutableContextSlot <context>, [10], [1]
 8928 E> 0x1cbba5029009 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba502900b @   11 : c1                Star3 
 8906 E> 0x1cbba502900c @   12 : 5f fa 02 03 f7 02 CallProperty2 r0, <this>, a0, r3, [2]
         0x1cbba5029012 @   18 : c4                Star0 
         0x1cbba5029013 @   19 : 9e 08             JumpIfUndefinedOrNull [8] (0x1cbba502901b @ 27)
 8940 E> 0x1cbba5029015 @   21 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x1cbba5029019 @   25 : 8a 03             Jump [3] (0x1cbba502901c @ 28)
         0x1cbba502901b @   27 : 0e                LdaUndefined 
         0x1cbba502901c @   28 : 9e 04             JumpIfUndefinedOrNull [4] (0x1cbba5029020 @ 32)
         0x1cbba502901e @   30 : 8a 0b             Jump [11] (0x1cbba5029029 @ 41)
         0x1cbba5029020 @   32 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x1cbba5029024 @   36 : c4                Star0 
 8959 E> 0x1cbba5029025 @   37 : 2d fa 03 06       GetNamedProperty r0, [3], [6]
 8968 S> 0x1cbba5029029 @   41 : a9                Return 
Constant pool (size = 4)
0x1cbba5029031: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 4
           0: 0x1cbba5029061 <String[14]: #get_best_match>
           1: 0x1cbba5025691 <String[11]: #TILE_COLORS>
           2: 0x0a02bbf84469 <String[4]: #type>
           3: 0x1cbba5026551 <String[8]: #WALKABLE>
Handler Table (size = 0)
Source Position Table (size = 17)
0x1cbba5029081 <ByteArray[17]>
0x1cbba5029111 points to: [0x1cbba5029180]
=== [0x1cbba5029180] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 9024 S> 0x1cbba5029180 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x1cbba5029184 @    4 : c4                Star0 
         0x1cbba5029185 @    5 : 15 ff 0b 01       LdaImmutableContextSlot <context>, [11], [1]
 9046 E> 0x1cbba5029189 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x1cbba502918b @   11 : c1                Star3 
 9024 E> 0x1cbba502918c @   12 : 5f fa 02 03 f7 02 CallProperty2 r0, <this>, a0, r3, [2]
         0x1cbba5029192 @   18 : c4                Star0 
         0x1cbba5029193 @   19 : 9e 08             JumpIfUndefinedOrNull [8] (0x1cbba502919b @ 27)
 9058 E> 0x1cbba5029195 @   21 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x1cbba5029199 @   25 : 8a 03             Jump [3] (0x1cbba502919c @ 28)
         0x1cbba502919b @   27 : 0e                LdaUndefined 
         0x1cbba502919c @   28 : 9e 04             JumpIfUndefinedOrNull [4] (0x1cbba50291a0 @ 32)
         0x1cbba502919e @   30 : 8a 03             Jump [3] (0x1cbba50291a1 @ 33)
         0x1cbba50291a0 @   32 : 0f                LdaNull 
 9078 S> 0x1cbba50291a1 @   33 : a9                Return 
Constant pool (size = 3)
0x1cbba50291a9: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 3
           0: 0x1cbba5029061 <String[14]: #get_best_match>
           1: 0x1cbba50256b1 <String[11]: #TEAM_COLORS>
           2: 0x1cbba5026851 <String[9]: #teamIndex>
Handler Table (size = 0)
Source Position Table (size = 15)
0x1cbba50291d1 <ByteArray[15]>
0x1cbba5029271 points to: [0x1cbba50292e0]
=== [0x1cbba50292e0] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 9110 E> 0x1cbba50292e0 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x1cbba50292e3 @    3 : 1a f8             PushContext r2
         0x1cbba50292e5 @    5 : 0b 03             Ldar a0
         0x1cbba50292e7 @    7 : 25 02             StaCurrentContextSlot [2]
         0x1cbba50292e9 @    9 : 80 01 00 02       CreateClosure [1], [0], #2
         0x1cbba50292ed @   13 : 25 03             StaCurrentContextSlot [3]
 9336 S> 0x1cbba50292ef @   15 : 0b 04             Ldar a1
 9340 E> 0x1cbba50292f1 @   17 : 7a                CreateArrayFromIterable 
         0x1cbba50292f2 @   18 : c0                Star4 
 9355 E> 0x1cbba50292f3 @   19 : 2d f6 02 00       GetNamedProperty r4, [2], [0]
         0x1cbba50292f7 @   23 : c1                Star3 
         0x1cbba50292f8 @   24 : 80 03 01 02       CreateClosure [3], [1], #2
         0x1cbba50292fc @   28 : bf                Star5 
 9355 E> 0x1cbba50292fd @   29 : 5e f7 f6 f5 02    CallProperty1 r3, r4, r5, [2]
         0x1cbba5029302 @   34 : c1                Star3 
         0x1cbba5029303 @   35 : 0c                LdaZero 
 9412 E> 0x1cbba5029304 @   36 : 2f f7 04          GetKeyedProperty r3, [4]
         0x1cbba5029307 @   39 : c4                Star0 
 9446 S> 0x1cbba5029308 @   40 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1cbba502930a @   42 : c1                Star3 
 9467 E> 0x1cbba502930b @   43 : 2d fa 04 06       GetNamedProperty r0, [4], [6]
         0x1cbba502930f @   47 : c0                Star4 
 9446 E> 0x1cbba5029310 @   48 : 62 f7 f6 08       CallUndefinedReceiver1 r3, r4, [8]
         0x1cbba5029314 @   52 : c1                Star3 
         0x1cbba5029315 @   53 : 0d 14             LdaSmi [20]
 9474 E> 0x1cbba5029317 @   55 : 6d f7 0a          TestLessThan r3, [10]
         0x1cbba502931a @   58 : c3                Star1 
 9488 S> 0x1cbba502931b @   59 : 97 05             JumpIfToBooleanFalse [5] (0x1cbba5029320 @ 64)
 9520 S> 0x1cbba502931d @   61 : 0b fa             Ldar r0
 9537 S> 0x1cbba502931f @   63 : a9                Return 
 9575 S> 0x1cbba5029320 @   64 : 0f                LdaNull 
 9587 S> 0x1cbba5029321 @   65 : a9                Return 
Constant pool (size = 5)
0x1cbba5029329: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 5
           0: 0x1cbba5029361 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1cbba50293f1 <SharedFunctionInfo colorError>
           2: 0x3e42d674eb61 <String[4]: #sort>
           3: 0x1cbba5029619 <SharedFunctionInfo>
           4: 0x0a02bbf8a0c9 <String[5]: #color>
Handler Table (size = 0)
Source Position Table (size = 39)
0x1cbba5029751 <ByteArray[39]>
0x1cbba50293f1 points to: [0x1cbba5029460]
=== [0x1cbba5029460] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 9189 S> 0x1cbba5029460 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x1cbba5029463 @    3 : c3                Star1 
 9201 E> 0x1cbba5029464 @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x1cbba5029468 @    8 : c4                Star0 
         0x1cbba5029469 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1cbba502946b @   11 : c2                Star2 
 9211 E> 0x1cbba502946c @   12 : 2d f8 02 05       GetNamedProperty r2, [2], [5]
         0x1cbba5029470 @   16 : c2                Star2 
 9226 E> 0x1cbba5029471 @   17 : 2d 03 02 07       GetNamedProperty a0, [2], [7]
 9213 E> 0x1cbba5029475 @   21 : 3a f8 04          Sub r2, [4]
         0x1cbba5029478 @   24 : c2                Star2 
 9201 E> 0x1cbba5029479 @   25 : 5e fa f9 f8 09    CallProperty1 r0, r1, r2, [9]
         0x1cbba502947e @   30 : c4                Star0 
 9231 E> 0x1cbba502947f @   31 : 21 00 00          LdaGlobal [0], [0]
         0x1cbba5029482 @   34 : c2                Star2 
 9236 E> 0x1cbba5029483 @   35 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x1cbba5029487 @   39 : c3                Star1 
         0x1cbba5029488 @   40 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1cbba502948a @   42 : c1                Star3 
 9246 E> 0x1cbba502948b @   43 : 2d f7 03 0c       GetNamedProperty r3, [3], [12]
         0x1cbba502948f @   47 : c1                Star3 
 9261 E> 0x1cbba5029490 @   48 : 2d 03 03 0e       GetNamedProperty a0, [3], [14]
 9248 E> 0x1cbba5029494 @   52 : 3a f7 0b          Sub r3, [11]
         0x1cbba5029497 @   55 : c1                Star3 
 9236 E> 0x1cbba5029498 @   56 : 5e f9 f8 f7 10    CallProperty1 r1, r2, r3, [16]
 9229 E> 0x1cbba502949d @   61 : 39 fa 12          Add r0, [18]
         0x1cbba50294a0 @   64 : c4                Star0 
 9266 E> 0x1cbba50294a1 @   65 : 21 00 00          LdaGlobal [0], [0]
         0x1cbba50294a4 @   68 : c2                Star2 
 9271 E> 0x1cbba50294a5 @   69 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x1cbba50294a9 @   73 : c3                Star1 
         0x1cbba50294aa @   74 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x1cbba50294ac @   76 : c1                Star3 
 9281 E> 0x1cbba50294ad @   77 : 2d f7 04 14       GetNamedProperty r3, [4], [20]
         0x1cbba50294b1 @   81 : c1                Star3 
 9296 E> 0x1cbba50294b2 @   82 : 2d 03 04 16       GetNamedProperty a0, [4], [22]
 9283 E> 0x1cbba50294b6 @   86 : 3a f7 13          Sub r3, [19]
         0x1cbba50294b9 @   89 : c1                Star3 
 9271 E> 0x1cbba50294ba @   90 : 5e f9 f8 f7 18    CallProperty1 r1, r2, r3, [24]
 9264 E> 0x1cbba50294bf @   95 : 39 fa 1a          Add r0, [26]
 9299 S> 0x1cbba50294c2 @   98 : a9                Return 
Constant pool (size = 5)
0x1cbba50294c9: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 5
           0: 0x3e42d675a991 <String[4]: #Math>
           1: 0x3e42d675a9a9 <String[3]: #abs>
           2: 0x3e42d676b141 <String[1]: #r>
           3: 0x0a02bbf885c9 <String[1]: #g>
           4: 0x0a02bbf8a069 <String[1]: #b>
Handler Table (size = 0)
Source Position Table (size = 48)
0x1cbba5029549 <ByteArray[48]>
0x1cbba5029619 points to: [0x1cbba5029688]
=== [0x1cbba5029688] DISASSEMBLY ===
Parameter count 3
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 9390 S> 0x1cbba5029688 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1cbba502968a @    2 : c4                Star0 
 9383 E> 0x1cbba502968b @    3 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x1cbba502968f @    7 : c3                Star1 
 9370 E> 0x1cbba5029690 @    8 : 62 fa f9 03       CallUndefinedReceiver1 r0, r1, [3]
         0x1cbba5029694 @   12 : c4                Star0 
         0x1cbba5029695 @   13 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x1cbba5029697 @   15 : c3                Star1 
 9405 E> 0x1cbba5029698 @   16 : 2d 04 00 05       GetNamedProperty a1, [0], [5]
         0x1cbba502969c @   20 : c2                Star2 
 9392 E> 0x1cbba502969d @   21 : 62 f9 f8 07       CallUndefinedReceiver1 r1, r2, [7]
 9390 E> 0x1cbba50296a1 @   25 : 3a fa 00          Sub r0, [0]
 9411 S> 0x1cbba50296a4 @   28 : a9                Return 
Constant pool (size = 1)
0x1cbba50296a9: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 1
           0: 0x0a02bbf8a0c9 <String[5]: #color>
Handler Table (size = 0)
Source Position Table (size = 19)
0x1cbba50296c1 <ByteArray[19]>
Array at 0x1cbba502ab49 has 7 elements:
0x1cbba502ab49: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 7
           0: 7
           1: 0x1cbba502ab91 <DescriptorArray[5]>
           2: 0x0a02bbf83301 <NumberDictionary[7]>
           3: 0x0a02bbf81329 <FixedArray[0]>
           4: 0x1cbba502ac69 <DescriptorArray[4]>
           5: 0x0a02bbf83301 <NumberDictionary[7]>
           6: 0x0a02bbf81329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x7 (7)
Element[1]
0x1cbba502ab91: [DescriptorArray] in OldSpace
 - map: 0x0a02bbf87761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0xa02bbf855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 4, attrs: [__C]) @ 0x3e42d6774fe1 <AccessorInfo>
  [1]: 0xa02bbf858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x3e42d6774f71 <AccessorInfo>
  [2]: 0xa02bbf85cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x3e42d6775051 <AccessorInfo>
  [3]: 0x0a02bbf865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x1cbba502ac51 <ClassPositions 9637, 10364>
  [4]: 0x1cbba5027b31: [String] in OldSpace: #loadFromFile (const data descriptor, p: 0, attrs: [W_C]) @ 3
Element[2]
0xa02bbf83301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0xa02bbf81329: [FixedArray] in ReadOnlySpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 0
Element[4]
0x1cbba502ac69: [DescriptorArray] in OldSpace
 - map: 0x0a02bbf87761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0xa02bbf84a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
  [1]: 0x1cbba5027db1: [String] in OldSpace: #width (const accessor descriptor, p: 1, attrs: [W_C]) @ 0x1cbba502ace1 <AccessorPair>(get: 4, set: 0x0a02bbf81339 <null>)
  [2]: 0x1cbba5027dc9: [String] in OldSpace: #height (const accessor descriptor, p: 2, attrs: [W_C]) @ 0x1cbba502acf9 <AccessorPair>(get: 5, set: 0x0a02bbf81339 <null>)
  [3]: 0x1cbba5028b01: [String] in OldSpace: #getPixel (const data descriptor, p: 3, attrs: [W_C]) @ 6
Element[5]
0xa02bbf83301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0xa02bbf81329: [FixedArray] in ReadOnlySpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 0
0x1cbba5029881 points to: [0x1cbba50298f0]
=== [0x1cbba50298f0] DISASSEMBLY ===
Parameter count 4
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 9710 S> 0x1cbba50298f0 @    0 : 0b 03             Ldar a0
 9723 E> 0x1cbba50298f2 @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
 9742 S> 0x1cbba50298f6 @    6 : 0b 04             Ldar a1
 9754 E> 0x1cbba50298f8 @    8 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
 9772 S> 0x1cbba50298fc @   12 : 0b 05             Ldar a2
 9785 E> 0x1cbba50298fe @   14 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
         0x1cbba5029902 @   18 : 0e                LdaUndefined 
 9800 S> 0x1cbba5029903 @   19 : a9                Return 
Constant pool (size = 3)
0x1cbba5029909: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 3
           0: 0x1cbba5029931 <String[7]: #_buffer>
           1: 0x1cbba5029949 <String[6]: #_width>
           2: 0x1cbba5029961 <String[7]: #_height>
Handler Table (size = 0)
Source Position Table (size = 19)
0x1cbba5029979 <ByteArray[19]>
0x1cbba5029a51 points to: [0x1cbba5029ac0]
=== [0x1cbba5029ac0] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 9859 S> 0x1cbba5029ac0 @    0 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
         0x1cbba5029ac4 @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x1cbba5029ac6 @    6 : c1                Star3 
 9862 E> 0x1cbba5029ac7 @    7 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x1cbba5029acb @   11 : c2                Star2 
 9862 E> 0x1cbba5029acc @   12 : 5e f8 f7 03 02    CallProperty1 r2, r3, a0, [2]
         0x1cbba5029ad1 @   17 : c4                Star0 
 9906 S> 0x1cbba5029ad2 @   18 : 15 ff 07 01       LdaImmutableContextSlot <context>, [7], [1]
         0x1cbba5029ad6 @   22 : aa 02             ThrowReferenceErrorIfHole [2]
         0x1cbba5029ad8 @   24 : c1                Star3 
 9914 E> 0x1cbba5029ad9 @   25 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x1cbba5029add @   29 : c1                Star3 
 9918 E> 0x1cbba5029ade @   30 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x1cbba5029ae2 @   34 : c1                Star3 
 9923 E> 0x1cbba5029ae3 @   35 : 2d f7 05 08       GetNamedProperty r3, [5], [8]
         0x1cbba5029ae7 @   39 : c2                Star2 
 9923 E> 0x1cbba5029ae8 @   40 : 5e f8 f7 fa 0a    CallProperty1 r2, r3, r0, [10]
         0x1cbba5029aed @   45 : c3                Star1 
 9943 S> 0x1cbba5029aee @   46 : 16 02             LdaCurrentContextSlot [2]
         0x1cbba5029af0 @   48 : aa 06             ThrowReferenceErrorIfHole [6]
         0x1cbba5029af2 @   50 : c2                Star2 
 9971 E> 0x1cbba5029af3 @   51 : 2d f9 07 0c       GetNamedProperty r1, [7], [12]
         0x1cbba5029af7 @   55 : c1                Star3 
 9981 E> 0x1cbba5029af8 @   56 : 2d f9 08 0e       GetNamedProperty r1, [8], [14]
         0x1cbba5029afc @   60 : c0                Star4 
 9992 E> 0x1cbba5029afd @   61 : 2d f9 09 10       GetNamedProperty r1, [9], [16]
         0x1cbba5029b01 @   65 : bf                Star5 
         0x1cbba5029b02 @   66 : 0b f8             Ldar r2
 9950 E> 0x1cbba5029b04 @   68 : 69 f8 f7 03 12    Construct r2, r3-r5, [18]
10000 S> 0x1cbba5029b09 @   73 : a9                Return 
Constant pool (size = 10)
0x1cbba5029b11: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 10
           0: 0x3e42d674cb69 <String[2]: #fs>
           1: 0x3e42d674d7e9 <String[12]: #readFileSync>
           2: 0x1cbba5025649 <String[7]: #pngjs_1>
           3: 0x1cbba5029b71 <String[3]: #PNG>
           4: 0x124cc60acea9 <String[4]: #sync>
           5: 0x3e42d674d859 <String[4]: #read>
           6: 0x1cbba5025741 <String[12]: #MapImageFile>
           7: 0x3e42d6758281 <String[4]: #data>
           8: 0x1cbba5027db1 <String[5]: #width>
           9: 0x1cbba5027dc9 <String[6]: #height>
Handler Table (size = 0)
Source Position Table (size = 36)
0x1cbba5029bd1 <ByteArray[36]>
0x1cbba5029c79 points to: [0x1cbba5029ce8]
=== [0x1cbba5029ce8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
10045 S> 0x1cbba5029ce8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
10052 S> 0x1cbba5029cec @    4 : a9                Return 
Constant pool (size = 1)
0x1cbba5029cf1: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 1
           0: 0x1cbba5029949 <String[6]: #_width>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1cbba5029d09 <ByteArray[8]>
0x1cbba5029da9 points to: [0x1cbba5029e18]
=== [0x1cbba5029e18] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
10098 S> 0x1cbba5029e18 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
10106 S> 0x1cbba5029e1c @    4 : a9                Return 
Constant pool (size = 1)
0x1cbba5029e21: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 1
           0: 0x1cbba5029961 <String[7]: #_height>
Handler Table (size = 0)
Source Position Table (size = 8)
0x1cbba5029e39 <ByteArray[8]>
0x1cbba5029ed9 points to: [0x1cbba5029f48]
=== [0x1cbba5029f48] DISASSEMBLY ===
Parameter count 3
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
10160 S> 0x1cbba5029f48 @    0 : 2d 02 00 03       GetNamedProperty <this>, [0], [3]
         0x1cbba5029f4c @    4 : c3                Star1 
         0x1cbba5029f4d @    5 : 0b 04             Ldar a1
10167 E> 0x1cbba5029f4f @    7 : 3b f9 02          Mul r1, [2]
         0x1cbba5029f52 @   10 : c3                Star1 
         0x1cbba5029f53 @   11 : 0b 03             Ldar a0
10171 E> 0x1cbba5029f55 @   13 : 39 f9 01          Add r1, [1]
10176 E> 0x1cbba5029f58 @   16 : 47 04 00          MulSmi [4], [0]
         0x1cbba5029f5b @   19 : c4                Star0 
10189 S> 0x1cbba5029f5c @   20 : 7c 01 05 29       CreateObjectLiteral [1], [5], #41
         0x1cbba5029f60 @   24 : c3                Star1 
10218 E> 0x1cbba5029f61 @   25 : 2d 02 02 06       GetNamedProperty <this>, [2], [6]
         0x1cbba5029f65 @   29 : c2                Star2 
         0x1cbba5029f66 @   30 : 0b fa             Ldar r0
10225 E> 0x1cbba5029f68 @   32 : 2f f8 08          GetKeyedProperty r2, [8]
         0x1cbba5029f6b @   35 : 33 f9 03 0a       DefineNamedOwnProperty r1, [3], [10]
10252 E> 0x1cbba5029f6f @   39 : 2d 02 02 0c       GetNamedProperty <this>, [2], [12]
         0x1cbba5029f73 @   43 : c2                Star2 
         0x1cbba5029f74 @   44 : 0b fa             Ldar r0
10264 E> 0x1cbba5029f76 @   46 : 45 01 0e          AddSmi [1], [14]
10259 E> 0x1cbba5029f79 @   49 : 2f f8 0f          GetKeyedProperty r2, [15]
         0x1cbba5029f7c @   52 : 33 f9 04 11       DefineNamedOwnProperty r1, [4], [17]
10290 E> 0x1cbba5029f80 @   56 : 2d 02 02 13       GetNamedProperty <this>, [2], [19]
         0x1cbba5029f84 @   60 : c2                Star2 
         0x1cbba5029f85 @   61 : 0b fa             Ldar r0
10302 E> 0x1cbba5029f87 @   63 : 45 02 15          AddSmi [2], [21]
10297 E> 0x1cbba5029f8a @   66 : 2f f8 16          GetKeyedProperty r2, [22]
         0x1cbba5029f8d @   69 : 33 f9 05 18       DefineNamedOwnProperty r1, [5], [24]
10328 E> 0x1cbba5029f91 @   73 : 2d 02 02 1a       GetNamedProperty <this>, [2], [26]
         0x1cbba5029f95 @   77 : c2                Star2 
         0x1cbba5029f96 @   78 : 0b fa             Ldar r0
10340 E> 0x1cbba5029f98 @   80 : 45 03 1c          AddSmi [3], [28]
10335 E> 0x1cbba5029f9b @   83 : 2f f8 1d          GetKeyedProperty r2, [29]
         0x1cbba5029f9e @   86 : 33 f9 06 1f       DefineNamedOwnProperty r1, [6], [31]
         0x1cbba5029fa2 @   90 : 0b f9             Ldar r1
10356 S> 0x1cbba5029fa4 @   92 : a9                Return 
Constant pool (size = 7)
0x1cbba5029fa9: [FixedArray] in OldSpace
 - map: 0x0a02bbf812e1 <Map>
 - length: 7
           0: 0x1cbba5029949 <String[6]: #_width>
           1: 0x1cbba5029ff1 <ObjectBoilerplateDescription[9]>
           2: 0x1cbba5029931 <String[7]: #_buffer>
           3: 0x3e42d676b141 <String[1]: #r>
           4: 0x0a02bbf885c9 <String[1]: #g>
           5: 0x0a02bbf8a069 <String[1]: #b>
           6: 0x0a02bbf89fa9 <String[1]: #a>
Handler Table (size = 0)
Source Position Table (size = 39)
0x1cbba502a049 <ByteArray[39]>
Boilerplate at 0x1cbba5029ff1: 
0x1cbba5029ff1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x0a02bbf82059 <Map>
 - length: 9
           0: 8
           1: 0x3e42d676b141 <String[1]: #r>
           2: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           3: 0x0a02bbf885c9 <String[1]: #g>
           4: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           5: 0x0a02bbf8a069 <String[1]: #b>
           6: 0x0a02bbf81501 <Odd Oddball: uninitialized>
           7: 0x0a02bbf89fa9 <String[1]: #a>
           8: 0x0a02bbf81501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
