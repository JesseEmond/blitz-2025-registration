<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x3899d6624dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x3899d6624dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x3899d6624dcc @    4 : c4                Star0 
 2973 S> 0x3899d6624dcd @    5 : a9                Return 
Constant pool (size = 1)
0x3899d6624dd1: [FixedArray] in OldSpace
 - map: 0x3637469c12e1 <Map>
 - length: 1
           0: 0x3899d6624de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3899d6625f49 <ByteArray[7]>
0x3899d6624de9 points to: [0x3899d6624e58]
=== [0x3899d6624e58] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   76 S> 0x3899d6624e58 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x3899d6624e5b @    3 : c1                Star3 
   83 E> 0x3899d6624e5c @    4 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x3899d6624e60 @    8 : c2                Star2 
         0x3899d6624e61 @    9 : 13 02             LdaConstant [2]
         0x3899d6624e63 @   11 : bf                Star5 
   98 E> 0x3899d6624e64 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x3899d6624e68 @   16 : be                Star6 
         0x3899d6624e69 @   17 : 19 03 f6          Mov a0, r4
   83 E> 0x3899d6624e6c @   20 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x3899d6624e71 @   25 : 0e                LdaUndefined 
  164 E> 0x3899d6624e72 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  191 S> 0x3899d6624e76 @   30 : 13 05             LdaConstant [5]
         0x3899d6624e78 @   32 : c1                Star3 
  191 E> 0x3899d6624e79 @   33 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
         0x3899d6624e7d @   37 : c4                Star0 
  252 E> 0x3899d6624e7e @   38 : 2d fa 07 0b       GetNamedProperty r0, [7], [11]
         0x3899d6624e82 @   42 : bf                Star5 
         0x3899d6624e83 @   43 : 80 08 00 02       CreateClosure [8], [0], #2
         0x3899d6624e87 @   47 : c2                Star2 
         0x3899d6624e88 @   48 : 13 06             LdaConstant [6]
         0x3899d6624e8a @   50 : c1                Star3 
         0x3899d6624e8b @   51 : 80 09 01 02       CreateClosure [9], [1], #2
         0x3899d6624e8f @   55 : be                Star6 
         0x3899d6624e90 @   56 : 80 0a 02 02       CreateClosure [10], [2], #2
         0x3899d6624e94 @   60 : bd                Star7 
         0x3899d6624e95 @   61 : 19 f8 f6          Mov r2, r4
         0x3899d6624e98 @   64 : 65 28 00 f7 05    CallRuntime [DefineClass], r3-r7
         0x3899d6624e9d @   69 : c1                Star3 
         0x3899d6624e9e @   70 : 19 f6 f9          Mov r4, r1
 2886 S> 0x3899d6624ea1 @   73 : 0b f9             Ldar r1
 2911 E> 0x3899d6624ea3 @   75 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x3899d6624ea7 @   79 : 0e                LdaUndefined 
 2970 S> 0x3899d6624ea8 @   80 : a9                Return 
Constant pool (size = 11)
0x3899d6624eb1: [FixedArray] in OldSpace
 - map: 0x3637469c12e1 <Map>
 - length: 11
           0: 0x3637469c5ab9 <String[6]: #Object>
           1: 0x3637469c4c11 <String[14]: #defineProperty>
           2: 0x3899d6624f19 <String[10]: #__esModule>
           3: 0x3899d6624f39 <ObjectBoilerplateDescription[3]>
           4: 0x3899d6624f61 <String[16]: #AggressiveThreat>
           5: 0x3899d6624f81 <String[8]: #./threat>
           6: 0x3899d6624f99 <FixedArray[7]>
           7: 0x3899d6625149 <String[6]: #Threat>
           8: 0x3899d6625161 <SharedFunctionInfo AggressiveThreat>
           9: 0x3899d6625391 <SharedFunctionInfo get_next_move>
          10: 0x3899d66256d1 <SharedFunctionInfo getAggressivePath>
Handler Table (size = 0)
Source Position Table (size = 31)
0x3899d6625eb1 <ByteArray[31]>
Object boilerplate at 0x3899d6624f39: 
0x3899d6624f39: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3637469c2059 <Map>
 - length: 3
           0: 8
           1: 0x3637469c6419 <String[5]: #value>
           2: 0x3637469c1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x3899d6624f99 has 7 elements:
0x3899d6624f99: [FixedArray] in OldSpace
 - map: 0x3637469c12e1 <Map>
 - length: 7
           0: 5
           1: 0x3899d6624fe1 <DescriptorArray[4]>
           2: 0x3637469c3301 <NumberDictionary[7]>
           3: 0x3637469c1329 <FixedArray[0]>
           4: 0x3899d66250a1 <DescriptorArray[3]>
           5: 0x3637469c3301 <NumberDictionary[7]>
           6: 0x3637469c1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x5 (5)
Element[1]
0x3899d6624fe1: [DescriptorArray] in OldSpace
 - map: 0x3637469c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3637469c55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x20f2255b4fe1 <AccessorInfo>
  [1]: 0x3637469c58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x20f2255b4f71 <AccessorInfo>
  [2]: 0x3637469c5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x20f2255b5051 <AccessorInfo>
  [3]: 0x3637469c65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x3899d6625089 <ClassPositions 212, 2885>
Element[2]
0x3637469c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x3637469c1329: [FixedArray] in ReadOnlySpace
 - map: 0x3637469c12e1 <Map>
 - length: 0
Element[4]
0x3899d66250a1: [DescriptorArray] in OldSpace
 - map: 0x3637469c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 3
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3637469c4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 2, attrs: [W_C]) @ 1
  [1]: 0x3899d6625101: [String] in OldSpace: #get_next_move (const data descriptor, p: 1, attrs: [W_C]) @ 3
  [2]: 0x3899d6625121: [String] in OldSpace: #getAggressivePath (const data descriptor, p: 0, attrs: [W_C]) @ 4
Element[5]
0x3637469c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x3637469c1329: [FixedArray] in ReadOnlySpace
 - map: 0x3637469c12e1 <Map>
 - length: 0
0x3899d6625161 points to: [0x3899d66251d0]
=== [0x3899d66251d0] DISASSEMBLY ===
Parameter count 5
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
         0x3899d66251d0 @    0 : 19 fe f9          Mov <closure>, r1
  323 S> 0x3899d66251d3 @    3 : 0b f9             Ldar r1
         0x3899d66251d5 @    5 : 5a f7             GetSuperConstructor r3
  358 E> 0x3899d66251d7 @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x3899d66251d9 @    9 : 0b fa             Ldar r0
         0x3899d66251db @   11 : 19 03 f6          Mov a0, r4
         0x3899d66251de @   14 : 19 04 f5          Mov a1, r5
         0x3899d66251e1 @   17 : 19 05 f4          Mov a2, r6
         0x3899d66251e4 @   20 : 19 06 f3          Mov a3, r7
  323 E> 0x3899d66251e7 @   23 : 69 f7 f6 04 00    Construct r3, r4-r7, [0]
         0x3899d66251ec @   28 : bc                Star8 
         0x3899d66251ed @   29 : 0b 02             Ldar <this>
         0x3899d66251ef @   31 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x3899d66251f0 @   32 : 19 f2 02          Mov r8, <this>
         0x3899d66251f3 @   35 : 0b 02             Ldar <this>
         0x3899d66251f5 @   37 : ab                ThrowSuperNotCalledIfHole 
  370 S> 0x3899d66251f6 @   38 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 15)
0x3899d66251f9 <ByteArray[15]>
0x3899d6625391 points to: [0x3899d6625400]
=== [0x3899d6625400] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
  425 S> 0x3899d6625400 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3899d6625404 @    4 : c2                Star2 
  448 E> 0x3899d6625405 @    5 : 2d 02 01 02       GetNamedProperty <this>, [1], [2]
         0x3899d6625409 @    9 : c0                Star4 
         0x3899d662540a @   10 : 7c 02 04 29       CreateObjectLiteral [2], [4], #41
         0x3899d662540e @   14 : bf                Star5 
  463 E> 0x3899d662540f @   15 : 2d 02 03 05       GetNamedProperty <this>, [3], [5]
         0x3899d6625413 @   19 : be                Star6 
  472 E> 0x3899d6625414 @   20 : 2d f4 04 07       GetNamedProperty r6, [4], [7]
         0x3899d6625418 @   24 : 33 f5 04 09       DefineNamedOwnProperty r5, [4], [9]
  483 E> 0x3899d662541c @   28 : 2d 02 03 0b       GetNamedProperty <this>, [3], [11]
         0x3899d6625420 @   32 : be                Star6 
  492 E> 0x3899d6625421 @   33 : 2d f4 05 0d       GetNamedProperty r6, [5], [13]
         0x3899d6625425 @   37 : 33 f5 05 0f       DefineNamedOwnProperty r5, [5], [15]
  502 E> 0x3899d6625429 @   41 : 2d 02 06 11       GetNamedProperty <this>, [6], [17]
         0x3899d662542d @   45 : be                Star6 
         0x3899d662542e @   46 : 19 02 f7          Mov <this>, r3
  425 E> 0x3899d6625431 @   49 : 5c f8 f7 04 13    CallProperty r2, r3-r6, [19]
         0x3899d6625436 @   54 : c4                Star0 
  551 S> 0x3899d6625437 @   55 : 0c                LdaZero 
  555 E> 0x3899d6625438 @   56 : 2f fa 15          GetKeyedProperty r0, [21]
         0x3899d662543b @   59 : c3                Star1 
  568 S> 0x3899d662543c @   60 : 97 47             JumpIfToBooleanFalse [71] (0x3899d6625483 @ 131)
  617 S> 0x3899d662543e @   62 : 2d f9 04 17       GetNamedProperty r1, [4], [23]
         0x3899d6625442 @   66 : c2                Star2 
  626 E> 0x3899d6625443 @   67 : 2d 02 03 19       GetNamedProperty <this>, [3], [25]
         0x3899d6625447 @   71 : c1                Star3 
  635 E> 0x3899d6625448 @   72 : 2d f7 04 1b       GetNamedProperty r3, [4], [27]
  619 E> 0x3899d662544c @   76 : 6e f8 1d          TestGreaterThan r2, [29]
         0x3899d662544f @   79 : 99 05             JumpIfFalse [5] (0x3899d6625454 @ 84)
  710 S> 0x3899d6625451 @   81 : 13 07             LdaConstant [7]
  725 S> 0x3899d6625453 @   83 : a9                Return 
  774 S> 0x3899d6625454 @   84 : 2d f9 04 17       GetNamedProperty r1, [4], [23]
         0x3899d6625458 @   88 : c2                Star2 
  783 E> 0x3899d6625459 @   89 : 2d 02 03 1e       GetNamedProperty <this>, [3], [30]
         0x3899d662545d @   93 : c1                Star3 
  792 E> 0x3899d662545e @   94 : 2d f7 04 20       GetNamedProperty r3, [4], [32]
  776 E> 0x3899d6625462 @   98 : 6d f8 22          TestLessThan r2, [34]
         0x3899d6625465 @  101 : 99 05             JumpIfFalse [5] (0x3899d662546a @ 106)
  866 S> 0x3899d6625467 @  103 : 13 08             LdaConstant [8]
  880 S> 0x3899d6625469 @  105 : a9                Return 
  929 S> 0x3899d662546a @  106 : 2d f9 05 23       GetNamedProperty r1, [5], [35]
         0x3899d662546e @  110 : c2                Star2 
  938 E> 0x3899d662546f @  111 : 2d 02 03 25       GetNamedProperty <this>, [3], [37]
         0x3899d6625473 @  115 : c1                Star3 
  947 E> 0x3899d6625474 @  116 : 2d f7 05 27       GetNamedProperty r3, [5], [39]
  931 E> 0x3899d6625478 @  120 : 6e f8 29          TestGreaterThan r2, [41]
         0x3899d662547b @  123 : 99 05             JumpIfFalse [5] (0x3899d6625480 @ 128)
 1021 S> 0x3899d662547d @  125 : 13 09             LdaConstant [9]
 1035 S> 0x3899d662547f @  127 : a9                Return 
 1136 S> 0x3899d6625480 @  128 : 13 0a             LdaConstant [10]
 1148 S> 0x3899d6625482 @  130 : a9                Return 
 1181 S> 0x3899d6625483 @  131 : 0f                LdaNull 
 1193 S> 0x3899d6625484 @  132 : a9                Return 
Constant pool (size = 11)
0x3899d6625489: [FixedArray] in OldSpace
 - map: 0x3637469c12e1 <Map>
 - length: 11
           0: 0x3899d6625121 <String[17]: #getAggressivePath>
           1: 0x20f225589ea9 <String[3]: #map>
           2: 0x3899d6625509 <ObjectBoilerplateDescription[5]>
           3: 0x3637469c5c19 <String[8]: #position>
           4: 0x20f225598ac9 <String[1]: #x>
           5: 0x20f225598ae1 <String[1]: #y>
           6: 0x3899d6625571 <String[17]: #characterPosition>
           7: 0x3899d6625599 <String[5]: #right>
           8: 0x3899d66255b1 <String[4]: #left>
           9: 0x3899d66255c9 <String[4]: #down>
          10: 0x3899d66255e1 <String[2]: #up>
Handler Table (size = 0)
Source Position Table (size = 80)
0x3899d66255f9 <ByteArray[80]>
Object boilerplate at 0x3899d6625509: 
0x3899d6625509: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3637469c2059 <Map>
 - length: 5
           0: 8
           1: 0x20f225598ac9 <String[1]: #x>
           2: 0x3637469c1501 <Odd Oddball: uninitialized>
           3: 0x20f225598ae1 <String[1]: #y>
           4: 0x3637469c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x3899d66256d1 points to: [0x3899d6625740]
=== [0x3899d6625740] DISASSEMBLY ===
Parameter count 4
Register count 15
Frame size 120
OSR urgency: 0
Bytecode age: 0
 1221 E> 0x3899d6625740 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x3899d6625743 @    3 : 1a ef             PushContext r11
         0x3899d6625745 @    5 : 10                LdaTheHole 
         0x3899d6625746 @    6 : 25 02             StaCurrentContextSlot [2]
 1270 S> 0x3899d6625748 @    8 : 7d                CreateEmptyObjectLiteral 
 1270 E> 0x3899d6625749 @    9 : 25 02             StaCurrentContextSlot [2]
 1295 S> 0x3899d662574b @   11 : 7d                CreateEmptyObjectLiteral 
         0x3899d662574c @   12 : c4                Star0 
 1317 S> 0x3899d662574d @   13 : 7b 00             CreateEmptyArrayLiteral [0]
         0x3899d662574f @   15 : c3                Star1 
 1333 S> 0x3899d6625750 @   16 : 0e                LdaUndefined 
         0x3899d6625751 @   17 : c2                Star2 
 1336 S> 0x3899d6625752 @   18 : 0e                LdaUndefined 
         0x3899d6625753 @   19 : c1                Star3 
 1352 S> 0x3899d6625754 @   20 : 0c                LdaZero 
         0x3899d6625755 @   21 : c2                Star2 
 1367 S> 0x3899d6625756 @   22 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
 1361 E> 0x3899d662575a @   26 : 6d f8 03          TestLessThan r2, [3]
         0x3899d662575d @   29 : 99 7a             JumpIfFalse [122] (0x3899d66257d7 @ 151)
 1394 S> 0x3899d662575f @   31 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3899d6625761 @   33 : b8                Star12 
 1399 E> 0x3899d6625762 @   34 : 7d                CreateEmptyObjectLiteral 
 1402 E> 0x3899d6625763 @   35 : 34 ee f8 04       SetKeyedProperty r12, r2, [4]
 1425 S> 0x3899d6625767 @   39 : 7d                CreateEmptyObjectLiteral 
 1428 E> 0x3899d6625768 @   40 : 34 fa f8 06       SetKeyedProperty r0, r2, [6]
 1451 S> 0x3899d662576c @   44 : 0c                LdaZero 
         0x3899d662576d @   45 : c1                Star3 
 1460 S> 0x3899d662576e @   46 : 0b f8             Ldar r2
 1465 E> 0x3899d6625770 @   48 : 2f 03 08          GetKeyedProperty a0, [8]
         0x3899d6625773 @   51 : b7                Star13 
 1469 E> 0x3899d6625774 @   52 : 2d ed 01 0a       GetNamedProperty r13, [1], [10]
 1460 E> 0x3899d6625778 @   56 : 6d f7 0c          TestLessThan r3, [12]
         0x3899d662577b @   59 : 99 54             JumpIfFalse [84] (0x3899d66257cf @ 143)
 1500 S> 0x3899d662577d @   61 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3899d662577f @   63 : b8                Star12 
         0x3899d6625780 @   64 : 0b f8             Ldar r2
 1504 E> 0x3899d6625782 @   66 : 2f ee 0d          GetKeyedProperty r12, [13]
         0x3899d6625785 @   69 : b8                Star12 
 1513 E> 0x3899d6625786 @   70 : 21 02 0f          LdaGlobal [2], [15]
 1511 E> 0x3899d6625789 @   73 : 34 ee f7 11       SetKeyedProperty r12, r3, [17]
 1539 S> 0x3899d662578d @   77 : 0b f8             Ldar r2
 1543 E> 0x3899d662578f @   79 : 2f fa 13          GetKeyedProperty r0, [19]
         0x3899d6625792 @   82 : b8                Star12 
         0x3899d6625793 @   83 : 0f                LdaNull 
 1550 E> 0x3899d6625794 @   84 : 34 ee f7 15       SetKeyedProperty r12, r3, [21]
 1574 S> 0x3899d6625798 @   88 : 0b f8             Ldar r2
 1581 E> 0x3899d662579a @   90 : 2f 03 17          GetKeyedProperty a0, [23]
         0x3899d662579d @   93 : b8                Star12 
         0x3899d662579e @   94 : 0b f7             Ldar r3
 1584 E> 0x3899d66257a0 @   96 : 2f ee 19          GetKeyedProperty r12, [25]
         0x3899d66257a3 @   99 : b8                Star12 
         0x3899d66257a4 @  100 : 0c                LdaZero 
 1588 E> 0x3899d66257a5 @  101 : 6c ee 1b          TestEqualStrict r12, [27]
         0x3899d66257a8 @  104 : 99 04             JumpIfFalse [4] (0x3899d66257ac @ 108)
 1615 S> 0x3899d66257aa @  106 : 8a 1d             Jump [29] (0x3899d66257c7 @ 135)
 1643 S> 0x3899d66257ac @  108 : 2d f9 03 1c       GetNamedProperty r1, [3], [28]
         0x3899d66257b0 @  112 : b8                Star12 
         0x3899d66257b1 @  113 : 7c 04 1e 29       CreateObjectLiteral [4], [30], #41
         0x3899d66257b5 @  117 : b6                Star14 
         0x3899d66257b6 @  118 : 0b f8             Ldar r2
 1653 E> 0x3899d66257b8 @  120 : 33 ec 05 1f       DefineNamedOwnProperty r14, [5], [31]
         0x3899d66257bc @  124 : 0b f7             Ldar r3
 1659 E> 0x3899d66257be @  126 : 33 ec 06 21       DefineNamedOwnProperty r14, [6], [33]
 1643 E> 0x3899d66257c2 @  130 : 5e ee f9 ec 23    CallProperty1 r12, r1, r14, [35]
 1478 S> 0x3899d66257c7 @  135 : 0b f7             Ldar r3
         0x3899d66257c9 @  137 : 51 25             Inc [37]
         0x3899d66257cb @  139 : c1                Star3 
 1446 E> 0x3899d66257cc @  140 : 89 5e 01          JumpLoop [94], [1] (0x3899d662576e @ 46)
 1376 S> 0x3899d66257cf @  143 : 0b f8             Ldar r2
         0x3899d66257d1 @  145 : 51 26             Inc [38]
         0x3899d66257d3 @  147 : c2                Star2 
 1347 E> 0x3899d66257d4 @  148 : 89 7e 00          JumpLoop [126], [0] (0x3899d6625756 @ 22)
 1697 S> 0x3899d66257d7 @  151 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3899d66257d9 @  153 : b8                Star12 
 1708 E> 0x3899d66257da @  154 : 2d 04 05 27       GetNamedProperty a1, [5], [39]
 1701 E> 0x3899d66257de @  158 : 2f ee 29          GetKeyedProperty r12, [41]
         0x3899d66257e1 @  161 : b8                Star12 
 1717 E> 0x3899d66257e2 @  162 : 2d 04 06 2b       GetNamedProperty a1, [6], [43]
         0x3899d66257e6 @  166 : b7                Star13 
         0x3899d66257e7 @  167 : 0c                LdaZero 
 1720 E> 0x3899d66257e8 @  168 : 34 ee ed 2d       SetKeyedProperty r12, r13, [45]
 1742 S> 0x3899d66257ec @  172 : 2d f9 01 2f       GetNamedProperty r1, [1], [47]
         0x3899d66257f0 @  176 : b8                Star12 
         0x3899d66257f1 @  177 : 0c                LdaZero 
 1749 E> 0x3899d66257f2 @  178 : 6e ee 31          TestGreaterThan r12, [49]
         0x3899d66257f5 @  181 : 99 d9             JumpIfFalse [217] (0x3899d66258ce @ 398)
 1770 S> 0x3899d66257f7 @  183 : 2d f9 07 32       GetNamedProperty r1, [7], [50]
         0x3899d66257fb @  187 : b8                Star12 
         0x3899d66257fc @  188 : 80 08 00 02       CreateClosure [8], [0], #2
         0x3899d6625800 @  192 : b6                Star14 
 1770 E> 0x3899d6625801 @  193 : 5e ee f9 ec 34    CallProperty1 r12, r1, r14, [52]
 1891 S> 0x3899d6625806 @  198 : 2d f9 09 36       GetNamedProperty r1, [9], [54]
         0x3899d662580a @  202 : b8                Star12 
 1891 E> 0x3899d662580b @  203 : 5d ee f9 38       CallProperty0 r12, r1, [56]
         0x3899d662580f @  207 : be                Star6 
 1990 S> 0x3899d6625810 @  208 : 79 0a 3a 04       CreateArrayLiteral [10], [58], #4
         0x3899d6625814 @  212 : bd                Star7 
 2154 S> 0x3899d6625815 @  213 : 0c                LdaZero 
         0x3899d6625816 @  214 : c2                Star2 
 2175 S> 0x3899d6625817 @  215 : 2d f3 01 3b       GetNamedProperty r7, [1], [59]
 2163 E> 0x3899d662581b @  219 : 6d f8 3d          TestLessThan r2, [61]
         0x3899d662581e @  222 : 99 ad             JumpIfFalse [173] (0x3899d66258cb @ 395)
 2221 S> 0x3899d6625820 @  224 : 2d f4 05 3f       GetNamedProperty r6, [5], [63]
         0x3899d6625824 @  228 : b8                Star12 
         0x3899d6625825 @  229 : 0b f8             Ldar r2
 2234 E> 0x3899d6625827 @  231 : 2f f3 41          GetKeyedProperty r7, [65]
         0x3899d662582a @  234 : b7                Star13 
 2238 E> 0x3899d662582b @  235 : 2d ed 05 43       GetNamedProperty r13, [5], [67]
 2223 E> 0x3899d662582f @  239 : 39 ee 3e          Add r12, [62]
         0x3899d6625832 @  242 : bc                Star8 
 2272 S> 0x3899d6625833 @  243 : 2d f4 06 46       GetNamedProperty r6, [6], [70]
         0x3899d6625837 @  247 : b8                Star12 
         0x3899d6625838 @  248 : 0b f8             Ldar r2
 2285 E> 0x3899d662583a @  250 : 2f f3 48          GetKeyedProperty r7, [72]
         0x3899d662583d @  253 : b7                Star13 
 2289 E> 0x3899d662583e @  254 : 2d ed 06 4a       GetNamedProperty r13, [6], [74]
 2274 E> 0x3899d6625842 @  258 : 39 ee 45          Add r12, [69]
         0x3899d6625845 @  261 : bb                Star9 
 2308 S> 0x3899d6625846 @  262 : 0c                LdaZero 
 2315 E> 0x3899d6625847 @  263 : 6d f2 4c          TestLessThan r8, [76]
         0x3899d662584a @  266 : 98 1f             JumpIfTrue [31] (0x3899d6625869 @ 297)
 2333 E> 0x3899d662584c @  268 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
 2325 E> 0x3899d6625850 @  272 : 6c f2 4d          TestEqualStrict r8, [77]
         0x3899d6625853 @  275 : 98 16             JumpIfTrue [22] (0x3899d6625869 @ 297)
         0x3899d6625855 @  277 : 0c                LdaZero 
 2346 E> 0x3899d6625856 @  278 : 6d f1 4e          TestLessThan r9, [78]
         0x3899d6625859 @  281 : 98 10             JumpIfTrue [16] (0x3899d6625869 @ 297)
         0x3899d662585b @  283 : 0c                LdaZero 
 2363 E> 0x3899d662585c @  284 : 2f 03 4f          GetKeyedProperty a0, [79]
         0x3899d662585f @  287 : b7                Star13 
 2367 E> 0x3899d6625860 @  288 : 2d ed 01 51       GetNamedProperty r13, [1], [81]
 2356 E> 0x3899d6625864 @  292 : 6c f1 53          TestEqualStrict r9, [83]
         0x3899d6625867 @  295 : 99 04             JumpIfFalse [4] (0x3899d662586b @ 299)
 2395 S> 0x3899d6625869 @  297 : 8a 5a             Jump [90] (0x3899d66258c3 @ 387)
 2421 S> 0x3899d662586b @  299 : 0b f2             Ldar r8
 2428 E> 0x3899d662586d @  301 : 2f 03 54          GetKeyedProperty a0, [84]
         0x3899d6625870 @  304 : b8                Star12 
         0x3899d6625871 @  305 : 0b f1             Ldar r9
 2432 E> 0x3899d6625873 @  307 : 2f ee 56          GetKeyedProperty r12, [86]
         0x3899d6625876 @  310 : b8                Star12 
         0x3899d6625877 @  311 : 0c                LdaZero 
 2437 E> 0x3899d6625878 @  312 : 6c ee 58          TestEqualStrict r12, [88]
         0x3899d662587b @  315 : 99 04             JumpIfFalse [4] (0x3899d662587f @ 319)
 2464 S> 0x3899d662587d @  317 : 8a 46             Jump [70] (0x3899d66258c3 @ 387)
 2502 S> 0x3899d662587f @  319 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3899d6625881 @  321 : b8                Star12 
 2511 E> 0x3899d6625882 @  322 : 2d f4 05 3f       GetNamedProperty r6, [5], [63]
 2506 E> 0x3899d6625886 @  326 : 2f ee 5a          GetKeyedProperty r12, [90]
         0x3899d6625889 @  329 : b8                Star12 
 2518 E> 0x3899d662588a @  330 : 2d f4 06 46       GetNamedProperty r6, [6], [70]
 2513 E> 0x3899d662588e @  334 : 2f ee 5c          GetKeyedProperty r12, [92]
 2521 E> 0x3899d6625891 @  337 : 45 01 59          AddSmi [1], [89]
         0x3899d6625894 @  340 : ba                Star10 
 2542 S> 0x3899d6625895 @  341 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3899d6625897 @  343 : b7                Star13 
         0x3899d6625898 @  344 : 0b f2             Ldar r8
 2556 E> 0x3899d662589a @  346 : 2f ed 5e          GetKeyedProperty r13, [94]
         0x3899d662589d @  349 : b7                Star13 
         0x3899d662589e @  350 : 0b f1             Ldar r9
 2560 E> 0x3899d66258a0 @  352 : 2f ed 60          GetKeyedProperty r13, [96]
 2550 E> 0x3899d66258a3 @  355 : 6d f0 62          TestLessThan r10, [98]
         0x3899d66258a6 @  358 : 99 1d             JumpIfFalse [29] (0x3899d66258c3 @ 387)
 2588 S> 0x3899d66258a8 @  360 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3899d66258aa @  362 : b8                Star12 
         0x3899d66258ab @  363 : 0b f2             Ldar r8
 2592 E> 0x3899d66258ad @  365 : 2f ee 63          GetKeyedProperty r12, [99]
         0x3899d66258b0 @  368 : b8                Star12 
         0x3899d66258b1 @  369 : 0b f0             Ldar r10
 2601 E> 0x3899d66258b3 @  371 : 34 ee f1 65       SetKeyedProperty r12, r9, [101]
 2628 S> 0x3899d66258b7 @  375 : 0b f2             Ldar r8
 2632 E> 0x3899d66258b9 @  377 : 2f fa 67          GetKeyedProperty r0, [103]
         0x3899d66258bc @  380 : b8                Star12 
         0x3899d66258bd @  381 : 0b f4             Ldar r6
 2641 E> 0x3899d66258bf @  383 : 34 ee f1 69       SetKeyedProperty r12, r9, [105]
 2184 S> 0x3899d66258c3 @  387 : 0b f8             Ldar r2
         0x3899d66258c5 @  389 : 51 6b             Inc [107]
         0x3899d66258c7 @  391 : c2                Star2 
 2149 E> 0x3899d66258c8 @  392 : 89 b1 01          JumpLoop [177], [1] (0x3899d6625817 @ 215)
 1733 E> 0x3899d66258cb @  395 : 89 df 00          JumpLoop [223], [0] (0x3899d66257ec @ 172)
 2711 S> 0x3899d66258ce @  398 : 7b 6c             CreateEmptyArrayLiteral [108]
         0x3899d66258d0 @  400 : c0                Star4 
 2731 S> 0x3899d66258d1 @  401 : 19 05 f5          Mov a2, r5
         0x3899d66258d4 @  404 : 0b f5             Ldar r5
 2766 S> 0x3899d66258d6 @  406 : 2d f5 05 6d       GetNamedProperty r5, [5], [109]
 2763 E> 0x3899d66258da @  410 : 2f fa 6f          GetKeyedProperty r0, [111]
         0x3899d66258dd @  413 : b8                Star12 
 2771 E> 0x3899d66258de @  414 : 2d f5 06 71       GetNamedProperty r5, [6], [113]
 2768 E> 0x3899d66258e2 @  418 : 2f ee 73          GetKeyedProperty r12, [115]
         0x3899d66258e5 @  421 : 9a 1f             JumpIfNull [31] (0x3899d6625904 @ 452)
 2803 S> 0x3899d66258e7 @  423 : 2d f6 0b 75       GetNamedProperty r4, [11], [117]
         0x3899d66258eb @  427 : b8                Star12 
 2803 E> 0x3899d66258ec @  428 : 5e ee f6 f5 77    CallProperty1 r12, r4, r5, [119]
 2838 S> 0x3899d66258f1 @  433 : 2d f5 05 6d       GetNamedProperty r5, [5], [109]
 2835 E> 0x3899d66258f5 @  437 : 2f fa 79          GetKeyedProperty r0, [121]
         0x3899d66258f8 @  440 : b8                Star12 
 2843 E> 0x3899d66258f9 @  441 : 2d f5 06 71       GetNamedProperty r5, [6], [113]
 2840 E> 0x3899d66258fd @  445 : 2f ee 7b          GetKeyedProperty r12, [123]
         0x3899d6625900 @  448 : bf                Star5 
 2752 E> 0x3899d6625901 @  449 : 89 2b 00          JumpLoop [43], [0] (0x3899d66258d6 @ 406)
 2865 S> 0x3899d6625904 @  452 : 0b f6             Ldar r4
 2877 S> 0x3899d6625906 @  454 : a9                Return 
Constant pool (size = 12)
0x3899d6625909: [FixedArray] in OldSpace
 - map: 0x3637469c12e1 <Map>
 - length: 12
           0: 0x3899d6625979 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3637469c55f9 <String[6]: #length>
           2: 0x3637469c5381 <String[8]: #Infinity>
           3: 0x20f225589551 <String[4]: #push>
           4: 0x3899d6625a01 <ObjectBoilerplateDescription[5]>
           5: 0x20f225598ac9 <String[1]: #x>
           6: 0x20f225598ae1 <String[1]: #y>
           7: 0x20f22558eb61 <String[4]: #sort>
           8: 0x3899d6625a51 <SharedFunctionInfo>
           9: 0x20f22559c4e1 <String[3]: #pop>
          10: 0x3899d6625bd1 <ArrayBoilerplateDescription PACKED_ELEMENTS, 0x3899d6625be9 <FixedArray[4]>>
          11: 0x20f22558bfe1 <String[7]: #unshift>
Handler Table (size = 0)
Source Position Table (size = 249)
0x3899d6625d11 <ByteArray[249]>
Object boilerplate at 0x3899d6625a01: 
0x3899d6625a01: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3637469c2059 <Map>
 - length: 5
           0: 8
           1: 0x20f225598ac9 <String[1]: #x>
           2: 0x3637469c1501 <Odd Oddball: uninitialized>
           3: 0x20f225598ae1 <String[1]: #y>
           4: 0x3637469c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x3899d6625a51 points to: [0x3899d6625ac0]
=== [0x3899d6625ac0] DISASSEMBLY ===
Parameter count 3
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1809 S> 0x3899d6625ac0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3899d6625ac2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3899d6625ac4 @    4 : c4                Star0 
 1823 E> 0x3899d6625ac5 @    5 : 2d 04 01 01       GetNamedProperty a1, [1], [1]
 1820 E> 0x3899d6625ac9 @    9 : 2f fa 03          GetKeyedProperty r0, [3]
         0x3899d6625acc @   12 : c4                Star0 
 1828 E> 0x3899d6625acd @   13 : 2d 04 02 05       GetNamedProperty a1, [2], [5]
 1825 E> 0x3899d6625ad1 @   17 : 2f fa 07          GetKeyedProperty r0, [7]
         0x3899d6625ad4 @   20 : c4                Star0 
         0x3899d6625ad5 @   21 : 17 02             LdaImmutableCurrentContextSlot [2]
 1833 E> 0x3899d6625ad7 @   23 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3899d6625ad9 @   25 : c3                Star1 
 1840 E> 0x3899d6625ada @   26 : 2d 03 01 09       GetNamedProperty a0, [1], [9]
 1837 E> 0x3899d6625ade @   30 : 2f f9 0b          GetKeyedProperty r1, [11]
         0x3899d6625ae1 @   33 : c3                Star1 
 1845 E> 0x3899d6625ae2 @   34 : 2d 03 02 0d       GetNamedProperty a0, [2], [13]
 1842 E> 0x3899d6625ae6 @   38 : 2f f9 0f          GetKeyedProperty r1, [15]
 1831 E> 0x3899d6625ae9 @   41 : 3a fa 00          Sub r0, [0]
 1848 S> 0x3899d6625aec @   44 : a9                Return 
Constant pool (size = 3)
0x3899d6625af1: [FixedArray] in OldSpace
 - map: 0x3637469c12e1 <Map>
 - length: 3
           0: 0x3899d66259d1 <String[4]: #dist>
           1: 0x20f225598ac9 <String[1]: #x>
           2: 0x20f225598ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 27)
0x3899d6625b19 <ByteArray[27]>
Array boilerplate at 0x3899d6625bd1: 
0x3899d6625bd1: [ArrayBoilerplateDescription] in OldSpace
 - map: 0x3637469c3291 <Map[24]>
 - elements kind: PACKED_ELEMENTS
 - constant elements: 0x3899d6625be9 <FixedArray[4]>
           0: 0x3899d6625c19 <ObjectBoilerplateDescription[5]>
           1: 0x3899d6625c51 <ObjectBoilerplateDescription[5]>
           2: 0x3899d6625c89 <ObjectBoilerplateDescription[5]>
           3: 0x3899d6625cc1 <ObjectBoilerplateDescription[5]>
<< OUTPUTTING DISASSEMBLY END >>
