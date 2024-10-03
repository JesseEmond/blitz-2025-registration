<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x1d7ceba24dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x1d7ceba24dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x1d7ceba24dcc @    4 : c4                Star0 
  693 S> 0x1d7ceba24dcd @    5 : a9                Return 
Constant pool (size = 1)
0x1d7ceba24dd1: [FixedArray] in OldSpace
 - map: 0x1a504e9412e1 <Map>
 - length: 1
           0: 0x1d7ceba24de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1d7ceba25491 <ByteArray[7]>
0x1d7ceba24de9 points to: [0x1d7ceba24e58]
=== [0x1d7ceba24e58] DISASSEMBLY ===
Parameter count 6
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
   76 S> 0x1d7ceba24e58 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x1d7ceba24e5b @    3 : c1                Star3 
   83 E> 0x1d7ceba24e5c @    4 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x1d7ceba24e60 @    8 : c2                Star2 
         0x1d7ceba24e61 @    9 : 13 02             LdaConstant [2]
         0x1d7ceba24e63 @   11 : bf                Star5 
   98 E> 0x1d7ceba24e64 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x1d7ceba24e68 @   16 : be                Star6 
         0x1d7ceba24e69 @   17 : 19 03 f6          Mov a0, r4
   83 E> 0x1d7ceba24e6c @   20 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x1d7ceba24e71 @   25 : 0e                LdaUndefined 
         0x1d7ceba24e72 @   26 : c0                Star4 
  177 E> 0x1d7ceba24e73 @   27 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x1d7ceba24e77 @   31 : 0b f6             Ldar r4
  158 E> 0x1d7ceba24e79 @   33 : 32 03 05 09       SetNamedProperty a0, [5], [9]
  201 S> 0x1d7ceba24e7d @   37 : 80 06 00 02       CreateClosure [6], [0], #2
         0x1d7ceba24e81 @   41 : c2                Star2 
         0x1d7ceba24e82 @   42 : 0b fa             Ldar r0
  291 E> 0x1d7ceba24e84 @   44 : 96 0a             JumpIfToBooleanTrue [10] (0x1d7ceba24e8e @ 54)
  304 E> 0x1d7ceba24e86 @   46 : 7d                CreateEmptyObjectLiteral 
         0x1d7ceba24e87 @   47 : c4                Star0 
  321 E> 0x1d7ceba24e88 @   48 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x1d7ceba24e8c @   52 : 0b fa             Ldar r0
         0x1d7ceba24e8e @   54 : c1                Star3 
  290 E> 0x1d7ceba24e8f @   55 : 62 f8 f7 0b       CallUndefinedReceiver1 r2, r3, [11]
  356 S> 0x1d7ceba24e93 @   59 : 80 07 01 02       CreateClosure [7], [1], #2
         0x1d7ceba24e97 @   63 : c2                Star2 
         0x1d7ceba24e98 @   64 : 0b f9             Ldar r1
  593 E> 0x1d7ceba24e9a @   66 : 96 0a             JumpIfToBooleanTrue [10] (0x1d7ceba24ea4 @ 76)
  608 E> 0x1d7ceba24e9c @   68 : 7d                CreateEmptyObjectLiteral 
         0x1d7ceba24e9d @   69 : c3                Star1 
  627 E> 0x1d7ceba24e9e @   70 : 32 03 05 09       SetNamedProperty a0, [5], [9]
         0x1d7ceba24ea2 @   74 : 0b f9             Ldar r1
         0x1d7ceba24ea4 @   76 : c1                Star3 
  592 E> 0x1d7ceba24ea5 @   77 : 62 f8 f7 0d       CallUndefinedReceiver1 r2, r3, [13]
         0x1d7ceba24ea9 @   81 : 0e                LdaUndefined 
  690 S> 0x1d7ceba24eaa @   82 : a9                Return 
Constant pool (size = 8)
0x1d7ceba24eb1: [FixedArray] in OldSpace
 - map: 0x1a504e9412e1 <Map>
 - length: 8
           0: 0x1a504e945ab9 <String[6]: #Object>
           1: 0x1a504e944c11 <String[14]: #defineProperty>
           2: 0x1d7ceba24f01 <String[10]: #__esModule>
           3: 0x1d7ceba24f21 <ObjectBoilerplateDescription[3]>
           4: 0x1d7ceba24f49 <String[8]: #TileType>
           5: 0x1d7ceba24f61 <String[10]: #ActionType>
           6: 0x1d7ceba24f81 <SharedFunctionInfo>
           7: 0x1d7ceba251d9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 47)
0x1d7ceba253e9 <ByteArray[47]>
Object boilerplate at 0x1d7ceba24f21: 
0x1d7ceba24f21: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x1a504e942059 <Map>
 - length: 3
           0: 8
           1: 0x1a504e946419 <String[5]: #value>
           2: 0x1a504e941729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1d7ceba24f81 points to: [0x1d7ceba24ff0]
=== [0x1d7ceba24ff0] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  228 S> 0x1d7ceba24ff0 @    0 : 13 00             LdaConstant [0]
  246 E> 0x1d7ceba24ff2 @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
  261 S> 0x1d7ceba24ff6 @    6 : 13 01             LdaConstant [1]
  278 E> 0x1d7ceba24ff8 @    8 : 32 03 01 02       SetNamedProperty a0, [1], [2]
         0x1d7ceba24ffc @   12 : 0e                LdaUndefined 
  288 S> 0x1d7ceba24ffd @   13 : a9                Return 
Constant pool (size = 2)
0x1d7ceba25001: [FixedArray] in OldSpace
 - map: 0x1a504e9412e1 <Map>
 - length: 2
           0: 0x1d7ceba25021 <String[5]: #EMPTY>
           1: 0x1d7ceba25039 <String[4]: #WALL>
Handler Table (size = 0)
Source Position Table (size = 13)
0x1d7ceba25051 <ByteArray[13]>
0x1d7ceba251d9 points to: [0x1d7ceba25248]
=== [0x1d7ceba25248] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
  385 S> 0x1d7ceba25248 @    0 : 13 00             LdaConstant [0]
  409 E> 0x1d7ceba2524a @    2 : 32 03 00 00       SetNamedProperty a0, [0], [0]
  428 S> 0x1d7ceba2524e @    6 : 13 01             LdaConstant [1]
  453 E> 0x1d7ceba25250 @    8 : 32 03 01 02       SetNamedProperty a0, [1], [2]
  473 S> 0x1d7ceba25254 @   12 : 13 02             LdaConstant [2]
  495 E> 0x1d7ceba25256 @   14 : 32 03 02 04       SetNamedProperty a0, [2], [4]
  512 S> 0x1d7ceba2525a @   18 : 13 03             LdaConstant [3]
  536 E> 0x1d7ceba2525c @   20 : 32 03 03 06       SetNamedProperty a0, [3], [6]
  555 S> 0x1d7ceba25260 @   24 : 13 04             LdaConstant [4]
  577 E> 0x1d7ceba25262 @   26 : 32 03 04 08       SetNamedProperty a0, [4], [8]
         0x1d7ceba25266 @   30 : 0e                LdaUndefined 
  590 S> 0x1d7ceba25267 @   31 : a9                Return 
Constant pool (size = 5)
0x1d7ceba25269: [FixedArray] in OldSpace
 - map: 0x1a504e9412e1 <Map>
 - length: 5
           0: 0x1d7ceba252a1 <String[9]: #MOVE_LEFT>
           1: 0x1d7ceba252c1 <String[10]: #MOVE_RIGHT>
           2: 0x1d7ceba252e1 <String[7]: #MOVE_UP>
           3: 0x1d7ceba252f9 <String[9]: #MOVE_DOWN>
           4: 0x1d7ceba25319 <String[7]: #MOVE_TO>
Handler Table (size = 0)
Source Position Table (size = 25)
0x1d7ceba25331 <ByteArray[25]>
<< OUTPUTTING DISASSEMBLY END >>
