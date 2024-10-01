<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x22d16eb24db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x22d16eb24db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x22d16eb24dbc @    4 : c4                Star0 
  693 S> 0x22d16eb24dbd @    5 : a9                Return 
Constant pool (size = 1)
0x22d16eb24dc1: [FixedArray] in OldSpace
 - map: 0x1423602412e1 <Map>
 - length: 1
           0: 0x22d16eb24dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x22d16eb25481 <ByteArray[7]>
0x22d16eb24dd9 points to: [0x22d16eb24e48]
=== [0x22d16eb24e48] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   76 S> 0x22d16eb24e48 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x22d16eb24e4b @    3 : c1                Star3 
   83 E> 0x22d16eb24e4c @    4 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x22d16eb24e50 @    8 : c2                Star2 
         0x22d16eb24e51 @    9 : 13 02             LdaConstant [2]
         0x22d16eb24e53 @   11 : bf                Star5 
   98 E> 0x22d16eb24e54 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x22d16eb24e58 @   16 : be                Star6 
         0x22d16eb24e59 @   17 : 19 03 f6          Mov a0, r4
   83 E> 0x22d16eb24e5c @   20 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x22d16eb24e61 @   25 : 0e                LdaUndefined 
         0x22d16eb24e62 @   26 : c0                Star4 
  177 E> 0x22d16eb24e63 @   27 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x22d16eb24e67 @   31 : 0b f6             Ldar r4
  158 E> 0x22d16eb24e69 @   33 : 32 03 05 09       SetNamedProperty a0, [5], [9]
  201 S> 0x22d16eb24e6d @   37 : 80 06 00 02       CreateClosure [6], [0], #2
         0x22d16eb24e71 @   41 : c2                Star2 
         0x22d16eb24e72 @   42 : 0b fa             Ldar r0
  291 E> 0x22d16eb24e74 @   44 : 96 0a             JumpIfToBooleanTrue [10] (0x22d16eb24e7e @ 54)
  304 E> 0x22d16eb24e76 @   46 : 7d                CreateEmptyObjectLiteral 
         0x22d16eb24e77 @   47 : c4                Star0 
  321 E> 0x22d16eb24e78 @   48 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x22d16eb24e7c @   52 : 0b fa             Ldar r0
         0x22d16eb24e7e @   54 : c1                Star3 
  290 E> 0x22d16eb24e7f @   55 : 62 f8 f7 0b       CallUndefinedReceiver1 r2, r3, [11]
  356 S> 0x22d16eb24e83 @   59 : 80 07 01 02       CreateClosure [7], [1], #2
         0x22d16eb24e87 @   63 : c2                Star2 
         0x22d16eb24e88 @   64 : 0b f9             Ldar r1
  593 E> 0x22d16eb24e8a @   66 : 96 0a             JumpIfToBooleanTrue [10] (0x22d16eb24e94 @ 76)
  608 E> 0x22d16eb24e8c @   68 : 7d                CreateEmptyObjectLiteral 
         0x22d16eb24e8d @   69 : c3                Star1 
  627 E> 0x22d16eb24e8e @   70 : 32 03 05 09       SetNamedProperty a0, [5], [9]
         0x22d16eb24e92 @   74 : 0b f9             Ldar r1
         0x22d16eb24e94 @   76 : c1                Star3 
  592 E> 0x22d16eb24e95 @   77 : 62 f8 f7 0d       CallUndefinedReceiver1 r2, r3, [13]
         0x22d16eb24e99 @   81 : 0e                LdaUndefined 
  690 S> 0x22d16eb24e9a @   82 : a9                Return 
Constant pool (size = 8)
0x22d16eb24ea1: [FixedArray] in OldSpace
 - map: 0x1423602412e1 <Map>
 - length: 8
           0: 0x142360245ab9 <String[6]: #Object>
           1: 0x142360244c11 <String[14]: #defineProperty>
           2: 0x22d16eb24ef1 <String[10]: #__esModule>
           3: 0x22d16eb24f11 <ObjectBoilerplateDescription[3]>
           4: 0x22d16eb24f39 <String[8]: #TileType>
           5: 0x22d16eb24f51 <String[10]: #ActionType>
           6: 0x22d16eb24f71 <SharedFunctionInfo>
           7: 0x22d16eb251c9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 47)
0x22d16eb253d9 <ByteArray[47]>
Boilerplate at 0x22d16eb24f11: 
0x22d16eb24f11: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x142360242059 <Map>
 - length: 3
           0: 8
           1: 0x142360246419 <String[5]: #value>
           2: 0x142360241729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x22d16eb24f71 points to: [0x22d16eb24fe0]
=== [0x22d16eb24fe0] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  228 S> 0x22d16eb24fe0 @    0 : 13 00             LdaConstant [0]
  246 E> 0x22d16eb24fe2 @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
  261 S> 0x22d16eb24fe6 @    6 : 13 01             LdaConstant [1]
  278 E> 0x22d16eb24fe8 @    8 : 32 03 01 02       SetNamedProperty a0, [1], [2]
         0x22d16eb24fec @   12 : 0e                LdaUndefined 
  288 S> 0x22d16eb24fed @   13 : a9                Return 
Constant pool (size = 2)
0x22d16eb24ff1: [FixedArray] in OldSpace
 - map: 0x1423602412e1 <Map>
 - length: 2
           0: 0x22d16eb25011 <String[5]: #EMPTY>
           1: 0x22d16eb25029 <String[4]: #WALL>
Handler Table (size = 0)
Source Position Table (size = 13)
0x22d16eb25041 <ByteArray[13]>
0x22d16eb251c9 points to: [0x22d16eb25238]
=== [0x22d16eb25238] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  385 S> 0x22d16eb25238 @    0 : 13 00             LdaConstant [0]
  409 E> 0x22d16eb2523a @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
  428 S> 0x22d16eb2523e @    6 : 13 01             LdaConstant [1]
  453 E> 0x22d16eb25240 @    8 : 32 03 01 02       SetNamedProperty a0, [1], [2]
  473 S> 0x22d16eb25244 @   12 : 13 02             LdaConstant [2]
  495 E> 0x22d16eb25246 @   14 : 32 03 02 04       SetNamedProperty a0, [2], [4]
  512 S> 0x22d16eb2524a @   18 : 13 03             LdaConstant [3]
  536 E> 0x22d16eb2524c @   20 : 32 03 03 06       SetNamedProperty a0, [3], [6]
  555 S> 0x22d16eb25250 @   24 : 13 04             LdaConstant [4]
  577 E> 0x22d16eb25252 @   26 : 32 03 04 08       SetNamedProperty a0, [4], [8]
         0x22d16eb25256 @   30 : 0e                LdaUndefined 
  590 S> 0x22d16eb25257 @   31 : a9                Return 
Constant pool (size = 5)
0x22d16eb25259: [FixedArray] in OldSpace
 - map: 0x1423602412e1 <Map>
 - length: 5
           0: 0x22d16eb25291 <String[9]: #MOVE_LEFT>
           1: 0x22d16eb252b1 <String[10]: #MOVE_RIGHT>
           2: 0x22d16eb252d1 <String[7]: #MOVE_UP>
           3: 0x22d16eb252e9 <String[9]: #MOVE_DOWN>
           4: 0x22d16eb25309 <String[7]: #MOVE_TO>
Handler Table (size = 0)
Source Position Table (size = 25)
0x22d16eb25321 <ByteArray[25]>
<< OUTPUTTING DISASSEMBLY END >>
