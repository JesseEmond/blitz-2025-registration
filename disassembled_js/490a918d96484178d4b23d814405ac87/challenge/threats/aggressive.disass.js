<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x296f590e4db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x296f590e4db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x296f590e4dbc @    4 : c4                Star0 
 2973 S> 0x296f590e4dbd @    5 : a9                Return 
Constant pool (size = 1)
0x296f590e4dc1: [FixedArray] in OldSpace
 - map: 0x00449ca012e1 <Map>
 - length: 1
           0: 0x296f590e4dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x296f590e5f39 <ByteArray[7]>
0x296f590e4dd9 points to: [0x296f590e4e48]
=== [0x296f590e4e48] DISASSEMBLY ===
Parameter count 6
Register count 8
Frame size 64
OSR urgency: 0
Bytecode age: 0
   76 S> 0x296f590e4e48 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x296f590e4e4b @    3 : c1                Star3 
   83 E> 0x296f590e4e4c @    4 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x296f590e4e50 @    8 : c2                Star2 
         0x296f590e4e51 @    9 : 13 02             LdaConstant [2]
         0x296f590e4e53 @   11 : bf                Star5 
   98 E> 0x296f590e4e54 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x296f590e4e58 @   16 : be                Star6 
         0x296f590e4e59 @   17 : 19 03 f6          Mov a0, r4
   83 E> 0x296f590e4e5c @   20 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x296f590e4e61 @   25 : 0e                LdaUndefined 
  164 E> 0x296f590e4e62 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  191 S> 0x296f590e4e66 @   30 : 13 05             LdaConstant [5]
         0x296f590e4e68 @   32 : c1                Star3 
  191 E> 0x296f590e4e69 @   33 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
         0x296f590e4e6d @   37 : c4                Star0 
  252 E> 0x296f590e4e6e @   38 : 2d fa 07 0b       GetNamedProperty r0, [7], [11]
         0x296f590e4e72 @   42 : bf                Star5 
         0x296f590e4e73 @   43 : 80 08 00 02       CreateClosure [8], [0], #2
         0x296f590e4e77 @   47 : c2                Star2 
         0x296f590e4e78 @   48 : 13 06             LdaConstant [6]
         0x296f590e4e7a @   50 : c1                Star3 
         0x296f590e4e7b @   51 : 80 09 01 02       CreateClosure [9], [1], #2
         0x296f590e4e7f @   55 : be                Star6 
         0x296f590e4e80 @   56 : 80 0a 02 02       CreateClosure [10], [2], #2
         0x296f590e4e84 @   60 : bd                Star7 
         0x296f590e4e85 @   61 : 19 f8 f6          Mov r2, r4
         0x296f590e4e88 @   64 : 65 28 00 f7 05    CallRuntime [DefineClass], r3-r7
         0x296f590e4e8d @   69 : c1                Star3 
         0x296f590e4e8e @   70 : 19 f6 f9          Mov r4, r1
 2886 S> 0x296f590e4e91 @   73 : 0b f9             Ldar r1
 2911 E> 0x296f590e4e93 @   75 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x296f590e4e97 @   79 : 0e                LdaUndefined 
 2970 S> 0x296f590e4e98 @   80 : a9                Return 
Constant pool (size = 11)
0x296f590e4ea1: [FixedArray] in OldSpace
 - map: 0x00449ca012e1 <Map>
 - length: 11
           0: 0x00449ca05ab9 <String[6]: #Object>
           1: 0x00449ca04c11 <String[14]: #defineProperty>
           2: 0x296f590e4f09 <String[10]: #__esModule>
           3: 0x296f590e4f29 <ObjectBoilerplateDescription[3]>
           4: 0x296f590e4f51 <String[16]: #AggressiveThreat>
           5: 0x296f590e4f71 <String[8]: #./threat>
           6: 0x296f590e4f89 <FixedArray[7]>
           7: 0x296f590e5139 <String[6]: #Threat>
           8: 0x296f590e5151 <SharedFunctionInfo AggressiveThreat>
           9: 0x296f590e5381 <SharedFunctionInfo get_next_move>
          10: 0x296f590e56c1 <SharedFunctionInfo getAggressivePath>
Handler Table (size = 0)
Source Position Table (size = 31)
0x296f590e5ea1 <ByteArray[31]>
Boilerplate at 0x296f590e4f29: 
0x296f590e4f29: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x00449ca02059 <Map>
 - length: 3
           0: 8
           1: 0x00449ca06419 <String[5]: #value>
           2: 0x00449ca01729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x296f590e4f89 has 7 elements:
0x296f590e4f89: [FixedArray] in OldSpace
 - map: 0x00449ca012e1 <Map>
 - length: 7
           0: 5
           1: 0x296f590e4fd1 <DescriptorArray[4]>
           2: 0x00449ca03301 <NumberDictionary[7]>
           3: 0x00449ca01329 <FixedArray[0]>
           4: 0x296f590e5091 <DescriptorArray[3]>
           5: 0x00449ca03301 <NumberDictionary[7]>
           6: 0x00449ca01329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x5 (5)
Element[1]
0x296f590e4fd1: [DescriptorArray] in OldSpace
 - map: 0x00449ca07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x449ca055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x0ce3749b4fe1 <AccessorInfo>
  [1]: 0x449ca058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x0ce3749b4f71 <AccessorInfo>
  [2]: 0x449ca05cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x0ce3749b5051 <AccessorInfo>
  [3]: 0x00449ca065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x296f590e5079 <ClassPositions 212, 2885>
Element[2]
0x449ca03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x449ca01329: [FixedArray] in ReadOnlySpace
 - map: 0x00449ca012e1 <Map>
 - length: 0
Element[4]
0x296f590e5091: [DescriptorArray] in OldSpace
 - map: 0x00449ca07761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 3
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x449ca04a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 1, attrs: [W_C]) @ 1
  [1]: 0x296f590e50f1: [String] in OldSpace: #get_next_move (const data descriptor, p: 0, attrs: [W_C]) @ 3
  [2]: 0x296f590e5111: [String] in OldSpace: #getAggressivePath (const data descriptor, p: 2, attrs: [W_C]) @ 4
Element[5]
0x449ca03301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x449ca01329: [FixedArray] in ReadOnlySpace
 - map: 0x00449ca012e1 <Map>
 - length: 0
0x296f590e5151 points to: [0x296f590e51c0]
=== [0x296f590e51c0] DISASSEMBLY ===
Parameter count 5
Register count 9
Frame size 72
OSR urgency: 0
Bytecode age: 0
         0x296f590e51c0 @    0 : 19 fe f9          Mov <closure>, r1
  323 S> 0x296f590e51c3 @    3 : 0b f9             Ldar r1
         0x296f590e51c5 @    5 : 5a f7             GetSuperConstructor r3
  358 E> 0x296f590e51c7 @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x296f590e51c9 @    9 : 0b fa             Ldar r0
         0x296f590e51cb @   11 : 19 03 f6          Mov a0, r4
         0x296f590e51ce @   14 : 19 04 f5          Mov a1, r5
         0x296f590e51d1 @   17 : 19 05 f4          Mov a2, r6
         0x296f590e51d4 @   20 : 19 06 f3          Mov a3, r7
  323 E> 0x296f590e51d7 @   23 : 69 f7 f6 04 00    Construct r3, r4-r7, [0]
         0x296f590e51dc @   28 : bc                Star8 
         0x296f590e51dd @   29 : 0b 02             Ldar <this>
         0x296f590e51df @   31 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x296f590e51e0 @   32 : 19 f2 02          Mov r8, <this>
         0x296f590e51e3 @   35 : 0b 02             Ldar <this>
         0x296f590e51e5 @   37 : ab                ThrowSuperNotCalledIfHole 
  370 S> 0x296f590e51e6 @   38 : a9                Return 
Constant pool (size = 0)
Handler Table (size = 0)
Source Position Table (size = 15)
0x296f590e51e9 <ByteArray[15]>
0x296f590e5381 points to: [0x296f590e53f0]
=== [0x296f590e53f0] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
  425 S> 0x296f590e53f0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x296f590e53f4 @    4 : c2                Star2 
  448 E> 0x296f590e53f5 @    5 : 2d 02 01 02       GetNamedProperty <this>, [1], [2]
         0x296f590e53f9 @    9 : c0                Star4 
         0x296f590e53fa @   10 : 7c 02 04 29       CreateObjectLiteral [2], [4], #41
         0x296f590e53fe @   14 : bf                Star5 
  463 E> 0x296f590e53ff @   15 : 2d 02 03 05       GetNamedProperty <this>, [3], [5]
         0x296f590e5403 @   19 : be                Star6 
  472 E> 0x296f590e5404 @   20 : 2d f4 04 07       GetNamedProperty r6, [4], [7]
         0x296f590e5408 @   24 : 33 f5 04 09       DefineNamedOwnProperty r5, [4], [9]
  483 E> 0x296f590e540c @   28 : 2d 02 03 0b       GetNamedProperty <this>, [3], [11]
         0x296f590e5410 @   32 : be                Star6 
  492 E> 0x296f590e5411 @   33 : 2d f4 05 0d       GetNamedProperty r6, [5], [13]
         0x296f590e5415 @   37 : 33 f5 05 0f       DefineNamedOwnProperty r5, [5], [15]
  502 E> 0x296f590e5419 @   41 : 2d 02 06 11       GetNamedProperty <this>, [6], [17]
         0x296f590e541d @   45 : be                Star6 
         0x296f590e541e @   46 : 19 02 f7          Mov <this>, r3
  425 E> 0x296f590e5421 @   49 : 5c f8 f7 04 13    CallProperty r2, r3-r6, [19]
         0x296f590e5426 @   54 : c4                Star0 
  551 S> 0x296f590e5427 @   55 : 0c                LdaZero 
  555 E> 0x296f590e5428 @   56 : 2f fa 15          GetKeyedProperty r0, [21]
         0x296f590e542b @   59 : c3                Star1 
  568 S> 0x296f590e542c @   60 : 97 47             JumpIfToBooleanFalse [71] (0x296f590e5473 @ 131)
  617 S> 0x296f590e542e @   62 : 2d f9 04 17       GetNamedProperty r1, [4], [23]
         0x296f590e5432 @   66 : c2                Star2 
  626 E> 0x296f590e5433 @   67 : 2d 02 03 19       GetNamedProperty <this>, [3], [25]
         0x296f590e5437 @   71 : c1                Star3 
  635 E> 0x296f590e5438 @   72 : 2d f7 04 1b       GetNamedProperty r3, [4], [27]
  619 E> 0x296f590e543c @   76 : 6e f8 1d          TestGreaterThan r2, [29]
         0x296f590e543f @   79 : 99 05             JumpIfFalse [5] (0x296f590e5444 @ 84)
  710 S> 0x296f590e5441 @   81 : 13 07             LdaConstant [7]
  725 S> 0x296f590e5443 @   83 : a9                Return 
  774 S> 0x296f590e5444 @   84 : 2d f9 04 17       GetNamedProperty r1, [4], [23]
         0x296f590e5448 @   88 : c2                Star2 
  783 E> 0x296f590e5449 @   89 : 2d 02 03 1e       GetNamedProperty <this>, [3], [30]
         0x296f590e544d @   93 : c1                Star3 
  792 E> 0x296f590e544e @   94 : 2d f7 04 20       GetNamedProperty r3, [4], [32]
  776 E> 0x296f590e5452 @   98 : 6d f8 22          TestLessThan r2, [34]
         0x296f590e5455 @  101 : 99 05             JumpIfFalse [5] (0x296f590e545a @ 106)
  866 S> 0x296f590e5457 @  103 : 13 08             LdaConstant [8]
  880 S> 0x296f590e5459 @  105 : a9                Return 
  929 S> 0x296f590e545a @  106 : 2d f9 05 23       GetNamedProperty r1, [5], [35]
         0x296f590e545e @  110 : c2                Star2 
  938 E> 0x296f590e545f @  111 : 2d 02 03 25       GetNamedProperty <this>, [3], [37]
         0x296f590e5463 @  115 : c1                Star3 
  947 E> 0x296f590e5464 @  116 : 2d f7 05 27       GetNamedProperty r3, [5], [39]
  931 E> 0x296f590e5468 @  120 : 6e f8 29          TestGreaterThan r2, [41]
         0x296f590e546b @  123 : 99 05             JumpIfFalse [5] (0x296f590e5470 @ 128)
 1021 S> 0x296f590e546d @  125 : 13 09             LdaConstant [9]
 1035 S> 0x296f590e546f @  127 : a9                Return 
 1136 S> 0x296f590e5470 @  128 : 13 0a             LdaConstant [10]
 1148 S> 0x296f590e5472 @  130 : a9                Return 
 1181 S> 0x296f590e5473 @  131 : 0f                LdaNull 
 1193 S> 0x296f590e5474 @  132 : a9                Return 
Constant pool (size = 11)
0x296f590e5479: [FixedArray] in OldSpace
 - map: 0x00449ca012e1 <Map>
 - length: 11
           0: 0x296f590e5111 <String[17]: #getAggressivePath>
           1: 0x0ce374989ea9 <String[3]: #map>
           2: 0x296f590e54f9 <ObjectBoilerplateDescription[5]>
           3: 0x00449ca05c19 <String[8]: #position>
           4: 0x0ce374998ac9 <String[1]: #x>
           5: 0x0ce374998ae1 <String[1]: #y>
           6: 0x296f590e5561 <String[17]: #characterPosition>
           7: 0x296f590e5589 <String[5]: #right>
           8: 0x296f590e55a1 <String[4]: #left>
           9: 0x296f590e55b9 <String[4]: #down>
          10: 0x296f590e55d1 <String[2]: #up>
Handler Table (size = 0)
Source Position Table (size = 80)
0x296f590e55e9 <ByteArray[80]>
Boilerplate at 0x296f590e54f9: 
0x296f590e54f9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x00449ca02059 <Map>
 - length: 5
           0: 8
           1: 0x0ce374998ac9 <String[1]: #x>
           2: 0x00449ca01501 <Odd Oddball: uninitialized>
           3: 0x0ce374998ae1 <String[1]: #y>
           4: 0x00449ca01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x296f590e56c1 points to: [0x296f590e5730]
=== [0x296f590e5730] DISASSEMBLY ===
Parameter count 4
Register count 15
Frame size 120
OSR urgency: 0
Bytecode age: 0
 1221 E> 0x296f590e5730 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x296f590e5733 @    3 : 1a ef             PushContext r11
         0x296f590e5735 @    5 : 10                LdaTheHole 
         0x296f590e5736 @    6 : 25 02             StaCurrentContextSlot [2]
 1270 S> 0x296f590e5738 @    8 : 7d                CreateEmptyObjectLiteral 
 1270 E> 0x296f590e5739 @    9 : 25 02             StaCurrentContextSlot [2]
 1295 S> 0x296f590e573b @   11 : 7d                CreateEmptyObjectLiteral 
         0x296f590e573c @   12 : c4                Star0 
 1317 S> 0x296f590e573d @   13 : 7b 00             CreateEmptyArrayLiteral [0]
         0x296f590e573f @   15 : c3                Star1 
 1333 S> 0x296f590e5740 @   16 : 0e                LdaUndefined 
         0x296f590e5741 @   17 : c2                Star2 
 1336 S> 0x296f590e5742 @   18 : 0e                LdaUndefined 
         0x296f590e5743 @   19 : c1                Star3 
 1352 S> 0x296f590e5744 @   20 : 0c                LdaZero 
         0x296f590e5745 @   21 : c2                Star2 
 1367 S> 0x296f590e5746 @   22 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
 1361 E> 0x296f590e574a @   26 : 6d f8 03          TestLessThan r2, [3]
         0x296f590e574d @   29 : 99 7a             JumpIfFalse [122] (0x296f590e57c7 @ 151)
 1394 S> 0x296f590e574f @   31 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x296f590e5751 @   33 : b8                Star12 
 1399 E> 0x296f590e5752 @   34 : 7d                CreateEmptyObjectLiteral 
 1402 E> 0x296f590e5753 @   35 : 34 ee f8 04       SetKeyedProperty r12, r2, [4]
 1425 S> 0x296f590e5757 @   39 : 7d                CreateEmptyObjectLiteral 
 1428 E> 0x296f590e5758 @   40 : 34 fa f8 06       SetKeyedProperty r0, r2, [6]
 1451 S> 0x296f590e575c @   44 : 0c                LdaZero 
         0x296f590e575d @   45 : c1                Star3 
 1460 S> 0x296f590e575e @   46 : 0b f8             Ldar r2
 1465 E> 0x296f590e5760 @   48 : 2f 03 08          GetKeyedProperty a0, [8]
         0x296f590e5763 @   51 : b7                Star13 
 1469 E> 0x296f590e5764 @   52 : 2d ed 01 0a       GetNamedProperty r13, [1], [10]
 1460 E> 0x296f590e5768 @   56 : 6d f7 0c          TestLessThan r3, [12]
         0x296f590e576b @   59 : 99 54             JumpIfFalse [84] (0x296f590e57bf @ 143)
 1500 S> 0x296f590e576d @   61 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x296f590e576f @   63 : b8                Star12 
         0x296f590e5770 @   64 : 0b f8             Ldar r2
 1504 E> 0x296f590e5772 @   66 : 2f ee 0d          GetKeyedProperty r12, [13]
         0x296f590e5775 @   69 : b8                Star12 
 1513 E> 0x296f590e5776 @   70 : 21 02 0f          LdaGlobal [2], [15]
 1511 E> 0x296f590e5779 @   73 : 34 ee f7 11       SetKeyedProperty r12, r3, [17]
 1539 S> 0x296f590e577d @   77 : 0b f8             Ldar r2
 1543 E> 0x296f590e577f @   79 : 2f fa 13          GetKeyedProperty r0, [19]
         0x296f590e5782 @   82 : b8                Star12 
         0x296f590e5783 @   83 : 0f                LdaNull 
 1550 E> 0x296f590e5784 @   84 : 34 ee f7 15       SetKeyedProperty r12, r3, [21]
 1574 S> 0x296f590e5788 @   88 : 0b f8             Ldar r2
 1581 E> 0x296f590e578a @   90 : 2f 03 17          GetKeyedProperty a0, [23]
         0x296f590e578d @   93 : b8                Star12 
         0x296f590e578e @   94 : 0b f7             Ldar r3
 1584 E> 0x296f590e5790 @   96 : 2f ee 19          GetKeyedProperty r12, [25]
         0x296f590e5793 @   99 : b8                Star12 
         0x296f590e5794 @  100 : 0c                LdaZero 
 1588 E> 0x296f590e5795 @  101 : 6c ee 1b          TestEqualStrict r12, [27]
         0x296f590e5798 @  104 : 99 04             JumpIfFalse [4] (0x296f590e579c @ 108)
 1615 S> 0x296f590e579a @  106 : 8a 1d             Jump [29] (0x296f590e57b7 @ 135)
 1643 S> 0x296f590e579c @  108 : 2d f9 03 1c       GetNamedProperty r1, [3], [28]
         0x296f590e57a0 @  112 : b8                Star12 
         0x296f590e57a1 @  113 : 7c 04 1e 29       CreateObjectLiteral [4], [30], #41
         0x296f590e57a5 @  117 : b6                Star14 
         0x296f590e57a6 @  118 : 0b f8             Ldar r2
 1653 E> 0x296f590e57a8 @  120 : 33 ec 05 1f       DefineNamedOwnProperty r14, [5], [31]
         0x296f590e57ac @  124 : 0b f7             Ldar r3
 1659 E> 0x296f590e57ae @  126 : 33 ec 06 21       DefineNamedOwnProperty r14, [6], [33]
 1643 E> 0x296f590e57b2 @  130 : 5e ee f9 ec 23    CallProperty1 r12, r1, r14, [35]
 1478 S> 0x296f590e57b7 @  135 : 0b f7             Ldar r3
         0x296f590e57b9 @  137 : 51 25             Inc [37]
         0x296f590e57bb @  139 : c1                Star3 
 1446 E> 0x296f590e57bc @  140 : 89 5e 01          JumpLoop [94], [1] (0x296f590e575e @ 46)
 1376 S> 0x296f590e57bf @  143 : 0b f8             Ldar r2
         0x296f590e57c1 @  145 : 51 26             Inc [38]
         0x296f590e57c3 @  147 : c2                Star2 
 1347 E> 0x296f590e57c4 @  148 : 89 7e 00          JumpLoop [126], [0] (0x296f590e5746 @ 22)
 1697 S> 0x296f590e57c7 @  151 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x296f590e57c9 @  153 : b8                Star12 
 1708 E> 0x296f590e57ca @  154 : 2d 04 05 27       GetNamedProperty a1, [5], [39]
 1701 E> 0x296f590e57ce @  158 : 2f ee 29          GetKeyedProperty r12, [41]
         0x296f590e57d1 @  161 : b8                Star12 
 1717 E> 0x296f590e57d2 @  162 : 2d 04 06 2b       GetNamedProperty a1, [6], [43]
         0x296f590e57d6 @  166 : b7                Star13 
         0x296f590e57d7 @  167 : 0c                LdaZero 
 1720 E> 0x296f590e57d8 @  168 : 34 ee ed 2d       SetKeyedProperty r12, r13, [45]
 1742 S> 0x296f590e57dc @  172 : 2d f9 01 2f       GetNamedProperty r1, [1], [47]
         0x296f590e57e0 @  176 : b8                Star12 
         0x296f590e57e1 @  177 : 0c                LdaZero 
 1749 E> 0x296f590e57e2 @  178 : 6e ee 31          TestGreaterThan r12, [49]
         0x296f590e57e5 @  181 : 99 d9             JumpIfFalse [217] (0x296f590e58be @ 398)
 1770 S> 0x296f590e57e7 @  183 : 2d f9 07 32       GetNamedProperty r1, [7], [50]
         0x296f590e57eb @  187 : b8                Star12 
         0x296f590e57ec @  188 : 80 08 00 02       CreateClosure [8], [0], #2
         0x296f590e57f0 @  192 : b6                Star14 
 1770 E> 0x296f590e57f1 @  193 : 5e ee f9 ec 34    CallProperty1 r12, r1, r14, [52]
 1891 S> 0x296f590e57f6 @  198 : 2d f9 09 36       GetNamedProperty r1, [9], [54]
         0x296f590e57fa @  202 : b8                Star12 
 1891 E> 0x296f590e57fb @  203 : 5d ee f9 38       CallProperty0 r12, r1, [56]
         0x296f590e57ff @  207 : be                Star6 
 1990 S> 0x296f590e5800 @  208 : 79 0a 3a 04       CreateArrayLiteral [10], [58], #4
         0x296f590e5804 @  212 : bd                Star7 
 2154 S> 0x296f590e5805 @  213 : 0c                LdaZero 
         0x296f590e5806 @  214 : c2                Star2 
 2175 S> 0x296f590e5807 @  215 : 2d f3 01 3b       GetNamedProperty r7, [1], [59]
 2163 E> 0x296f590e580b @  219 : 6d f8 3d          TestLessThan r2, [61]
         0x296f590e580e @  222 : 99 ad             JumpIfFalse [173] (0x296f590e58bb @ 395)
 2221 S> 0x296f590e5810 @  224 : 2d f4 05 3f       GetNamedProperty r6, [5], [63]
         0x296f590e5814 @  228 : b8                Star12 
         0x296f590e5815 @  229 : 0b f8             Ldar r2
 2234 E> 0x296f590e5817 @  231 : 2f f3 41          GetKeyedProperty r7, [65]
         0x296f590e581a @  234 : b7                Star13 
 2238 E> 0x296f590e581b @  235 : 2d ed 05 43       GetNamedProperty r13, [5], [67]
 2223 E> 0x296f590e581f @  239 : 39 ee 3e          Add r12, [62]
         0x296f590e5822 @  242 : bc                Star8 
 2272 S> 0x296f590e5823 @  243 : 2d f4 06 46       GetNamedProperty r6, [6], [70]
         0x296f590e5827 @  247 : b8                Star12 
         0x296f590e5828 @  248 : 0b f8             Ldar r2
 2285 E> 0x296f590e582a @  250 : 2f f3 48          GetKeyedProperty r7, [72]
         0x296f590e582d @  253 : b7                Star13 
 2289 E> 0x296f590e582e @  254 : 2d ed 06 4a       GetNamedProperty r13, [6], [74]
 2274 E> 0x296f590e5832 @  258 : 39 ee 45          Add r12, [69]
         0x296f590e5835 @  261 : bb                Star9 
 2308 S> 0x296f590e5836 @  262 : 0c                LdaZero 
 2315 E> 0x296f590e5837 @  263 : 6d f2 4c          TestLessThan r8, [76]
         0x296f590e583a @  266 : 98 1f             JumpIfTrue [31] (0x296f590e5859 @ 297)
 2333 E> 0x296f590e583c @  268 : 2d 03 01 01       GetNamedProperty a0, [1], [1]
 2325 E> 0x296f590e5840 @  272 : 6c f2 4d          TestEqualStrict r8, [77]
         0x296f590e5843 @  275 : 98 16             JumpIfTrue [22] (0x296f590e5859 @ 297)
         0x296f590e5845 @  277 : 0c                LdaZero 
 2346 E> 0x296f590e5846 @  278 : 6d f1 4e          TestLessThan r9, [78]
         0x296f590e5849 @  281 : 98 10             JumpIfTrue [16] (0x296f590e5859 @ 297)
         0x296f590e584b @  283 : 0c                LdaZero 
 2363 E> 0x296f590e584c @  284 : 2f 03 4f          GetKeyedProperty a0, [79]
         0x296f590e584f @  287 : b7                Star13 
 2367 E> 0x296f590e5850 @  288 : 2d ed 01 51       GetNamedProperty r13, [1], [81]
 2356 E> 0x296f590e5854 @  292 : 6c f1 53          TestEqualStrict r9, [83]
         0x296f590e5857 @  295 : 99 04             JumpIfFalse [4] (0x296f590e585b @ 299)
 2395 S> 0x296f590e5859 @  297 : 8a 5a             Jump [90] (0x296f590e58b3 @ 387)
 2421 S> 0x296f590e585b @  299 : 0b f2             Ldar r8
 2428 E> 0x296f590e585d @  301 : 2f 03 54          GetKeyedProperty a0, [84]
         0x296f590e5860 @  304 : b8                Star12 
         0x296f590e5861 @  305 : 0b f1             Ldar r9
 2432 E> 0x296f590e5863 @  307 : 2f ee 56          GetKeyedProperty r12, [86]
         0x296f590e5866 @  310 : b8                Star12 
         0x296f590e5867 @  311 : 0c                LdaZero 
 2437 E> 0x296f590e5868 @  312 : 6c ee 58          TestEqualStrict r12, [88]
         0x296f590e586b @  315 : 99 04             JumpIfFalse [4] (0x296f590e586f @ 319)
 2464 S> 0x296f590e586d @  317 : 8a 46             Jump [70] (0x296f590e58b3 @ 387)
 2502 S> 0x296f590e586f @  319 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x296f590e5871 @  321 : b8                Star12 
 2511 E> 0x296f590e5872 @  322 : 2d f4 05 3f       GetNamedProperty r6, [5], [63]
 2506 E> 0x296f590e5876 @  326 : 2f ee 5a          GetKeyedProperty r12, [90]
         0x296f590e5879 @  329 : b8                Star12 
 2518 E> 0x296f590e587a @  330 : 2d f4 06 46       GetNamedProperty r6, [6], [70]
 2513 E> 0x296f590e587e @  334 : 2f ee 5c          GetKeyedProperty r12, [92]
 2521 E> 0x296f590e5881 @  337 : 45 01 59          AddSmi [1], [89]
         0x296f590e5884 @  340 : ba                Star10 
 2542 S> 0x296f590e5885 @  341 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x296f590e5887 @  343 : b7                Star13 
         0x296f590e5888 @  344 : 0b f2             Ldar r8
 2556 E> 0x296f590e588a @  346 : 2f ed 5e          GetKeyedProperty r13, [94]
         0x296f590e588d @  349 : b7                Star13 
         0x296f590e588e @  350 : 0b f1             Ldar r9
 2560 E> 0x296f590e5890 @  352 : 2f ed 60          GetKeyedProperty r13, [96]
 2550 E> 0x296f590e5893 @  355 : 6d f0 62          TestLessThan r10, [98]
         0x296f590e5896 @  358 : 99 1d             JumpIfFalse [29] (0x296f590e58b3 @ 387)
 2588 S> 0x296f590e5898 @  360 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x296f590e589a @  362 : b8                Star12 
         0x296f590e589b @  363 : 0b f2             Ldar r8
 2592 E> 0x296f590e589d @  365 : 2f ee 63          GetKeyedProperty r12, [99]
         0x296f590e58a0 @  368 : b8                Star12 
         0x296f590e58a1 @  369 : 0b f0             Ldar r10
 2601 E> 0x296f590e58a3 @  371 : 34 ee f1 65       SetKeyedProperty r12, r9, [101]
 2628 S> 0x296f590e58a7 @  375 : 0b f2             Ldar r8
 2632 E> 0x296f590e58a9 @  377 : 2f fa 67          GetKeyedProperty r0, [103]
         0x296f590e58ac @  380 : b8                Star12 
         0x296f590e58ad @  381 : 0b f4             Ldar r6
 2641 E> 0x296f590e58af @  383 : 34 ee f1 69       SetKeyedProperty r12, r9, [105]
 2184 S> 0x296f590e58b3 @  387 : 0b f8             Ldar r2
         0x296f590e58b5 @  389 : 51 6b             Inc [107]
         0x296f590e58b7 @  391 : c2                Star2 
 2149 E> 0x296f590e58b8 @  392 : 89 b1 01          JumpLoop [177], [1] (0x296f590e5807 @ 215)
 1733 E> 0x296f590e58bb @  395 : 89 df 00          JumpLoop [223], [0] (0x296f590e57dc @ 172)
 2711 S> 0x296f590e58be @  398 : 7b 6c             CreateEmptyArrayLiteral [108]
         0x296f590e58c0 @  400 : c0                Star4 
 2731 S> 0x296f590e58c1 @  401 : 19 05 f5          Mov a2, r5
         0x296f590e58c4 @  404 : 0b f5             Ldar r5
 2766 S> 0x296f590e58c6 @  406 : 2d f5 05 6d       GetNamedProperty r5, [5], [109]
 2763 E> 0x296f590e58ca @  410 : 2f fa 6f          GetKeyedProperty r0, [111]
         0x296f590e58cd @  413 : b8                Star12 
 2771 E> 0x296f590e58ce @  414 : 2d f5 06 71       GetNamedProperty r5, [6], [113]
 2768 E> 0x296f590e58d2 @  418 : 2f ee 73          GetKeyedProperty r12, [115]
         0x296f590e58d5 @  421 : 9a 1f             JumpIfNull [31] (0x296f590e58f4 @ 452)
 2803 S> 0x296f590e58d7 @  423 : 2d f6 0b 75       GetNamedProperty r4, [11], [117]
         0x296f590e58db @  427 : b8                Star12 
 2803 E> 0x296f590e58dc @  428 : 5e ee f6 f5 77    CallProperty1 r12, r4, r5, [119]
 2838 S> 0x296f590e58e1 @  433 : 2d f5 05 6d       GetNamedProperty r5, [5], [109]
 2835 E> 0x296f590e58e5 @  437 : 2f fa 79          GetKeyedProperty r0, [121]
         0x296f590e58e8 @  440 : b8                Star12 
 2843 E> 0x296f590e58e9 @  441 : 2d f5 06 71       GetNamedProperty r5, [6], [113]
 2840 E> 0x296f590e58ed @  445 : 2f ee 7b          GetKeyedProperty r12, [123]
         0x296f590e58f0 @  448 : bf                Star5 
 2752 E> 0x296f590e58f1 @  449 : 89 2b 00          JumpLoop [43], [0] (0x296f590e58c6 @ 406)
 2865 S> 0x296f590e58f4 @  452 : 0b f6             Ldar r4
 2877 S> 0x296f590e58f6 @  454 : a9                Return 
Constant pool (size = 12)
0x296f590e58f9: [FixedArray] in OldSpace
 - map: 0x00449ca012e1 <Map>
 - length: 12
           0: 0x296f590e5969 <ScopeInfo FUNCTION_SCOPE>
           1: 0x00449ca055f9 <String[6]: #length>
           2: 0x00449ca05381 <String[8]: #Infinity>
           3: 0x0ce374989551 <String[4]: #push>
           4: 0x296f590e59f1 <ObjectBoilerplateDescription[5]>
           5: 0x0ce374998ac9 <String[1]: #x>
           6: 0x0ce374998ae1 <String[1]: #y>
           7: 0x0ce37498eb61 <String[4]: #sort>
           8: 0x296f590e5a41 <SharedFunctionInfo>
           9: 0x0ce37499c4e1 <String[3]: #pop>
          10: 0x296f590e5bc1 <ArrayBoilerplateDescription PACKED_ELEMENTS, 0x296f590e5bd9 <FixedArray[4]>>
          11: 0x0ce37498bfe1 <String[7]: #unshift>
Handler Table (size = 0)
Source Position Table (size = 249)
0x296f590e5d01 <ByteArray[249]>
Boilerplate at 0x296f590e59f1: 
0x296f590e59f1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x00449ca02059 <Map>
 - length: 5
           0: 8
           1: 0x0ce374998ac9 <String[1]: #x>
           2: 0x00449ca01501 <Odd Oddball: uninitialized>
           3: 0x0ce374998ae1 <String[1]: #y>
           4: 0x00449ca01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x296f590e5a41 points to: [0x296f590e5ab0]
=== [0x296f590e5ab0] DISASSEMBLY ===
Parameter count 3
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1809 S> 0x296f590e5ab0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x296f590e5ab2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x296f590e5ab4 @    4 : c4                Star0 
 1823 E> 0x296f590e5ab5 @    5 : 2d 04 01 01       GetNamedProperty a1, [1], [1]
 1820 E> 0x296f590e5ab9 @    9 : 2f fa 03          GetKeyedProperty r0, [3]
         0x296f590e5abc @   12 : c4                Star0 
 1828 E> 0x296f590e5abd @   13 : 2d 04 02 05       GetNamedProperty a1, [2], [5]
 1825 E> 0x296f590e5ac1 @   17 : 2f fa 07          GetKeyedProperty r0, [7]
         0x296f590e5ac4 @   20 : c4                Star0 
         0x296f590e5ac5 @   21 : 17 02             LdaImmutableCurrentContextSlot [2]
 1833 E> 0x296f590e5ac7 @   23 : aa 00             ThrowReferenceErrorIfHole [0]
         0x296f590e5ac9 @   25 : c3                Star1 
 1840 E> 0x296f590e5aca @   26 : 2d 03 01 09       GetNamedProperty a0, [1], [9]
 1837 E> 0x296f590e5ace @   30 : 2f f9 0b          GetKeyedProperty r1, [11]
         0x296f590e5ad1 @   33 : c3                Star1 
 1845 E> 0x296f590e5ad2 @   34 : 2d 03 02 0d       GetNamedProperty a0, [2], [13]
 1842 E> 0x296f590e5ad6 @   38 : 2f f9 0f          GetKeyedProperty r1, [15]
 1831 E> 0x296f590e5ad9 @   41 : 3a fa 00          Sub r0, [0]
 1848 S> 0x296f590e5adc @   44 : a9                Return 
Constant pool (size = 3)
0x296f590e5ae1: [FixedArray] in OldSpace
 - map: 0x00449ca012e1 <Map>
 - length: 3
           0: 0x296f590e59c1 <String[4]: #dist>
           1: 0x0ce374998ac9 <String[1]: #x>
           2: 0x0ce374998ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 27)
0x296f590e5b09 <ByteArray[27]>
<< OUTPUTTING DISASSEMBLY END >>
