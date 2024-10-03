<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x150521664dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x150521664dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x150521664dcc @    4 : c4                Star0 
  566 S> 0x150521664dcd @    5 : a9                Return 
Constant pool (size = 1)
0x150521664dd1: [FixedArray] in OldSpace
 - map: 0x3812f32c12e1 <Map>
 - length: 1
           0: 0x150521664de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x1505216654f9 <ByteArray[7]>
0x150521664de9 points to: [0x150521664e58]
=== [0x150521664e58] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   10 E> 0x150521664e58 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x150521664e5b @    3 : 1a fa             PushContext r0
   76 S> 0x150521664e5d @    5 : 21 01 00          LdaGlobal [1], [0]
         0x150521664e60 @    8 : c2                Star2 
   83 E> 0x150521664e61 @    9 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x150521664e65 @   13 : c3                Star1 
         0x150521664e66 @   14 : 13 03             LdaConstant [3]
         0x150521664e68 @   16 : c0                Star4 
   98 E> 0x150521664e69 @   17 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x150521664e6d @   21 : bf                Star5 
         0x150521664e6e @   22 : 19 03 f7          Mov a0, r3
   83 E> 0x150521664e71 @   25 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x150521664e76 @   30 : 0e                LdaUndefined 
         0x150521664e77 @   31 : c1                Star3 
  186 E> 0x150521664e78 @   32 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x150521664e7c @   36 : 0b f7             Ldar r3
  157 E> 0x150521664e7e @   38 : 32 03 06 09       SetNamedProperty a0, [6], [9]
  209 S> 0x150521664e82 @   42 : 13 07             LdaConstant [7]
         0x150521664e84 @   44 : c2                Star2 
  209 E> 0x150521664e85 @   45 : 62 04 f8 0b       CallUndefinedReceiver1 a1, r2, [11]
  209 E> 0x150521664e89 @   49 : 25 02             StaCurrentContextSlot [2]
  228 S> 0x150521664e8b @   51 : 21 01 00          LdaGlobal [1], [0]
         0x150521664e8e @   54 : c2                Star2 
  235 E> 0x150521664e8f @   55 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x150521664e93 @   59 : c3                Star1 
         0x150521664e94 @   60 : 13 05             LdaConstant [5]
         0x150521664e96 @   62 : c0                Star4 
  250 E> 0x150521664e97 @   63 : 7c 08 0d 29       CreateObjectLiteral [8], [13], #41
         0x150521664e9b @   67 : bf                Star5 
  306 E> 0x150521664e9c @   68 : 80 09 00 02       CreateClosure [9], [0], #2
         0x150521664ea0 @   72 : 33 f5 0a 0e       DefineNamedOwnProperty r5, [10], [14]
         0x150521664ea4 @   76 : 19 03 f7          Mov a0, r3
  235 E> 0x150521664ea7 @   79 : 5c f9 f8 04 10    CallProperty r1, r2-r5, [16]
  379 S> 0x150521664eac @   84 : 13 0b             LdaConstant [11]
         0x150521664eae @   86 : c2                Star2 
  379 E> 0x150521664eaf @   87 : 62 04 f8 12       CallUndefinedReceiver1 a1, r2, [18]
  379 E> 0x150521664eb3 @   91 : 25 03             StaCurrentContextSlot [3]
  409 S> 0x150521664eb5 @   93 : 21 01 00          LdaGlobal [1], [0]
         0x150521664eb8 @   96 : c2                Star2 
  416 E> 0x150521664eb9 @   97 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x150521664ebd @  101 : c3                Star1 
         0x150521664ebe @  102 : 13 06             LdaConstant [6]
         0x150521664ec0 @  104 : c0                Star4 
  431 E> 0x150521664ec1 @  105 : 7c 0c 14 29       CreateObjectLiteral [12], [20], #41
         0x150521664ec5 @  109 : bf                Star5 
  478 E> 0x150521664ec6 @  110 : 80 0d 01 02       CreateClosure [13], [1], #2
         0x150521664eca @  114 : 33 f5 0a 15       DefineNamedOwnProperty r5, [10], [21]
         0x150521664ece @  118 : 19 03 f7          Mov a0, r3
  416 E> 0x150521664ed1 @  121 : 5c f9 f8 04 17    CallProperty r1, r2-r5, [23]
         0x150521664ed6 @  126 : 0e                LdaUndefined 
  563 S> 0x150521664ed7 @  127 : a9                Return 
Constant pool (size = 14)
0x150521664ed9: [FixedArray] in OldSpace
 - map: 0x3812f32c12e1 <Map>
 - length: 14
           0: 0x150521664f59 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3812f32c5ab9 <String[6]: #Object>
           2: 0x3812f32c4c11 <String[14]: #defineProperty>
           3: 0x150521664ff9 <String[10]: #__esModule>
           4: 0x150521665019 <ObjectBoilerplateDescription[3]>
           5: 0x150521665041 <String[18]: #Blitz2025Challenge>
           6: 0x150521665069 <String[9]: #MapLoader>
           7: 0x150521665089 <String[6]: #./game>
           8: 0x1505216650a1 <ObjectBoilerplateDescription[5]>
           9: 0x1505216650d9 <SharedFunctionInfo get>
          10: 0x3812f32c50e9 <String[3]: #get>
          11: 0x150521665421 <String[17]: #./maps/map_loader>
          12: 0x150521665449 <ObjectBoilerplateDescription[5]>
          13: 0x1505216652e9 <SharedFunctionInfo get>
Handler Table (size = 0)
Source Position Table (size = 62)
0x150521665481 <ByteArray[62]>
Object boilerplate at 0x150521665019: 
0x150521665019: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3812f32c2059 <Map>
 - length: 3
           0: 8
           1: 0x3812f32c6419 <String[5]: #value>
           2: 0x3812f32c1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x1505216650a1: 
0x1505216650a1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3812f32c2059 <Map>
 - length: 5
           0: 8
           1: 0x3812f32c4e19 <String[10]: #enumerable>
           2: 0x3812f32c1729 <true>
           3: 0x3812f32c50e9 <String[3]: #get>
           4: 0x3812f32c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1505216650d9 points to: [0x150521665148]
=== [0x150521665148] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  320 S> 0x150521665148 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x15052166514a @    2 : c4                Star0 
  334 E> 0x15052166514b @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
  353 S> 0x15052166514f @    7 : a9                Return 
Constant pool (size = 1)
0x150521665151: [FixedArray] in OldSpace
 - map: 0x3812f32c12e1 <Map>
 - length: 1
           0: 0x150521665041 <String[18]: #Blitz2025Challenge>
Handler Table (size = 0)
Source Position Table (size = 9)
0x150521665169 <ByteArray[9]>
Object boilerplate at 0x150521665449: 
0x150521665449: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3812f32c2059 <Map>
 - length: 5
           0: 8
           1: 0x3812f32c4e19 <String[10]: #enumerable>
           2: 0x3812f32c1729 <true>
           3: 0x3812f32c50e9 <String[3]: #get>
           4: 0x3812f32c1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x1505216652e9 points to: [0x150521665358]
=== [0x150521665358] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  492 S> 0x150521665358 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x15052166535a @    2 : c4                Star0 
  512 E> 0x15052166535b @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
  522 S> 0x15052166535f @    7 : a9                Return 
Constant pool (size = 1)
0x150521665361: [FixedArray] in OldSpace
 - map: 0x3812f32c12e1 <Map>
 - length: 1
           0: 0x150521665069 <String[9]: #MapLoader>
Handler Table (size = 0)
Source Position Table (size = 9)
0x150521665379 <ByteArray[9]>
<< OUTPUTTING DISASSEMBLY END >>
