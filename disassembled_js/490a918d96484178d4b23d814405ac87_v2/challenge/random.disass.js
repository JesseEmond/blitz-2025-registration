<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x15497f424dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x15497f424dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x15497f424dcc @    4 : c4                Star0 
  412 S> 0x15497f424dcd @    5 : a9                Return 
Constant pool (size = 1)
0x15497f424dd1: [FixedArray] in OldSpace
 - map: 0x3692d28c12e1 <Map>
 - length: 1
           0: 0x15497f424de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x15497f425531 <ByteArray[7]>
0x15497f424de9 points to: [0x15497f424e58]
=== [0x15497f424e58] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   10 E> 0x15497f424e58 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x15497f424e5b @    3 : 1a f9             PushContext r1
         0x15497f424e5d @    5 : 10                LdaTheHole 
         0x15497f424e5e @    6 : 25 02             StaCurrentContextSlot [2]
   76 S> 0x15497f424e60 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x15497f424e63 @   11 : c1                Star3 
   83 E> 0x15497f424e64 @   12 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x15497f424e68 @   16 : c2                Star2 
         0x15497f424e69 @   17 : 13 03             LdaConstant [3]
         0x15497f424e6b @   19 : bf                Star5 
   98 E> 0x15497f424e6c @   20 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x15497f424e70 @   24 : be                Star6 
         0x15497f424e71 @   25 : 19 03 f6          Mov a0, r4
   83 E> 0x15497f424e74 @   28 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x15497f424e79 @   33 : 0e                LdaUndefined 
  154 E> 0x15497f424e7a @   34 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  183 S> 0x15497f424e7e @   38 : 13 06             LdaConstant [6]
         0x15497f424e80 @   40 : c1                Star3 
  183 E> 0x15497f424e81 @   41 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  183 E> 0x15497f424e85 @   45 : 25 02             StaCurrentContextSlot [2]
         0x15497f424e87 @   47 : 10                LdaTheHole 
         0x15497f424e88 @   48 : bf                Star5 
         0x15497f424e89 @   49 : 80 08 00 02       CreateClosure [8], [0], #2
         0x15497f424e8d @   53 : c2                Star2 
         0x15497f424e8e @   54 : 13 07             LdaConstant [7]
         0x15497f424e90 @   56 : c1                Star3 
         0x15497f424e91 @   57 : 80 09 01 02       CreateClosure [9], [1], #2
         0x15497f424e95 @   61 : be                Star6 
         0x15497f424e96 @   62 : 19 f8 f6          Mov r2, r4
         0x15497f424e99 @   65 : 65 28 00 f7 04    CallRuntime [DefineClass], r3-r6
         0x15497f424e9e @   70 : c1                Star3 
         0x15497f424e9f @   71 : 19 f6 fa          Mov r4, r0
  349 S> 0x15497f424ea2 @   74 : 0b fa             Ldar r0
  364 E> 0x15497f424ea4 @   76 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x15497f424ea8 @   80 : 0e                LdaUndefined 
  409 S> 0x15497f424ea9 @   81 : a9                Return 
Constant pool (size = 10)
0x15497f424eb1: [FixedArray] in OldSpace
 - map: 0x3692d28c12e1 <Map>
 - length: 10
           0: 0x15497f424f11 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3692d28c5ab9 <String[6]: #Object>
           2: 0x3692d28c4c11 <String[14]: #defineProperty>
           3: 0x15497f424f89 <String[10]: #__esModule>
           4: 0x15497f424fa9 <ObjectBoilerplateDescription[3]>
           5: 0x15497f424fd1 <String[6]: #Random>
           6: 0x15497f424f69 <String[10]: #seedrandom>
           7: 0x15497f424fe9 <FixedArray[7]>
           8: 0x15497f425151 <SharedFunctionInfo Random>
           9: 0x15497f4253a9 <SharedFunctionInfo random>
Handler Table (size = 0)
Source Position Table (size = 32)
0x15497f4254e9 <ByteArray[32]>
Object boilerplate at 0x15497f424fa9: 
0x15497f424fa9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3692d28c2059 <Map>
 - length: 3
           0: 8
           1: 0x3692d28c6419 <String[5]: #value>
           2: 0x3692d28c1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x15497f424fe9 has 7 elements:
0x15497f424fe9: [FixedArray] in OldSpace
 - map: 0x3692d28c12e1 <Map>
 - length: 7
           0: 4
           1: 0x15497f425031 <DescriptorArray[4]>
           2: 0x3692d28c3301 <NumberDictionary[7]>
           3: 0x3692d28c1329 <FixedArray[0]>
           4: 0x15497f4250f1 <DescriptorArray[2]>
           5: 0x3692d28c3301 <NumberDictionary[7]>
           6: 0x3692d28c1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x4 (4)
Element[1]
0x15497f425031: [DescriptorArray] in OldSpace
 - map: 0x3692d28c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3692d28c55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 1, attrs: [__C]) @ 0x1dfda7634fe1 <AccessorInfo>
  [1]: 0x3692d28c58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 2, attrs: [__C]) @ 0x1dfda7634f71 <AccessorInfo>
  [2]: 0x3692d28c5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x1dfda7635051 <AccessorInfo>
  [3]: 0x3692d28c65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 0, attrs: [W_C]) @ 0x15497f4250d9 <ClassPositions 206, 348>
Element[2]
0x3692d28c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x3692d28c1329: [FixedArray] in ReadOnlySpace
 - map: 0x3692d28c12e1 <Map>
 - length: 0
Element[4]
0x15497f4250f1: [DescriptorArray] in OldSpace
 - map: 0x3692d28c7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 2
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3692d28c4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 0, attrs: [W_C]) @ 1
  [1]: 0x1dfda761aba1: [String] in OldSpace: #random (const data descriptor, p: 1, attrs: [W_C]) @ 3
Element[5]
0x3692d28c3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x3692d28c1329: [FixedArray] in ReadOnlySpace
 - map: 0x3692d28c12e1 <Map>
 - length: 0
0x15497f425151 points to: [0x15497f4251c0]
=== [0x15497f4251c0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  253 S> 0x15497f4251c0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
  264 E> 0x15497f4251c2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x15497f4251c4 @    4 : c3                Star1 
  280 E> 0x15497f4251c5 @    5 : 2d 03 01 00       GetNamedProperty a0, [1], [0]
         0x15497f4251c9 @    9 : c2                Star2 
  280 E> 0x15497f4251ca @   10 : 5d f8 03 02       CallProperty0 r2, a0, [2]
         0x15497f4251ce @   14 : c2                Star2 
  264 E> 0x15497f4251cf @   15 : 62 f9 f8 04       CallUndefinedReceiver1 r1, r2, [4]
  262 E> 0x15497f4251d3 @   19 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
         0x15497f4251d7 @   23 : 0e                LdaUndefined 
  297 S> 0x15497f4251d8 @   24 : a9                Return 
Constant pool (size = 3)
0x15497f4251e1: [FixedArray] in OldSpace
 - map: 0x3692d28c12e1 <Map>
 - length: 3
           0: 0x15497f424f69 <String[10]: #seedrandom>
           1: 0x3692d28c62b9 <String[8]: #toString>
           2: 0x1dfda7628a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 18)
0x15497f425221 <ByteArray[18]>
0x15497f4253a9 points to: [0x15497f425418]
=== [0x15497f425418] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  334 S> 0x15497f425418 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x15497f42541c @    4 : c4                Star0 
  334 E> 0x15497f42541d @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
  340 S> 0x15497f425421 @    9 : a9                Return 
Constant pool (size = 1)
0x15497f425429: [FixedArray] in OldSpace
 - map: 0x3692d28c12e1 <Map>
 - length: 1
           0: 0x1dfda7628a51 <String[3]: #rng>
Handler Table (size = 0)
Source Position Table (size = 9)
0x15497f425441 <ByteArray[9]>
<< OUTPUTTING DISASSEMBLY END >>
