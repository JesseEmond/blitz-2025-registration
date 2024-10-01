<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x3853f7524db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x3853f7524db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x3853f7524dbc @    4 : c4                Star0 
 3181 S> 0x3853f7524dbd @    5 : a9                Return 
Constant pool (size = 1)
0x3853f7524dc1: [FixedArray] in OldSpace
 - map: 0x1ed25f4812e1 <Map>
 - length: 1
           0: 0x3853f7524dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3853f7526059 <ByteArray[7]>
0x3853f7524dd9 points to: [0x3853f7524e48]
=== [0x3853f7524e48] DISASSEMBLY ===
Parameter count 6
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
   10 E> 0x3853f7524e48 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x3853f7524e4b @    3 : 1a f8             PushContext r2
         0x3853f7524e4d @    5 : 10                LdaTheHole 
         0x3853f7524e4e @    6 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x3853f7524e50 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x3853f7524e53 @   11 : c0                Star4 
   83 E> 0x3853f7524e54 @   12 : 2d f6 02 02       GetNamedProperty r4, [2], [2]
         0x3853f7524e58 @   16 : c1                Star3 
         0x3853f7524e59 @   17 : 13 03             LdaConstant [3]
         0x3853f7524e5b @   19 : be                Star6 
   98 E> 0x3853f7524e5c @   20 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x3853f7524e60 @   24 : bd                Star7 
         0x3853f7524e61 @   25 : 19 03 f5          Mov a0, r5
   83 E> 0x3853f7524e64 @   28 : 5c f7 f6 04 05    CallProperty r3, r4-r7, [5]
  139 S> 0x3853f7524e69 @   33 : 0e                LdaUndefined 
  166 E> 0x3853f7524e6a @   34 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  193 S> 0x3853f7524e6e @   38 : 13 06             LdaConstant [6]
         0x3853f7524e70 @   40 : c0                Star4 
  193 E> 0x3853f7524e71 @   41 : 62 04 f6 09       CallUndefinedReceiver1 a1, r4, [9]
  193 E> 0x3853f7524e75 @   45 : 25 02             StaCurrentContextSlot [2]
  241 S> 0x3853f7524e77 @   47 : 13 07             LdaConstant [7]
         0x3853f7524e79 @   49 : c0                Star4 
  241 E> 0x3853f7524e7a @   50 : 62 04 f6 0b       CallUndefinedReceiver1 a1, r4, [11]
         0x3853f7524e7e @   54 : c4                Star0 
  304 E> 0x3853f7524e7f @   55 : 2d fa 09 0d       GetNamedProperty r0, [9], [13]
         0x3853f7524e83 @   59 : be                Star6 
         0x3853f7524e84 @   60 : 80 0a 00 02       CreateClosure [10], [0], #2
         0x3853f7524e88 @   64 : c1                Star3 
         0x3853f7524e89 @   65 : 13 08             LdaConstant [8]
         0x3853f7524e8b @   67 : c0                Star4 
         0x3853f7524e8c @   68 : 80 0b 01 02       CreateClosure [11], [1], #2
         0x3853f7524e90 @   72 : bd                Star7 
         0x3853f7524e91 @   73 : 80 0c 02 02       CreateClosure [12], [2], #2
         0x3853f7524e95 @   77 : bc                Star8 
         0x3853f7524e96 @   78 : 80 0d 03 02       CreateClosure [13], [3], #2
         0x3853f7524e9a @   82 : bb                Star9 
         0x3853f7524e9b @   83 : 80 0e 04 02       CreateClosure [14], [4], #2
         0x3853f7524e9f @   87 : ba                Star10 
         0x3853f7524ea0 @   88 : 19 f7 f5          Mov r3, r5
         0x3853f7524ea3 @   91 : 65 28 00 f6 07    CallRuntime [DefineClass], r4-r10
         0x3853f7524ea8 @   96 : c0                Star4 
         0x3853f7524ea9 @   97 : 19 f5 f9          Mov r5, r1
 3088 S> 0x3853f7524eac @  100 : 0b f9             Ldar r1
 3115 E> 0x3853f7524eae @  102 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x3853f7524eb2 @  106 : 0e                LdaUndefined 
 3178 S> 0x3853f7524eb3 @  107 : a9                Return 
Constant pool (size = 15)
0x3853f7524eb9: [FixedArray] in OldSpace
 - map: 0x1ed25f4812e1 <Map>
 - length: 15
           0: 0x3853f7524f41 <ScopeInfo FUNCTION_SCOPE>
           1: 0x1ed25f485ab9 <String[6]: #Object>
           2: 0x1ed25f484c11 <String[14]: #defineProperty>
           3: 0x3853f7524fb1 <String[10]: #__esModule>
           4: 0x3853f7524fd1 <ObjectBoilerplateDescription[3]>
           5: 0x3853f7524ff9 <String[18]: #SurveillanceThreat>
           6: 0x3853f7525021 <String[18]: #../geometry/vector>
           7: 0x3853f7525049 <String[8]: #./threat>
           8: 0x3853f7525061 <FixedArray[7]>
           9: 0x3853f7525299 <String[6]: #Threat>
          10: 0x3853f75252b1 <SharedFunctionInfo SurveillanceThreat>
          11: 0x3853f7525569 <SharedFunctionInfo get_next_move>
          12: 0x3853f7525761 <SharedFunctionInfo getSurveillancePath>
          13: 0x3853f7525b11 <SharedFunctionInfo isPlayerInDirectLineOfSight>
          14: 0x3853f7525d41 <SharedFunctionInfo anyObstacleBetweenPoints>
Handler Table (size = 0)
Source Position Table (size = 40)
0x3853f7526001 <ByteArray[40]>
Boilerplate at 0x3853f7524fd1: 
0x3853f7524fd1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1ed25f482059 <Map>
 - length: 3
           0: 8
           1: 0x1ed25f486419 <String[5]: #value>
           2: 0x1ed25f481729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x3853f7525061 has 7 elements:
0x3853f7525061: [FixedArray] in OldSpace
 - map: 0x1ed25f4812e1 <Map>
 - length: 7
           0: 7
           1: 0x3853f75250a9 <DescriptorArray[4]>
           2: 0x1ed25f483301 <NumberDictionary[7]>
           3: 0x1ed25f481329 <FixedArray[0]>
           4: 0x3853f7525169 <DescriptorArray[5]>
           5: 0x1ed25f483301 <NumberDictionary[7]>
           6: 0x1ed25f481329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x7 (7)
Element[1]
0x3853f75250a9: [DescriptorArray] in OldSpace
 - map: 0x1ed25f487761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1ed25f4855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x0946705b4fe1 <AccessorInfo>
  [1]: 0x1ed25f4858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x0946705b4f71 <AccessorInfo>
  [2]: 0x1ed25f485cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x0946705b5051 <AccessorInfo>
  [3]: 0x1ed25f4865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x3853f7525151 <ClassPositions 262, 3087>
Element[2]
0x1ed25f483301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x1ed25f481329: [FixedArray] in ReadOnlySpace
 - map: 0x1ed25f4812e1 <Map>
 - length: 0
Element[4]
0x3853f7525169: [DescriptorArray] in OldSpace
 - map: 0x1ed25f487761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1ed25f484a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 2, attrs: [W_C]) @ 1
  [1]: 0x3853f75251f9: [String] in OldSpace: #get_next_move (const data descriptor, p: 0, attrs: [W_C]) @ 3
  [2]: 0x3853f7525219: [String] in OldSpace: #getSurveillancePath (const data descriptor, p: 3, attrs: [W_C]) @ 4
  [3]: 0x3853f7525241: [String] in OldSpace: #isPlayerInDirectLineOfSight (const data descriptor, p: 4, attrs: [W_C]) @ 5
  [4]: 0x3853f7525271: [String] in OldSpace: #anyObstacleBetweenPoints (const data descriptor, p: 1, attrs: [W_C]) @ 6
Element[5]
0x1ed25f483301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x1ed25f481329: [FixedArray] in ReadOnlySpace
 - map: 0x1ed25f4812e1 <Map>
 - length: 0
0x3853f75252b1 points to: [0x3853f7525320]
=== [0x3853f7525320] DISASSEMBLY ===
Parameter count 5
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
         0x3853f7525320 @    0 : 19 fe f9          Mov <closure>, r1
  375 S> 0x3853f7525323 @    3 : 0b f9             Ldar r1
         0x3853f7525325 @    5 : 5a f7             GetSuperConstructor r3
  410 E> 0x3853f7525327 @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x3853f7525329 @    9 : 0b fa             Ldar r0
         0x3853f752532b @   11 : 19 03 f6          Mov a0, r4
         0x3853f752532e @   14 : 19 04 f5          Mov a1, r5
         0x3853f7525331 @   17 : 19 05 f4          Mov a2, r6
         0x3853f7525334 @   20 : 19 06 f3          Mov a3, r7
  375 E> 0x3853f7525337 @   23 : 69 f7 f6 04 00    Construct r3, r4-r7, [0]
         0x3853f752533c @   28 : bc                Star8 
         0x3853f752533d @   29 : 0b 02             Ldar <this>
         0x3853f752533f @   31 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x3853f7525340 @   32 : 19 f2 02          Mov r8, <this>
  426 S> 0x3853f7525343 @   35 : 0b 02             Ldar <this>
         0x3853f7525345 @   37 : ab                ThrowSuperNotCalledIfHole 
         0x3853f7525346 @   38 : 0f                LdaNull 
  455 E> 0x3853f7525347 @   39 : 32 02 00 02       SetNamedProperty <this>, [0], [2]
  471 S> 0x3853f752534b @   43 : 0b 02             Ldar <this>
         0x3853f752534d @   45 : ab                ThrowSuperNotCalledIfHole 
         0x3853f752534e @   46 : 0b 03             Ldar a0
  482 E> 0x3853f7525350 @   48 : 32 02 01 04       SetNamedProperty <this>, [1], [4]
         0x3853f7525354 @   52 : 0b 02             Ldar <this>
         0x3853f7525356 @   54 : ab                ThrowSuperNotCalledIfHole 
  494 S> 0x3853f7525357 @   55 : a9                Return 
Constant pool (size = 2)
0x3853f7525359: [FixedArray] in OldSpace
 - map: 0x1ed25f4812e1 <Map>
 - length: 2
           0: 0x3853f7525379 <String[23]: #_lastTargetSeenPosition>
           1: 0x3853f75253a1 <String[5]: #_grid>
Handler Table (size = 0)
Source Position Table (size = 23)
0x3853f75253b9 <ByteArray[23]>
0x3853f7525569 points to: [0x3853f75255d8]
=== [0x3853f75255d8] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  705 S> 0x3853f75255d8 @    0 : 2d 03 00 01       GetNamedProperty a0, [0], [1]
  710 E> 0x3853f75255dc @    4 : 49 3c 00          ModSmi [60], [0]
         0x3853f75255df @    7 : c4                Star0 
         0x3853f75255e0 @    8 : 0d 0a             LdaSmi [10]
  715 E> 0x3853f75255e2 @   10 : 6d fa 03          TestLessThan r0, [3]
         0x3853f75255e5 @   13 : 99 24             JumpIfFalse [36] (0x3853f7525609 @ 49)
  735 S> 0x3853f75255e7 @   15 : 17 02             LdaImmutableCurrentContextSlot [2]
  766 E> 0x3853f75255e9 @   17 : aa 01             ThrowReferenceErrorIfHole [1]
         0x3853f75255eb @   19 : c2                Star2 
  775 E> 0x3853f75255ec @   20 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0x3853f75255f0 @   24 : c2                Star2 
  782 E> 0x3853f75255f1 @   25 : 2d f8 03 06       GetNamedProperty r2, [3], [6]
         0x3853f75255f5 @   29 : c3                Star1 
  801 E> 0x3853f75255f6 @   30 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
         0x3853f75255fa @   34 : c1                Star3 
  811 E> 0x3853f75255fb @   35 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x3853f75255ff @   39 : c1                Star3 
  782 E> 0x3853f7525600 @   40 : 5e f9 f8 f7 0c    CallProperty1 r1, r2, r3, [12]
  764 E> 0x3853f7525605 @   45 : 32 02 06 0e       SetNamedProperty <this>, [6], [14]
  852 S> 0x3853f7525609 @   49 : 2d 02 07 10       GetNamedProperty <this>, [7], [16]
         0x3853f752560d @   53 : c4                Star0 
  852 E> 0x3853f752560e @   54 : 5e fa 02 03 12    CallProperty1 r0, <this>, a0, [18]
  879 S> 0x3853f7525613 @   59 : a9                Return 
Constant pool (size = 8)
0x3853f7525619: [FixedArray] in OldSpace
 - map: 0x1ed25f4812e1 <Map>
 - length: 8
           0: 0x3853f7525669 <String[4]: #tick>
           1: 0x3853f7524f99 <String[8]: #vector_1>
           2: 0x3853f7525681 <String[6]: #Vector>
           3: 0x3853f7525699 <String[12]: #fromPosition>
           4: 0x1ed25f484939 <String[9]: #character>
           5: 0x1ed25f485c19 <String[8]: #position>
           6: 0x3853f7525379 <String[23]: #_lastTargetSeenPosition>
           7: 0x3853f7525219 <String[19]: #getSurveillancePath>
Handler Table (size = 0)
Source Position Table (size = 33)
0x3853f75256b9 <ByteArray[33]>
0x3853f7525761 points to: [0x3853f75257d0]
=== [0x3853f75257d0] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
  936 S> 0x3853f75257d0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3853f75257d4 @    4 : 9b 04             JumpIfNotNull [4] (0x3853f75257d8 @ 8)
  984 S> 0x3853f75257d6 @    6 : 0f                LdaNull 
  996 S> 0x3853f75257d7 @    7 : a9                Return 
 1034 S> 0x3853f75257d8 @    8 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
         0x3853f75257dc @   12 : c1                Star3 
 1050 E> 0x3853f75257dd @   13 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x3853f75257e1 @   17 : c2                Star2 
         0x3853f75257e2 @   18 : 17 02             LdaImmutableCurrentContextSlot [2]
 1058 E> 0x3853f75257e4 @   20 : aa 03             ThrowReferenceErrorIfHole [3]
         0x3853f75257e6 @   22 : bf                Star5 
 1067 E> 0x3853f75257e7 @   23 : 2d f5 04 06       GetNamedProperty r5, [4], [6]
         0x3853f75257eb @   27 : bf                Star5 
 1074 E> 0x3853f75257ec @   28 : 2d f5 05 08       GetNamedProperty r5, [5], [8]
         0x3853f75257f0 @   32 : c0                Star4 
 1092 E> 0x3853f75257f1 @   33 : 2d 02 06 0a       GetNamedProperty <this>, [6], [10]
         0x3853f75257f5 @   37 : be                Star6 
 1074 E> 0x3853f75257f6 @   38 : 5e f6 f5 f4 0c    CallProperty1 r4, r5, r6, [12]
         0x3853f75257fb @   43 : c0                Star4 
 1108 E> 0x3853f75257fc @   44 : 2d 02 00 0e       GetNamedProperty <this>, [0], [14]
         0x3853f7525800 @   48 : bf                Star5 
 1050 E> 0x3853f7525801 @   49 : 5f f8 f7 f6 f5 10 CallProperty2 r2, r3, r4, r5, [16]
         0x3853f7525807 @   55 : c4                Star0 
 1142 S> 0x3853f7525808 @   56 : 9a 0d             JumpIfNull [13] (0x3853f7525815 @ 69)
 1168 E> 0x3853f752580a @   58 : 2d fa 07 12       GetNamedProperty r0, [7], [18]
         0x3853f752580e @   62 : c2                Star2 
         0x3853f752580f @   63 : 0c                LdaZero 
 1175 E> 0x3853f7525810 @   64 : 6c f8 14          TestEqualStrict r2, [20]
         0x3853f7525813 @   67 : 99 15             JumpIfFalse [21] (0x3853f7525828 @ 88)
 1196 S> 0x3853f7525815 @   69 : 21 08 15          LdaGlobal [8], [21]
         0x3853f7525818 @   72 : c1                Star3 
 1204 E> 0x3853f7525819 @   73 : 2d f7 09 17       GetNamedProperty r3, [9], [23]
         0x3853f752581d @   77 : c2                Star2 
         0x3853f752581e @   78 : 13 0a             LdaConstant [10]
         0x3853f7525820 @   80 : c0                Star4 
 1204 E> 0x3853f7525821 @   81 : 5e f8 f7 f6 19    CallProperty1 r2, r3, r4, [25]
 1238 S> 0x3853f7525826 @   86 : 0f                LdaNull 
 1250 S> 0x3853f7525827 @   87 : a9                Return 
 1290 S> 0x3853f7525828 @   88 : 0d 01             LdaSmi [1]
 1294 E> 0x3853f752582a @   90 : 2f fa 1b          GetKeyedProperty r0, [27]
         0x3853f752582d @   93 : c3                Star1 
 1307 S> 0x3853f752582e @   94 : 97 47             JumpIfToBooleanFalse [71] (0x3853f7525875 @ 165)
 1356 S> 0x3853f7525830 @   96 : 2d f9 0b 1d       GetNamedProperty r1, [11], [29]
         0x3853f7525834 @  100 : c2                Star2 
 1365 E> 0x3853f7525835 @  101 : 2d 02 06 1f       GetNamedProperty <this>, [6], [31]
         0x3853f7525839 @  105 : c1                Star3 
 1374 E> 0x3853f752583a @  106 : 2d f7 0b 21       GetNamedProperty r3, [11], [33]
 1358 E> 0x3853f752583e @  110 : 6e f8 23          TestGreaterThan r2, [35]
         0x3853f7525841 @  113 : 99 05             JumpIfFalse [5] (0x3853f7525846 @ 118)
 1395 S> 0x3853f7525843 @  115 : 13 0c             LdaConstant [12]
 1410 S> 0x3853f7525845 @  117 : a9                Return 
 1459 S> 0x3853f7525846 @  118 : 2d f9 0b 1d       GetNamedProperty r1, [11], [29]
         0x3853f752584a @  122 : c2                Star2 
 1468 E> 0x3853f752584b @  123 : 2d 02 06 24       GetNamedProperty <this>, [6], [36]
         0x3853f752584f @  127 : c1                Star3 
 1477 E> 0x3853f7525850 @  128 : 2d f7 0b 26       GetNamedProperty r3, [11], [38]
 1461 E> 0x3853f7525854 @  132 : 6d f8 28          TestLessThan r2, [40]
         0x3853f7525857 @  135 : 99 05             JumpIfFalse [5] (0x3853f752585c @ 140)
 1498 S> 0x3853f7525859 @  137 : 13 0d             LdaConstant [13]
 1512 S> 0x3853f752585b @  139 : a9                Return 
 1561 S> 0x3853f752585c @  140 : 2d f9 0e 29       GetNamedProperty r1, [14], [41]
         0x3853f7525860 @  144 : c2                Star2 
 1570 E> 0x3853f7525861 @  145 : 2d 02 06 2b       GetNamedProperty <this>, [6], [43]
         0x3853f7525865 @  149 : c1                Star3 
 1579 E> 0x3853f7525866 @  150 : 2d f7 0e 2d       GetNamedProperty r3, [14], [45]
 1563 E> 0x3853f752586a @  154 : 6e f8 2f          TestGreaterThan r2, [47]
         0x3853f752586d @  157 : 99 05             JumpIfFalse [5] (0x3853f7525872 @ 162)
 1600 S> 0x3853f752586f @  159 : 13 0f             LdaConstant [15]
 1614 S> 0x3853f7525871 @  161 : a9                Return 
 1664 S> 0x3853f7525872 @  162 : 13 10             LdaConstant [16]
 1676 S> 0x3853f7525874 @  164 : a9                Return 
 1709 S> 0x3853f7525875 @  165 : 0f                LdaNull 
 1721 S> 0x3853f7525876 @  166 : a9                Return 
Constant pool (size = 17)
0x3853f7525879: [FixedArray] in OldSpace
 - map: 0x1ed25f4812e1 <Map>
 - length: 17
           0: 0x3853f7525379 <String[23]: #_lastTargetSeenPosition>
           1: 0x3853f7525911 <String[15]: #pathfindingGrid>
           2: 0x3853f7525931 <String[7]: #getPath>
           3: 0x3853f7524f99 <String[8]: #vector_1>
           4: 0x3853f7525681 <String[6]: #Vector>
           5: 0x3853f7525699 <String[12]: #fromPosition>
           6: 0x1ed25f485c19 <String[8]: #position>
           7: 0x1ed25f4855f9 <String[6]: #length>
           8: 0x1ed25f484a09 <String[7]: #console>
           9: 0x09467058ac99 <String[3]: #log>
          10: 0x3853f7525961 <String[13]: #No path found>
          11: 0x094670598ac9 <String[1]: #x>
          12: 0x3853f7525999 <String[5]: #right>
          13: 0x3853f75259b1 <String[4]: #left>
          14: 0x094670598ae1 <String[1]: #y>
          15: 0x3853f75259e1 <String[4]: #down>
          16: 0x3853f75259f9 <String[2]: #up>
Handler Table (size = 0)
Source Position Table (size = 108)
0x3853f7525a11 <ByteArray[108]>
0x3853f7525b11 points to: [0x3853f7525b80]
=== [0x3853f7525b80] DISASSEMBLY ===
Parameter count 2
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
 1800 S> 0x3853f7525b80 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3853f7525b82 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3853f7525b84 @    4 : c1                Star3 
 1809 E> 0x3853f7525b85 @    5 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x3853f7525b89 @    9 : c1                Star3 
 1816 E> 0x3853f7525b8a @   10 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x3853f7525b8e @   14 : c2                Star2 
 1835 E> 0x3853f7525b8f @   15 : 2d 03 03 04       GetNamedProperty a0, [3], [4]
         0x3853f7525b93 @   19 : c0                Star4 
 1845 E> 0x3853f7525b94 @   20 : 2d f6 04 06       GetNamedProperty r4, [4], [6]
         0x3853f7525b98 @   24 : c0                Star4 
 1816 E> 0x3853f7525b99 @   25 : 5e f8 f7 f6 08    CallProperty1 r2, r3, r4, [8]
         0x3853f7525b9e @   30 : c4                Star0 
 1887 S> 0x3853f7525b9f @   31 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3853f7525ba1 @   33 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3853f7525ba3 @   35 : c1                Star3 
 1896 E> 0x3853f7525ba4 @   36 : 2d f7 01 00       GetNamedProperty r3, [1], [0]
         0x3853f7525ba8 @   40 : c1                Star3 
 1903 E> 0x3853f7525ba9 @   41 : 2d f7 02 0a       GetNamedProperty r3, [2], [10]
         0x3853f7525bad @   45 : c2                Star2 
 1921 E> 0x3853f7525bae @   46 : 2d 02 04 0c       GetNamedProperty <this>, [4], [12]
         0x3853f7525bb2 @   50 : c0                Star4 
 1903 E> 0x3853f7525bb3 @   51 : 5e f8 f7 f6 0e    CallProperty1 r2, r3, r4, [14]
         0x3853f7525bb8 @   56 : c3                Star1 
 1959 S> 0x3853f7525bb9 @   57 : 2d fa 05 10       GetNamedProperty r0, [5], [16]
         0x3853f7525bbd @   61 : c2                Star2 
 1980 E> 0x3853f7525bbe @   62 : 2d f9 05 12       GetNamedProperty r1, [5], [18]
 1961 E> 0x3853f7525bc2 @   66 : 6c f8 14          TestEqualStrict r2, [20]
         0x3853f7525bc5 @   69 : 99 1e             JumpIfFalse [30] (0x3853f7525be3 @ 99)
 2009 S> 0x3853f7525bc7 @   71 : 2d 02 06 15       GetNamedProperty <this>, [6], [21]
         0x3853f7525bcb @   75 : c2                Star2 
 2039 E> 0x3853f7525bcc @   76 : 2d 02 07 17       GetNamedProperty <this>, [7], [23]
         0x3853f7525bd0 @   80 : c0                Star4 
         0x3853f7525bd1 @   81 : 13 08             LdaConstant [8]
         0x3853f7525bd3 @   83 : bd                Star7 
         0x3853f7525bd4 @   84 : 19 02 f7          Mov <this>, r3
         0x3853f7525bd7 @   87 : 19 f9 f5          Mov r1, r5
         0x3853f7525bda @   90 : 19 fa f4          Mov r0, r6
 2009 E> 0x3853f7525bdd @   93 : 5c f8 f7 05 19    CallProperty r2, r3-r7, [25]
 2083 S> 0x3853f7525be2 @   98 : a9                Return 
 2121 S> 0x3853f7525be3 @   99 : 2d fa 08 1b       GetNamedProperty r0, [8], [27]
         0x3853f7525be7 @  103 : c2                Star2 
 2142 E> 0x3853f7525be8 @  104 : 2d f9 08 1d       GetNamedProperty r1, [8], [29]
 2123 E> 0x3853f7525bec @  108 : 6c f8 1f          TestEqualStrict r2, [31]
         0x3853f7525bef @  111 : 99 1e             JumpIfFalse [30] (0x3853f7525c0d @ 141)
 2171 S> 0x3853f7525bf1 @  113 : 2d 02 06 20       GetNamedProperty <this>, [6], [32]
         0x3853f7525bf5 @  117 : c2                Star2 
 2201 E> 0x3853f7525bf6 @  118 : 2d 02 07 22       GetNamedProperty <this>, [7], [34]
         0x3853f7525bfa @  122 : c0                Star4 
         0x3853f7525bfb @  123 : 13 05             LdaConstant [5]
         0x3853f7525bfd @  125 : bd                Star7 
         0x3853f7525bfe @  126 : 19 02 f7          Mov <this>, r3
         0x3853f7525c01 @  129 : 19 f9 f5          Mov r1, r5
         0x3853f7525c04 @  132 : 19 fa f4          Mov r0, r6
 2171 E> 0x3853f7525c07 @  135 : 5c f8 f7 05 24    CallProperty r2, r3-r7, [36]
 2245 S> 0x3853f7525c0c @  140 : a9                Return 
 2264 S> 0x3853f7525c0d @  141 : 12                LdaFalse 
 2277 S> 0x3853f7525c0e @  142 : a9                Return 
Constant pool (size = 9)
0x3853f7525c11: [FixedArray] in OldSpace
 - map: 0x1ed25f4812e1 <Map>
 - length: 9
           0: 0x3853f7524f99 <String[8]: #vector_1>
           1: 0x3853f7525681 <String[6]: #Vector>
           2: 0x3853f7525699 <String[12]: #fromPosition>
           3: 0x1ed25f484939 <String[9]: #character>
           4: 0x1ed25f485c19 <String[8]: #position>
           5: 0x094670598ac9 <String[1]: #x>
           6: 0x3853f7525271 <String[24]: #anyObstacleBetweenPoints>
           7: 0x3853f75253a1 <String[5]: #_grid>
           8: 0x094670598ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 65)
0x3853f7525c69 <ByteArray[65]>
0x3853f7525d41 points to: [0x3853f7525db0]
=== [0x3853f7525db0] DISASSEMBLY ===
Parameter count 5
Register count 11
Frame size 88
OSR urgency: 0
Bytecode age: 0
 2346 S> 0x3853f7525db0 @    0 : 13 00             LdaConstant [0]
 2355 E> 0x3853f7525db2 @    2 : 6c 06 00          TestEqualStrict a3, [0]
         0x3853f7525db5 @    5 : 99 51             JumpIfFalse [81] (0x3853f7525e06 @ 86)
 2403 S> 0x3853f7525db7 @    7 : 2d 04 00 01       GetNamedProperty a1, [0], [1]
         0x3853f7525dbb @   11 : c0                Star4 
 2439 S> 0x3853f7525dbc @   12 : 2d 05 00 03       GetNamedProperty a2, [0], [3]
         0x3853f7525dc0 @   16 : bf                Star5 
 2475 S> 0x3853f7525dc1 @   17 : 2d 04 01 05       GetNamedProperty a1, [1], [5]
         0x3853f7525dc5 @   21 : be                Star6 
 2503 S> 0x3853f7525dc6 @   22 : 21 02 07          LdaGlobal [2], [7]
         0x3853f7525dc9 @   25 : bb                Star9 
 2508 E> 0x3853f7525dca @   26 : 2d f1 03 09       GetNamedProperty r9, [3], [9]
         0x3853f7525dce @   30 : bc                Star8 
 2508 E> 0x3853f7525dcf @   31 : 5f f2 f1 f6 f5 0b CallProperty2 r8, r9, r4, r5, [11]
         0x3853f7525dd5 @   37 : bd                Star7 
 2540 S> 0x3853f7525dd6 @   38 : 21 02 07          LdaGlobal [2], [7]
         0x3853f7525dd9 @   41 : ba                Star10 
 2545 E> 0x3853f7525dda @   42 : 2d f0 04 0d       GetNamedProperty r10, [4], [13]
         0x3853f7525dde @   46 : bb                Star9 
 2545 E> 0x3853f7525ddf @   47 : 5f f1 f0 f6 f5 0f CallProperty2 r9, r10, r4, r5, [15]
 2537 E> 0x3853f7525de5 @   53 : 6f f3 11          TestLessThanOrEqual r7, [17]
         0x3853f7525de8 @   56 : 99 1e             JumpIfFalse [30] (0x3853f7525e06 @ 86)
 2595 S> 0x3853f7525dea @   58 : 0b f3             Ldar r7
 2602 E> 0x3853f7525dec @   60 : 2f 03 12          GetKeyedProperty a0, [18]
         0x3853f7525def @   63 : bc                Star8 
         0x3853f7525df0 @   64 : 0b f4             Ldar r6
 2605 E> 0x3853f7525df2 @   66 : 2f f2 14          GetKeyedProperty r8, [20]
         0x3853f7525df5 @   69 : bc                Star8 
         0x3853f7525df6 @   70 : 0c                LdaZero 
 2614 E> 0x3853f7525df7 @   71 : 6c f2 16          TestEqualStrict r8, [22]
         0x3853f7525dfa @   74 : 99 04             JumpIfFalse [4] (0x3853f7525dfe @ 78)
 2643 S> 0x3853f7525dfc @   76 : 11                LdaTrue 
 2655 S> 0x3853f7525dfd @   77 : a9                Return 
 2573 S> 0x3853f7525dfe @   78 : 0b f3             Ldar r7
         0x3853f7525e00 @   80 : 51 17             Inc [23]
         0x3853f7525e02 @   82 : bd                Star7 
 2490 E> 0x3853f7525e03 @   83 : 89 2d 00          JumpLoop [45], [0] (0x3853f7525dd6 @ 38)
 2706 S> 0x3853f7525e06 @   86 : 13 01             LdaConstant [1]
 2715 E> 0x3853f7525e08 @   88 : 6c 06 18          TestEqualStrict a3, [24]
         0x3853f7525e0b @   91 : 99 51             JumpIfFalse [81] (0x3853f7525e5c @ 172)
 2763 S> 0x3853f7525e0d @   93 : 2d 04 01 05       GetNamedProperty a1, [1], [5]
         0x3853f7525e11 @   97 : c4                Star0 
 2799 S> 0x3853f7525e12 @   98 : 2d 05 01 19       GetNamedProperty a2, [1], [25]
         0x3853f7525e16 @  102 : c3                Star1 
 2835 S> 0x3853f7525e17 @  103 : 2d 04 00 01       GetNamedProperty a1, [0], [1]
         0x3853f7525e1b @  107 : c2                Star2 
 2863 S> 0x3853f7525e1c @  108 : 21 02 07          LdaGlobal [2], [7]
         0x3853f7525e1f @  111 : bb                Star9 
 2868 E> 0x3853f7525e20 @  112 : 2d f1 03 09       GetNamedProperty r9, [3], [9]
         0x3853f7525e24 @  116 : bc                Star8 
 2868 E> 0x3853f7525e25 @  117 : 5f f2 f1 fa f9 1b CallProperty2 r8, r9, r0, r1, [27]
         0x3853f7525e2b @  123 : c1                Star3 
 2900 S> 0x3853f7525e2c @  124 : 21 02 07          LdaGlobal [2], [7]
         0x3853f7525e2f @  127 : ba                Star10 
 2905 E> 0x3853f7525e30 @  128 : 2d f0 04 0d       GetNamedProperty r10, [4], [13]
         0x3853f7525e34 @  132 : bb                Star9 
 2905 E> 0x3853f7525e35 @  133 : 5f f1 f0 fa f9 1d CallProperty2 r9, r10, r0, r1, [29]
 2897 E> 0x3853f7525e3b @  139 : 6f f7 1f          TestLessThanOrEqual r3, [31]
         0x3853f7525e3e @  142 : 99 1e             JumpIfFalse [30] (0x3853f7525e5c @ 172)
 2955 S> 0x3853f7525e40 @  144 : 0b f8             Ldar r2
 2962 E> 0x3853f7525e42 @  146 : 2f 03 20          GetKeyedProperty a0, [32]
         0x3853f7525e45 @  149 : bc                Star8 
         0x3853f7525e46 @  150 : 0b f7             Ldar r3
 2970 E> 0x3853f7525e48 @  152 : 2f f2 22          GetKeyedProperty r8, [34]
         0x3853f7525e4b @  155 : bc                Star8 
         0x3853f7525e4c @  156 : 0c                LdaZero 
 2974 E> 0x3853f7525e4d @  157 : 6c f2 24          TestEqualStrict r8, [36]
         0x3853f7525e50 @  160 : 99 04             JumpIfFalse [4] (0x3853f7525e54 @ 164)
 3003 S> 0x3853f7525e52 @  162 : 11                LdaTrue 
 3015 S> 0x3853f7525e53 @  163 : a9                Return 
 2933 S> 0x3853f7525e54 @  164 : 0b f7             Ldar r3
         0x3853f7525e56 @  166 : 51 25             Inc [37]
         0x3853f7525e58 @  168 : c1                Star3 
 2850 E> 0x3853f7525e59 @  169 : 89 2d 00          JumpLoop [45], [0] (0x3853f7525e2c @ 124)
 3066 S> 0x3853f7525e5c @  172 : 12                LdaFalse 
 3079 S> 0x3853f7525e5d @  173 : a9                Return 
Constant pool (size = 5)
0x3853f7525e61: [FixedArray] in OldSpace
 - map: 0x1ed25f4812e1 <Map>
 - length: 5
           0: 0x094670598ac9 <String[1]: #x>
           1: 0x094670598ae1 <String[1]: #y>
           2: 0x09467059a991 <String[4]: #Math>
           3: 0x09467059a149 <String[3]: #min>
           4: 0x09467059a181 <String[3]: #max>
Handler Table (size = 0)
Source Position Table (size = 104)
0x3853f7525ee1 <ByteArray[104]>
<< OUTPUTTING DISASSEMBLY END >>
