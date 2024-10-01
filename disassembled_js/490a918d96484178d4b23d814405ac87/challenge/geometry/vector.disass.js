<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x3096727a4db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x3096727a4db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x3096727a4dbc @    4 : c4                Star0 
 1078 S> 0x3096727a4dbd @    5 : a9                Return 
Constant pool (size = 1)
0x3096727a4dc1: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 1
           0: 0x3096727a4dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3096727a6309 <ByteArray[7]>
0x3096727a4dd9 points to: [0x3096727a4e48]
=== [0x3096727a4e48] DISASSEMBLY ===
Parameter count 6
Register count 15
Frame size 120
OSR urgency: 0
Bytecode age: 0
   76 S> 0x3096727a4e48 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x3096727a4e4b @    3 : c2                Star2 
   83 E> 0x3096727a4e4c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x3096727a4e50 @    8 : c3                Star1 
         0x3096727a4e51 @    9 : 13 02             LdaConstant [2]
         0x3096727a4e53 @   11 : c0                Star4 
   98 E> 0x3096727a4e54 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x3096727a4e58 @   16 : bf                Star5 
         0x3096727a4e59 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x3096727a4e5c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x3096727a4e61 @   25 : 0e                LdaUndefined 
  154 E> 0x3096727a4e62 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x3096727a4e66 @   30 : 81 05             CreateBlockContext [5]
         0x3096727a4e68 @   32 : 1a f9             PushContext r1
         0x3096727a4e6a @   34 : 10                LdaTheHole 
         0x3096727a4e6b @   35 : 25 02             StaCurrentContextSlot [2]
         0x3096727a4e6d @   37 : 10                LdaTheHole 
         0x3096727a4e6e @   38 : bf                Star5 
         0x3096727a4e6f @   39 : 80 07 00 02       CreateClosure [7], [0], #2
         0x3096727a4e73 @   43 : c2                Star2 
         0x3096727a4e74 @   44 : 13 06             LdaConstant [6]
         0x3096727a4e76 @   46 : c1                Star3 
         0x3096727a4e77 @   47 : 80 08 01 02       CreateClosure [8], [1], #2
         0x3096727a4e7b @   51 : be                Star6 
         0x3096727a4e7c @   52 : 80 09 02 02       CreateClosure [9], [2], #2
         0x3096727a4e80 @   56 : bd                Star7 
         0x3096727a4e81 @   57 : 80 0a 03 02       CreateClosure [10], [3], #2
         0x3096727a4e85 @   61 : bc                Star8 
         0x3096727a4e86 @   62 : 80 0b 04 02       CreateClosure [11], [4], #2
         0x3096727a4e8a @   66 : bb                Star9 
         0x3096727a4e8b @   67 : 80 0c 05 02       CreateClosure [12], [5], #2
         0x3096727a4e8f @   71 : ba                Star10 
         0x3096727a4e90 @   72 : 80 0d 06 02       CreateClosure [13], [6], #2
         0x3096727a4e94 @   76 : b9                Star11 
         0x3096727a4e95 @   77 : 80 0e 07 02       CreateClosure [14], [7], #2
         0x3096727a4e99 @   81 : b8                Star12 
         0x3096727a4e9a @   82 : 80 0f 08 02       CreateClosure [15], [8], #2
         0x3096727a4e9e @   86 : b7                Star13 
         0x3096727a4e9f @   87 : 80 10 09 02       CreateClosure [16], [9], #2
         0x3096727a4ea3 @   91 : b6                Star14 
         0x3096727a4ea4 @   92 : 19 f8 f6          Mov r2, r4
         0x3096727a4ea7 @   95 : 65 28 00 f7 0c    CallRuntime [DefineClass], r3-r14
         0x3096727a4eac @  100 : c1                Star3 
         0x3096727a4ead @  101 : 0b f6             Ldar r4
         0x3096727a4eaf @  103 : 25 02             StaCurrentContextSlot [2]
         0x3096727a4eb1 @  105 : 1b f9             PopContext r1
         0x3096727a4eb3 @  107 : c4                Star0 
 1015 S> 0x3096727a4eb4 @  108 : 0b fa             Ldar r0
 1030 E> 0x3096727a4eb6 @  110 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x3096727a4eba @  114 : 0e                LdaUndefined 
 1075 S> 0x3096727a4ebb @  115 : a9                Return 
Constant pool (size = 17)
0x3096727a4ec1: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 17
           0: 0x117eec705ab9 <String[6]: #Object>
           1: 0x117eec704c11 <String[14]: #defineProperty>
           2: 0x3096727a4f59 <String[10]: #__esModule>
           3: 0x3096727a4f79 <ObjectBoilerplateDescription[3]>
           4: 0x3096727a4fa1 <String[6]: #Vector>
           5: 0x3096727a4fb9 <ScopeInfo CLASS_SCOPE>
           6: 0x3096727a4ff9 <FixedArray[7]>
           7: 0x3096727a5311 <SharedFunctionInfo Vector>
           8: 0x3096727a5609 <SharedFunctionInfo fromPosition>
           9: 0x3096727a5741 <SharedFunctionInfo get x>
          10: 0x3096727a5869 <SharedFunctionInfo get y>
          11: 0x3096727a5991 <SharedFunctionInfo get magnitude>
          12: 0x3096727a5b39 <SharedFunctionInfo add>
          13: 0x3096727a5c99 <SharedFunctionInfo subtract>
          14: 0x3096727a5df9 <SharedFunctionInfo equals>
          15: 0x3096727a5f49 <SharedFunctionInfo serialize>
          16: 0x3096727a60b9 <SharedFunctionInfo toString>
Handler Table (size = 0)
Source Position Table (size = 25)
0x3096727a6279 <ByteArray[25]>
Boilerplate at 0x3096727a4f79: 
0x3096727a4f79: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x117eec702059 <Map>
 - length: 3
           0: 8
           1: 0x117eec706419 <String[5]: #value>
           2: 0x117eec701729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x3096727a4ff9 has 7 elements:
0x3096727a4ff9: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 7
           0: 12
           1: 0x3096727a5041 <DescriptorArray[5]>
           2: 0x117eec703301 <NumberDictionary[7]>
           3: 0x117eec701329 <FixedArray[0]>
           4: 0x3096727a5139 <DescriptorArray[9]>
           5: 0x117eec703301 <NumberDictionary[7]>
           6: 0x117eec701329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xc (12)
Element[1]
0x3096727a5041: [DescriptorArray] in OldSpace
 - map: 0x117eec707761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x117eec7055f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x3f6bfb7f4fe1 <AccessorInfo>
  [1]: 0x117eec7058f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x3f6bfb7f4f71 <AccessorInfo>
  [2]: 0x117eec705cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 4, attrs: [___]) @ 0x3f6bfb7f5051 <AccessorInfo>
  [3]: 0x117eec7065f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 3, attrs: [W_C]) @ 0x3096727a5101 <ClassPositions 164, 1014>
  [4]: 0x3096727a5119: [String] in OldSpace: #fromPosition (const data descriptor, p: 1, attrs: [W_C]) @ 3
Element[2]
0x117eec703301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x117eec701329: [FixedArray] in ReadOnlySpace
 - map: 0x117eec7012e1 <Map>
 - length: 0
Element[4]
0x3096727a5139: [DescriptorArray] in OldSpace
 - map: 0x117eec707761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 9
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x117eec704a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
  [1]: 0x3f6bfb7d8ac9: [String] in OldSpace: #x (const accessor descriptor, p: 6, attrs: [W_C]) @ 0x3096727a5241 <AccessorPair>(get: 4, set: 0x117eec701339 <null>)
  [2]: 0x3f6bfb7d8ae1: [String] in OldSpace: #y (const accessor descriptor, p: 1, attrs: [W_C]) @ 0x3096727a5271 <AccessorPair>(get: 5, set: 0x117eec701339 <null>)
  [3]: 0x3096727a5289: [String] in OldSpace: #magnitude (const accessor descriptor, p: 8, attrs: [W_C]) @ 0x3096727a52a9 <AccessorPair>(get: 6, set: 0x117eec701339 <null>)
  [4]: 0x117eec704569: [String] in ReadOnlySpace: #add (const data descriptor, p: 3, attrs: [W_C]) @ 7
  [5]: 0x3096727a52c1: [String] in OldSpace: #subtract (const data descriptor, p: 2, attrs: [W_C]) @ 8
  [6]: 0x3f6bfb7c7411: [String] in OldSpace: #equals (const data descriptor, p: 4, attrs: [W_C]) @ 9
  [7]: 0x3f6bfb7d01a9: [String] in OldSpace: #serialize (const data descriptor, p: 5, attrs: [W_C]) @ 10
  [8]: 0x117eec7062b9: [String] in ReadOnlySpace: #toString (const data descriptor, p: 7, attrs: [W_C]) @ 11
Element[5]
0x117eec703301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x117eec701329: [FixedArray] in ReadOnlySpace
 - map: 0x117eec7012e1 <Map>
 - length: 0
0x3096727a5311 points to: [0x3096727a5380]
=== [0x3096727a5380] DISASSEMBLY ===
Parameter count 3
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  221 S> 0x3096727a5380 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x3096727a5383 @    3 : c2                Star2 
  226 E> 0x3096727a5384 @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x3096727a5388 @    8 : c3                Star1 
  226 E> 0x3096727a5389 @    9 : 5e f9 f8 03 04    CallProperty1 r1, r2, a0, [4]
  219 E> 0x3096727a538e @   14 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
  254 S> 0x3096727a5392 @   18 : 21 00 00          LdaGlobal [0], [0]
         0x3096727a5395 @   21 : c2                Star2 
  259 E> 0x3096727a5396 @   22 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x3096727a539a @   26 : c3                Star1 
  259 E> 0x3096727a539b @   27 : 5e f9 f8 04 08    CallProperty1 r1, r2, a1, [8]
  252 E> 0x3096727a53a0 @   32 : 32 02 03 0a       SetNamedProperty <this>, [3], [10]
         0x3096727a53a4 @   36 : 0e                LdaUndefined 
  273 S> 0x3096727a53a5 @   37 : a9                Return 
Constant pool (size = 4)
0x3096727a53a9: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 4
           0: 0x3f6bfb7da991 <String[4]: #Math>
           1: 0x3f6bfb7dabb9 <String[5]: #round>
           2: 0x3096727a5409 <String[2]: #_x>
           3: 0x3096727a5421 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 22)
0x3096727a5439 <ByteArray[22]>
0x3096727a5609 points to: [0x3096727a5678]
=== [0x3096727a5678] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  319 S> 0x3096727a5678 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x3096727a567a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3096727a567c @    4 : c4                Star0 
  346 E> 0x3096727a567d @    5 : 2d 03 01 00       GetNamedProperty a0, [1], [0]
         0x3096727a5681 @    9 : c3                Star1 
  358 E> 0x3096727a5682 @   10 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
         0x3096727a5686 @   14 : c2                Star2 
         0x3096727a5687 @   15 : 0b fa             Ldar r0
  326 E> 0x3096727a5689 @   17 : 69 fa f9 02 04    Construct r0, r1-r2, [4]
  361 S> 0x3096727a568e @   22 : a9                Return 
Constant pool (size = 3)
0x3096727a5691: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 3
           0: 0x3096727a4fa1 <String[6]: #Vector>
           1: 0x3f6bfb7d8ac9 <String[1]: #x>
           2: 0x3f6bfb7d8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 14)
0x3096727a56b9 <ByteArray[14]>
0x3096727a5741 points to: [0x3096727a57b0]
=== [0x3096727a57b0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  402 S> 0x3096727a57b0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  405 S> 0x3096727a57b4 @    4 : a9                Return 
Constant pool (size = 1)
0x3096727a57b9: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 1
           0: 0x3096727a5409 <String[2]: #_x>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3096727a57d1 <ByteArray[7]>
0x3096727a5869 points to: [0x3096727a58d8]
=== [0x3096727a58d8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  446 S> 0x3096727a58d8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  449 S> 0x3096727a58dc @    4 : a9                Return 
Constant pool (size = 1)
0x3096727a58e1: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 1
           0: 0x3096727a5421 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3096727a58f9 <ByteArray[7]>
0x3096727a5991 points to: [0x3096727a5a00]
=== [0x3096727a5a00] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  486 S> 0x3096727a5a00 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x3096727a5a03 @    3 : c3                Star1 
  498 E> 0x3096727a5a04 @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x3096727a5a08 @    8 : c4                Star0 
  508 E> 0x3096727a5a09 @    9 : 2d 02 02 06       GetNamedProperty <this>, [2], [6]
         0x3096727a5a0d @   13 : c2                Star2 
  518 E> 0x3096727a5a0e @   14 : 2d 02 02 08       GetNamedProperty <this>, [2], [8]
  511 E> 0x3096727a5a12 @   18 : 3b f8 05          Mul r2, [5]
         0x3096727a5a15 @   21 : c2                Star2 
  528 E> 0x3096727a5a16 @   22 : 2d 02 03 0b       GetNamedProperty <this>, [3], [11]
         0x3096727a5a1a @   26 : c1                Star3 
  538 E> 0x3096727a5a1b @   27 : 2d 02 03 0d       GetNamedProperty <this>, [3], [13]
  531 E> 0x3096727a5a1f @   31 : 3b f7 0a          Mul r3, [10]
  521 E> 0x3096727a5a22 @   34 : 39 f8 04          Add r2, [4]
         0x3096727a5a25 @   37 : c2                Star2 
  498 E> 0x3096727a5a26 @   38 : 5e fa f9 f8 0f    CallProperty1 r0, r1, r2, [15]
  542 S> 0x3096727a5a2b @   43 : a9                Return 
Constant pool (size = 4)
0x3096727a5a31: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 4
           0: 0x3f6bfb7da991 <String[4]: #Math>
           1: 0x3f6bfb7dac01 <String[4]: #sqrt>
           2: 0x3096727a5409 <String[2]: #_x>
           3: 0x3096727a5421 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 26)
0x3096727a5a79 <ByteArray[26]>
0x3096727a5b39 points to: [0x3096727a5ba8]
=== [0x3096727a5ba8] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  579 S> 0x3096727a5ba8 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x3096727a5baa @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3096727a5bac @    4 : c4                Star0 
  602 E> 0x3096727a5bad @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x3096727a5bb1 @    9 : c3                Star1 
  618 E> 0x3096727a5bb2 @   10 : 2d 03 02 03       GetNamedProperty a0, [2], [3]
  605 E> 0x3096727a5bb6 @   14 : 39 f9 00          Add r1, [0]
         0x3096727a5bb9 @   17 : c3                Star1 
  626 E> 0x3096727a5bba @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x3096727a5bbe @   22 : c2                Star2 
  642 E> 0x3096727a5bbf @   23 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
  629 E> 0x3096727a5bc3 @   27 : 39 f8 05          Add r2, [5]
         0x3096727a5bc6 @   30 : c2                Star2 
         0x3096727a5bc7 @   31 : 0b fa             Ldar r0
  586 E> 0x3096727a5bc9 @   33 : 69 fa f9 02 0a    Construct r0, r1-r2, [10]
  645 S> 0x3096727a5bce @   38 : a9                Return 
Constant pool (size = 5)
0x3096727a5bd1: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 5
           0: 0x3096727a4fa1 <String[6]: #Vector>
           1: 0x3096727a5409 <String[2]: #_x>
           2: 0x3f6bfb7d8ac9 <String[1]: #x>
           3: 0x3096727a5421 <String[2]: #_y>
           4: 0x3f6bfb7d8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 23)
0x3096727a5c09 <ByteArray[23]>
0x3096727a5c99 points to: [0x3096727a5d08]
=== [0x3096727a5d08] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  687 S> 0x3096727a5d08 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x3096727a5d0a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3096727a5d0c @    4 : c4                Star0 
  710 E> 0x3096727a5d0d @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x3096727a5d11 @    9 : c3                Star1 
  726 E> 0x3096727a5d12 @   10 : 2d 03 02 03       GetNamedProperty a0, [2], [3]
  713 E> 0x3096727a5d16 @   14 : 3a f9 00          Sub r1, [0]
         0x3096727a5d19 @   17 : c3                Star1 
  734 E> 0x3096727a5d1a @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x3096727a5d1e @   22 : c2                Star2 
  750 E> 0x3096727a5d1f @   23 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
  737 E> 0x3096727a5d23 @   27 : 3a f8 05          Sub r2, [5]
         0x3096727a5d26 @   30 : c2                Star2 
         0x3096727a5d27 @   31 : 0b fa             Ldar r0
  694 E> 0x3096727a5d29 @   33 : 69 fa f9 02 0a    Construct r0, r1-r2, [10]
  753 S> 0x3096727a5d2e @   38 : a9                Return 
Constant pool (size = 5)
0x3096727a5d31: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 5
           0: 0x3096727a4fa1 <String[6]: #Vector>
           1: 0x3096727a5409 <String[2]: #_x>
           2: 0x3f6bfb7d8ac9 <String[1]: #x>
           3: 0x3096727a5421 <String[2]: #_y>
           4: 0x3f6bfb7d8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 23)
0x3096727a5d69 <ByteArray[23]>
0x3096727a5df9 points to: [0x3096727a5e68]
=== [0x3096727a5e68] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  800 S> 0x3096727a5e68 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3096727a5e6c @    4 : c4                Star0 
  812 E> 0x3096727a5e6d @    5 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
  803 E> 0x3096727a5e71 @    9 : 6b fa 04          TestEqual r0, [4]
         0x3096727a5e74 @   12 : 99 0e             JumpIfFalse [14] (0x3096727a5e82 @ 26)
  822 E> 0x3096727a5e76 @   14 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x3096727a5e7a @   18 : c4                Star0 
  834 E> 0x3096727a5e7b @   19 : 2d 03 03 07       GetNamedProperty a0, [3], [7]
  825 E> 0x3096727a5e7f @   23 : 6b fa 09          TestEqual r0, [9]
  836 S> 0x3096727a5e82 @   26 : a9                Return 
Constant pool (size = 4)
0x3096727a5e89: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 4
           0: 0x3096727a5409 <String[2]: #_x>
           1: 0x3f6bfb7d8ac9 <String[1]: #x>
           2: 0x3096727a5421 <String[2]: #_y>
           3: 0x3f6bfb7d8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 17)
0x3096727a5eb9 <ByteArray[17]>
0x3096727a5f49 points to: [0x3096727a5fb8]
=== [0x3096727a5fb8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  869 S> 0x3096727a5fb8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x3096727a5fbc @    4 : c4                Star0 
  898 E> 0x3096727a5fbd @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x3096727a5fc1 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
  921 E> 0x3096727a5fc5 @   13 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x3096727a5fc9 @   17 : 33 fa 02 07       DefineNamedOwnProperty r0, [2], [7]
         0x3096727a5fcd @   21 : 0b fa             Ldar r0
  934 S> 0x3096727a5fcf @   23 : a9                Return 
Constant pool (size = 3)
0x3096727a5fd1: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 3
           0: 0x3096727a5ff9 <ObjectBoilerplateDescription[5]>
           1: 0x3f6bfb7d8ac9 <String[1]: #x>
           2: 0x3f6bfb7d8ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 11)
0x3096727a6031 <ByteArray[11]>
Boilerplate at 0x3096727a5ff9: 
0x3096727a5ff9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x117eec702059 <Map>
 - length: 5
           0: 8
           1: 0x3f6bfb7d8ac9 <String[1]: #x>
           2: 0x117eec701501 <Odd Oddball: uninitialized>
           3: 0x3f6bfb7d8ae1 <String[1]: #y>
           4: 0x117eec701501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x3096727a60b9 points to: [0x3096727a6128]
=== [0x3096727a6128] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  966 S> 0x3096727a6128 @    0 : 13 00             LdaConstant [0]
         0x3096727a612a @    2 : c4                Star0 
  985 E> 0x3096727a612b @    3 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x3096727a612f @    7 : 77                ToString 
         0x3096727a6130 @    8 : 39 fa 00          Add r0, [0]
         0x3096727a6133 @   11 : c4                Star0 
         0x3096727a6134 @   12 : 13 02             LdaConstant [2]
         0x3096727a6136 @   14 : 39 fa 00          Add r0, [0]
         0x3096727a6139 @   17 : c4                Star0 
 1000 E> 0x3096727a613a @   18 : 2d 02 03 03       GetNamedProperty <this>, [3], [3]
         0x3096727a613e @   22 : 77                ToString 
         0x3096727a613f @   23 : 39 fa 00          Add r0, [0]
         0x3096727a6142 @   26 : c4                Star0 
         0x3096727a6143 @   27 : 13 04             LdaConstant [4]
         0x3096727a6145 @   29 : 39 fa 00          Add r0, [0]
 1006 S> 0x3096727a6148 @   32 : a9                Return 
Constant pool (size = 5)
0x3096727a6151: [FixedArray] in OldSpace
 - map: 0x117eec7012e1 <Map>
 - length: 5
           0: 0x3096727a6189 <String[4]: #(X: >
           1: 0x3096727a5409 <String[2]: #_x>
           2: 0x3096727a61a1 <String[5]: #, Y: >
           3: 0x3096727a5421 <String[2]: #_y>
           4: 0x3096727a61b9 <String[1]: #)>
Handler Table (size = 0)
Source Position Table (size = 11)
0x3096727a61d1 <ByteArray[11]>
<< OUTPUTTING DISASSEMBLY END >>
