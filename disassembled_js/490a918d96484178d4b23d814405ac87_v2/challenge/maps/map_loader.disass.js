<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x383dd4424f28] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x383dd4424f28 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x383dd4424f2c @    4 : c4                Star0 
10444 S> 0x383dd4424f2d @    5 : a9                Return 
Constant pool (size = 1)
0x383dd4424f31: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 1
           0: 0x383dd4424f49 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x383dd442ae39 <ByteArray[8]>
0x383dd4424f49 points to: [0x383dd4424fb8]
=== [0x383dd4424fb8] DISASSEMBLY ===
Parameter count 6
Register count 20
Frame size 160
OSR urgency: 0
Bytecode age: 0
   10 E> 0x383dd4424fb8 @    0 : 83 00 0e          CreateFunctionContext [0], [14]
         0x383dd4424fbb @    3 : 1a f7             PushContext r3
         0x383dd4424fbd @    5 : 10                LdaTheHole 
         0x383dd4424fbe @    6 : 25 04             StaCurrentContextSlot [4]
         0x383dd4424fc0 @    8 : 10                LdaTheHole 
         0x383dd4424fc1 @    9 : 25 05             StaCurrentContextSlot [5]
         0x383dd4424fc3 @   11 : 10                LdaTheHole 
         0x383dd4424fc4 @   12 : 25 06             StaCurrentContextSlot [6]
         0x383dd4424fc6 @   14 : 10                LdaTheHole 
         0x383dd4424fc7 @   15 : 25 07             StaCurrentContextSlot [7]
         0x383dd4424fc9 @   17 : 10                LdaTheHole 
         0x383dd4424fca @   18 : 25 08             StaCurrentContextSlot [8]
         0x383dd4424fcc @   20 : 10                LdaTheHole 
         0x383dd4424fcd @   21 : 25 0a             StaCurrentContextSlot [10]
         0x383dd4424fcf @   23 : 10                LdaTheHole 
         0x383dd4424fd0 @   24 : 25 0b             StaCurrentContextSlot [11]
         0x383dd4424fd2 @   26 : 10                LdaTheHole 
         0x383dd4424fd3 @   27 : 25 0c             StaCurrentContextSlot [12]
         0x383dd4424fd5 @   29 : 10                LdaTheHole 
         0x383dd4424fd6 @   30 : 25 0d             StaCurrentContextSlot [13]
         0x383dd4424fd8 @   32 : 10                LdaTheHole 
         0x383dd4424fd9 @   33 : 25 0e             StaCurrentContextSlot [14]
         0x383dd4424fdb @   35 : 10                LdaTheHole 
         0x383dd4424fdc @   36 : 25 0f             StaCurrentContextSlot [15]
   98 S> 0x383dd4424fde @   38 : 0b 02             Ldar <this>
         0x383dd4424fe0 @   40 : 97 06             JumpIfToBooleanFalse [6] (0x383dd4424fe6 @ 46)
  112 E> 0x383dd4424fe2 @   42 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x383dd4424fe6 @   46 : 96 16             JumpIfToBooleanTrue [22] (0x383dd4424ffc @ 68)
  133 E> 0x383dd4424fe8 @   48 : 21 02 02          LdaGlobal [2], [2]
         0x383dd4424feb @   51 : c0                Star4 
  140 E> 0x383dd4424fec @   52 : 2d f6 03 04       GetNamedProperty r4, [3], [4]
         0x383dd4424ff0 @   56 : 97 08             JumpIfToBooleanFalse [8] (0x383dd4424ff8 @ 64)
         0x383dd4424ff2 @   58 : 80 04 00 02       CreateClosure [4], [0], #2
         0x383dd4424ff6 @   62 : 8a 06             Jump [6] (0x383dd4424ffc @ 68)
         0x383dd4424ff8 @   64 : 80 05 01 02       CreateClosure [5], [1], #2
   98 E> 0x383dd4424ffc @   68 : 25 02             StaCurrentContextSlot [2]
  578 S> 0x383dd4424ffe @   70 : 0b 02             Ldar <this>
         0x383dd4425000 @   72 : 97 06             JumpIfToBooleanFalse [6] (0x383dd4425006 @ 78)
  592 E> 0x383dd4425002 @   74 : 2d 02 06 06       GetNamedProperty <this>, [6], [6]
         0x383dd4425006 @   78 : 96 16             JumpIfToBooleanTrue [22] (0x383dd442501c @ 100)
  616 E> 0x383dd4425008 @   80 : 21 02 02          LdaGlobal [2], [2]
         0x383dd442500b @   83 : c0                Star4 
  623 E> 0x383dd442500c @   84 : 2d f6 03 04       GetNamedProperty r4, [3], [4]
         0x383dd4425010 @   88 : 97 08             JumpIfToBooleanFalse [8] (0x383dd4425018 @ 96)
         0x383dd4425012 @   90 : 80 07 02 02       CreateClosure [7], [2], #2
         0x383dd4425016 @   94 : 8a 06             Jump [6] (0x383dd442501c @ 100)
         0x383dd4425018 @   96 : 80 08 03 02       CreateClosure [8], [3], #2
  578 E> 0x383dd442501c @  100 : 25 03             StaCurrentContextSlot [3]
  790 S> 0x383dd442501e @  102 : 0b 02             Ldar <this>
         0x383dd4425020 @  104 : 97 06             JumpIfToBooleanFalse [6] (0x383dd4425026 @ 110)
  804 E> 0x383dd4425022 @  106 : 2d 02 09 08       GetNamedProperty <this>, [9], [8]
         0x383dd4425026 @  110 : 96 06             JumpIfToBooleanTrue [6] (0x383dd442502c @ 116)
         0x383dd4425028 @  112 : 80 0a 04 02       CreateClosure [10], [4], #2
         0x383dd442502c @  116 : c4                Star0 
 1125 S> 0x383dd442502d @  117 : 0b 02             Ldar <this>
         0x383dd442502f @  119 : 97 06             JumpIfToBooleanFalse [6] (0x383dd4425035 @ 125)
 1139 E> 0x383dd4425031 @  121 : 2d 02 0b 0a       GetNamedProperty <this>, [11], [10]
         0x383dd4425035 @  125 : 96 06             JumpIfToBooleanTrue [6] (0x383dd442503b @ 131)
         0x383dd4425037 @  127 : 80 0c 05 02       CreateClosure [12], [5], #2
         0x383dd442503b @  131 : c3                Star1 
 1242 S> 0x383dd442503c @  132 : 21 02 02          LdaGlobal [2], [2]
         0x383dd442503f @  135 : bf                Star5 
 1249 E> 0x383dd4425040 @  136 : 2d f5 0d 0c       GetNamedProperty r5, [13], [12]
         0x383dd4425044 @  140 : c0                Star4 
         0x383dd4425045 @  141 : 13 0e             LdaConstant [14]
         0x383dd4425047 @  143 : bd                Star7 
 1264 E> 0x383dd4425048 @  144 : 7c 0f 0e 29       CreateObjectLiteral [15], [14], #41
         0x383dd442504c @  148 : bc                Star8 
         0x383dd442504d @  149 : 19 03 f4          Mov a0, r6
 1249 E> 0x383dd4425050 @  152 : 5c f6 f5 04 0f    CallProperty r4, r5-r8, [15]
 1305 S> 0x383dd4425055 @  157 : 0e                LdaUndefined 
         0x383dd4425056 @  158 : be                Star6 
 1346 E> 0x383dd4425057 @  159 : 32 03 10 11       SetNamedProperty a0, [16], [17]
         0x383dd442505b @  163 : 0b f4             Ldar r6
 1326 E> 0x383dd442505d @  165 : 32 03 11 13       SetNamedProperty a0, [17], [19]
 1373 S> 0x383dd4425061 @  169 : 13 12             LdaConstant [18]
         0x383dd4425063 @  171 : bf                Star5 
 1373 E> 0x383dd4425064 @  172 : 62 04 f5 15       CallUndefinedReceiver1 a1, r5, [21]
 1373 E> 0x383dd4425068 @  176 : 25 04             StaCurrentContextSlot [4]
 1410 S> 0x383dd442506a @  178 : 13 13             LdaConstant [19]
         0x383dd442506c @  180 : be                Star6 
 1423 E> 0x383dd442506d @  181 : 62 04 f4 17       CallUndefinedReceiver1 a1, r6, [23]
         0x383dd4425071 @  185 : bf                Star5 
 1410 E> 0x383dd4425072 @  186 : 62 fa f5 19       CallUndefinedReceiver1 r0, r5, [25]
 1410 E> 0x383dd4425076 @  190 : 25 05             StaCurrentContextSlot [5]
 1454 S> 0x383dd4425078 @  192 : 13 14             LdaConstant [20]
         0x383dd442507a @  194 : be                Star6 
 1470 E> 0x383dd442507b @  195 : 62 04 f4 1b       CallUndefinedReceiver1 a1, r6, [27]
         0x383dd442507f @  199 : bf                Star5 
 1454 E> 0x383dd4425080 @  200 : 62 f9 f5 1d       CallUndefinedReceiver1 r1, r5, [29]
 1454 E> 0x383dd4425084 @  204 : 25 06             StaCurrentContextSlot [6]
 1504 S> 0x383dd4425086 @  206 : 13 15             LdaConstant [21]
         0x383dd4425088 @  208 : bf                Star5 
 1504 E> 0x383dd4425089 @  209 : 62 04 f5 1f       CallUndefinedReceiver1 a1, r5, [31]
 1504 E> 0x383dd442508d @  213 : 25 07             StaCurrentContextSlot [7]
 1539 S> 0x383dd442508f @  215 : 13 16             LdaConstant [22]
         0x383dd4425091 @  217 : bf                Star5 
 1539 E> 0x383dd4425092 @  218 : 62 04 f5 21       CallUndefinedReceiver1 a1, r5, [33]
 1539 E> 0x383dd4425096 @  222 : 25 08             StaCurrentContextSlot [8]
 1584 S> 0x383dd4425098 @  224 : 80 17 06 02       CreateClosure [23], [6], #2
         0x383dd442509c @  228 : c0                Star4 
         0x383dd442509d @  229 : 16 09             LdaCurrentContextSlot [9]
 2239 E> 0x383dd442509f @  231 : 96 05             JumpIfToBooleanTrue [5] (0x383dd44250a4 @ 236)
         0x383dd44250a1 @  233 : 7d                CreateEmptyObjectLiteral 
 2261 E> 0x383dd44250a2 @  234 : 25 09             StaCurrentContextSlot [9]
         0x383dd44250a4 @  236 : bf                Star5 
 2238 E> 0x383dd44250a5 @  237 : 62 f6 f5 23       CallUndefinedReceiver1 r4, r5, [35]
 2289 S> 0x383dd44250a9 @  241 : 79 18 25 04       CreateArrayLiteral [24], [37], #4
         0x383dd44250ad @  245 : bf                Star5 
         0x383dd44250ae @  246 : 0c                LdaZero 
         0x383dd44250af @  247 : c0                Star4 
         0x383dd44250b0 @  248 : 7c 19 26 08       CreateObjectLiteral [25], [38], #8
         0x383dd44250b4 @  252 : be                Star6 
         0x383dd44250b5 @  253 : 16 09             LdaCurrentContextSlot [9]
         0x383dd44250b7 @  255 : bd                Star7 
 2320 E> 0x383dd44250b8 @  256 : 2d f3 1a 27       GetNamedProperty r7, [26], [39]
         0x383dd44250bc @  260 : 33 f4 1b 29       DefineNamedOwnProperty r6, [27], [41]
         0x383dd44250c0 @  264 : 0b f4             Ldar r6
         0x383dd44250c2 @  266 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x383dd44250c6 @  270 : 0d 01             LdaSmi [1]
         0x383dd44250c8 @  272 : c0                Star4 
         0x383dd44250c9 @  273 : 7c 1c 2d 08       CreateObjectLiteral [28], [45], #8
         0x383dd44250cd @  277 : be                Star6 
         0x383dd44250ce @  278 : 16 09             LdaCurrentContextSlot [9]
         0x383dd44250d0 @  280 : bd                Star7 
 2416 E> 0x383dd44250d1 @  281 : 2d f3 1d 2e       GetNamedProperty r7, [29], [46]
         0x383dd44250d5 @  285 : 33 f4 1b 30       DefineNamedOwnProperty r6, [27], [48]
         0x383dd44250d9 @  289 : 0b f4             Ldar r6
         0x383dd44250db @  291 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x383dd44250df @  295 : 0d 02             LdaSmi [2]
         0x383dd44250e1 @  297 : c0                Star4 
         0x383dd44250e2 @  298 : 7c 1e 32 08       CreateObjectLiteral [30], [50], #8
         0x383dd44250e6 @  302 : be                Star6 
         0x383dd44250e7 @  303 : 16 09             LdaCurrentContextSlot [9]
         0x383dd44250e9 @  305 : bd                Star7 
 2514 E> 0x383dd44250ea @  306 : 2d f3 1f 33       GetNamedProperty r7, [31], [51]
         0x383dd44250ee @  310 : 33 f4 1b 35       DefineNamedOwnProperty r6, [27], [53]
         0x383dd44250f2 @  314 : 0b f4             Ldar r6
         0x383dd44250f4 @  316 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x383dd44250f8 @  320 : 0d 03             LdaSmi [3]
         0x383dd44250fa @  322 : c0                Star4 
         0x383dd44250fb @  323 : 7c 20 37 08       CreateObjectLiteral [32], [55], #8
         0x383dd44250ff @  327 : be                Star6 
         0x383dd4425100 @  328 : 16 09             LdaCurrentContextSlot [9]
         0x383dd4425102 @  330 : bd                Star7 
 2608 E> 0x383dd4425103 @  331 : 2d f3 21 38       GetNamedProperty r7, [33], [56]
         0x383dd4425107 @  335 : 33 f4 1b 3a       DefineNamedOwnProperty r6, [27], [58]
         0x383dd442510b @  339 : 0b f4             Ldar r6
         0x383dd442510d @  341 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x383dd4425111 @  345 : 0d 04             LdaSmi [4]
         0x383dd4425113 @  347 : c0                Star4 
         0x383dd4425114 @  348 : 7c 22 3c 08       CreateObjectLiteral [34], [60], #8
         0x383dd4425118 @  352 : be                Star6 
         0x383dd4425119 @  353 : 16 09             LdaCurrentContextSlot [9]
         0x383dd442511b @  355 : bd                Star7 
 2709 E> 0x383dd442511c @  356 : 2d f3 23 3d       GetNamedProperty r7, [35], [61]
         0x383dd4425120 @  360 : 33 f4 1b 3f       DefineNamedOwnProperty r6, [27], [63]
         0x383dd4425124 @  364 : 0b f4             Ldar r6
         0x383dd4425126 @  366 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x383dd442512a @  370 : 0d 05             LdaSmi [5]
         0x383dd442512c @  372 : c0                Star4 
         0x383dd442512d @  373 : 7c 24 41 08       CreateObjectLiteral [36], [65], #8
         0x383dd4425131 @  377 : be                Star6 
         0x383dd4425132 @  378 : 16 09             LdaCurrentContextSlot [9]
         0x383dd4425134 @  380 : bd                Star7 
 2814 E> 0x383dd4425135 @  381 : 2d f3 25 42       GetNamedProperty r7, [37], [66]
         0x383dd4425139 @  385 : 33 f4 1b 44       DefineNamedOwnProperty r6, [27], [68]
         0x383dd442513d @  389 : 0b f4             Ldar r6
         0x383dd442513f @  391 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x383dd4425143 @  395 : 0d 06             LdaSmi [6]
         0x383dd4425145 @  397 : c0                Star4 
         0x383dd4425146 @  398 : 7c 26 46 08       CreateObjectLiteral [38], [70], #8
         0x383dd442514a @  402 : be                Star6 
         0x383dd442514b @  403 : 16 09             LdaCurrentContextSlot [9]
         0x383dd442514d @  405 : bd                Star7 
 2920 E> 0x383dd442514e @  406 : 2d f3 27 47       GetNamedProperty r7, [39], [71]
         0x383dd4425152 @  410 : 33 f4 1b 49       DefineNamedOwnProperty r6, [27], [73]
         0x383dd4425156 @  414 : 0b f4             Ldar r6
         0x383dd4425158 @  416 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x383dd442515c @  420 : 0d 07             LdaSmi [7]
         0x383dd442515e @  422 : c0                Star4 
         0x383dd442515f @  423 : 7c 28 4b 08       CreateObjectLiteral [40], [75], #8
         0x383dd4425163 @  427 : be                Star6 
         0x383dd4425164 @  428 : 16 09             LdaCurrentContextSlot [9]
         0x383dd4425166 @  430 : bd                Star7 
 3030 E> 0x383dd4425167 @  431 : 2d f3 29 4c       GetNamedProperty r7, [41], [76]
         0x383dd442516b @  435 : 33 f4 1b 4e       DefineNamedOwnProperty r6, [27], [78]
         0x383dd442516f @  439 : 0b f4             Ldar r6
         0x383dd4425171 @  441 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x383dd4425175 @  445 : 0d 08             LdaSmi [8]
         0x383dd4425177 @  447 : c0                Star4 
         0x383dd4425178 @  448 : 7c 2a 50 08       CreateObjectLiteral [42], [80], #8
         0x383dd442517c @  452 : be                Star6 
         0x383dd442517d @  453 : 16 09             LdaCurrentContextSlot [9]
         0x383dd442517f @  455 : bd                Star7 
 3158 E> 0x383dd4425180 @  456 : 2d f3 2b 51       GetNamedProperty r7, [43], [81]
         0x383dd4425184 @  460 : 33 f4 1b 53       DefineNamedOwnProperty r6, [27], [83]
         0x383dd4425188 @  464 : 0b f4             Ldar r6
         0x383dd442518a @  466 : 36 f5 f6 2b       StaInArrayLiteral r5, r4, [43]
         0x383dd442518e @  470 : 0b f5             Ldar r5
 2289 E> 0x383dd4425190 @  472 : 25 0a             StaCurrentContextSlot [10]
 3254 S> 0x383dd4425192 @  474 : 79 2c 55 04       CreateArrayLiteral [44], [85], #4
         0x383dd4425196 @  478 : bf                Star5 
 3372 E> 0x383dd4425197 @  479 : 2d f5 2d 56       GetNamedProperty r5, [45], [86]
         0x383dd442519b @  483 : c0                Star4 
         0x383dd442519c @  484 : 80 2e 07 02       CreateClosure [46], [7], #2
         0x383dd44251a0 @  488 : be                Star6 
 3372 E> 0x383dd44251a1 @  489 : 5e f6 f5 f4 58    CallProperty1 r4, r5, r6, [88]
 3254 E> 0x383dd44251a6 @  494 : 25 0b             StaCurrentContextSlot [11]
 3449 S> 0x383dd44251a8 @  496 : 13 2f             LdaConstant [47]
 3449 E> 0x383dd44251aa @  498 : 25 0c             StaCurrentContextSlot [12]
 3486 S> 0x383dd44251ac @  500 : 13 30             LdaConstant [48]
 3486 E> 0x383dd44251ae @  502 : 25 0d             StaCurrentContextSlot [13]
 3528 S> 0x383dd44251b0 @  504 : 13 31             LdaConstant [49]
 3528 E> 0x383dd44251b2 @  506 : 25 0e             StaCurrentContextSlot [14]
         0x383dd44251b4 @  508 : 81 32             CreateBlockContext [50]
         0x383dd44251b6 @  510 : 1a f6             PushContext r4
         0x383dd44251b8 @  512 : 10                LdaTheHole 
         0x383dd44251b9 @  513 : 25 02             StaCurrentContextSlot [2]
         0x383dd44251bb @  515 : 10                LdaTheHole 
         0x383dd44251bc @  516 : bc                Star8 
         0x383dd44251bd @  517 : 80 34 08 02       CreateClosure [52], [8], #2
         0x383dd44251c1 @  521 : bf                Star5 
         0x383dd44251c2 @  522 : 13 33             LdaConstant [51]
         0x383dd44251c4 @  524 : be                Star6 
         0x383dd44251c5 @  525 : 80 35 09 02       CreateClosure [53], [9], #2
         0x383dd44251c9 @  529 : bb                Star9 
         0x383dd44251ca @  530 : 80 36 0a 02       CreateClosure [54], [10], #2
         0x383dd44251ce @  534 : ba                Star10 
         0x383dd44251cf @  535 : 80 37 0b 02       CreateClosure [55], [11], #2
         0x383dd44251d3 @  539 : b9                Star11 
         0x383dd44251d4 @  540 : 80 38 0c 02       CreateClosure [56], [12], #2
         0x383dd44251d8 @  544 : b8                Star12 
         0x383dd44251d9 @  545 : 80 39 0d 02       CreateClosure [57], [13], #2
         0x383dd44251dd @  549 : b7                Star13 
         0x383dd44251de @  550 : 80 3a 0e 02       CreateClosure [58], [14], #2
         0x383dd44251e2 @  554 : b6                Star14 
         0x383dd44251e3 @  555 : 80 3b 0f 02       CreateClosure [59], [15], #2
         0x383dd44251e7 @  559 : b5                Star15 
         0x383dd44251e8 @  560 : 80 3c 10 02       CreateClosure [60], [16], #2
         0x383dd44251ec @  564 : 18 ea             Star r16
         0x383dd44251ee @  566 : 80 3d 11 02       CreateClosure [61], [17], #2
         0x383dd44251f2 @  570 : 18 e9             Star r17
         0x383dd44251f4 @  572 : 80 3e 12 02       CreateClosure [62], [18], #2
         0x383dd44251f8 @  576 : 18 e8             Star r18
         0x383dd44251fa @  578 : 80 3f 13 02       CreateClosure [63], [19], #2
         0x383dd44251fe @  582 : 18 e7             Star r19
         0x383dd4425200 @  584 : 19 f5 f3          Mov r5, r7
         0x383dd4425203 @  587 : 65 28 00 f4 0e    CallRuntime [DefineClass], r6-r19
         0x383dd4425208 @  592 : be                Star6 
         0x383dd4425209 @  593 : 0b f3             Ldar r7
         0x383dd442520b @  595 : 25 02             StaCurrentContextSlot [2]
         0x383dd442520d @  597 : 1b f6             PopContext r4
         0x383dd442520f @  599 : c2                Star2 
 9606 S> 0x383dd4425210 @  600 : 0b f8             Ldar r2
 9624 E> 0x383dd4425212 @  602 : 32 03 10 11       SetNamedProperty a0, [16], [17]
         0x383dd4425216 @  606 : 81 40             CreateBlockContext [64]
         0x383dd4425218 @  608 : 1a f6             PushContext r4
         0x383dd442521a @  610 : 10                LdaTheHole 
         0x383dd442521b @  611 : 25 02             StaCurrentContextSlot [2]
         0x383dd442521d @  613 : 10                LdaTheHole 
         0x383dd442521e @  614 : bc                Star8 
         0x383dd442521f @  615 : 80 42 14 02       CreateClosure [66], [20], #2
         0x383dd4425223 @  619 : bf                Star5 
         0x383dd4425224 @  620 : 13 41             LdaConstant [65]
         0x383dd4425226 @  622 : be                Star6 
         0x383dd4425227 @  623 : 80 43 15 02       CreateClosure [67], [21], #2
         0x383dd442522b @  627 : bb                Star9 
         0x383dd442522c @  628 : 80 44 16 02       CreateClosure [68], [22], #2
         0x383dd4425230 @  632 : ba                Star10 
         0x383dd4425231 @  633 : 80 45 17 02       CreateClosure [69], [23], #2
         0x383dd4425235 @  637 : b9                Star11 
         0x383dd4425236 @  638 : 80 46 18 02       CreateClosure [70], [24], #2
         0x383dd442523a @  642 : b8                Star12 
         0x383dd442523b @  643 : 19 f5 f3          Mov r5, r7
         0x383dd442523e @  646 : 65 28 00 f4 07    CallRuntime [DefineClass], r6-r12
         0x383dd4425243 @  651 : be                Star6 
         0x383dd4425244 @  652 : 0b f3             Ldar r7
         0x383dd4425246 @  654 : 25 02             StaCurrentContextSlot [2]
         0x383dd4425248 @  656 : 1b f6             PopContext r4
 9637 E> 0x383dd442524a @  658 : 25 0f             StaCurrentContextSlot [15]
10365 S> 0x383dd442524c @  660 : 17 0f             LdaImmutableCurrentContextSlot [15]
10386 E> 0x383dd442524e @  662 : 32 03 11 13       SetNamedProperty a0, [17], [19]
         0x383dd4425252 @  666 : 0e                LdaUndefined 
10441 S> 0x383dd4425253 @  667 : a9                Return 
Constant pool (size = 71)
0x383dd4425259: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 71
           0: 0x383dd44254a1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x383dd44255c9 <String[15]: #__createBinding>
           2: 0x34e078c05ab9 <String[6]: #Object>
           3: 0x320c0b49a7c9 <String[6]: #create>
           4: 0x383dd4425789 <SharedFunctionInfo>
           5: 0x383dd4425ce1 <SharedFunctionInfo>
           6: 0x383dd44255e9 <String[18]: #__setModuleDefault>
           7: 0x383dd4425df1 <SharedFunctionInfo>
           8: 0x383dd4425f89 <SharedFunctionInfo>
           9: 0x383dd442a189 <String[12]: #__importStar>
          10: 0x383dd44260a1 <SharedFunctionInfo>
          11: 0x383dd442a1a9 <String[15]: #__importDefault>
          12: 0x383dd44262b9 <SharedFunctionInfo>
          13: 0x34e078c04c11 <String[14]: #defineProperty>
          14: 0x383dd4425971 <String[10]: #__esModule>
          15: 0x383dd442a1c9 <ObjectBoilerplateDescription[3]>
          16: 0x383dd4426c29 <String[9]: #MapLoader>
          17: 0x383dd4425751 <String[12]: #MapImageFile>
          18: 0x383dd442a1f1 <String[13]: #@blitz/engine>
          19: 0x320c0b48cb69 <String[2]: #fs>
          20: 0x320c0b48c629 <String[4]: #path>
          21: 0x383dd442a229 <String[5]: #pngjs>
          22: 0x383dd442a241 <String[18]: #../geometry/vector>
          23: 0x383dd4426421 <SharedFunctionInfo>
          24: 0x383dd442a269 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x383dd442a281 <FixedArray[9]>>
          25: 0x383dd442a2d9 <ObjectBoilerplateDescription[5]>
          26: 0x383dd4426579 <String[12]: #NON_WALKABLE>
          27: 0x34e078c04469 <String[4]: #type>
          28: 0x383dd442a359 <ObjectBoilerplateDescription[5]>
          29: 0x383dd4426561 <String[8]: #WALKABLE>
          30: 0x383dd442a3d9 <ObjectBoilerplateDescription[5]>
          31: 0x383dd4426599 <String[9]: #CHARACTER>
          32: 0x383dd442a459 <ObjectBoilerplateDescription[5]>
          33: 0x383dd44265b9 <String[17]: #THREAT_STRAITHEAD>
          34: 0x383dd442a4d9 <ObjectBoilerplateDescription[5]>
          35: 0x383dd44265e1 <String[16]: #THREAT_GIROUETTE>
          36: 0x383dd442a559 <ObjectBoilerplateDescription[5]>
          37: 0x383dd4426601 <String[17]: #THREAT_AGGRESSIVE>
          38: 0x383dd442a5d9 <ObjectBoilerplateDescription[5]>
          39: 0x383dd4426629 <String[19]: #THREAT_SURVEILLANCE>
          40: 0x383dd442a659 <ObjectBoilerplateDescription[5]>
          41: 0x383dd4426651 <String[36]: #THREAT_LE_FANTOME_ORANGE_DANS_PACMAN>
          42: 0x383dd442a6d9 <ObjectBoilerplateDescription[5]>
          43: 0x383dd4426689 <String[14]: #THREAT_SHERIFF>
          44: 0x383dd442a759 <ArrayBoilerplateDescription PACKED_ELEMENTS, 0x383dd442a771 <FixedArray[4]>>
          45: 0x320c0b489ea9 <String[3]: #map>
          46: 0x383dd4426779 <SharedFunctionInfo>
          47: 0x383dd442a8c1 <String[6]: #./maps>
          48: 0x383dd442a8d9 <String[9]: #meta.json>
          49: 0x383dd442a8f9 <String[10]: #layout.png>
          50: 0x383dd4426be1 <ScopeInfo CLASS_SCOPE>
          51: 0x383dd442a919 <FixedArray[7]>
          52: 0x383dd44297b1 <SharedFunctionInfo MapLoader>
          53: 0x383dd4426909 <SharedFunctionInfo listMaps>
          54: 0x383dd4427221 <SharedFunctionInfo mapHasAllRequiredFiles>
          55: 0x383dd44275b1 <SharedFunctionInfo listMapsWithDifficulty>
          56: 0x383dd44279b1 <SharedFunctionInfo loadFromMapName>
          57: 0x383dd4427c69 <SharedFunctionInfo loadFromComponents>
          58: 0x383dd4427ed1 <SharedFunctionInfo loadMetadata>
          59: 0x383dd4428041 <SharedFunctionInfo loadRandomMap>
          60: 0x383dd4428461 <SharedFunctionInfo loadEntities>
          61: 0x383dd4428fa1 <SharedFunctionInfo get_tile_type>
          62: 0x383dd4429121 <SharedFunctionInfo get_team>
          63: 0x383dd4429281 <SharedFunctionInfo get_best_match>
          64: 0x383dd4429a01 <ScopeInfo CLASS_SCOPE>
          65: 0x383dd442ab59 <FixedArray[7]>
          66: 0x383dd4429891 <SharedFunctionInfo MapImageFile>
          67: 0x383dd4429a61 <SharedFunctionInfo loadFromFile>
          68: 0x383dd4429c89 <SharedFunctionInfo get width>
          69: 0x383dd4429db9 <SharedFunctionInfo get height>
          70: 0x383dd4429ee9 <SharedFunctionInfo getPixel>
Handler Table (size = 0)
Source Position Table (size = 179)
0x383dd442ad21 <ByteArray[179]>
0x383dd4425789 points to: [0x383dd44257f8]
=== [0x383dd44257f8] DISASSEMBLY ===
Parameter count 5
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
  158 E> 0x383dd44257f8 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x383dd44257fb @    3 : 1a f9             PushContext r1
         0x383dd44257fd @    5 : 0b 04             Ldar a1
         0x383dd44257ff @    7 : 25 03             StaCurrentContextSlot [3]
         0x383dd4425801 @    9 : 0b 05             Ldar a2
         0x383dd4425803 @   11 : 25 02             StaCurrentContextSlot [2]
  178 S> 0x383dd4425805 @   13 : 0b 06             Ldar a3
         0x383dd4425807 @   15 : 9d 06             JumpIfNotUndefined [6] (0x383dd442580d @ 21)
  200 S> 0x383dd4425809 @   17 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x383dd442580b @   19 : 18 06             Star a3
  223 S> 0x383dd442580d @   21 : 21 01 00          LdaGlobal [1], [0]
         0x383dd4425810 @   24 : c1                Star3 
  230 E> 0x383dd4425811 @   25 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x383dd4425815 @   29 : c2                Star2 
         0x383dd4425816 @   30 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x383dd4425818 @   32 : c0                Star4 
         0x383dd4425819 @   33 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x383dd442581b @   35 : bf                Star5 
  230 E> 0x383dd442581c @   36 : 5f f8 f7 f6 f5 04 CallProperty2 r2, r3, r4, r5, [4]
         0x383dd4425822 @   42 : c4                Star0 
  266 S> 0x383dd4425823 @   43 : 97 22             JumpIfToBooleanFalse [34] (0x383dd4425845 @ 77)
         0x383dd4425825 @   45 : 13 03             LdaConstant [3]
         0x383dd4425827 @   47 : c2                Star2 
         0x383dd4425828 @   48 : 0b fa             Ldar r0
  286 E> 0x383dd442582a @   50 : 72 f8 06          TestIn r2, [6]
         0x383dd442582d @   53 : 99 0c             JumpIfFalse [12] (0x383dd4425839 @ 65)
         0x383dd442582f @   55 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x383dd4425831 @   57 : c2                Star2 
  299 E> 0x383dd4425832 @   58 : 2d f8 04 08       GetNamedProperty r2, [4], [8]
         0x383dd4425836 @   62 : 55                ToBooleanLogicalNot 
         0x383dd4425837 @   63 : 8a 0c             Jump [12] (0x383dd4425843 @ 75)
  317 E> 0x383dd4425839 @   65 : 2d fa 05 0a       GetNamedProperty r0, [5], [10]
         0x383dd442583d @   69 : 96 06             JumpIfToBooleanTrue [6] (0x383dd4425843 @ 75)
  334 E> 0x383dd442583f @   71 : 2d fa 06 0c       GetNamedProperty r0, [6], [12]
         0x383dd4425843 @   75 : 97 14             JumpIfToBooleanFalse [20] (0x383dd4425857 @ 95)
  357 S> 0x383dd4425845 @   77 : 7c 07 0e 29       CreateObjectLiteral [7], [14], #41
         0x383dd4425849 @   81 : c2                Star2 
  389 E> 0x383dd442584a @   82 : 80 08 00 02       CreateClosure [8], [0], #2
         0x383dd442584e @   86 : 33 f8 03 0f       DefineNamedOwnProperty r2, [3], [15]
         0x383dd4425852 @   90 : 19 f8 fa          Mov r2, r0
         0x383dd4425855 @   93 : 0b f8             Ldar r2
  430 S> 0x383dd4425857 @   95 : 21 01 00          LdaGlobal [1], [0]
         0x383dd442585a @   98 : c1                Star3 
  437 E> 0x383dd442585b @   99 : 2d f7 09 11       GetNamedProperty r3, [9], [17]
         0x383dd442585f @  103 : c2                Star2 
         0x383dd4425860 @  104 : 19 03 f6          Mov a0, r4
         0x383dd4425863 @  107 : 19 06 f5          Mov a3, r5
         0x383dd4425866 @  110 : 19 fa f4          Mov r0, r6
  437 E> 0x383dd4425869 @  113 : 5c f8 f7 04 13    CallProperty r2, r3-r6, [19]
         0x383dd442586e @  118 : 0e                LdaUndefined 
  466 S> 0x383dd442586f @  119 : a9                Return 
Constant pool (size = 10)
0x383dd4425871: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 10
           0: 0x383dd44258d1 <ScopeInfo FUNCTION_SCOPE>
           1: 0x34e078c05ab9 <String[6]: #Object>
           2: 0x34e078c05129 <String[24]: #getOwnPropertyDescriptor>
           3: 0x34e078c050e9 <String[3]: #get>
           4: 0x383dd4425971 <String[10]: #__esModule>
           5: 0x34e078c064f9 <String[8]: #writable>
           6: 0x34e078c049c9 <String[12]: #configurable>
           7: 0x383dd4425991 <ObjectBoilerplateDescription[5]>
           8: 0x383dd44259c9 <SharedFunctionInfo get>
           9: 0x34e078c04c11 <String[14]: #defineProperty>
Handler Table (size = 0)
Source Position Table (size = 40)
0x383dd442a131 <ByteArray[40]>
Object boilerplate at 0x383dd4425991: 
0x383dd4425991: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04e19 <String[10]: #enumerable>
           2: 0x34e078c01729 <true>
           3: 0x34e078c050e9 <String[3]: #get>
           4: 0x34e078c01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x383dd44259c9 points to: [0x383dd4425a38]
=== [0x383dd4425a38] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  402 S> 0x383dd4425a38 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x383dd4425a3a @    2 : c4                Star0 
         0x383dd4425a3b @    3 : 17 02             LdaImmutableCurrentContextSlot [2]
  410 E> 0x383dd4425a3d @    5 : 2f fa 00          GetKeyedProperty r0, [0]
  414 S> 0x383dd4425a40 @    8 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 9)
0x383dd4425a49 <ByteArray[9]>
0x383dd4425ce1 points to: [0x383dd4425d50]
=== [0x383dd4425d50] DISASSEMBLY ===
Parameter count 5
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  500 S> 0x383dd4425d50 @    0 : 0b 06             Ldar a3
         0x383dd4425d52 @    2 : 9d 07             JumpIfNotUndefined [7] (0x383dd4425d59 @ 9)
  522 S> 0x383dd4425d54 @    4 : 19 05 06          Mov a2, a3
         0x383dd4425d57 @    7 : 0b 06             Ldar a3
  534 S> 0x383dd4425d59 @    9 : 0b 05             Ldar a2
  543 E> 0x383dd4425d5b @   11 : 2f 04 00          GetKeyedProperty a1, [0]
  540 E> 0x383dd4425d5e @   14 : 34 03 06 02       SetKeyedProperty a0, a3, [2]
         0x383dd4425d62 @   18 : 0e                LdaUndefined 
  548 S> 0x383dd4425d63 @   19 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 15)
0x383dd4425d69 <ByteArray[15]>
0x383dd4425df1 points to: [0x383dd4425e60]
=== [0x383dd4425e60] DISASSEMBLY ===
Parameter count 3
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
  654 S> 0x383dd4425e60 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x383dd4425e63 @    3 : c3                Star1 
  661 E> 0x383dd4425e64 @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x383dd4425e68 @    8 : c4                Star0 
         0x383dd4425e69 @    9 : 13 02             LdaConstant [2]
         0x383dd4425e6b @   11 : c1                Star3 
  676 E> 0x383dd4425e6c @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x383dd4425e70 @   16 : c0                Star4 
         0x383dd4425e71 @   17 : 0b 04             Ldar a1
  717 E> 0x383dd4425e73 @   19 : 33 f6 04 05       DefineNamedOwnProperty r4, [4], [5]
         0x383dd4425e77 @   23 : 19 03 f8          Mov a0, r2
  661 E> 0x383dd4425e7a @   26 : 5c fa f9 04 07    CallProperty r0, r1-r4, [7]
         0x383dd4425e7f @   31 : 0e                LdaUndefined 
  723 S> 0x383dd4425e80 @   32 : a9                Return 
Constant pool (size = 5)
0x383dd4425e89: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 5
           0: 0x34e078c05ab9 <String[6]: #Object>
           1: 0x34e078c04c11 <String[14]: #defineProperty>
           2: 0x34e078c04bf9 <String[7]: #default>
           3: 0x383dd4425ec1 <ObjectBoilerplateDescription[5]>
           4: 0x34e078c06419 <String[5]: #value>
Handler Table (size = 0)
Source Position Table (size = 18)
0x383dd4425ef9 <ByteArray[18]>
Object boilerplate at 0x383dd4425ec1: 
0x383dd4425ec1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04e19 <String[10]: #enumerable>
           2: 0x34e078c01729 <true>
           3: 0x34e078c06419 <String[5]: #value>
           4: 0x34e078c01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x383dd4425f89 points to: [0x383dd4425ff8]
=== [0x383dd4425ff8] DISASSEMBLY ===
Parameter count 3
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  749 S> 0x383dd4425ff8 @    0 : 0b 04             Ldar a1
  762 E> 0x383dd4425ffa @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
         0x383dd4425ffe @    6 : 0e                LdaUndefined 
  767 S> 0x383dd4425fff @    7 : a9                Return 
Constant pool (size = 1)
0x383dd4426001: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 1
           0: 0x34e078c04bf9 <String[7]: #default>
Handler Table (size = 0)
Source Position Table (size = 9)
0x383dd4426019 <ByteArray[9]>
0x383dd44260a1 points to: [0x383dd4426110]
=== [0x383dd4426110] DISASSEMBLY ===
Parameter count 2
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
  842 S> 0x383dd4426110 @    0 : 0b 03             Ldar a0
         0x383dd4426112 @    2 : 97 0b             JumpIfToBooleanFalse [11] (0x383dd442611d @ 13)
  857 E> 0x383dd4426114 @    4 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x383dd4426118 @    8 : 97 05             JumpIfToBooleanFalse [5] (0x383dd442611d @ 13)
  869 S> 0x383dd442611a @   10 : 0b 03             Ldar a0
  880 S> 0x383dd442611c @   12 : a9                Return 
  898 S> 0x383dd442611d @   13 : 7d                CreateEmptyObjectLiteral 
         0x383dd442611e @   14 : c4                Star0 
  906 S> 0x383dd442611f @   15 : 0b 03             Ldar a0
         0x383dd4426121 @   17 : 1d                TestUndetectable 
         0x383dd4426122 @   18 : 98 56             JumpIfTrue [86] (0x383dd4426178 @ 104)
  937 S> 0x383dd4426124 @   20 : 0b 03             Ldar a0
         0x383dd4426126 @   22 : 9e 52             JumpIfUndefinedOrNull [82] (0x383dd4426178 @ 104)
         0x383dd4426128 @   24 : 76 f7             ToObject r3
         0x383dd442612a @   26 : a1 f7             ForInEnumerate r3
         0x383dd442612c @   28 : a2 f6 02          ForInPrepare r4-r6, [2]
         0x383dd442612f @   31 : 0c                LdaZero 
         0x383dd4426130 @   32 : bd                Star7 
  932 S> 0x383dd4426131 @   33 : a3 f3 f4          ForInContinue r7, r6
         0x383dd4426134 @   36 : 99 44             JumpIfFalse [68] (0x383dd4426178 @ 104)
         0x383dd4426136 @   38 : a4 f7 f3 f6 02    ForInNext r3, r7, r4-r5, [2]
         0x383dd442613b @   43 : 9c 37             JumpIfUndefined [55] (0x383dd4426172 @ 98)
         0x383dd442613d @   45 : c2                Star2 
  932 S> 0x383dd442613e @   46 : c3                Star1 
  942 S> 0x383dd442613f @   47 : 13 01             LdaConstant [1]
  948 E> 0x383dd4426141 @   49 : 6c f9 03          TestEqualStrict r1, [3]
         0x383dd4426144 @   52 : 98 2e             JumpIfTrue [46] (0x383dd4426172 @ 98)
  965 E> 0x383dd4426146 @   54 : 21 02 04          LdaGlobal [2], [4]
         0x383dd4426149 @   57 : bb                Star9 
  972 E> 0x383dd442614a @   58 : 2d f1 03 06       GetNamedProperty r9, [3], [6]
         0x383dd442614e @   62 : bb                Star9 
  982 E> 0x383dd442614f @   63 : 2d f1 04 08       GetNamedProperty r9, [4], [8]
         0x383dd4426153 @   67 : bb                Star9 
  997 E> 0x383dd4426154 @   68 : 2d f1 05 0a       GetNamedProperty r9, [5], [10]
         0x383dd4426158 @   72 : bc                Star8 
  997 E> 0x383dd4426159 @   73 : 5f f2 f1 03 f9 0c CallProperty2 r8, r9, a0, r1, [12]
         0x383dd442615f @   79 : 97 13             JumpIfToBooleanFalse [19] (0x383dd4426172 @ 98)
 1011 S> 0x383dd4426161 @   81 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x383dd4426163 @   83 : bc                Star8 
         0x383dd4426164 @   84 : 19 fa f1          Mov r0, r9
         0x383dd4426167 @   87 : 19 03 f0          Mov a0, r10
         0x383dd442616a @   90 : 19 f9 ef          Mov r1, r11
 1011 E> 0x383dd442616d @   93 : 60 f2 f1 03 0e    CallUndefinedReceiver r8, r9-r11, [14]
         0x383dd4426172 @   98 : a5 f3             ForInStep r7
         0x383dd4426174 @  100 : bd                Star7 
  923 E> 0x383dd4426175 @  101 : 89 44 00          JumpLoop [68], [0] (0x383dd4426131 @ 33)
 1048 S> 0x383dd4426178 @  104 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x383dd442617a @  106 : c1                Star3 
 1048 E> 0x383dd442617b @  107 : 63 f7 fa 03 10    CallUndefinedReceiver2 r3, r0, a0, [16]
 1085 S> 0x383dd4426180 @  112 : 0b fa             Ldar r0
 1099 S> 0x383dd4426182 @  114 : a9                Return 
Constant pool (size = 6)
0x383dd4426189: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 6
           0: 0x383dd4425971 <String[10]: #__esModule>
           1: 0x34e078c04bf9 <String[7]: #default>
           2: 0x34e078c05ab9 <String[6]: #Object>
           3: 0x34e078c05cb1 <String[9]: #prototype>
           4: 0x320c0b49a8a9 <String[14]: #hasOwnProperty>
           5: 0x320c0b49a6c1 <String[4]: #call>
Handler Table (size = 0)
Source Position Table (size = 52)
0x383dd4426201 <ByteArray[52]>
0x383dd44262b9 points to: [0x383dd4426328]
=== [0x383dd4426328] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 1180 S> 0x383dd4426328 @    0 : 0b 03             Ldar a0
         0x383dd442632a @    2 : 97 0c             JumpIfToBooleanFalse [12] (0x383dd4426336 @ 14)
 1199 E> 0x383dd442632c @    4 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x383dd4426330 @    8 : 97 06             JumpIfToBooleanFalse [6] (0x383dd4426336 @ 14)
         0x383dd4426332 @   10 : 0b 03             Ldar a0
         0x383dd4426334 @   12 : 8a 0f             Jump [15] (0x383dd4426343 @ 27)
 1213 E> 0x383dd4426336 @   14 : 7c 01 02 29       CreateObjectLiteral [1], [2], #41
         0x383dd442633a @   18 : c4                Star0 
         0x383dd442633b @   19 : 0b 03             Ldar a0
 1232 E> 0x383dd442633d @   21 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x383dd4426341 @   25 : 0b fa             Ldar r0
 1238 S> 0x383dd4426343 @   27 : a9                Return 
Constant pool (size = 3)
0x383dd4426349: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 3
           0: 0x383dd4425971 <String[10]: #__esModule>
           1: 0x383dd4426371 <ObjectBoilerplateDescription[3]>
           2: 0x34e078c04bf9 <String[7]: #default>
Handler Table (size = 0)
Source Position Table (size = 13)
0x383dd4426399 <ByteArray[13]>
Object boilerplate at 0x383dd4426371: 
0x383dd4426371: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 3
           0: 8
           1: 0x34e078c04bf9 <String[7]: #default>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd442a1c9: 
0x383dd442a1c9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 3
           0: 8
           1: 0x34e078c06419 <String[5]: #value>
           2: 0x34e078c01729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x383dd4426421 points to: [0x383dd4426490]
=== [0x383dd4426490] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1611 S> 0x383dd4426490 @    0 : 0c                LdaZero 
         0x383dd4426491 @    1 : c2                Star2 
 1641 E> 0x383dd4426492 @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
         0x383dd4426496 @    6 : 13 00             LdaConstant [0]
 1646 E> 0x383dd4426498 @    8 : 34 03 f8 02       SetKeyedProperty a0, r2, [2]
 1664 S> 0x383dd442649c @   12 : 0d 01             LdaSmi [1]
         0x383dd442649e @   14 : c2                Star2 
 1698 E> 0x383dd442649f @   15 : 32 03 01 04       SetNamedProperty a0, [1], [4]
         0x383dd44264a3 @   19 : 13 01             LdaConstant [1]
 1703 E> 0x383dd44264a5 @   21 : 34 03 f8 06       SetKeyedProperty a0, r2, [6]
 1725 S> 0x383dd44264a9 @   25 : 0d 02             LdaSmi [2]
         0x383dd44264ab @   27 : c2                Star2 
 1756 E> 0x383dd44264ac @   28 : 32 03 02 08       SetNamedProperty a0, [2], [8]
         0x383dd44264b0 @   32 : 13 02             LdaConstant [2]
 1761 E> 0x383dd44264b2 @   34 : 34 03 f8 0a       SetKeyedProperty a0, r2, [10]
 1780 S> 0x383dd44264b6 @   38 : 0d 03             LdaSmi [3]
         0x383dd44264b8 @   40 : c2                Star2 
 1819 E> 0x383dd44264b9 @   41 : 32 03 03 0c       SetNamedProperty a0, [3], [12]
         0x383dd44264bd @   45 : 13 03             LdaConstant [3]
 1824 E> 0x383dd44264bf @   47 : 34 03 f8 0e       SetKeyedProperty a0, r2, [14]
 1851 S> 0x383dd44264c3 @   51 : 0d 04             LdaSmi [4]
         0x383dd44264c5 @   53 : c2                Star2 
 1889 E> 0x383dd44264c6 @   54 : 32 03 04 10       SetNamedProperty a0, [4], [16]
         0x383dd44264ca @   58 : 13 04             LdaConstant [4]
 1894 E> 0x383dd44264cc @   60 : 34 03 f8 12       SetKeyedProperty a0, r2, [18]
 1920 S> 0x383dd44264d0 @   64 : 0d 05             LdaSmi [5]
         0x383dd44264d2 @   66 : c2                Star2 
 1959 E> 0x383dd44264d3 @   67 : 32 03 05 14       SetNamedProperty a0, [5], [20]
         0x383dd44264d7 @   71 : 13 05             LdaConstant [5]
 1964 E> 0x383dd44264d9 @   73 : 34 03 f8 16       SetKeyedProperty a0, r2, [22]
 1991 S> 0x383dd44264dd @   77 : 0d 06             LdaSmi [6]
         0x383dd44264df @   79 : c2                Star2 
 2032 E> 0x383dd44264e0 @   80 : 32 03 06 18       SetNamedProperty a0, [6], [24]
         0x383dd44264e4 @   84 : 13 06             LdaConstant [6]
 2037 E> 0x383dd44264e6 @   86 : 34 03 f8 1a       SetKeyedProperty a0, r2, [26]
 2066 S> 0x383dd44264ea @   90 : 0d 07             LdaSmi [7]
         0x383dd44264ec @   92 : c2                Star2 
 2124 E> 0x383dd44264ed @   93 : 32 03 07 1c       SetNamedProperty a0, [7], [28]
         0x383dd44264f1 @   97 : 13 07             LdaConstant [7]
 2129 E> 0x383dd44264f3 @   99 : 34 03 f8 1e       SetKeyedProperty a0, r2, [30]
 2175 S> 0x383dd44264f7 @  103 : 0d 08             LdaSmi [8]
         0x383dd44264f9 @  105 : c2                Star2 
 2211 E> 0x383dd44264fa @  106 : 32 03 08 20       SetNamedProperty a0, [8], [32]
         0x383dd44264fe @  110 : 13 08             LdaConstant [8]
 2216 E> 0x383dd4426500 @  112 : 34 03 f8 22       SetKeyedProperty a0, r2, [34]
         0x383dd4426504 @  116 : 0e                LdaUndefined 
 2236 S> 0x383dd4426505 @  117 : a9                Return 
Constant pool (size = 9)
0x383dd4426509: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 9
           0: 0x383dd4426561 <String[8]: #WALKABLE>
           1: 0x383dd4426579 <String[12]: #NON_WALKABLE>
           2: 0x383dd4426599 <String[9]: #CHARACTER>
           3: 0x383dd44265b9 <String[17]: #THREAT_STRAITHEAD>
           4: 0x383dd44265e1 <String[16]: #THREAT_GIROUETTE>
           5: 0x383dd4426601 <String[17]: #THREAT_AGGRESSIVE>
           6: 0x383dd4426629 <String[19]: #THREAT_SURVEILLANCE>
           7: 0x383dd4426651 <String[36]: #THREAT_LE_FANTOME_ORANGE_DANS_PACMAN>
           8: 0x383dd4426689 <String[14]: #THREAT_SHERIFF>
Handler Table (size = 0)
Source Position Table (size = 67)
0x383dd44266a9 <ByteArray[67]>
Array boilerplate at 0x383dd442a269: 
0x383dd442a269: [ArrayBoilerplateDescription] in OldSpace
 - map: 0x34e078c03291 <Map[24]>
 - elements kind: PACKED_SMI_ELEMENTS
 - constant elements: 0x383dd442a281 <FixedArray[9]>
         0-8: 0
Object boilerplate at 0x383dd442a2d9: 
0x383dd442a2d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04469 <String[4]: #type>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c0a0c9 <String[5]: #color>
           4: 0x383dd442a311 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x383dd442a311: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 7
           0: 8
           1: 0x320c0b4ab141 <String[1]: #r>
           2: 0
           3: 0x34e078c085c9 <String[1]: #g>
           4: 0
           5: 0x34e078c0a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd442a359: 
0x383dd442a359: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04469 <String[4]: #type>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c0a0c9 <String[5]: #color>
           4: 0x383dd442a391 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x383dd442a391: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 7
           0: 8
           1: 0x320c0b4ab141 <String[1]: #r>
           2: 255
           3: 0x34e078c085c9 <String[1]: #g>
           4: 255
           5: 0x34e078c0a069 <String[1]: #b>
           6: 255
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd442a3d9: 
0x383dd442a3d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04469 <String[4]: #type>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c0a0c9 <String[5]: #color>
           4: 0x383dd442a411 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x383dd442a411: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 7
           0: 8
           1: 0x320c0b4ab141 <String[1]: #r>
           2: 0
           3: 0x34e078c085c9 <String[1]: #g>
           4: 0
           5: 0x34e078c0a069 <String[1]: #b>
           6: 255
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd442a459: 
0x383dd442a459: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04469 <String[4]: #type>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c0a0c9 <String[5]: #color>
           4: 0x383dd442a491 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x383dd442a491: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 7
           0: 8
           1: 0x320c0b4ab141 <String[1]: #r>
           2: 255
           3: 0x34e078c085c9 <String[1]: #g>
           4: 0
           5: 0x34e078c0a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd442a4d9: 
0x383dd442a4d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04469 <String[4]: #type>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c0a0c9 <String[5]: #color>
           4: 0x383dd442a511 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x383dd442a511: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 7
           0: 8
           1: 0x320c0b4ab141 <String[1]: #r>
           2: 255
           3: 0x34e078c085c9 <String[1]: #g>
           4: 125
           5: 0x34e078c0a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd442a559: 
0x383dd442a559: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04469 <String[4]: #type>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c0a0c9 <String[5]: #color>
           4: 0x383dd442a591 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x383dd442a591: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 7
           0: 8
           1: 0x320c0b4ab141 <String[1]: #r>
           2: 255
           3: 0x34e078c085c9 <String[1]: #g>
           4: 255
           5: 0x34e078c0a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd442a5d9: 
0x383dd442a5d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04469 <String[4]: #type>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c0a0c9 <String[5]: #color>
           4: 0x383dd442a611 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x383dd442a611: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 7
           0: 8
           1: 0x320c0b4ab141 <String[1]: #r>
           2: 0
           3: 0x34e078c085c9 <String[1]: #g>
           4: 125
           5: 0x34e078c0a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd442a659: 
0x383dd442a659: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04469 <String[4]: #type>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c0a0c9 <String[5]: #color>
           4: 0x383dd442a691 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x383dd442a691: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 7
           0: 8
           1: 0x320c0b4ab141 <String[1]: #r>
           2: 0
           3: 0x34e078c085c9 <String[1]: #g>
           4: 255
           5: 0x34e078c0a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd442a6d9: 
0x383dd442a6d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04469 <String[4]: #type>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c0a0c9 <String[5]: #color>
           4: 0x383dd442a711 <ObjectBoilerplateDescription[7]>
[start ObjectBoilerplate nested objects]
0x383dd442a711: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 7
           0: 8
           1: 0x320c0b4ab141 <String[1]: #r>
           2: 125
           3: 0x34e078c085c9 <String[1]: #g>
           4: 125
           5: 0x34e078c0a069 <String[1]: #b>
           6: 0
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array boilerplate at 0x383dd442a759: 
0x383dd442a759: [ArrayBoilerplateDescription] in OldSpace
 - map: 0x34e078c03291 <Map[24]>
 - elements kind: PACKED_ELEMENTS
 - constant elements: 0x383dd442a771 <FixedArray[4]>
           0: 0x383dd442a7a1 <ObjectBoilerplateDescription[7]>
           1: 0x383dd442a7e9 <ObjectBoilerplateDescription[7]>
           2: 0x383dd442a831 <ObjectBoilerplateDescription[7]>
           3: 0x383dd442a879 <ObjectBoilerplateDescription[7]>
0x383dd4426779 points to: [0x383dd44267e8]
=== [0x383dd44267e8] DISASSEMBLY ===
Parameter count 3
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 3395 S> 0x383dd44267e8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x383dd44267ec @    4 : c4                Star0 
         0x383dd44267ed @    5 : 0b 04             Ldar a1
 3408 E> 0x383dd44267ef @    7 : 33 fa 01 01       DefineNamedOwnProperty r0, [1], [1]
         0x383dd44267f3 @   11 : 0b 03             Ldar a0
 3415 E> 0x383dd44267f5 @   13 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x383dd44267f9 @   17 : 0b fa             Ldar r0
 3423 S> 0x383dd44267fb @   19 : a9                Return 
Constant pool (size = 3)
0x383dd4426801: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 3
           0: 0x383dd4426829 <ObjectBoilerplateDescription[5]>
           1: 0x383dd4426861 <String[9]: #teamIndex>
           2: 0x34e078c0a0c9 <String[5]: #color>
Handler Table (size = 0)
Source Position Table (size = 11)
0x383dd4426881 <ByteArray[11]>
Object boilerplate at 0x383dd4426829: 
0x383dd4426829: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x383dd4426861 <String[9]: #teamIndex>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c0a0c9 <String[5]: #color>
           4: 0x34e078c01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x383dd442a919 has 7 elements:
0x383dd442a919: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 7
           0: 14
           1: 0x383dd442a961 <DescriptorArray[15]>
           2: 0x34e078c03301 <NumberDictionary[7]>
           3: 0x34e078c01329 <FixedArray[0]>
           4: 0x383dd442ab29 <DescriptorArray[1]>
           5: 0x34e078c03301 <NumberDictionary[7]>
           6: 0x34e078c01329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xe (14)
Element[1]
0x383dd442a961: [DescriptorArray] in OldSpace
 - map: 0x34e078c07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 15
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x34e078c055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 14, attrs: [__C]) @ 0x320c0b4b4fe1 <AccessorInfo>
  [1]: 0x34e078c058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x320c0b4b4f71 <AccessorInfo>
  [2]: 0x34e078c05cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x320c0b4b5051 <AccessorInfo>
  [3]: 0x34e078c065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 6, attrs: [W_C]) @ 0x383dd442ab11 <ClassPositions 3542, 9605>
  [4]: 0x383dd44271e9: [String] in OldSpace: #listMaps (const data descriptor, p: 12, attrs: [W_C]) @ 3
  [5]: 0x383dd4426e29: [String] in OldSpace: #mapHasAllRequiredFiles (const data descriptor, p: 0, attrs: [W_C]) @ 4
  [6]: 0x383dd4427719: [String] in OldSpace: #listMapsWithDifficulty (const data descriptor, p: 3, attrs: [W_C]) @ 5
  [7]: 0x383dd4427c21: [String] in OldSpace: #loadFromMapName (const data descriptor, p: 8, attrs: [W_C]) @ 6
  [8]: 0x383dd4427b61: [String] in OldSpace: #loadFromComponents (const data descriptor, p: 4, attrs: [W_C]) @ 7
  [9]: 0x383dd4427e11: [String] in OldSpace: #loadMetadata (const data descriptor, p: 9, attrs: [W_C]) @ 8
  [10]: 0x383dd4428419: [String] in OldSpace: #loadRandomMap (const data descriptor, p: 5, attrs: [W_C]) @ 9
  [11]: 0x383dd4427df1: [String] in OldSpace: #loadEntities (const data descriptor, p: 11, attrs: [W_C]) @ 10
  [12]: 0x383dd4428b29: [String] in OldSpace: #get_tile_type (const data descriptor, p: 13, attrs: [W_C]) @ 11
  [13]: 0x383dd4429251: [String] in OldSpace: #get_team (const data descriptor, p: 10, attrs: [W_C]) @ 12
  [14]: 0x383dd4429071: [String] in OldSpace: #get_best_match (const data descriptor, p: 7, attrs: [W_C]) @ 13
Element[2]
0x34e078c03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x34e078c01329: [FixedArray] in ReadOnlySpace
 - map: 0x34e078c012e1 <Map>
 - length: 0
Element[4]
0x383dd442ab29: [DescriptorArray] in OldSpace
 - map: 0x34e078c07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 1
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x34e078c04a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
Element[5]
0x34e078c03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x34e078c01329: [FixedArray] in ReadOnlySpace
 - map: 0x34e078c012e1 <Map>
 - length: 0
0x383dd44297b1 points to: [0x383dd4429820]
=== [0x383dd4429820] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
         0x383dd4429820 @    0 : 0e                LdaUndefined 
 3542 S> 0x383dd4429821 @    1 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 5)
0x383dd4429829 <ByteArray[5]>
0x383dd4426909 points to: [0x383dd4426978]
=== [0x383dd4426978] DISASSEMBLY ===
Parameter count 1
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 3592 S> 0x383dd4426978 @    0 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
         0x383dd442697c @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x383dd442697e @    6 : bf                Star5 
 3615 E> 0x383dd442697f @    7 : 2d f5 01 00       GetNamedProperty r5, [1], [0]
         0x383dd4426983 @   11 : c0                Star4 
         0x383dd4426984 @   12 : 15 ff 0c 01       LdaImmutableContextSlot <context>, [12], [1]
 3627 E> 0x383dd4426988 @   16 : aa 02             ThrowReferenceErrorIfHole [2]
         0x383dd442698a @   18 : be                Star6 
         0x383dd442698b @   19 : 7c 03 02 29       CreateObjectLiteral [3], [2], #41
         0x383dd442698f @   23 : bd                Star7 
 3615 E> 0x383dd4426990 @   24 : 5f f6 f5 f4 f3 03 CallProperty2 r4, r5, r6, r7, [3]
         0x383dd4426996 @   30 : c0                Star4 
 3680 E> 0x383dd4426997 @   31 : 2d f6 04 05       GetNamedProperty r4, [4], [5]
         0x383dd442699b @   35 : c1                Star3 
         0x383dd442699c @   36 : 80 05 00 02       CreateClosure [5], [0], #2
         0x383dd44269a0 @   40 : bf                Star5 
 3681 E> 0x383dd44269a1 @   41 : 5e f7 f6 f5 07    CallProperty1 r3, r4, r5, [7]
         0x383dd44269a6 @   46 : c1                Star3 
 3724 E> 0x383dd44269a7 @   47 : 2d f7 06 09       GetNamedProperty r3, [6], [9]
         0x383dd44269ab @   51 : c2                Star2 
         0x383dd44269ac @   52 : 80 07 01 02       CreateClosure [7], [1], #2
         0x383dd44269b0 @   56 : c0                Star4 
 3725 E> 0x383dd44269b1 @   57 : 5e f8 f7 f6 0b    CallProperty1 r2, r3, r4, [11]
         0x383dd44269b6 @   62 : c2                Star2 
 3756 E> 0x383dd44269b7 @   63 : 2d f8 04 0d       GetNamedProperty r2, [4], [13]
         0x383dd44269bb @   67 : c3                Star1 
         0x383dd44269bc @   68 : 80 08 02 02       CreateClosure [8], [2], #2
         0x383dd44269c0 @   72 : c1                Star3 
 3757 E> 0x383dd44269c1 @   73 : 5e f9 f8 f7 0f    CallProperty1 r1, r2, r3, [15]
         0x383dd44269c6 @   78 : c3                Star1 
 3864 E> 0x383dd44269c7 @   79 : 2d f9 06 11       GetNamedProperty r1, [6], [17]
         0x383dd44269cb @   83 : c4                Star0 
         0x383dd44269cc @   84 : 80 09 03 02       CreateClosure [9], [3], #2
         0x383dd44269d0 @   88 : c2                Star2 
 3865 E> 0x383dd44269d1 @   89 : 5e fa f9 f8 13    CallProperty1 r0, r1, r2, [19]
 4066 S> 0x383dd44269d6 @   94 : a9                Return 
Constant pool (size = 10)
0x383dd44269d9: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 10
           0: 0x320c0b48cb69 <String[2]: #fs>
           1: 0x320c0b48daf9 <String[11]: #readdirSync>
           2: 0x383dd44256e1 <String[14]: #MAPS_DIRECTORY>
           3: 0x383dd4426a59 <ObjectBoilerplateDescription[3]>
           4: 0x320c0b489f61 <String[6]: #filter>
           5: 0x383dd4426ab9 <SharedFunctionInfo>
           6: 0x320c0b489ea9 <String[3]: #map>
           7: 0x383dd4426c79 <SharedFunctionInfo>
           8: 0x383dd4426d89 <SharedFunctionInfo>
           9: 0x383dd4426ed9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 33)
0x383dd4427161 <ByteArray[33]>
Object boilerplate at 0x383dd4426a59: 
0x383dd4426a59: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 3
           0: 8
           1: 0x383dd4426a81 <String[13]: #withFileTypes>
           2: 0x34e078c01729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x383dd4426ab9 points to: [0x383dd4426b28]
=== [0x383dd4426b28] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 3697 S> 0x383dd4426b28 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x383dd4426b2c @    4 : c4                Star0 
 3697 E> 0x383dd4426b2d @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 3710 S> 0x383dd4426b31 @    9 : a9                Return 
Constant pool (size = 1)
0x383dd4426b39: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 1
           0: 0x320c0b48f529 <String[11]: #isDirectory>
Handler Table (size = 0)
Source Position Table (size = 9)
0x383dd4426b71 <ByteArray[9]>
0x383dd4426c79 points to: [0x383dd4426ce8]
=== [0x383dd4426ce8] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 3738 S> 0x383dd4426ce8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 3742 S> 0x383dd4426cec @    4 : a9                Return 
Constant pool (size = 1)
0x383dd4426cf1: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 1
           0: 0x34e078c058f1 <String[4]: #name>
Handler Table (size = 0)
Source Position Table (size = 7)
0x383dd4426d09 <ByteArray[7]>
0x383dd4426d89 points to: [0x383dd4426df8]
=== [0x383dd4426df8] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 3791 S> 0x383dd4426df8 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x383dd4426dfa @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x383dd4426dfc @    4 : c3                Star1 
 3808 E> 0x383dd4426dfd @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x383dd4426e01 @    9 : c4                Star0 
 3808 E> 0x383dd4426e02 @   10 : 5e fa f9 03 02    CallProperty1 r0, r1, a0, [2]
 3840 S> 0x383dd4426e07 @   15 : a9                Return 
Constant pool (size = 2)
0x383dd4426e09: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 2
           0: 0x383dd4426c29 <String[9]: #MapLoader>
           1: 0x383dd4426e29 <String[22]: #mapHasAllRequiredFiles>
Handler Table (size = 0)
Source Position Table (size = 12)
0x383dd4426e51 <ByteArray[12]>
0x383dd4426ed9 points to: [0x383dd4426f48]
=== [0x383dd4426f48] DISASSEMBLY ===
Parameter count 2
Register count 12
Frame size 96
OSR urgency: 0
Bytecode age: 0
 3891 S> 0x383dd4426f48 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x383dd4426f4c @    4 : c4                Star0 
         0x383dd4426f4d @    5 : 0b 03             Ldar a0
 3911 E> 0x383dd4426f4f @    7 : 33 fa 01 01       DefineNamedOwnProperty r0, [1], [1]
 3943 E> 0x383dd4426f53 @   11 : 21 02 03          LdaGlobal [2], [3]
         0x383dd4426f56 @   14 : c0                Star4 
 3948 E> 0x383dd4426f57 @   15 : 2d f6 03 05       GetNamedProperty r4, [3], [5]
         0x383dd4426f5b @   19 : c1                Star3 
         0x383dd4426f5c @   20 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
 3954 E> 0x383dd4426f60 @   24 : aa 04             ThrowReferenceErrorIfHole [4]
         0x383dd4426f62 @   26 : be                Star6 
 3957 E> 0x383dd4426f63 @   27 : 2d f4 05 07       GetNamedProperty r6, [5], [7]
         0x383dd4426f67 @   31 : bf                Star5 
         0x383dd4426f68 @   32 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
 3970 E> 0x383dd4426f6c @   36 : aa 06             ThrowReferenceErrorIfHole [6]
         0x383dd4426f6e @   38 : bc                Star8 
 3977 E> 0x383dd4426f6f @   39 : 2d f2 07 09       GetNamedProperty r8, [7], [9]
         0x383dd4426f73 @   43 : bc                Star8 
 3985 E> 0x383dd4426f74 @   44 : 2d f2 08 0b       GetNamedProperty r8, [8], [11]
         0x383dd4426f78 @   48 : bd                Star7 
         0x383dd4426f79 @   49 : 15 ff 0c 01       LdaImmutableContextSlot <context>, [12], [1]
 3990 E> 0x383dd4426f7d @   53 : aa 09             ThrowReferenceErrorIfHole [9]
         0x383dd4426f7f @   55 : bb                Star9 
         0x383dd4426f80 @   56 : 15 ff 0d 01       LdaImmutableContextSlot <context>, [13], [1]
 4023 E> 0x383dd4426f84 @   60 : aa 0a             ThrowReferenceErrorIfHole [10]
         0x383dd4426f86 @   62 : b9                Star11 
         0x383dd4426f87 @   63 : 19 03 f0          Mov a0, r10
 3985 E> 0x383dd4426f8a @   66 : 5c f3 f2 04 0d    CallProperty r7, r8-r11, [13]
         0x383dd4426f8f @   71 : bd                Star7 
         0x383dd4426f90 @   72 : 13 0b             LdaConstant [11]
         0x383dd4426f92 @   74 : bc                Star8 
 3957 E> 0x383dd4426f93 @   75 : 5f f5 f4 f3 f2 0f CallProperty2 r5, r6, r7, r8, [15]
         0x383dd4426f99 @   81 : bf                Star5 
 3948 E> 0x383dd4426f9a @   82 : 5e f7 f6 f5 11    CallProperty1 r3, r4, r5, [17]
         0x383dd4426f9f @   87 : c2                Star2 
         0x383dd4426fa0 @   88 : 19 fa f9          Mov r0, r1
         0x383dd4426fa3 @   91 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x383dd4426fa7 @   95 : 0b f9             Ldar r1
 4064 S> 0x383dd4426fa9 @   97 : a9                Return 
Constant pool (size = 12)
0x383dd4426fb1: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 12
           0: 0x383dd4427021 <ObjectBoilerplateDescription[4]>
           1: 0x34e078c058f1 <String[4]: #name>
           2: 0x320c0b49c529 <String[4]: #JSON>
           3: 0x320c0b48cb31 <String[5]: #parse>
           4: 0x320c0b48cb69 <String[2]: #fs>
           5: 0x320c0b48d7e9 <String[12]: #readFileSync>
           6: 0x383dd4425641 <String[6]: #path_1>
           7: 0x34e078c04bf9 <String[7]: #default>
           8: 0x34e078c08c89 <String[4]: #join>
           9: 0x383dd44256e1 <String[14]: #MAPS_DIRECTORY>
          10: 0x383dd4425701 <String[18]: #MAPS_META_FILENAME>
          11: 0x320c0b4a31d1 <String[4]: #utf8>
Handler Table (size = 0)
Source Position Table (size = 37)
0x383dd44270b9 <ByteArray[37]>
Object boilerplate at 0x383dd4427021: 
0x383dd4427021: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 4
           0: 8
           1: 0x34e078c058f1 <String[4]: #name>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 2
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x383dd4427221 points to: [0x383dd4427290]
=== [0x383dd4427290] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4106 E> 0x383dd4427290 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x383dd4427293 @    3 : 1a fa             PushContext r0
         0x383dd4427295 @    5 : 0b 03             Ldar a0
         0x383dd4427297 @    7 : 25 02             StaCurrentContextSlot [2]
 4126 S> 0x383dd4427299 @    9 : 79 01 00 25       CreateArrayLiteral [1], [0], #37
         0x383dd442729d @   13 : c1                Star3 
         0x383dd442729e @   14 : 0c                LdaZero 
         0x383dd442729f @   15 : c2                Star2 
         0x383dd44272a0 @   16 : 15 ff 0d 02       LdaImmutableContextSlot <context>, [13], [2]
 4134 E> 0x383dd44272a4 @   20 : aa 02             ThrowReferenceErrorIfHole [2]
         0x383dd44272a6 @   22 : 36 f7 f8 01       StaInArrayLiteral r3, r2, [1]
         0x383dd44272aa @   26 : 0d 01             LdaSmi [1]
         0x383dd44272ac @   28 : c2                Star2 
         0x383dd44272ad @   29 : 15 ff 0e 02       LdaImmutableContextSlot <context>, [14], [2]
 4154 E> 0x383dd44272b1 @   33 : aa 03             ThrowReferenceErrorIfHole [3]
         0x383dd44272b3 @   35 : 36 f7 f8 01       StaInArrayLiteral r3, r2, [1]
 4176 E> 0x383dd44272b7 @   39 : 2d f7 04 03       GetNamedProperty r3, [4], [3]
         0x383dd44272bb @   43 : c3                Star1 
         0x383dd44272bc @   44 : 80 05 00 02       CreateClosure [5], [0], #2
         0x383dd44272c0 @   48 : 19 f7 f8          Mov r3, r2
         0x383dd44272c3 @   51 : c1                Star3 
 4176 E> 0x383dd44272c4 @   52 : 5e f9 f8 f7 05    CallProperty1 r1, r2, r3, [5]
 4267 S> 0x383dd44272c9 @   57 : a9                Return 
Constant pool (size = 6)
0x383dd44272d1: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 6
           0: 0x383dd4427311 <ScopeInfo FUNCTION_SCOPE>
           1: 0x383dd4427389 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x383dd44273a1 <FixedArray[2]>>
           2: 0x383dd4425701 <String[18]: #MAPS_META_FILENAME>
           3: 0x383dd4425729 <String[20]: #MAPS_LAYOUT_FILENAME>
           4: 0x320c0b489ff1 <String[5]: #every>
           5: 0x383dd44273d9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 19)
0x383dd4427571 <ByteArray[19]>
Array boilerplate at 0x383dd4427389: 
0x383dd4427389: [ArrayBoilerplateDescription] in OldSpace
 - map: 0x34e078c03291 <Map[24]>
 - elements kind: PACKED_SMI_ELEMENTS
 - constant elements: 0x383dd44273a1 <FixedArray[2]>
         0-1: 0
0x383dd44273d9 points to: [0x383dd4427448]
=== [0x383dd4427448] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 4199 S> 0x383dd4427448 @    0 : 15 ff 05 02       LdaImmutableContextSlot <context>, [5], [2]
         0x383dd442744c @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x383dd442744e @    6 : c3                Star1 
 4199 E> 0x383dd442744f @    7 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x383dd4427453 @   11 : c4                Star0 
         0x383dd4427454 @   12 : 15 ff 06 02       LdaImmutableContextSlot <context>, [6], [2]
 4210 E> 0x383dd4427458 @   16 : aa 02             ThrowReferenceErrorIfHole [2]
         0x383dd442745a @   18 : c1                Star3 
 4217 E> 0x383dd442745b @   19 : 2d f7 03 02       GetNamedProperty r3, [3], [2]
         0x383dd442745f @   23 : c1                Star3 
 4225 E> 0x383dd4427460 @   24 : 2d f7 04 04       GetNamedProperty r3, [4], [4]
         0x383dd4427464 @   28 : c2                Star2 
         0x383dd4427465 @   29 : 15 ff 0c 02       LdaImmutableContextSlot <context>, [12], [2]
 4230 E> 0x383dd4427469 @   33 : aa 05             ThrowReferenceErrorIfHole [5]
         0x383dd442746b @   35 : c0                Star4 
         0x383dd442746c @   36 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x383dd442746e @   38 : bf                Star5 
         0x383dd442746f @   39 : 19 03 f4          Mov a0, r6
 4225 E> 0x383dd4427472 @   42 : 5c f8 f7 04 06    CallProperty r2, r3-r6, [6]
         0x383dd4427477 @   47 : c2                Star2 
 4199 E> 0x383dd4427478 @   48 : 5e fa f9 f8 08    CallProperty1 r0, r1, r2, [8]
 4265 S> 0x383dd442747d @   53 : a9                Return 
Constant pool (size = 6)
0x383dd4427481: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 6
           0: 0x320c0b48cb69 <String[2]: #fs>
           1: 0x320c0b48d7b1 <String[10]: #existsSync>
           2: 0x383dd4425641 <String[6]: #path_1>
           3: 0x34e078c04bf9 <String[7]: #default>
           4: 0x34e078c08c89 <String[4]: #join>
           5: 0x383dd44256e1 <String[14]: #MAPS_DIRECTORY>
Handler Table (size = 0)
Source Position Table (size = 23)
0x383dd44274e1 <ByteArray[23]>
0x383dd44275b1 points to: [0x383dd4427620]
=== [0x383dd4427620] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 4307 E> 0x383dd4427620 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x383dd4427623 @    3 : 1a fa             PushContext r0
         0x383dd4427625 @    5 : 0b 03             Ldar a0
         0x383dd4427627 @    7 : 25 02             StaCurrentContextSlot [2]
 4342 S> 0x383dd4427629 @    9 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x383dd442762d @   13 : c1                Star3 
 4342 E> 0x383dd442762e @   14 : 5d f7 02 02       CallProperty0 r3, <this>, [2]
         0x383dd4427632 @   18 : c1                Star3 
 4365 E> 0x383dd4427633 @   19 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x383dd4427637 @   23 : c2                Star2 
         0x383dd4427638 @   24 : 80 03 00 02       CreateClosure [3], [0], #2
         0x383dd442763c @   28 : c0                Star4 
 4366 E> 0x383dd442763d @   29 : 5e f8 f7 f6 06    CallProperty1 r2, r3, r4, [6]
         0x383dd4427642 @   34 : c2                Star2 
 4420 E> 0x383dd4427643 @   35 : 2d f8 04 08       GetNamedProperty r2, [4], [8]
         0x383dd4427647 @   39 : c3                Star1 
         0x383dd4427648 @   40 : 80 05 01 02       CreateClosure [5], [1], #2
         0x383dd442764c @   44 : c1                Star3 
 4421 E> 0x383dd442764d @   45 : 5e f9 f8 f7 0a    CallProperty1 r1, r2, r3, [10]
 4440 S> 0x383dd4427652 @   50 : a9                Return 
Constant pool (size = 6)
0x383dd4427659: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 6
           0: 0x383dd4427699 <ScopeInfo FUNCTION_SCOPE>
           1: 0x383dd44271e9 <String[8]: #listMaps>
           2: 0x320c0b489f61 <String[6]: #filter>
           3: 0x383dd4427741 <SharedFunctionInfo>
           4: 0x320c0b489ea9 <String[3]: #map>
           5: 0x383dd4427861 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 22)
0x383dd4427971 <ByteArray[22]>
0x383dd4427741 points to: [0x383dd44277b0]
=== [0x383dd44277b0] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 4382 S> 0x383dd44277b0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x383dd44277b4 @    4 : c4                Star0 
         0x383dd44277b5 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
 4393 E> 0x383dd44277b7 @    7 : 6b fa 02          TestEqual r0, [2]
 4406 S> 0x383dd44277ba @   10 : a9                Return 
Constant pool (size = 1)
0x383dd44277c1: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 1
           0: 0x383dd44276f9 <String[10]: #difficulty>
Handler Table (size = 0)
Source Position Table (size = 10)
0x383dd44277d9 <ByteArray[10]>
0x383dd4427861 points to: [0x383dd44278d0]
=== [0x383dd44278d0] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 4434 S> 0x383dd44278d0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 4438 S> 0x383dd44278d4 @    4 : a9                Return 
Constant pool (size = 1)
0x383dd44278d9: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 1
           0: 0x34e078c058f1 <String[4]: #name>
Handler Table (size = 0)
Source Position Table (size = 8)
0x383dd44278f1 <ByteArray[8]>
0x383dd44279b1 points to: [0x383dd4427a20]
=== [0x383dd4427a20] DISASSEMBLY ===
Parameter count 2
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
 4515 S> 0x383dd4427a20 @    0 : 15 ff 0f 01       LdaImmutableContextSlot <context>, [15], [1]
         0x383dd4427a24 @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x383dd4427a26 @    6 : c1                Star3 
 4528 E> 0x383dd4427a27 @    7 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x383dd4427a2b @   11 : c2                Star2 
         0x383dd4427a2c @   12 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
 4541 E> 0x383dd4427a30 @   16 : aa 02             ThrowReferenceErrorIfHole [2]
         0x383dd4427a32 @   18 : bf                Star5 
 4548 E> 0x383dd4427a33 @   19 : 2d f5 03 02       GetNamedProperty r5, [3], [2]
         0x383dd4427a37 @   23 : bf                Star5 
 4556 E> 0x383dd4427a38 @   24 : 2d f5 04 04       GetNamedProperty r5, [4], [4]
         0x383dd4427a3c @   28 : c0                Star4 
         0x383dd4427a3d @   29 : 15 ff 0c 01       LdaImmutableContextSlot <context>, [12], [1]
 4561 E> 0x383dd4427a41 @   33 : aa 05             ThrowReferenceErrorIfHole [5]
         0x383dd4427a43 @   35 : be                Star6 
         0x383dd4427a44 @   36 : 15 ff 0e 01       LdaImmutableContextSlot <context>, [14], [1]
 4586 E> 0x383dd4427a48 @   40 : aa 06             ThrowReferenceErrorIfHole [6]
         0x383dd4427a4a @   42 : bc                Star8 
         0x383dd4427a4b @   43 : 19 03 f3          Mov a0, r7
 4556 E> 0x383dd4427a4e @   46 : 5c f6 f5 04 06    CallProperty r4, r5-r8, [6]
         0x383dd4427a53 @   51 : c0                Star4 
 4528 E> 0x383dd4427a54 @   52 : 5e f8 f7 f6 08    CallProperty1 r2, r3, r4, [8]
         0x383dd4427a59 @   57 : c4                Star0 
 4749 S> 0x383dd4427a5a @   58 : 21 07 0a          LdaGlobal [7], [10]
         0x383dd4427a5d @   61 : c1                Star3 
 4754 E> 0x383dd4427a5e @   62 : 2d f7 08 0c       GetNamedProperty r3, [8], [12]
         0x383dd4427a62 @   66 : c2                Star2 
         0x383dd4427a63 @   67 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
 4760 E> 0x383dd4427a67 @   71 : aa 09             ThrowReferenceErrorIfHole [9]
         0x383dd4427a69 @   73 : bf                Star5 
 4763 E> 0x383dd4427a6a @   74 : 2d f5 0a 0e       GetNamedProperty r5, [10], [14]
         0x383dd4427a6e @   78 : c0                Star4 
         0x383dd4427a6f @   79 : 15 ff 06 01       LdaImmutableContextSlot <context>, [6], [1]
 4776 E> 0x383dd4427a73 @   83 : aa 02             ThrowReferenceErrorIfHole [2]
         0x383dd4427a75 @   85 : bd                Star7 
 4783 E> 0x383dd4427a76 @   86 : 2d f3 03 02       GetNamedProperty r7, [3], [2]
         0x383dd4427a7a @   90 : bd                Star7 
 4791 E> 0x383dd4427a7b @   91 : 2d f3 04 10       GetNamedProperty r7, [4], [16]
         0x383dd4427a7f @   95 : be                Star6 
         0x383dd4427a80 @   96 : 15 ff 0c 01       LdaImmutableContextSlot <context>, [12], [1]
 4796 E> 0x383dd4427a84 @  100 : aa 05             ThrowReferenceErrorIfHole [5]
         0x383dd4427a86 @  102 : bc                Star8 
         0x383dd4427a87 @  103 : 15 ff 0d 01       LdaImmutableContextSlot <context>, [13], [1]
 4821 E> 0x383dd4427a8b @  107 : aa 0b             ThrowReferenceErrorIfHole [11]
         0x383dd4427a8d @  109 : ba                Star10 
         0x383dd4427a8e @  110 : 19 03 f1          Mov a0, r9
 4791 E> 0x383dd4427a91 @  113 : 5c f4 f3 04 12    CallProperty r6, r7-r10, [18]
         0x383dd4427a96 @  118 : be                Star6 
         0x383dd4427a97 @  119 : 13 0c             LdaConstant [12]
         0x383dd4427a99 @  121 : bd                Star7 
 4763 E> 0x383dd4427a9a @  122 : 5f f6 f5 f4 f3 14 CallProperty2 r4, r5, r6, r7, [20]
         0x383dd4427aa0 @  128 : c0                Star4 
 4754 E> 0x383dd4427aa1 @  129 : 5e f8 f7 f6 16    CallProperty1 r2, r3, r4, [22]
         0x383dd4427aa6 @  134 : c3                Star1 
 4872 S> 0x383dd4427aa7 @  135 : 2d 02 0d 18       GetNamedProperty <this>, [13], [24]
         0x383dd4427aab @  139 : c2                Star2 
         0x383dd4427aac @  140 : 19 02 f7          Mov <this>, r3
         0x383dd4427aaf @  143 : 19 03 f6          Mov a0, r4
         0x383dd4427ab2 @  146 : 19 fa f5          Mov r0, r5
         0x383dd4427ab5 @  149 : 19 f9 f4          Mov r1, r6
 4872 E> 0x383dd4427ab8 @  152 : 5c f8 f7 04 1a    CallProperty r2, r3-r6, [26]
 4925 S> 0x383dd4427abd @  157 : a9                Return 
Constant pool (size = 14)
0x383dd4427ac1: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 14
           0: 0x383dd4425751 <String[12]: #MapImageFile>
           1: 0x383dd4427b41 <String[12]: #loadFromFile>
           2: 0x383dd4425641 <String[6]: #path_1>
           3: 0x34e078c04bf9 <String[7]: #default>
           4: 0x34e078c08c89 <String[4]: #join>
           5: 0x383dd44256e1 <String[14]: #MAPS_DIRECTORY>
           6: 0x383dd4425729 <String[20]: #MAPS_LAYOUT_FILENAME>
           7: 0x320c0b49c529 <String[4]: #JSON>
           8: 0x320c0b48cb31 <String[5]: #parse>
           9: 0x320c0b48cb69 <String[2]: #fs>
          10: 0x320c0b48d7e9 <String[12]: #readFileSync>
          11: 0x383dd4425701 <String[18]: #MAPS_META_FILENAME>
          12: 0x320c0b4a31d1 <String[4]: #utf8>
          13: 0x383dd4427b61 <String[18]: #loadFromComponents>
Handler Table (size = 0)
Source Position Table (size = 56)
0x383dd4427b89 <ByteArray[56]>
0x383dd4427c69 points to: [0x383dd4427cd8]
=== [0x383dd4427cd8] DISASSEMBLY ===
Parameter count 4
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5006 S> 0x383dd4427cd8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x383dd4427cdc @    4 : c4                Star0 
         0x383dd4427cdd @    5 : 0b 03             Ldar a0
 5033 E> 0x383dd4427cdf @    7 : 33 fa 01 01       DefineNamedOwnProperty r0, [1], [1]
 5075 E> 0x383dd4427ce3 @   11 : 2d 04 02 03       GetNamedProperty a1, [2], [3]
         0x383dd4427ce7 @   15 : 33 fa 02 05       DefineNamedOwnProperty r0, [2], [5]
 5116 E> 0x383dd4427ceb @   19 : 2d 04 03 07       GetNamedProperty a1, [3], [7]
         0x383dd4427cef @   23 : 33 fa 03 09       DefineNamedOwnProperty r0, [3], [9]
         0x383dd4427cf3 @   27 : 16 02             LdaCurrentContextSlot [2]
 5139 E> 0x383dd4427cf5 @   29 : aa 04             ThrowReferenceErrorIfHole [4]
         0x383dd4427cf7 @   31 : c0                Star4 
 5149 E> 0x383dd4427cf8 @   32 : 2d f6 05 0b       GetNamedProperty r4, [5], [11]
         0x383dd4427cfc @   36 : c1                Star3 
 5149 E> 0x383dd4427cfd @   37 : 5e f7 f6 04 0d    CallProperty1 r3, r4, a1, [13]
         0x383dd4427d02 @   42 : c2                Star2 
         0x383dd4427d03 @   43 : 19 fa f9          Mov r0, r1
         0x383dd4427d06 @   46 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x383dd4427d0a @   50 : 16 02             LdaCurrentContextSlot [2]
 5193 E> 0x383dd4427d0c @   52 : aa 04             ThrowReferenceErrorIfHole [4]
         0x383dd4427d0e @   54 : c0                Star4 
 5203 E> 0x383dd4427d0f @   55 : 2d f6 06 0f       GetNamedProperty r4, [6], [15]
         0x383dd4427d13 @   59 : c1                Star3 
 5203 E> 0x383dd4427d14 @   60 : 5e f7 f6 05 11    CallProperty1 r3, r4, a2, [17]
         0x383dd4427d19 @   65 : c2                Star2 
         0x383dd4427d1a @   66 : 68 0e f9 02       InvokeIntrinsic [_CopyDataProperties], r1-r2
         0x383dd4427d1e @   70 : 0b f9             Ldar r1
 5237 S> 0x383dd4427d20 @   72 : a9                Return 
Constant pool (size = 7)
0x383dd4427d29: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 7
           0: 0x383dd4427d71 <ObjectBoilerplateDescription[8]>
           1: 0x34e078c058f1 <String[4]: #name>
           2: 0x383dd4427dc1 <String[5]: #width>
           3: 0x383dd4427dd9 <String[6]: #height>
           4: 0x383dd4426c29 <String[9]: #MapLoader>
           5: 0x383dd4427df1 <String[12]: #loadEntities>
           6: 0x383dd4427e11 <String[12]: #loadMetadata>
Handler Table (size = 0)
Source Position Table (size = 31)
0x383dd4427e31 <ByteArray[31]>
Object boilerplate at 0x383dd4427d71: 
0x383dd4427d71: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 8
           0: 8
           1: 0x34e078c058f1 <String[4]: #name>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x383dd4427dc1 <String[5]: #width>
           4: 0x34e078c01501 <Odd Oddball: uninitialized>
           5: 0x383dd4427dd9 <String[6]: #height>
           6: 0x34e078c01501 <Odd Oddball: uninitialized>
           7: 5
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x383dd4427ed1 points to: [0x383dd4427f40]
=== [0x383dd4427f40] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5288 S> 0x383dd4427f40 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x383dd4427f44 @    4 : c4                Star0 
 5324 E> 0x383dd4427f45 @    5 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
         0x383dd4427f49 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
 5363 E> 0x383dd4427f4d @   13 : 2d 03 02 05       GetNamedProperty a0, [2], [5]
         0x383dd4427f51 @   17 : 33 fa 02 07       DefineNamedOwnProperty r0, [2], [7]
         0x383dd4427f55 @   21 : 0b fa             Ldar r0
 5385 S> 0x383dd4427f57 @   23 : a9                Return 
Constant pool (size = 3)
0x383dd4427f59: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 3
           0: 0x383dd4427f81 <ObjectBoilerplateDescription[5]>
           1: 0x34e078c04469 <String[4]: #type>
           2: 0x383dd44276f9 <String[10]: #difficulty>
Handler Table (size = 0)
Source Position Table (size = 14)
0x383dd4427fb9 <ByteArray[14]>
Object boilerplate at 0x383dd4427f81: 
0x383dd4427f81: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c04469 <String[4]: #type>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x383dd44276f9 <String[10]: #difficulty>
           4: 0x34e078c01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x383dd4428041 points to: [0x383dd44280b0]
=== [0x383dd44280b0] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5439 S> 0x383dd44280b0 @    0 : 0b 03             Ldar a0
         0x383dd44280b2 @    2 : 1d                TestUndetectable 
         0x383dd44280b3 @    3 : 99 06             JumpIfFalse [6] (0x383dd44280b9 @ 9)
 5475 S> 0x383dd44280b5 @    5 : 13 00             LdaConstant [0]
         0x383dd44280b7 @    7 : 18 03             Star a0
 5519 S> 0x383dd44280b9 @    9 : 13 00             LdaConstant [0]
 5530 E> 0x383dd44280bb @   11 : 6c 03 00          TestEqualStrict a0, [0]
         0x383dd44280be @   14 : 99 22             JumpIfFalse [34] (0x383dd44280e0 @ 48)
         0x383dd44280c0 @   16 : 16 02             LdaCurrentContextSlot [2]
 5542 E> 0x383dd44280c2 @   18 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd44280c4 @   20 : c1                Star3 
 5552 E> 0x383dd44280c5 @   21 : 2d f7 02 01       GetNamedProperty r3, [2], [1]
         0x383dd44280c9 @   25 : c2                Star2 
 5552 E> 0x383dd44280ca @   26 : 5d f8 f7 03       CallProperty0 r2, r3, [3]
         0x383dd44280ce @   30 : c2                Star2 
 5562 E> 0x383dd44280cf @   31 : 2d f8 03 05       GetNamedProperty r2, [3], [5]
         0x383dd44280d3 @   35 : c3                Star1 
         0x383dd44280d4 @   36 : 80 04 00 02       CreateClosure [4], [0], #2
         0x383dd44280d8 @   40 : c1                Star3 
 5563 E> 0x383dd44280d9 @   41 : 5e f9 f8 f7 07    CallProperty1 r1, r2, r3, [7]
         0x383dd44280de @   46 : 8a 11             Jump [17] (0x383dd44280ef @ 63)
         0x383dd44280e0 @   48 : 16 02             LdaCurrentContextSlot [2]
 5584 E> 0x383dd44280e2 @   50 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd44280e4 @   52 : c2                Star2 
 5594 E> 0x383dd44280e5 @   53 : 2d f8 05 09       GetNamedProperty r2, [5], [9]
         0x383dd44280e9 @   57 : c3                Star1 
 5594 E> 0x383dd44280ea @   58 : 5e f9 f8 03 0b    CallProperty1 r1, r2, a0, [11]
         0x383dd44280ef @   63 : c4                Star0 
 5650 S> 0x383dd44280f0 @   64 : 2d fa 06 0d       GetNamedProperty r0, [6], [13]
         0x383dd44280f4 @   68 : c3                Star1 
         0x383dd44280f5 @   69 : 0c                LdaZero 
 5657 E> 0x383dd44280f6 @   70 : 6c f9 0f          TestEqualStrict r1, [15]
         0x383dd44280f9 @   73 : 99 2f             JumpIfFalse [47] (0x383dd4428128 @ 120)
 5678 S> 0x383dd44280fb @   75 : 21 07 10          LdaGlobal [7], [16]
         0x383dd44280fe @   78 : c3                Star1 
         0x383dd44280ff @   79 : 13 08             LdaConstant [8]
         0x383dd4428101 @   81 : c2                Star2 
         0x383dd4428102 @   82 : 15 ff 0c 01       LdaImmutableContextSlot <context>, [12], [1]
 5724 E> 0x383dd4428106 @   86 : aa 09             ThrowReferenceErrorIfHole [9]
         0x383dd4428108 @   88 : 77                ToString 
         0x383dd4428109 @   89 : 39 f8 12          Add r2, [18]
         0x383dd442810c @   92 : c2                Star2 
         0x383dd442810d @   93 : 13 0a             LdaConstant [10]
         0x383dd442810f @   95 : 39 f8 12          Add r2, [18]
         0x383dd4428112 @   98 : c2                Star2 
         0x383dd4428113 @   99 : 0b 03             Ldar a0
 5760 E> 0x383dd4428115 @  101 : 77                ToString 
         0x383dd4428116 @  102 : 39 f8 12          Add r2, [18]
         0x383dd4428119 @  105 : c2                Star2 
         0x383dd442811a @  106 : 13 0b             LdaConstant [11]
         0x383dd442811c @  108 : 39 f8 12          Add r2, [18]
         0x383dd442811f @  111 : c2                Star2 
         0x383dd4428120 @  112 : 0b f9             Ldar r1
 5684 E> 0x383dd4428122 @  114 : 69 f9 f8 01 13    Construct r1, r2-r2, [19]
 5678 E> 0x383dd4428127 @  119 : a7                Throw 
 5806 S> 0x383dd4428128 @  120 : 2d 02 0c 15       GetNamedProperty <this>, [12], [21]
         0x383dd442812c @  124 : c3                Star1 
         0x383dd442812d @  125 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 5826 E> 0x383dd4428131 @  129 : aa 0d             ThrowReferenceErrorIfHole [13]
         0x383dd4428133 @  131 : c0                Star4 
 5835 E> 0x383dd4428134 @  132 : 2d f6 0e 17       GetNamedProperty r4, [14], [23]
         0x383dd4428138 @  136 : c1                Star3 
 5843 E> 0x383dd4428139 @  137 : 62 f7 fa 19       CallUndefinedReceiver1 r3, r0, [25]
         0x383dd442813d @  141 : c1                Star3 
         0x383dd442813e @  142 : 0c                LdaZero 
 5852 E> 0x383dd442813f @  143 : 2f f7 1b          GetKeyedProperty r3, [27]
         0x383dd4428142 @  146 : c1                Star3 
 5806 E> 0x383dd4428143 @  147 : 5e f9 02 f7 1d    CallProperty1 r1, <this>, r3, [29]
 5857 S> 0x383dd4428148 @  152 : a9                Return 
Constant pool (size = 15)
0x383dd4428151: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 15
           0: 0x34e078c09711 <String[3]: #all>
           1: 0x383dd4426c29 <String[9]: #MapLoader>
           2: 0x383dd44271e9 <String[8]: #listMaps>
           3: 0x320c0b489ea9 <String[3]: #map>
           4: 0x383dd44281d9 <SharedFunctionInfo>
           5: 0x383dd4427719 <String[22]: #listMapsWithDifficulty>
           6: 0x34e078c055f9 <String[6]: #length>
           7: 0x34e078c04de1 <String[5]: #Error>
           8: 0x383dd44282e9 <String[27]: #No map in the maps folder '>
           9: 0x383dd44256e1 <String[14]: #MAPS_DIRECTORY>
          10: 0x383dd4428319 <String[19]: #' with difficulty '>
          11: 0x320c0b4b4c49 <String[1]: #'>
          12: 0x383dd4427c21 <String[15]: #loadFromMapName>
          13: 0x383dd4425611 <String[8]: #engine_1>
          14: 0x383dd4428359 <String[7]: #shuffle>
Handler Table (size = 0)
Source Position Table (size = 65)
0x383dd4428371 <ByteArray[65]>
0x383dd44281d9 points to: [0x383dd4428248]
=== [0x383dd4428248] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 5576 S> 0x383dd4428248 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 5580 S> 0x383dd442824c @    4 : a9                Return 
Constant pool (size = 1)
0x383dd4428251: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 1
           0: 0x34e078c058f1 <String[4]: #name>
Handler Table (size = 0)
Source Position Table (size = 8)
0x383dd4428269 <ByteArray[8]>
0x383dd4428461 points to: [0x383dd44284d0]
=== [0x383dd44284d0] DISASSEMBLY ===
Parameter count 2
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
 5928 S> 0x383dd44284d0 @    0 : 7c 00 00 0c       CreateObjectLiteral [0], [0], #12
         0x383dd44284d4 @    4 : c0                Star4 
         0x383dd44284d5 @    5 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 6047 E> 0x383dd44284d9 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd44284db @   11 : bf                Star5 
 6056 E> 0x383dd44284dc @   12 : 2d f5 02 01       GetNamedProperty r5, [2], [1]
         0x383dd44284e0 @   16 : bf                Star5 
         0x383dd44284e1 @   17 : 0c                LdaZero 
         0x383dd44284e2 @   18 : be                Star6 
         0x383dd44284e3 @   19 : 0c                LdaZero 
         0x383dd44284e4 @   20 : bd                Star7 
         0x383dd44284e5 @   21 : 0b f5             Ldar r5
 6043 E> 0x383dd44284e7 @   23 : 69 f5 f4 02 03    Construct r5, r6-r7, [3]
         0x383dd44284ec @   28 : 33 f6 03 05       DefineNamedOwnProperty r4, [3], [5]
         0x383dd44284f0 @   32 : 19 f6 fa          Mov r4, r0
 6107 S> 0x383dd44284f3 @   35 : 0c                LdaZero 
         0x383dd44284f4 @   36 : c3                Star1 
 6133 S> 0x383dd44284f5 @   37 : 2d 03 04 07       GetNamedProperty a0, [4], [7]
 6117 E> 0x383dd44284f9 @   41 : 6d f9 09          TestLessThan r1, [9]
         0x383dd44284fc @   44 : 92 2b             JumpIfFalseConstant [43] (0x383dd442888c @ 956)
 6183 S> 0x383dd44284fe @   46 : 0c                LdaZero 
         0x383dd44284ff @   47 : c2                Star2 
 6209 S> 0x383dd4428500 @   48 : 2d 03 05 0a       GetNamedProperty a0, [5], [10]
 6193 E> 0x383dd4428504 @   52 : 6d f8 0c          TestLessThan r2, [12]
         0x383dd4428507 @   55 : 92 2a             JumpIfFalseConstant [42] (0x383dd4428881 @ 945)
 6272 S> 0x383dd4428509 @   57 : 2d 03 06 0d       GetNamedProperty a0, [6], [13]
         0x383dd442850d @   61 : c0                Star4 
 6272 E> 0x383dd442850e @   62 : 5f f6 03 f8 f9 0f CallProperty2 r4, a0, r2, r1, [15]
         0x383dd4428514 @   68 : c1                Star3 
 6324 S> 0x383dd4428515 @   69 : 2d f7 07 11       GetNamedProperty r3, [7], [17]
         0x383dd4428519 @   73 : c0                Star4 
         0x383dd442851a @   74 : 00 0d ff 00       LdaSmi.Wide [255]
 6326 E> 0x383dd442851e @   78 : 6d f6 13          TestLessThan r4, [19]
         0x383dd4428521 @   81 : 99 04             JumpIfFalse [4] (0x383dd4428525 @ 85)
 6355 S> 0x383dd4428523 @   83 : 8b 29             JumpConstant [41] (0x383dd4428876 @ 934)
 6412 S> 0x383dd4428525 @   85 : 2d 02 08 14       GetNamedProperty <this>, [8], [20]
         0x383dd4428529 @   89 : c0                Star4 
 6412 E> 0x383dd442852a @   90 : 5e f6 02 f7 16    CallProperty1 r4, <this>, r3, [22]
         0x383dd442852f @   95 : c0                Star4 
         0x383dd4428530 @   96 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x383dd4428534 @  100 : bf                Star5 
 6470 E> 0x383dd4428535 @  101 : 2d f5 09 19       GetNamedProperty r5, [9], [25]
         0x383dd4428539 @  105 : 6c f6 18          TestEqualStrict r4, [24]
         0x383dd442853c @  108 : 98 74             JumpIfTrue [116] (0x383dd44285b0 @ 224)
         0x383dd442853e @  110 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x383dd4428542 @  114 : bf                Star5 
 6640 E> 0x383dd4428543 @  115 : 2d f5 0a 1b       GetNamedProperty r5, [10], [27]
         0x383dd4428547 @  119 : 6c f6 18          TestEqualStrict r4, [24]
         0x383dd442854a @  122 : 98 91             JumpIfTrue [145] (0x383dd44285db @ 267)
         0x383dd442854c @  124 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x383dd4428550 @  128 : bf                Star5 
 6803 E> 0x383dd4428551 @  129 : 2d f5 0b 1d       GetNamedProperty r5, [11], [29]
         0x383dd4428555 @  133 : 6c f6 18          TestEqualStrict r4, [24]
         0x383dd4428558 @  136 : 98 ae             JumpIfTrue [174] (0x383dd4428606 @ 310)
         0x383dd442855a @  138 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x383dd442855e @  142 : bf                Star5 
 7047 E> 0x383dd442855f @  143 : 2d f5 0c 1f       GetNamedProperty r5, [12], [31]
         0x383dd4428563 @  147 : 6c f6 18          TestEqualStrict r4, [24]
         0x383dd4428566 @  150 : 98 e8             JumpIfTrue [232] (0x383dd442864e @ 382)
         0x383dd4428568 @  152 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x383dd442856c @  156 : bf                Star5 
 7336 E> 0x383dd442856d @  157 : 2d f5 0d 21       GetNamedProperty r5, [13], [33]
         0x383dd4428571 @  161 : 6c f6 18          TestEqualStrict r4, [24]
         0x383dd4428574 @  164 : 91 18             JumpIfTrueConstant [24] (0x383dd44286aa @ 474)
         0x383dd4428576 @  166 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x383dd442857a @  170 : bf                Star5 
 7623 E> 0x383dd442857b @  171 : 2d f5 0e 23       GetNamedProperty r5, [14], [35]
         0x383dd442857f @  175 : 6c f6 18          TestEqualStrict r4, [24]
         0x383dd4428582 @  178 : 91 1a             JumpIfTrueConstant [26] (0x383dd4428706 @ 566)
         0x383dd4428584 @  180 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x383dd4428588 @  184 : bf                Star5 
 7912 E> 0x383dd4428589 @  185 : 2d f5 0f 25       GetNamedProperty r5, [15], [37]
         0x383dd442858d @  189 : 6c f6 18          TestEqualStrict r4, [24]
         0x383dd4428590 @  192 : 91 1c             JumpIfTrueConstant [28] (0x383dd4428762 @ 658)
         0x383dd4428592 @  194 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x383dd4428596 @  198 : bf                Star5 
 8205 E> 0x383dd4428597 @  199 : 2d f5 10 27       GetNamedProperty r5, [16], [39]
         0x383dd442859b @  203 : 6c f6 18          TestEqualStrict r4, [24]
         0x383dd442859e @  206 : 91 1e             JumpIfTrueConstant [30] (0x383dd44287be @ 750)
         0x383dd44285a0 @  208 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x383dd44285a4 @  212 : bf                Star5 
 8532 E> 0x383dd44285a5 @  213 : 2d f5 11 29       GetNamedProperty r5, [17], [41]
         0x383dd44285a9 @  217 : 6c f6 18          TestEqualStrict r4, [24]
         0x383dd44285ac @  220 : 91 20             JumpIfTrueConstant [32] (0x383dd442881a @ 842)
         0x383dd44285ae @  222 : 8b 22             JumpConstant [34] (0x383dd4428876 @ 934)
 6515 S> 0x383dd44285b0 @  224 : 2d fa 12 2b       GetNamedProperty r0, [18], [43]
         0x383dd44285b4 @  228 : be                Star6 
 6532 E> 0x383dd44285b5 @  229 : 2d f4 13 2d       GetNamedProperty r6, [19], [45]
         0x383dd44285b9 @  233 : bf                Star5 
         0x383dd44285ba @  234 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 6541 E> 0x383dd44285be @  238 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd44285c0 @  240 : bd                Star7 
 6550 E> 0x383dd44285c1 @  241 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x383dd44285c5 @  245 : bd                Star7 
         0x383dd44285c6 @  246 : 0b f3             Ldar r7
         0x383dd44285c8 @  248 : 19 f8 f2          Mov r2, r8
         0x383dd44285cb @  251 : 19 f9 f1          Mov r1, r9
 6537 E> 0x383dd44285ce @  254 : 69 f3 f2 02 2f    Construct r7, r8-r9, [47]
         0x383dd44285d3 @  259 : bd                Star7 
 6532 E> 0x383dd44285d4 @  260 : 5e f5 f4 f3 31    CallProperty1 r5, r6, r7, [49]
 6599 S> 0x383dd44285d9 @  265 : 8b 23             JumpConstant [35] (0x383dd4428876 @ 934)
 6681 S> 0x383dd44285db @  267 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x383dd44285df @  271 : be                Star6 
 6695 E> 0x383dd44285e0 @  272 : 2d f4 13 35       GetNamedProperty r6, [19], [53]
         0x383dd44285e4 @  276 : bf                Star5 
         0x383dd44285e5 @  277 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 6704 E> 0x383dd44285e9 @  281 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd44285eb @  283 : bd                Star7 
 6713 E> 0x383dd44285ec @  284 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x383dd44285f0 @  288 : bd                Star7 
         0x383dd44285f1 @  289 : 0b f3             Ldar r7
         0x383dd44285f3 @  291 : 19 f8 f2          Mov r2, r8
         0x383dd44285f6 @  294 : 19 f9 f1          Mov r1, r9
 6700 E> 0x383dd44285f9 @  297 : 69 f3 f2 02 37    Construct r7, r8-r9, [55]
         0x383dd44285fe @  302 : bd                Star7 
 6695 E> 0x383dd44285ff @  303 : 5e f5 f4 f3 39    CallProperty1 r5, r6, r7, [57]
 6762 S> 0x383dd4428604 @  308 : 8b 24             JumpConstant [36] (0x383dd4428876 @ 934)
 6838 S> 0x383dd4428606 @  310 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 6861 E> 0x383dd442860a @  314 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd442860c @  316 : be                Star6 
 6870 E> 0x383dd442860d @  317 : 2d f4 02 01       GetNamedProperty r6, [2], [1]
         0x383dd4428611 @  321 : be                Star6 
         0x383dd4428612 @  322 : 0b f4             Ldar r6
         0x383dd4428614 @  324 : 19 f8 f3          Mov r2, r7
         0x383dd4428617 @  327 : 19 f9 f2          Mov r1, r8
 6857 E> 0x383dd442861a @  330 : 69 f4 f3 02 3b    Construct r6, r7-r8, [59]
 6855 E> 0x383dd442861f @  335 : 32 fa 03 3d       SetNamedProperty r0, [3], [61]
 6925 S> 0x383dd4428623 @  339 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x383dd4428627 @  343 : be                Star6 
 6939 E> 0x383dd4428628 @  344 : 2d f4 13 3f       GetNamedProperty r6, [19], [63]
         0x383dd442862c @  348 : bf                Star5 
         0x383dd442862d @  349 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 6948 E> 0x383dd4428631 @  353 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd4428633 @  355 : bd                Star7 
 6957 E> 0x383dd4428634 @  356 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x383dd4428638 @  360 : bd                Star7 
         0x383dd4428639 @  361 : 0b f3             Ldar r7
         0x383dd442863b @  363 : 19 f8 f2          Mov r2, r8
         0x383dd442863e @  366 : 19 f9 f1          Mov r1, r9
 6944 E> 0x383dd4428641 @  369 : 69 f3 f2 02 41    Construct r7, r8-r9, [65]
         0x383dd4428646 @  374 : bd                Star7 
 6939 E> 0x383dd4428647 @  375 : 5e f5 f4 f3 43    CallProperty1 r5, r6, r7, [67]
 7006 S> 0x383dd442864c @  380 : 8b 25             JumpConstant [37] (0x383dd4428876 @ 934)
 7097 S> 0x383dd442864e @  382 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x383dd4428652 @  386 : be                Star6 
 7105 E> 0x383dd4428653 @  387 : 2d f4 13 47       GetNamedProperty r6, [19], [71]
         0x383dd4428657 @  391 : bf                Star5 
         0x383dd4428658 @  392 : 7c 16 49 29       CreateObjectLiteral [22], [73], #41
         0x383dd442865c @  396 : bd                Star7 
         0x383dd442865d @  397 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7126 E> 0x383dd4428661 @  401 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd4428663 @  403 : bc                Star8 
 7135 E> 0x383dd4428664 @  404 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x383dd4428668 @  408 : bc                Star8 
         0x383dd4428669 @  409 : 0b f2             Ldar r8
         0x383dd442866b @  411 : 19 f8 f1          Mov r2, r9
         0x383dd442866e @  414 : 19 f9 f0          Mov r1, r10
 7122 E> 0x383dd4428671 @  417 : 69 f2 f1 02 4a    Construct r8, r9-r10, [74]
         0x383dd4428676 @  422 : 33 f3 17 4c       DefineNamedOwnProperty r7, [23], [76]
 7105 E> 0x383dd442867a @  426 : 5e f5 f4 f3 4e    CallProperty1 r5, r6, r7, [78]
 7214 S> 0x383dd442867f @  431 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x383dd4428683 @  435 : be                Star6 
 7228 E> 0x383dd4428684 @  436 : 2d f4 13 50       GetNamedProperty r6, [19], [80]
         0x383dd4428688 @  440 : bf                Star5 
         0x383dd4428689 @  441 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7237 E> 0x383dd442868d @  445 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd442868f @  447 : bd                Star7 
 7246 E> 0x383dd4428690 @  448 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x383dd4428694 @  452 : bd                Star7 
         0x383dd4428695 @  453 : 0b f3             Ldar r7
         0x383dd4428697 @  455 : 19 f8 f2          Mov r2, r8
         0x383dd442869a @  458 : 19 f9 f1          Mov r1, r9
 7233 E> 0x383dd442869d @  461 : 69 f3 f2 02 52    Construct r7, r8-r9, [82]
         0x383dd44286a2 @  466 : bd                Star7 
 7228 E> 0x383dd44286a3 @  467 : 5e f5 f4 f3 54    CallProperty1 r5, r6, r7, [84]
 7295 S> 0x383dd44286a8 @  472 : 8b 26             JumpConstant [38] (0x383dd4428876 @ 934)
 7385 S> 0x383dd44286aa @  474 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x383dd44286ae @  478 : be                Star6 
 7393 E> 0x383dd44286af @  479 : 2d f4 13 56       GetNamedProperty r6, [19], [86]
         0x383dd44286b3 @  483 : bf                Star5 
         0x383dd44286b4 @  484 : 7c 19 58 29       CreateObjectLiteral [25], [88], #41
         0x383dd44286b8 @  488 : bd                Star7 
         0x383dd44286b9 @  489 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7414 E> 0x383dd44286bd @  493 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd44286bf @  495 : bc                Star8 
 7423 E> 0x383dd44286c0 @  496 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x383dd44286c4 @  500 : bc                Star8 
         0x383dd44286c5 @  501 : 0b f2             Ldar r8
         0x383dd44286c7 @  503 : 19 f8 f1          Mov r2, r9
         0x383dd44286ca @  506 : 19 f9 f0          Mov r1, r10
 7410 E> 0x383dd44286cd @  509 : 69 f2 f1 02 59    Construct r8, r9-r10, [89]
         0x383dd44286d2 @  514 : 33 f3 17 5b       DefineNamedOwnProperty r7, [23], [91]
 7393 E> 0x383dd44286d6 @  518 : 5e f5 f4 f3 5d    CallProperty1 r5, r6, r7, [93]
 7501 S> 0x383dd44286db @  523 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x383dd44286df @  527 : be                Star6 
 7515 E> 0x383dd44286e0 @  528 : 2d f4 13 5f       GetNamedProperty r6, [19], [95]
         0x383dd44286e4 @  532 : bf                Star5 
         0x383dd44286e5 @  533 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7524 E> 0x383dd44286e9 @  537 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd44286eb @  539 : bd                Star7 
 7533 E> 0x383dd44286ec @  540 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x383dd44286f0 @  544 : bd                Star7 
         0x383dd44286f1 @  545 : 0b f3             Ldar r7
         0x383dd44286f3 @  547 : 19 f8 f2          Mov r2, r8
         0x383dd44286f6 @  550 : 19 f9 f1          Mov r1, r9
 7520 E> 0x383dd44286f9 @  553 : 69 f3 f2 02 61    Construct r7, r8-r9, [97]
         0x383dd44286fe @  558 : bd                Star7 
 7515 E> 0x383dd44286ff @  559 : 5e f5 f4 f3 63    CallProperty1 r5, r6, r7, [99]
 7582 S> 0x383dd4428704 @  564 : 8b 27             JumpConstant [39] (0x383dd4428876 @ 934)
 7673 S> 0x383dd4428706 @  566 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x383dd442870a @  570 : be                Star6 
 7681 E> 0x383dd442870b @  571 : 2d f4 13 65       GetNamedProperty r6, [19], [101]
         0x383dd442870f @  575 : bf                Star5 
         0x383dd4428710 @  576 : 7c 1b 67 29       CreateObjectLiteral [27], [103], #41
         0x383dd4428714 @  580 : bd                Star7 
         0x383dd4428715 @  581 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7702 E> 0x383dd4428719 @  585 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd442871b @  587 : bc                Star8 
 7711 E> 0x383dd442871c @  588 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x383dd4428720 @  592 : bc                Star8 
         0x383dd4428721 @  593 : 0b f2             Ldar r8
         0x383dd4428723 @  595 : 19 f8 f1          Mov r2, r9
         0x383dd4428726 @  598 : 19 f9 f0          Mov r1, r10
 7698 E> 0x383dd4428729 @  601 : 69 f2 f1 02 68    Construct r8, r9-r10, [104]
         0x383dd442872e @  606 : 33 f3 17 6a       DefineNamedOwnProperty r7, [23], [106]
 7681 E> 0x383dd4428732 @  610 : 5e f5 f4 f3 6c    CallProperty1 r5, r6, r7, [108]
 7790 S> 0x383dd4428737 @  615 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x383dd442873b @  619 : be                Star6 
 7804 E> 0x383dd442873c @  620 : 2d f4 13 6e       GetNamedProperty r6, [19], [110]
         0x383dd4428740 @  624 : bf                Star5 
         0x383dd4428741 @  625 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7813 E> 0x383dd4428745 @  629 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd4428747 @  631 : bd                Star7 
 7822 E> 0x383dd4428748 @  632 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x383dd442874c @  636 : bd                Star7 
         0x383dd442874d @  637 : 0b f3             Ldar r7
         0x383dd442874f @  639 : 19 f8 f2          Mov r2, r8
         0x383dd4428752 @  642 : 19 f9 f1          Mov r1, r9
 7809 E> 0x383dd4428755 @  645 : 69 f3 f2 02 70    Construct r7, r8-r9, [112]
         0x383dd442875a @  650 : bd                Star7 
 7804 E> 0x383dd442875b @  651 : 5e f5 f4 f3 72    CallProperty1 r5, r6, r7, [114]
 7871 S> 0x383dd4428760 @  656 : 8b 28             JumpConstant [40] (0x383dd4428876 @ 934)
 7964 S> 0x383dd4428762 @  658 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x383dd4428766 @  662 : be                Star6 
 7972 E> 0x383dd4428767 @  663 : 2d f4 13 74       GetNamedProperty r6, [19], [116]
         0x383dd442876b @  667 : bf                Star5 
         0x383dd442876c @  668 : 7c 1d 76 29       CreateObjectLiteral [29], [118], #41
         0x383dd4428770 @  672 : bd                Star7 
         0x383dd4428771 @  673 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 7993 E> 0x383dd4428775 @  677 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd4428777 @  679 : bc                Star8 
 8002 E> 0x383dd4428778 @  680 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x383dd442877c @  684 : bc                Star8 
         0x383dd442877d @  685 : 0b f2             Ldar r8
         0x383dd442877f @  687 : 19 f8 f1          Mov r2, r9
         0x383dd4428782 @  690 : 19 f9 f0          Mov r1, r10
 7989 E> 0x383dd4428785 @  693 : 69 f2 f1 02 77    Construct r8, r9-r10, [119]
         0x383dd442878a @  698 : 33 f3 17 79       DefineNamedOwnProperty r7, [23], [121]
 7972 E> 0x383dd442878e @  702 : 5e f5 f4 f3 7b    CallProperty1 r5, r6, r7, [123]
 8083 S> 0x383dd4428793 @  707 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x383dd4428797 @  711 : be                Star6 
 8097 E> 0x383dd4428798 @  712 : 2d f4 13 7d       GetNamedProperty r6, [19], [125]
         0x383dd442879c @  716 : bf                Star5 
         0x383dd442879d @  717 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 8106 E> 0x383dd44287a1 @  721 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd44287a3 @  723 : bd                Star7 
 8115 E> 0x383dd44287a4 @  724 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x383dd44287a8 @  728 : bd                Star7 
         0x383dd44287a9 @  729 : 0b f3             Ldar r7
         0x383dd44287ab @  731 : 19 f8 f2          Mov r2, r8
         0x383dd44287ae @  734 : 19 f9 f1          Mov r1, r9
 8102 E> 0x383dd44287b1 @  737 : 69 f3 f2 02 7f    Construct r7, r8-r9, [127]
         0x383dd44287b6 @  742 : bd                Star7 
 8097 E> 0x383dd44287b7 @  743 : 5e f5 f4 f3 81    CallProperty1 r5, r6, r7, [129]
 8164 S> 0x383dd44287bc @  748 : 8a ba             Jump [186] (0x383dd4428876 @ 934)
 8274 S> 0x383dd44287be @  750 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x383dd44287c2 @  754 : be                Star6 
 8282 E> 0x383dd44287c3 @  755 : 2d f4 13 83       GetNamedProperty r6, [19], [131]
         0x383dd44287c7 @  759 : bf                Star5 
         0x383dd44287c8 @  760 : 7c 1f 85 29       CreateObjectLiteral [31], [133], #41
         0x383dd44287cc @  764 : bd                Star7 
         0x383dd44287cd @  765 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 8303 E> 0x383dd44287d1 @  769 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd44287d3 @  771 : bc                Star8 
 8312 E> 0x383dd44287d4 @  772 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x383dd44287d8 @  776 : bc                Star8 
         0x383dd44287d9 @  777 : 0b f2             Ldar r8
         0x383dd44287db @  779 : 19 f8 f1          Mov r2, r9
         0x383dd44287de @  782 : 19 f9 f0          Mov r1, r10
 8299 E> 0x383dd44287e1 @  785 : 69 f2 f1 02 86    Construct r8, r9-r10, [134]
         0x383dd44287e6 @  790 : 33 f3 17 88       DefineNamedOwnProperty r7, [23], [136]
 8282 E> 0x383dd44287ea @  794 : 5e f5 f4 f3 8a    CallProperty1 r5, r6, r7, [138]
 8410 S> 0x383dd44287ef @  799 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x383dd44287f3 @  803 : be                Star6 
 8424 E> 0x383dd44287f4 @  804 : 2d f4 13 8c       GetNamedProperty r6, [19], [140]
         0x383dd44287f8 @  808 : bf                Star5 
         0x383dd44287f9 @  809 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 8433 E> 0x383dd44287fd @  813 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd44287ff @  815 : bd                Star7 
 8442 E> 0x383dd4428800 @  816 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x383dd4428804 @  820 : bd                Star7 
         0x383dd4428805 @  821 : 0b f3             Ldar r7
         0x383dd4428807 @  823 : 19 f8 f2          Mov r2, r8
         0x383dd442880a @  826 : 19 f9 f1          Mov r1, r9
 8429 E> 0x383dd442880d @  829 : 69 f3 f2 02 8e    Construct r7, r8-r9, [142]
         0x383dd4428812 @  834 : bd                Star7 
 8424 E> 0x383dd4428813 @  835 : 5e f5 f4 f3 90    CallProperty1 r5, r6, r7, [144]
 8491 S> 0x383dd4428818 @  840 : 8a 5e             Jump [94] (0x383dd4428876 @ 934)
 8579 S> 0x383dd442881a @  842 : 2d fa 15 45       GetNamedProperty r0, [21], [69]
         0x383dd442881e @  846 : be                Star6 
 8587 E> 0x383dd442881f @  847 : 2d f4 13 92       GetNamedProperty r6, [19], [146]
         0x383dd4428823 @  851 : bf                Star5 
         0x383dd4428824 @  852 : 7c 21 94 29       CreateObjectLiteral [33], [148], #41
         0x383dd4428828 @  856 : bd                Star7 
         0x383dd4428829 @  857 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 8608 E> 0x383dd442882d @  861 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd442882f @  863 : bc                Star8 
 8617 E> 0x383dd4428830 @  864 : 2d f2 02 01       GetNamedProperty r8, [2], [1]
         0x383dd4428834 @  868 : bc                Star8 
         0x383dd4428835 @  869 : 0b f2             Ldar r8
         0x383dd4428837 @  871 : 19 f8 f1          Mov r2, r9
         0x383dd442883a @  874 : 19 f9 f0          Mov r1, r10
 8604 E> 0x383dd442883d @  877 : 69 f2 f1 02 95    Construct r8, r9-r10, [149]
         0x383dd4428842 @  882 : 33 f3 17 97       DefineNamedOwnProperty r7, [23], [151]
 8587 E> 0x383dd4428846 @  886 : 5e f5 f4 f3 99    CallProperty1 r5, r6, r7, [153]
 8693 S> 0x383dd442884b @  891 : 2d fa 14 33       GetNamedProperty r0, [20], [51]
         0x383dd442884f @  895 : be                Star6 
 8707 E> 0x383dd4428850 @  896 : 2d f4 13 9b       GetNamedProperty r6, [19], [155]
         0x383dd4428854 @  900 : bf                Star5 
         0x383dd4428855 @  901 : 15 ff 08 01       LdaImmutableContextSlot <context>, [8], [1]
 8716 E> 0x383dd4428859 @  905 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd442885b @  907 : bd                Star7 
 8725 E> 0x383dd442885c @  908 : 2d f3 02 01       GetNamedProperty r7, [2], [1]
         0x383dd4428860 @  912 : bd                Star7 
         0x383dd4428861 @  913 : 0b f3             Ldar r7
         0x383dd4428863 @  915 : 19 f8 f2          Mov r2, r8
         0x383dd4428866 @  918 : 19 f9 f1          Mov r1, r9
 8712 E> 0x383dd4428869 @  921 : 69 f3 f2 02 9d    Construct r7, r8-r9, [157]
         0x383dd442886e @  926 : bd                Star7 
 8707 E> 0x383dd442886f @  927 : 5e f5 f4 f3 9f    CallProperty1 r5, r6, r7, [159]
 8774 S> 0x383dd4428874 @  932 : 8a 02             Jump [2] (0x383dd4428876 @ 934)
 6222 S> 0x383dd4428876 @  934 : 0b f8             Ldar r2
         0x383dd4428878 @  936 : 51 a1             Inc [161]
         0x383dd442887a @  938 : c2                Star2 
 6165 E> 0x383dd442887b @  939 : 00 89 7c 03 01 00 JumpLoop.Wide [892], [1] (0x383dd4428500 @ 48)
 6147 S> 0x383dd4428881 @  945 : 0b f9             Ldar r1
         0x383dd4428883 @  947 : 51 a2             Inc [162]
         0x383dd4428885 @  949 : c3                Star1 
 6089 E> 0x383dd4428886 @  950 : 00 89 92 03 00 00 JumpLoop.Wide [914], [0] (0x383dd44284f5 @ 37)
 8831 S> 0x383dd442888c @  956 : 0b fa             Ldar r0
 8845 S> 0x383dd442888e @  958 : a9                Return 
Constant pool (size = 44)
0x383dd4428891: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 44
           0: 0x383dd4428a01 <ObjectBoilerplateDescription[9]>
           1: 0x383dd4425671 <String[8]: #vector_1>
           2: 0x383dd4428af9 <String[6]: #Vector>
           3: 0x34e078c04939 <String[9]: #character>
           4: 0x383dd4427dd9 <String[6]: #height>
           5: 0x383dd4427dc1 <String[5]: #width>
           6: 0x383dd4428b11 <String[8]: #getPixel>
           7: 0x34e078c09fa9 <String[1]: #a>
           8: 0x383dd4428b29 <String[13]: #get_tile_type>
           9: 0x383dd4426579 <String[12]: #NON_WALKABLE>
          10: 0x383dd4426561 <String[8]: #WALKABLE>
          11: 0x383dd4426599 <String[9]: #CHARACTER>
          12: 0x383dd44265b9 <String[17]: #THREAT_STRAITHEAD>
          13: 0x383dd44265e1 <String[16]: #THREAT_GIROUETTE>
          14: 0x383dd4426601 <String[17]: #THREAT_AGGRESSIVE>
          15: 0x383dd4426629 <String[19]: #THREAT_SURVEILLANCE>
          16: 0x383dd4426651 <String[36]: #THREAT_LE_FANTOME_ORANGE_DANS_PACMAN>
          17: 0x383dd4426689 <String[14]: #THREAT_SHERIFF>
          18: 0x383dd4428a91 <String[16]: #nonWalkableTiles>
          19: 0x320c0b489551 <String[4]: #push>
          20: 0x383dd4428a59 <String[13]: #walkableTiles>
          21: 0x383dd4428ac9 <String[7]: #threats>
          22: 0x383dd4428b61 <ObjectBoilerplateDescription[5]>
          23: 0x34e078c05c19 <String[8]: #position>
          24: 310
          25: 0x383dd4428bb9 <ObjectBoilerplateDescription[5]>
          26: 388
          27: 0x383dd4428c11 <ObjectBoilerplateDescription[5]>
          28: 466
          29: 0x383dd4428c69 <ObjectBoilerplateDescription[5]>
          30: 544
          31: 0x383dd4428cc1 <ObjectBoilerplateDescription[5]>
          32: 622
          33: 0x383dd4428d29 <ObjectBoilerplateDescription[5]>
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
0x383dd4428d79 <ByteArray[321]>
Object boilerplate at 0x383dd4428a01: 
0x383dd4428a01: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 9
           0: 8
           1: 0x383dd4428a59 <String[13]: #walkableTiles>
           2: 0x383dd4428a79 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x34e078c01329 <FixedArray[0]>>
           3: 0x383dd4428a91 <String[16]: #nonWalkableTiles>
           4: 0x383dd4428ab1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x34e078c01329 <FixedArray[0]>>
           5: 0x383dd4428ac9 <String[7]: #threats>
           6: 0x383dd4428ae1 <ArrayBoilerplateDescription PACKED_SMI_ELEMENTS, 0x34e078c01329 <FixedArray[0]>>
           7: 0x34e078c04939 <String[9]: #character>
           8: 0x34e078c01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd4428b61: 
0x383dd4428b61: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c05c19 <String[8]: #position>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c04381 <String[5]: #style>
           4: 0x383dd4428b99 <String[10]: #straitHead>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd4428bb9: 
0x383dd4428bb9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c05c19 <String[8]: #position>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c04381 <String[5]: #style>
           4: 0x383dd4428bf1 <String[9]: #girouette>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd4428c11: 
0x383dd4428c11: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c05c19 <String[8]: #position>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c04381 <String[5]: #style>
           4: 0x383dd4428c49 <String[10]: #aggressive>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd4428c69: 
0x383dd4428c69: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c05c19 <String[8]: #position>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c04381 <String[5]: #style>
           4: 0x383dd4428ca1 <String[12]: #surveillance>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd4428cc1: 
0x383dd4428cc1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c05c19 <String[8]: #position>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c04381 <String[5]: #style>
           4: 0x383dd4428cf9 <String[29]: #le_fantome_orange_dans_pacman>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x383dd4428d29: 
0x383dd4428d29: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 5
           0: 8
           1: 0x34e078c05c19 <String[8]: #position>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c04381 <String[5]: #style>
           4: 0x383dd4428d61 <String[7]: #sheriff>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x383dd4428fa1 points to: [0x383dd4429010]
=== [0x383dd4429010] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 8906 S> 0x383dd4429010 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x383dd4429014 @    4 : c4                Star0 
         0x383dd4429015 @    5 : 15 ff 0a 01       LdaImmutableContextSlot <context>, [10], [1]
 8928 E> 0x383dd4429019 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd442901b @   11 : c1                Star3 
 8906 E> 0x383dd442901c @   12 : 5f fa 02 03 f7 02 CallProperty2 r0, <this>, a0, r3, [2]
         0x383dd4429022 @   18 : c4                Star0 
         0x383dd4429023 @   19 : 9e 08             JumpIfUndefinedOrNull [8] (0x383dd442902b @ 27)
 8940 E> 0x383dd4429025 @   21 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x383dd4429029 @   25 : 8a 03             Jump [3] (0x383dd442902c @ 28)
         0x383dd442902b @   27 : 0e                LdaUndefined 
         0x383dd442902c @   28 : 9e 04             JumpIfUndefinedOrNull [4] (0x383dd4429030 @ 32)
         0x383dd442902e @   30 : 8a 0b             Jump [11] (0x383dd4429039 @ 41)
         0x383dd4429030 @   32 : 14 ff 09 01       LdaContextSlot <context>, [9], [1]
         0x383dd4429034 @   36 : c4                Star0 
 8959 E> 0x383dd4429035 @   37 : 2d fa 03 06       GetNamedProperty r0, [3], [6]
 8968 S> 0x383dd4429039 @   41 : a9                Return 
Constant pool (size = 4)
0x383dd4429041: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 4
           0: 0x383dd4429071 <String[14]: #get_best_match>
           1: 0x383dd44256a1 <String[11]: #TILE_COLORS>
           2: 0x34e078c04469 <String[4]: #type>
           3: 0x383dd4426561 <String[8]: #WALKABLE>
Handler Table (size = 0)
Source Position Table (size = 17)
0x383dd4429091 <ByteArray[17]>
0x383dd4429121 points to: [0x383dd4429190]
=== [0x383dd4429190] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 9024 S> 0x383dd4429190 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x383dd4429194 @    4 : c4                Star0 
         0x383dd4429195 @    5 : 15 ff 0b 01       LdaImmutableContextSlot <context>, [11], [1]
 9046 E> 0x383dd4429199 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x383dd442919b @   11 : c1                Star3 
 9024 E> 0x383dd442919c @   12 : 5f fa 02 03 f7 02 CallProperty2 r0, <this>, a0, r3, [2]
         0x383dd44291a2 @   18 : c4                Star0 
         0x383dd44291a3 @   19 : 9e 08             JumpIfUndefinedOrNull [8] (0x383dd44291ab @ 27)
 9058 E> 0x383dd44291a5 @   21 : 2d fa 02 04       GetNamedProperty r0, [2], [4]
         0x383dd44291a9 @   25 : 8a 03             Jump [3] (0x383dd44291ac @ 28)
         0x383dd44291ab @   27 : 0e                LdaUndefined 
         0x383dd44291ac @   28 : 9e 04             JumpIfUndefinedOrNull [4] (0x383dd44291b0 @ 32)
         0x383dd44291ae @   30 : 8a 03             Jump [3] (0x383dd44291b1 @ 33)
         0x383dd44291b0 @   32 : 0f                LdaNull 
 9078 S> 0x383dd44291b1 @   33 : a9                Return 
Constant pool (size = 3)
0x383dd44291b9: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 3
           0: 0x383dd4429071 <String[14]: #get_best_match>
           1: 0x383dd44256c1 <String[11]: #TEAM_COLORS>
           2: 0x383dd4426861 <String[9]: #teamIndex>
Handler Table (size = 0)
Source Position Table (size = 15)
0x383dd44291e1 <ByteArray[15]>
0x383dd4429281 points to: [0x383dd44292f0]
=== [0x383dd44292f0] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 9110 E> 0x383dd44292f0 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x383dd44292f3 @    3 : 1a f8             PushContext r2
         0x383dd44292f5 @    5 : 0b 03             Ldar a0
         0x383dd44292f7 @    7 : 25 02             StaCurrentContextSlot [2]
         0x383dd44292f9 @    9 : 80 01 00 02       CreateClosure [1], [0], #2
         0x383dd44292fd @   13 : 25 03             StaCurrentContextSlot [3]
 9336 S> 0x383dd44292ff @   15 : 0b 04             Ldar a1
 9340 E> 0x383dd4429301 @   17 : 7a                CreateArrayFromIterable 
         0x383dd4429302 @   18 : c0                Star4 
 9355 E> 0x383dd4429303 @   19 : 2d f6 02 00       GetNamedProperty r4, [2], [0]
         0x383dd4429307 @   23 : c1                Star3 
         0x383dd4429308 @   24 : 80 03 01 02       CreateClosure [3], [1], #2
         0x383dd442930c @   28 : bf                Star5 
 9355 E> 0x383dd442930d @   29 : 5e f7 f6 f5 02    CallProperty1 r3, r4, r5, [2]
         0x383dd4429312 @   34 : c1                Star3 
         0x383dd4429313 @   35 : 0c                LdaZero 
 9412 E> 0x383dd4429314 @   36 : 2f f7 04          GetKeyedProperty r3, [4]
         0x383dd4429317 @   39 : c4                Star0 
 9446 S> 0x383dd4429318 @   40 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x383dd442931a @   42 : c1                Star3 
 9467 E> 0x383dd442931b @   43 : 2d fa 04 06       GetNamedProperty r0, [4], [6]
         0x383dd442931f @   47 : c0                Star4 
 9446 E> 0x383dd4429320 @   48 : 62 f7 f6 08       CallUndefinedReceiver1 r3, r4, [8]
         0x383dd4429324 @   52 : c1                Star3 
         0x383dd4429325 @   53 : 0d 14             LdaSmi [20]
 9474 E> 0x383dd4429327 @   55 : 6d f7 0a          TestLessThan r3, [10]
         0x383dd442932a @   58 : c3                Star1 
 9488 S> 0x383dd442932b @   59 : 97 05             JumpIfToBooleanFalse [5] (0x383dd4429330 @ 64)
 9520 S> 0x383dd442932d @   61 : 0b fa             Ldar r0
 9537 S> 0x383dd442932f @   63 : a9                Return 
 9575 S> 0x383dd4429330 @   64 : 0f                LdaNull 
 9587 S> 0x383dd4429331 @   65 : a9                Return 
Constant pool (size = 5)
0x383dd4429339: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 5
           0: 0x383dd4429371 <ScopeInfo FUNCTION_SCOPE>
           1: 0x383dd4429401 <SharedFunctionInfo colorError>
           2: 0x320c0b48eb61 <String[4]: #sort>
           3: 0x383dd4429629 <SharedFunctionInfo>
           4: 0x34e078c0a0c9 <String[5]: #color>
Handler Table (size = 0)
Source Position Table (size = 39)
0x383dd4429761 <ByteArray[39]>
0x383dd4429401 points to: [0x383dd4429470]
=== [0x383dd4429470] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 9189 S> 0x383dd4429470 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x383dd4429473 @    3 : c3                Star1 
 9201 E> 0x383dd4429474 @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x383dd4429478 @    8 : c4                Star0 
         0x383dd4429479 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x383dd442947b @   11 : c2                Star2 
 9211 E> 0x383dd442947c @   12 : 2d f8 02 05       GetNamedProperty r2, [2], [5]
         0x383dd4429480 @   16 : c2                Star2 
 9226 E> 0x383dd4429481 @   17 : 2d 03 02 07       GetNamedProperty a0, [2], [7]
 9213 E> 0x383dd4429485 @   21 : 3a f8 04          Sub r2, [4]
         0x383dd4429488 @   24 : c2                Star2 
 9201 E> 0x383dd4429489 @   25 : 5e fa f9 f8 09    CallProperty1 r0, r1, r2, [9]
         0x383dd442948e @   30 : c4                Star0 
 9231 E> 0x383dd442948f @   31 : 21 00 00          LdaGlobal [0], [0]
         0x383dd4429492 @   34 : c2                Star2 
 9236 E> 0x383dd4429493 @   35 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x383dd4429497 @   39 : c3                Star1 
         0x383dd4429498 @   40 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x383dd442949a @   42 : c1                Star3 
 9246 E> 0x383dd442949b @   43 : 2d f7 03 0c       GetNamedProperty r3, [3], [12]
         0x383dd442949f @   47 : c1                Star3 
 9261 E> 0x383dd44294a0 @   48 : 2d 03 03 0e       GetNamedProperty a0, [3], [14]
 9248 E> 0x383dd44294a4 @   52 : 3a f7 0b          Sub r3, [11]
         0x383dd44294a7 @   55 : c1                Star3 
 9236 E> 0x383dd44294a8 @   56 : 5e f9 f8 f7 10    CallProperty1 r1, r2, r3, [16]
 9229 E> 0x383dd44294ad @   61 : 39 fa 12          Add r0, [18]
         0x383dd44294b0 @   64 : c4                Star0 
 9266 E> 0x383dd44294b1 @   65 : 21 00 00          LdaGlobal [0], [0]
         0x383dd44294b4 @   68 : c2                Star2 
 9271 E> 0x383dd44294b5 @   69 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x383dd44294b9 @   73 : c3                Star1 
         0x383dd44294ba @   74 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x383dd44294bc @   76 : c1                Star3 
 9281 E> 0x383dd44294bd @   77 : 2d f7 04 14       GetNamedProperty r3, [4], [20]
         0x383dd44294c1 @   81 : c1                Star3 
 9296 E> 0x383dd44294c2 @   82 : 2d 03 04 16       GetNamedProperty a0, [4], [22]
 9283 E> 0x383dd44294c6 @   86 : 3a f7 13          Sub r3, [19]
         0x383dd44294c9 @   89 : c1                Star3 
 9271 E> 0x383dd44294ca @   90 : 5e f9 f8 f7 18    CallProperty1 r1, r2, r3, [24]
 9264 E> 0x383dd44294cf @   95 : 39 fa 1a          Add r0, [26]
 9299 S> 0x383dd44294d2 @   98 : a9                Return 
Constant pool (size = 5)
0x383dd44294d9: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 5
           0: 0x320c0b49a991 <String[4]: #Math>
           1: 0x320c0b49a9a9 <String[3]: #abs>
           2: 0x320c0b4ab141 <String[1]: #r>
           3: 0x34e078c085c9 <String[1]: #g>
           4: 0x34e078c0a069 <String[1]: #b>
Handler Table (size = 0)
Source Position Table (size = 48)
0x383dd4429559 <ByteArray[48]>
0x383dd4429629 points to: [0x383dd4429698]
=== [0x383dd4429698] DISASSEMBLY ===
Parameter count 3
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 9390 S> 0x383dd4429698 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x383dd442969a @    2 : c4                Star0 
 9383 E> 0x383dd442969b @    3 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
         0x383dd442969f @    7 : c3                Star1 
 9370 E> 0x383dd44296a0 @    8 : 62 fa f9 03       CallUndefinedReceiver1 r0, r1, [3]
         0x383dd44296a4 @   12 : c4                Star0 
         0x383dd44296a5 @   13 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x383dd44296a7 @   15 : c3                Star1 
 9405 E> 0x383dd44296a8 @   16 : 2d 04 00 05       GetNamedProperty a1, [0], [5]
         0x383dd44296ac @   20 : c2                Star2 
 9392 E> 0x383dd44296ad @   21 : 62 f9 f8 07       CallUndefinedReceiver1 r1, r2, [7]
 9390 E> 0x383dd44296b1 @   25 : 3a fa 00          Sub r0, [0]
 9411 S> 0x383dd44296b4 @   28 : a9                Return 
Constant pool (size = 1)
0x383dd44296b9: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 1
           0: 0x34e078c0a0c9 <String[5]: #color>
Handler Table (size = 0)
Source Position Table (size = 19)
0x383dd44296d1 <ByteArray[19]>
Array at 0x383dd442ab59 has 7 elements:
0x383dd442ab59: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 7
           0: 7
           1: 0x383dd442aba1 <DescriptorArray[5]>
           2: 0x34e078c03301 <NumberDictionary[7]>
           3: 0x34e078c01329 <FixedArray[0]>
           4: 0x383dd442ac79 <DescriptorArray[4]>
           5: 0x34e078c03301 <NumberDictionary[7]>
           6: 0x34e078c01329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x7 (7)
Element[1]
0x383dd442aba1: [DescriptorArray] in OldSpace
 - map: 0x34e078c07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x34e078c055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 4, attrs: [__C]) @ 0x320c0b4b4fe1 <AccessorInfo>
  [1]: 0x34e078c058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x320c0b4b4f71 <AccessorInfo>
  [2]: 0x34e078c05cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x320c0b4b5051 <AccessorInfo>
  [3]: 0x34e078c065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x383dd442ac61 <ClassPositions 9637, 10364>
  [4]: 0x383dd4427b41: [String] in OldSpace: #loadFromFile (const data descriptor, p: 3, attrs: [W_C]) @ 3
Element[2]
0x34e078c03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x34e078c01329: [FixedArray] in ReadOnlySpace
 - map: 0x34e078c012e1 <Map>
 - length: 0
Element[4]
0x383dd442ac79: [DescriptorArray] in OldSpace
 - map: 0x34e078c07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x34e078c04a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
  [1]: 0x383dd4427dc1: [String] in OldSpace: #width (const accessor descriptor, p: 1, attrs: [W_C]) @ 0x383dd442acf1 <AccessorPair>(get: 4, set: 0x34e078c01339 <null>)
  [2]: 0x383dd4427dd9: [String] in OldSpace: #height (const accessor descriptor, p: 3, attrs: [W_C]) @ 0x383dd442ad09 <AccessorPair>(get: 5, set: 0x34e078c01339 <null>)
  [3]: 0x383dd4428b11: [String] in OldSpace: #getPixel (const data descriptor, p: 2, attrs: [W_C]) @ 6
Element[5]
0x34e078c03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x34e078c01329: [FixedArray] in ReadOnlySpace
 - map: 0x34e078c012e1 <Map>
 - length: 0
0x383dd4429891 points to: [0x383dd4429900]
=== [0x383dd4429900] DISASSEMBLY ===
Parameter count 4
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 9710 S> 0x383dd4429900 @    0 : 0b 03             Ldar a0
 9723 E> 0x383dd4429902 @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
 9742 S> 0x383dd4429906 @    6 : 0b 04             Ldar a1
 9754 E> 0x383dd4429908 @    8 : 32 02 01 02       SetNamedProperty <this>, [1], [2]
 9772 S> 0x383dd442990c @   12 : 0b 05             Ldar a2
 9785 E> 0x383dd442990e @   14 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
         0x383dd4429912 @   18 : 0e                LdaUndefined 
 9800 S> 0x383dd4429913 @   19 : a9                Return 
Constant pool (size = 3)
0x383dd4429919: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 3
           0: 0x383dd4429941 <String[7]: #_buffer>
           1: 0x383dd4429959 <String[6]: #_width>
           2: 0x383dd4429971 <String[7]: #_height>
Handler Table (size = 0)
Source Position Table (size = 19)
0x383dd4429989 <ByteArray[19]>
0x383dd4429a61 points to: [0x383dd4429ad0]
=== [0x383dd4429ad0] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 9859 S> 0x383dd4429ad0 @    0 : 15 ff 05 01       LdaImmutableContextSlot <context>, [5], [1]
         0x383dd4429ad4 @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x383dd4429ad6 @    6 : c1                Star3 
 9862 E> 0x383dd4429ad7 @    7 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x383dd4429adb @   11 : c2                Star2 
 9862 E> 0x383dd4429adc @   12 : 5e f8 f7 03 02    CallProperty1 r2, r3, a0, [2]
         0x383dd4429ae1 @   17 : c4                Star0 
 9906 S> 0x383dd4429ae2 @   18 : 15 ff 07 01       LdaImmutableContextSlot <context>, [7], [1]
         0x383dd4429ae6 @   22 : aa 02             ThrowReferenceErrorIfHole [2]
         0x383dd4429ae8 @   24 : c1                Star3 
 9914 E> 0x383dd4429ae9 @   25 : 2d f7 03 04       GetNamedProperty r3, [3], [4]
         0x383dd4429aed @   29 : c1                Star3 
 9918 E> 0x383dd4429aee @   30 : 2d f7 04 06       GetNamedProperty r3, [4], [6]
         0x383dd4429af2 @   34 : c1                Star3 
 9923 E> 0x383dd4429af3 @   35 : 2d f7 05 08       GetNamedProperty r3, [5], [8]
         0x383dd4429af7 @   39 : c2                Star2 
 9923 E> 0x383dd4429af8 @   40 : 5e f8 f7 fa 0a    CallProperty1 r2, r3, r0, [10]
         0x383dd4429afd @   45 : c3                Star1 
 9943 S> 0x383dd4429afe @   46 : 16 02             LdaCurrentContextSlot [2]
         0x383dd4429b00 @   48 : aa 06             ThrowReferenceErrorIfHole [6]
         0x383dd4429b02 @   50 : c2                Star2 
 9971 E> 0x383dd4429b03 @   51 : 2d f9 07 0c       GetNamedProperty r1, [7], [12]
         0x383dd4429b07 @   55 : c1                Star3 
 9981 E> 0x383dd4429b08 @   56 : 2d f9 08 0e       GetNamedProperty r1, [8], [14]
         0x383dd4429b0c @   60 : c0                Star4 
 9992 E> 0x383dd4429b0d @   61 : 2d f9 09 10       GetNamedProperty r1, [9], [16]
         0x383dd4429b11 @   65 : bf                Star5 
         0x383dd4429b12 @   66 : 0b f8             Ldar r2
 9950 E> 0x383dd4429b14 @   68 : 69 f8 f7 03 12    Construct r2, r3-r5, [18]
10000 S> 0x383dd4429b19 @   73 : a9                Return 
Constant pool (size = 10)
0x383dd4429b21: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 10
           0: 0x320c0b48cb69 <String[2]: #fs>
           1: 0x320c0b48d7e9 <String[12]: #readFileSync>
           2: 0x383dd4425659 <String[7]: #pngjs_1>
           3: 0x383dd4429b81 <String[3]: #PNG>
           4: 0x15bdab7acea9 <String[4]: #sync>
           5: 0x320c0b48d859 <String[4]: #read>
           6: 0x383dd4425751 <String[12]: #MapImageFile>
           7: 0x320c0b498281 <String[4]: #data>
           8: 0x383dd4427dc1 <String[5]: #width>
           9: 0x383dd4427dd9 <String[6]: #height>
Handler Table (size = 0)
Source Position Table (size = 36)
0x383dd4429be1 <ByteArray[36]>
0x383dd4429c89 points to: [0x383dd4429cf8]
=== [0x383dd4429cf8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
10045 S> 0x383dd4429cf8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
10052 S> 0x383dd4429cfc @    4 : a9                Return 
Constant pool (size = 1)
0x383dd4429d01: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 1
           0: 0x383dd4429959 <String[6]: #_width>
Handler Table (size = 0)
Source Position Table (size = 8)
0x383dd4429d19 <ByteArray[8]>
0x383dd4429db9 points to: [0x383dd4429e28]
=== [0x383dd4429e28] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
10098 S> 0x383dd4429e28 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
10106 S> 0x383dd4429e2c @    4 : a9                Return 
Constant pool (size = 1)
0x383dd4429e31: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 1
           0: 0x383dd4429971 <String[7]: #_height>
Handler Table (size = 0)
Source Position Table (size = 8)
0x383dd4429e49 <ByteArray[8]>
0x383dd4429ee9 points to: [0x383dd4429f58]
=== [0x383dd4429f58] DISASSEMBLY ===
Parameter count 3
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
10160 S> 0x383dd4429f58 @    0 : 2d 02 00 03       GetNamedProperty <this>, [0], [3]
         0x383dd4429f5c @    4 : c3                Star1 
         0x383dd4429f5d @    5 : 0b 04             Ldar a1
10167 E> 0x383dd4429f5f @    7 : 3b f9 02          Mul r1, [2]
         0x383dd4429f62 @   10 : c3                Star1 
         0x383dd4429f63 @   11 : 0b 03             Ldar a0
10171 E> 0x383dd4429f65 @   13 : 39 f9 01          Add r1, [1]
10176 E> 0x383dd4429f68 @   16 : 47 04 00          MulSmi [4], [0]
         0x383dd4429f6b @   19 : c4                Star0 
10189 S> 0x383dd4429f6c @   20 : 7c 01 05 29       CreateObjectLiteral [1], [5], #41
         0x383dd4429f70 @   24 : c3                Star1 
10218 E> 0x383dd4429f71 @   25 : 2d 02 02 06       GetNamedProperty <this>, [2], [6]
         0x383dd4429f75 @   29 : c2                Star2 
         0x383dd4429f76 @   30 : 0b fa             Ldar r0
10225 E> 0x383dd4429f78 @   32 : 2f f8 08          GetKeyedProperty r2, [8]
         0x383dd4429f7b @   35 : 33 f9 03 0a       DefineNamedOwnProperty r1, [3], [10]
10252 E> 0x383dd4429f7f @   39 : 2d 02 02 0c       GetNamedProperty <this>, [2], [12]
         0x383dd4429f83 @   43 : c2                Star2 
         0x383dd4429f84 @   44 : 0b fa             Ldar r0
10264 E> 0x383dd4429f86 @   46 : 45 01 0e          AddSmi [1], [14]
10259 E> 0x383dd4429f89 @   49 : 2f f8 0f          GetKeyedProperty r2, [15]
         0x383dd4429f8c @   52 : 33 f9 04 11       DefineNamedOwnProperty r1, [4], [17]
10290 E> 0x383dd4429f90 @   56 : 2d 02 02 13       GetNamedProperty <this>, [2], [19]
         0x383dd4429f94 @   60 : c2                Star2 
         0x383dd4429f95 @   61 : 0b fa             Ldar r0
10302 E> 0x383dd4429f97 @   63 : 45 02 15          AddSmi [2], [21]
10297 E> 0x383dd4429f9a @   66 : 2f f8 16          GetKeyedProperty r2, [22]
         0x383dd4429f9d @   69 : 33 f9 05 18       DefineNamedOwnProperty r1, [5], [24]
10328 E> 0x383dd4429fa1 @   73 : 2d 02 02 1a       GetNamedProperty <this>, [2], [26]
         0x383dd4429fa5 @   77 : c2                Star2 
         0x383dd4429fa6 @   78 : 0b fa             Ldar r0
10340 E> 0x383dd4429fa8 @   80 : 45 03 1c          AddSmi [3], [28]
10335 E> 0x383dd4429fab @   83 : 2f f8 1d          GetKeyedProperty r2, [29]
         0x383dd4429fae @   86 : 33 f9 06 1f       DefineNamedOwnProperty r1, [6], [31]
         0x383dd4429fb2 @   90 : 0b f9             Ldar r1
10356 S> 0x383dd4429fb4 @   92 : a9                Return 
Constant pool (size = 7)
0x383dd4429fb9: [FixedArray] in OldSpace
 - map: 0x34e078c012e1 <Map>
 - length: 7
           0: 0x383dd4429959 <String[6]: #_width>
           1: 0x383dd442a001 <ObjectBoilerplateDescription[9]>
           2: 0x383dd4429941 <String[7]: #_buffer>
           3: 0x320c0b4ab141 <String[1]: #r>
           4: 0x34e078c085c9 <String[1]: #g>
           5: 0x34e078c0a069 <String[1]: #b>
           6: 0x34e078c09fa9 <String[1]: #a>
Handler Table (size = 0)
Source Position Table (size = 39)
0x383dd442a059 <ByteArray[39]>
Object boilerplate at 0x383dd442a001: 
0x383dd442a001: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x34e078c02059 <Map>
 - length: 9
           0: 8
           1: 0x320c0b4ab141 <String[1]: #r>
           2: 0x34e078c01501 <Odd Oddball: uninitialized>
           3: 0x34e078c085c9 <String[1]: #g>
           4: 0x34e078c01501 <Odd Oddball: uninitialized>
           5: 0x34e078c0a069 <String[1]: #b>
           6: 0x34e078c01501 <Odd Oddball: uninitialized>
           7: 0x34e078c09fa9 <String[1]: #a>
           8: 0x34e078c01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
<< OUTPUTTING DISASSEMBLY END >>
