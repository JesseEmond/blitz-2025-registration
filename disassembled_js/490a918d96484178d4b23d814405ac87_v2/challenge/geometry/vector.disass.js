<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x3c411b8a4dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x3c411b8a4dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x3c411b8a4dcc @    4 : c4                Star0 
 1078 S> 0x3c411b8a4dcd @    5 : a9                Return 
Constant pool (size = 1)
0x3c411b8a4dd1: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 1
           0: 0x3c411b8a4de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3c411b8a6319 <ByteArray[7]>
0x3c411b8a4de9 points to: [0x3c411b8a4e58]
=== [0x3c411b8a4e58] DISASSEMBLY ===
Parameter count 6
Register count 15
Frame size 120
OSR urgency: 0
Bytecode age: 0
   76 S> 0x3c411b8a4e58 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x3c411b8a4e5b @    3 : c2                Star2 
   83 E> 0x3c411b8a4e5c @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x3c411b8a4e60 @    8 : c3                Star1 
         0x3c411b8a4e61 @    9 : 13 02             LdaConstant [2]
         0x3c411b8a4e63 @   11 : c0                Star4 
   98 E> 0x3c411b8a4e64 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x3c411b8a4e68 @   16 : bf                Star5 
         0x3c411b8a4e69 @   17 : 19 03 f7          Mov a0, r3
   83 E> 0x3c411b8a4e6c @   20 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x3c411b8a4e71 @   25 : 0e                LdaUndefined 
  154 E> 0x3c411b8a4e72 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x3c411b8a4e76 @   30 : 81 05             CreateBlockContext [5]
         0x3c411b8a4e78 @   32 : 1a f9             PushContext r1
         0x3c411b8a4e7a @   34 : 10                LdaTheHole 
         0x3c411b8a4e7b @   35 : 25 02             StaCurrentContextSlot [2]
         0x3c411b8a4e7d @   37 : 10                LdaTheHole 
         0x3c411b8a4e7e @   38 : bf                Star5 
         0x3c411b8a4e7f @   39 : 80 07 00 02       CreateClosure [7], [0], #2
         0x3c411b8a4e83 @   43 : c2                Star2 
         0x3c411b8a4e84 @   44 : 13 06             LdaConstant [6]
         0x3c411b8a4e86 @   46 : c1                Star3 
         0x3c411b8a4e87 @   47 : 80 08 01 02       CreateClosure [8], [1], #2
         0x3c411b8a4e8b @   51 : be                Star6 
         0x3c411b8a4e8c @   52 : 80 09 02 02       CreateClosure [9], [2], #2
         0x3c411b8a4e90 @   56 : bd                Star7 
         0x3c411b8a4e91 @   57 : 80 0a 03 02       CreateClosure [10], [3], #2
         0x3c411b8a4e95 @   61 : bc                Star8 
         0x3c411b8a4e96 @   62 : 80 0b 04 02       CreateClosure [11], [4], #2
         0x3c411b8a4e9a @   66 : bb                Star9 
         0x3c411b8a4e9b @   67 : 80 0c 05 02       CreateClosure [12], [5], #2
         0x3c411b8a4e9f @   71 : ba                Star10 
         0x3c411b8a4ea0 @   72 : 80 0d 06 02       CreateClosure [13], [6], #2
         0x3c411b8a4ea4 @   76 : b9                Star11 
         0x3c411b8a4ea5 @   77 : 80 0e 07 02       CreateClosure [14], [7], #2
         0x3c411b8a4ea9 @   81 : b8                Star12 
         0x3c411b8a4eaa @   82 : 80 0f 08 02       CreateClosure [15], [8], #2
         0x3c411b8a4eae @   86 : b7                Star13 
         0x3c411b8a4eaf @   87 : 80 10 09 02       CreateClosure [16], [9], #2
         0x3c411b8a4eb3 @   91 : b6                Star14 
         0x3c411b8a4eb4 @   92 : 19 f8 f6          Mov r2, r4
         0x3c411b8a4eb7 @   95 : 65 28 00 f7 0c    CallRuntime [DefineClass], r3-r14
         0x3c411b8a4ebc @  100 : c1                Star3 
         0x3c411b8a4ebd @  101 : 0b f6             Ldar r4
         0x3c411b8a4ebf @  103 : 25 02             StaCurrentContextSlot [2]
         0x3c411b8a4ec1 @  105 : 1b f9             PopContext r1
         0x3c411b8a4ec3 @  107 : c4                Star0 
 1015 S> 0x3c411b8a4ec4 @  108 : 0b fa             Ldar r0
 1030 E> 0x3c411b8a4ec6 @  110 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x3c411b8a4eca @  114 : 0e                LdaUndefined 
 1075 S> 0x3c411b8a4ecb @  115 : a9                Return 
Constant pool (size = 17)
0x3c411b8a4ed1: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 17
           0: 0x1e86a48c5ab9 <String[6]: #Object>
           1: 0x1e86a48c4c11 <String[14]: #defineProperty>
           2: 0x3c411b8a4f69 <String[10]: #__esModule>
           3: 0x3c411b8a4f89 <ObjectBoilerplateDescription[3]>
           4: 0x3c411b8a4fb1 <String[6]: #Vector>
           5: 0x3c411b8a4fc9 <ScopeInfo CLASS_SCOPE>
           6: 0x3c411b8a5009 <FixedArray[7]>
           7: 0x3c411b8a5321 <SharedFunctionInfo Vector>
           8: 0x3c411b8a5619 <SharedFunctionInfo fromPosition>
           9: 0x3c411b8a5751 <SharedFunctionInfo get x>
          10: 0x3c411b8a5879 <SharedFunctionInfo get y>
          11: 0x3c411b8a59a1 <SharedFunctionInfo get magnitude>
          12: 0x3c411b8a5b49 <SharedFunctionInfo add>
          13: 0x3c411b8a5ca9 <SharedFunctionInfo subtract>
          14: 0x3c411b8a5e09 <SharedFunctionInfo equals>
          15: 0x3c411b8a5f59 <SharedFunctionInfo serialize>
          16: 0x3c411b8a60c9 <SharedFunctionInfo toString>
Handler Table (size = 0)
Source Position Table (size = 25)
0x3c411b8a6289 <ByteArray[25]>
Object boilerplate at 0x3c411b8a4f89: 
0x3c411b8a4f89: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1e86a48c2059 <Map>
 - length: 3
           0: 8
           1: 0x1e86a48c6419 <String[5]: #value>
           2: 0x1e86a48c1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x3c411b8a5009 has 7 elements:
0x3c411b8a5009: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 7
           0: 12
           1: 0x3c411b8a5051 <DescriptorArray[5]>
           2: 0x1e86a48c3301 <NumberDictionary[7]>
           3: 0x1e86a48c1329 <FixedArray[0]>
           4: 0x3c411b8a5149 <DescriptorArray[9]>
           5: 0x1e86a48c3301 <NumberDictionary[7]>
           6: 0x1e86a48c1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xc (12)
Element[1]
0x3c411b8a5051: [DescriptorArray] in OldSpace
 - map: 0x1e86a48c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1e86a48c55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 4, attrs: [__C]) @ 0x18950ad34fe1 <AccessorInfo>
  [1]: 0x1e86a48c58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 3, attrs: [__C]) @ 0x18950ad34f71 <AccessorInfo>
  [2]: 0x1e86a48c5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 1, attrs: [___]) @ 0x18950ad35051 <AccessorInfo>
  [3]: 0x1e86a48c65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x3c411b8a5111 <ClassPositions 164, 1014>
  [4]: 0x3c411b8a5129: [String] in OldSpace: #fromPosition (const data descriptor, p: 0, attrs: [W_C]) @ 3
Element[2]
0x1e86a48c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x1e86a48c1329: [FixedArray] in ReadOnlySpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 0
Element[4]
0x3c411b8a5149: [DescriptorArray] in OldSpace
 - map: 0x1e86a48c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 9
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x1e86a48c4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 4, attrs: [W_C]) @ 1
  [1]: 0x18950ad18ac9: [String] in OldSpace: #x (const accessor descriptor, p: 5, attrs: [W_C]) @ 0x3c411b8a5251 <AccessorPair>(get: 4, set: 0x1e86a48c1339 <null>)
  [2]: 0x18950ad18ae1: [String] in OldSpace: #y (const accessor descriptor, p: 8, attrs: [W_C]) @ 0x3c411b8a5281 <AccessorPair>(get: 5, set: 0x1e86a48c1339 <null>)
  [3]: 0x3c411b8a5299: [String] in OldSpace: #magnitude (const accessor descriptor, p: 2, attrs: [W_C]) @ 0x3c411b8a52b9 <AccessorPair>(get: 6, set: 0x1e86a48c1339 <null>)
  [4]: 0x1e86a48c4569: [String] in ReadOnlySpace: #add (const data descriptor, p: 3, attrs: [W_C]) @ 7
  [5]: 0x3c411b8a52d1: [String] in OldSpace: #subtract (const data descriptor, p: 7, attrs: [W_C]) @ 8
  [6]: 0x18950ad07411: [String] in OldSpace: #equals (const data descriptor, p: 0, attrs: [W_C]) @ 9
  [7]: 0x18950ad101a9: [String] in OldSpace: #serialize (const data descriptor, p: 6, attrs: [W_C]) @ 10
  [8]: 0x1e86a48c62b9: [String] in ReadOnlySpace: #toString (const data descriptor, p: 1, attrs: [W_C]) @ 11
Element[5]
0x1e86a48c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x1e86a48c1329: [FixedArray] in ReadOnlySpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 0
0x3c411b8a5321 points to: [0x3c411b8a5390]
=== [0x3c411b8a5390] DISASSEMBLY ===
Parameter count 3
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  221 S> 0x3c411b8a5390 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x3c411b8a5393 @    3 : c2                Star2 
  226 E> 0x3c411b8a5394 @    4 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x3c411b8a5398 @    8 : c3                Star1 
  226 E> 0x3c411b8a5399 @    9 : 5e f9 f8 03 04    CallProperty1 r1, r2, a0, [4]
  219 E> 0x3c411b8a539e @   14 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
  254 S> 0x3c411b8a53a2 @   18 : 21 00 00          LdaGlobal [0], [0]
         0x3c411b8a53a5 @   21 : c2                Star2 
  259 E> 0x3c411b8a53a6 @   22 : 2d f8 01 02       GetNamedProperty r2, [1], [2]
         0x3c411b8a53aa @   26 : c3                Star1 
  259 E> 0x3c411b8a53ab @   27 : 5e f9 f8 04 08    CallProperty1 r1, r2, a1, [8]
  252 E> 0x3c411b8a53b0 @   32 : 32 02 03 0a       SetNamedProperty <this>, [3], [10]
         0x3c411b8a53b4 @   36 : 0e                LdaUndefined 
  273 S> 0x3c411b8a53b5 @   37 : a9                Return 
Constant pool (size = 4)
0x3c411b8a53b9: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 4
           0: 0x18950ad1a991 <String[4]: #Math>
           1: 0x18950ad1abb9 <String[5]: #round>
           2: 0x3c411b8a5419 <String[2]: #_x>
           3: 0x3c411b8a5431 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 22)
0x3c411b8a5449 <ByteArray[22]>
0x3c411b8a5619 points to: [0x3c411b8a5688]
=== [0x3c411b8a5688] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  319 S> 0x3c411b8a5688 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x3c411b8a568a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3c411b8a568c @    4 : c4                Star0 
  346 E> 0x3c411b8a568d @    5 : 2d 03 01 00       GetNamedProperty a0, [1], [0]
         0x3c411b8a5691 @    9 : c3                Star1 
  358 E> 0x3c411b8a5692 @   10 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
         0x3c411b8a5696 @   14 : c2                Star2 
         0x3c411b8a5697 @   15 : 0b fa             Ldar r0
  326 E> 0x3c411b8a5699 @   17 : 69 fa f9 02 04    Construct r0, r1-r2, [4]
  361 S> 0x3c411b8a569e @   22 : a9                Return 
Constant pool (size = 3)
0x3c411b8a56a1: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 3
           0: 0x3c411b8a4fb1 <String[6]: #Vector>
           1: 0x18950ad18ac9 <String[1]: #x>
           2: 0x18950ad18ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 14)
0x3c411b8a56c9 <ByteArray[14]>
0x3c411b8a5751 points to: [0x3c411b8a57c0]
=== [0x3c411b8a57c0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  402 S> 0x3c411b8a57c0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  405 S> 0x3c411b8a57c4 @    4 : a9                Return 
Constant pool (size = 1)
0x3c411b8a57c9: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 1
           0: 0x3c411b8a5419 <String[2]: #_x>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3c411b8a57e1 <ByteArray[7]>
0x3c411b8a5879 points to: [0x3c411b8a58e8]
=== [0x3c411b8a58e8] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  446 S> 0x3c411b8a58e8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
  449 S> 0x3c411b8a58ec @    4 : a9                Return 
Constant pool (size = 1)
0x3c411b8a58f1: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 1
           0: 0x3c411b8a5431 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3c411b8a5909 <ByteArray[7]>
0x3c411b8a59a1 points to: [0x3c411b8a5a10]
=== [0x3c411b8a5a10] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
  486 S> 0x3c411b8a5a10 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x3c411b8a5a13 @    3 : c3                Star1 
  498 E> 0x3c411b8a5a14 @    4 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x3c411b8a5a18 @    8 : c4                Star0 
  508 E> 0x3c411b8a5a19 @    9 : 2d 02 02 06       GetNamedProperty <this>, [2], [6]
         0x3c411b8a5a1d @   13 : c2                Star2 
  518 E> 0x3c411b8a5a1e @   14 : 2d 02 02 08       GetNamedProperty <this>, [2], [8]
  511 E> 0x3c411b8a5a22 @   18 : 3b f8 05          Mul r2, [5]
         0x3c411b8a5a25 @   21 : c2                Star2 
  528 E> 0x3c411b8a5a26 @   22 : 2d 02 03 0b       GetNamedProperty <this>, [3], [11]
         0x3c411b8a5a2a @   26 : c1                Star3 
  538 E> 0x3c411b8a5a2b @   27 : 2d 02 03 0d       GetNamedProperty <this>, [3], [13]
  531 E> 0x3c411b8a5a2f @   31 : 3b f7 0a          Mul r3, [10]
  521 E> 0x3c411b8a5a32 @   34 : 39 f8 04          Add r2, [4]
         0x3c411b8a5a35 @   37 : c2                Star2 
  498 E> 0x3c411b8a5a36 @   38 : 5e fa f9 f8 0f    CallProperty1 r0, r1, r2, [15]
  542 S> 0x3c411b8a5a3b @   43 : a9                Return 
Constant pool (size = 4)
0x3c411b8a5a41: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 4
           0: 0x18950ad1a991 <String[4]: #Math>
           1: 0x18950ad1ac01 <String[4]: #sqrt>
           2: 0x3c411b8a5419 <String[2]: #_x>
           3: 0x3c411b8a5431 <String[2]: #_y>
Handler Table (size = 0)
Source Position Table (size = 26)
0x3c411b8a5a89 <ByteArray[26]>
0x3c411b8a5b49 points to: [0x3c411b8a5bb8]
=== [0x3c411b8a5bb8] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  579 S> 0x3c411b8a5bb8 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x3c411b8a5bba @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3c411b8a5bbc @    4 : c4                Star0 
  602 E> 0x3c411b8a5bbd @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x3c411b8a5bc1 @    9 : c3                Star1 
  618 E> 0x3c411b8a5bc2 @   10 : 2d 03 02 03       GetNamedProperty a0, [2], [3]
  605 E> 0x3c411b8a5bc6 @   14 : 39 f9 00          Add r1, [0]
         0x3c411b8a5bc9 @   17 : c3                Star1 
  626 E> 0x3c411b8a5bca @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x3c411b8a5bce @   22 : c2                Star2 
  642 E> 0x3c411b8a5bcf @   23 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
  629 E> 0x3c411b8a5bd3 @   27 : 39 f8 05          Add r2, [5]
         0x3c411b8a5bd6 @   30 : c2                Star2 
         0x3c411b8a5bd7 @   31 : 0b fa             Ldar r0
  586 E> 0x3c411b8a5bd9 @   33 : 69 fa f9 02 0a    Construct r0, r1-r2, [10]
  645 S> 0x3c411b8a5bde @   38 : a9                Return 
Constant pool (size = 5)
0x3c411b8a5be1: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 5
           0: 0x3c411b8a4fb1 <String[6]: #Vector>
           1: 0x3c411b8a5419 <String[2]: #_x>
           2: 0x18950ad18ac9 <String[1]: #x>
           3: 0x3c411b8a5431 <String[2]: #_y>
           4: 0x18950ad18ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 23)
0x3c411b8a5c19 <ByteArray[23]>
0x3c411b8a5ca9 points to: [0x3c411b8a5d18]
=== [0x3c411b8a5d18] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  687 S> 0x3c411b8a5d18 @    0 : 16 02             LdaCurrentContextSlot [2]
         0x3c411b8a5d1a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3c411b8a5d1c @    4 : c4                Star0 
  710 E> 0x3c411b8a5d1d @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x3c411b8a5d21 @    9 : c3                Star1 
  726 E> 0x3c411b8a5d22 @   10 : 2d 03 02 03       GetNamedProperty a0, [2], [3]
  713 E> 0x3c411b8a5d26 @   14 : 3a f9 00          Sub r1, [0]
         0x3c411b8a5d29 @   17 : c3                Star1 
  734 E> 0x3c411b8a5d2a @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x3c411b8a5d2e @   22 : c2                Star2 
  750 E> 0x3c411b8a5d2f @   23 : 2d 03 04 08       GetNamedProperty a0, [4], [8]
  737 E> 0x3c411b8a5d33 @   27 : 3a f8 05          Sub r2, [5]
         0x3c411b8a5d36 @   30 : c2                Star2 
         0x3c411b8a5d37 @   31 : 0b fa             Ldar r0
  694 E> 0x3c411b8a5d39 @   33 : 69 fa f9 02 0a    Construct r0, r1-r2, [10]
  753 S> 0x3c411b8a5d3e @   38 : a9                Return 
Constant pool (size = 5)
0x3c411b8a5d41: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 5
           0: 0x3c411b8a4fb1 <String[6]: #Vector>
           1: 0x3c411b8a5419 <String[2]: #_x>
           2: 0x18950ad18ac9 <String[1]: #x>
           3: 0x3c411b8a5431 <String[2]: #_y>
           4: 0x18950ad18ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 23)
0x3c411b8a5d79 <ByteArray[23]>
0x3c411b8a5e09 points to: [0x3c411b8a5e78]
=== [0x3c411b8a5e78] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  800 S> 0x3c411b8a5e78 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3c411b8a5e7c @    4 : c4                Star0 
  812 E> 0x3c411b8a5e7d @    5 : 2d 03 01 02       GetNamedProperty a0, [1], [2]
  803 E> 0x3c411b8a5e81 @    9 : 6b fa 04          TestEqual r0, [4]
         0x3c411b8a5e84 @   12 : 99 0e             JumpIfFalse [14] (0x3c411b8a5e92 @ 26)
  822 E> 0x3c411b8a5e86 @   14 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x3c411b8a5e8a @   18 : c4                Star0 
  834 E> 0x3c411b8a5e8b @   19 : 2d 03 03 07       GetNamedProperty a0, [3], [7]
  825 E> 0x3c411b8a5e8f @   23 : 6b fa 09          TestEqual r0, [9]
  836 S> 0x3c411b8a5e92 @   26 : a9                Return 
Constant pool (size = 4)
0x3c411b8a5e99: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 4
           0: 0x3c411b8a5419 <String[2]: #_x>
           1: 0x18950ad18ac9 <String[1]: #x>
           2: 0x3c411b8a5431 <String[2]: #_y>
           3: 0x18950ad18ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 17)
0x3c411b8a5ec9 <ByteArray[17]>
0x3c411b8a5f59 points to: [0x3c411b8a5fc8]
=== [0x3c411b8a5fc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  869 S> 0x3c411b8a5fc8 @    0 : 7c 00 00 29       CreateObjectLiteral [0], [0], #41
         0x3c411b8a5fcc @    4 : c4                Star0 
  898 E> 0x3c411b8a5fcd @    5 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x3c411b8a5fd1 @    9 : 33 fa 01 03       DefineNamedOwnProperty r0, [1], [3]
  921 E> 0x3c411b8a5fd5 @   13 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x3c411b8a5fd9 @   17 : 33 fa 02 07       DefineNamedOwnProperty r0, [2], [7]
         0x3c411b8a5fdd @   21 : 0b fa             Ldar r0
  934 S> 0x3c411b8a5fdf @   23 : a9                Return 
Constant pool (size = 3)
0x3c411b8a5fe1: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 3
           0: 0x3c411b8a6009 <ObjectBoilerplateDescription[5]>
           1: 0x18950ad18ac9 <String[1]: #x>
           2: 0x18950ad18ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 11)
0x3c411b8a6041 <ByteArray[11]>
Object boilerplate at 0x3c411b8a6009: 
0x3c411b8a6009: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1e86a48c2059 <Map>
 - length: 5
           0: 8
           1: 0x18950ad18ac9 <String[1]: #x>
           2: 0x1e86a48c1501 <Odd Oddball: uninitialized>
           3: 0x18950ad18ae1 <String[1]: #y>
           4: 0x1e86a48c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x3c411b8a60c9 points to: [0x3c411b8a6138]
=== [0x3c411b8a6138] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  966 S> 0x3c411b8a6138 @    0 : 13 00             LdaConstant [0]
         0x3c411b8a613a @    2 : c4                Star0 
  985 E> 0x3c411b8a613b @    3 : 2d 02 01 01       GetNamedProperty <this>, [1], [1]
         0x3c411b8a613f @    7 : 77                ToString 
         0x3c411b8a6140 @    8 : 39 fa 00          Add r0, [0]
         0x3c411b8a6143 @   11 : c4                Star0 
         0x3c411b8a6144 @   12 : 13 02             LdaConstant [2]
         0x3c411b8a6146 @   14 : 39 fa 00          Add r0, [0]
         0x3c411b8a6149 @   17 : c4                Star0 
 1000 E> 0x3c411b8a614a @   18 : 2d 02 03 03       GetNamedProperty <this>, [3], [3]
         0x3c411b8a614e @   22 : 77                ToString 
         0x3c411b8a614f @   23 : 39 fa 00          Add r0, [0]
         0x3c411b8a6152 @   26 : c4                Star0 
         0x3c411b8a6153 @   27 : 13 04             LdaConstant [4]
         0x3c411b8a6155 @   29 : 39 fa 00          Add r0, [0]
 1006 S> 0x3c411b8a6158 @   32 : a9                Return 
Constant pool (size = 5)
0x3c411b8a6161: [FixedArray] in OldSpace
 - map: 0x1e86a48c12e1 <Map>
 - length: 5
           0: 0x3c411b8a6199 <String[4]: #(X: >
           1: 0x3c411b8a5419 <String[2]: #_x>
           2: 0x3c411b8a61b1 <String[5]: #, Y: >
           3: 0x3c411b8a5431 <String[2]: #_y>
           4: 0x3c411b8a61c9 <String[1]: #)>
Handler Table (size = 0)
Source Position Table (size = 11)
0x3c411b8a61e1 <ByteArray[11]>
<< OUTPUTTING DISASSEMBLY END >>
