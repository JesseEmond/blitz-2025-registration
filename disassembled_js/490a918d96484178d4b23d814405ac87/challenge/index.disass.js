<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x3fe9fbce4db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x3fe9fbce4db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x3fe9fbce4dbc @    4 : c4                Star0 
  566 S> 0x3fe9fbce4dbd @    5 : a9                Return 
Constant pool (size = 1)
0x3fe9fbce4dc1: [FixedArray] in OldSpace
 - map: 0x2e0c312812e1 <Map>
 - length: 1
           0: 0x3fe9fbce4dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3fe9fbce54e9 <ByteArray[7]>
0x3fe9fbce4dd9 points to: [0x3fe9fbce4e48]
=== [0x3fe9fbce4e48] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   10 E> 0x3fe9fbce4e48 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x3fe9fbce4e4b @    3 : 1a fa             PushContext r0
   76 S> 0x3fe9fbce4e4d @    5 : 21 01 00          LdaGlobal [1], [0]
         0x3fe9fbce4e50 @    8 : c2                Star2 
   83 E> 0x3fe9fbce4e51 @    9 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x3fe9fbce4e55 @   13 : c3                Star1 
         0x3fe9fbce4e56 @   14 : 13 03             LdaConstant [3]
         0x3fe9fbce4e58 @   16 : c0                Star4 
   98 E> 0x3fe9fbce4e59 @   17 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x3fe9fbce4e5d @   21 : bf                Star5 
         0x3fe9fbce4e5e @   22 : 19 03 f7          Mov a0, r3
   83 E> 0x3fe9fbce4e61 @   25 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x3fe9fbce4e66 @   30 : 0e                LdaUndefined 
         0x3fe9fbce4e67 @   31 : c1                Star3 
  186 E> 0x3fe9fbce4e68 @   32 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x3fe9fbce4e6c @   36 : 0b f7             Ldar r3
  157 E> 0x3fe9fbce4e6e @   38 : 32 03 06 09       SetNamedProperty a0, [6], [9]
  209 S> 0x3fe9fbce4e72 @   42 : 13 07             LdaConstant [7]
         0x3fe9fbce4e74 @   44 : c2                Star2 
  209 E> 0x3fe9fbce4e75 @   45 : 62 04 f8 0b       CallUndefinedReceiver1 a1, r2, [11]
  209 E> 0x3fe9fbce4e79 @   49 : 25 02             StaCurrentContextSlot [2]
  228 S> 0x3fe9fbce4e7b @   51 : 21 01 00          LdaGlobal [1], [0]
         0x3fe9fbce4e7e @   54 : c2                Star2 
  235 E> 0x3fe9fbce4e7f @   55 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x3fe9fbce4e83 @   59 : c3                Star1 
         0x3fe9fbce4e84 @   60 : 13 05             LdaConstant [5]
         0x3fe9fbce4e86 @   62 : c0                Star4 
  250 E> 0x3fe9fbce4e87 @   63 : 7c 08 0d 29       CreateObjectLiteral [8], [13], #41
         0x3fe9fbce4e8b @   67 : bf                Star5 
  306 E> 0x3fe9fbce4e8c @   68 : 80 09 00 02       CreateClosure [9], [0], #2
         0x3fe9fbce4e90 @   72 : 33 f5 0a 0e       DefineNamedOwnProperty r5, [10], [14]
         0x3fe9fbce4e94 @   76 : 19 03 f7          Mov a0, r3
  235 E> 0x3fe9fbce4e97 @   79 : 5c f9 f8 04 10    CallProperty r1, r2-r5, [16]
  379 S> 0x3fe9fbce4e9c @   84 : 13 0b             LdaConstant [11]
         0x3fe9fbce4e9e @   86 : c2                Star2 
  379 E> 0x3fe9fbce4e9f @   87 : 62 04 f8 12       CallUndefinedReceiver1 a1, r2, [18]
  379 E> 0x3fe9fbce4ea3 @   91 : 25 03             StaCurrentContextSlot [3]
  409 S> 0x3fe9fbce4ea5 @   93 : 21 01 00          LdaGlobal [1], [0]
         0x3fe9fbce4ea8 @   96 : c2                Star2 
  416 E> 0x3fe9fbce4ea9 @   97 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x3fe9fbce4ead @  101 : c3                Star1 
         0x3fe9fbce4eae @  102 : 13 06             LdaConstant [6]
         0x3fe9fbce4eb0 @  104 : c0                Star4 
  431 E> 0x3fe9fbce4eb1 @  105 : 7c 0c 14 29       CreateObjectLiteral [12], [20], #41
         0x3fe9fbce4eb5 @  109 : bf                Star5 
  478 E> 0x3fe9fbce4eb6 @  110 : 80 0d 01 02       CreateClosure [13], [1], #2
         0x3fe9fbce4eba @  114 : 33 f5 0a 15       DefineNamedOwnProperty r5, [10], [21]
         0x3fe9fbce4ebe @  118 : 19 03 f7          Mov a0, r3
  416 E> 0x3fe9fbce4ec1 @  121 : 5c f9 f8 04 17    CallProperty r1, r2-r5, [23]
         0x3fe9fbce4ec6 @  126 : 0e                LdaUndefined 
  563 S> 0x3fe9fbce4ec7 @  127 : a9                Return 
Constant pool (size = 14)
0x3fe9fbce4ec9: [FixedArray] in OldSpace
 - map: 0x2e0c312812e1 <Map>
 - length: 14
           0: 0x3fe9fbce4f49 <ScopeInfo FUNCTION_SCOPE>
           1: 0x2e0c31285ab9 <String[6]: #Object>
           2: 0x2e0c31284c11 <String[14]: #defineProperty>
           3: 0x3fe9fbce4fe9 <String[10]: #__esModule>
           4: 0x3fe9fbce5009 <ObjectBoilerplateDescription[3]>
           5: 0x3fe9fbce5031 <String[18]: #Blitz2025Challenge>
           6: 0x3fe9fbce5059 <String[9]: #MapLoader>
           7: 0x3fe9fbce5079 <String[6]: #./game>
           8: 0x3fe9fbce5091 <ObjectBoilerplateDescription[5]>
           9: 0x3fe9fbce50c9 <SharedFunctionInfo get>
          10: 0x2e0c312850e9 <String[3]: #get>
          11: 0x3fe9fbce5411 <String[17]: #./maps/map_loader>
          12: 0x3fe9fbce5439 <ObjectBoilerplateDescription[5]>
          13: 0x3fe9fbce52d9 <SharedFunctionInfo get>
Handler Table (size = 0)
Source Position Table (size = 62)
0x3fe9fbce5471 <ByteArray[62]>
Boilerplate at 0x3fe9fbce5009: 
0x3fe9fbce5009: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2e0c31282059 <Map>
 - length: 3
           0: 8
           1: 0x2e0c31286419 <String[5]: #value>
           2: 0x2e0c31281729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x3fe9fbce5091: 
0x3fe9fbce5091: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2e0c31282059 <Map>
 - length: 5
           0: 8
           1: 0x2e0c31284e19 <String[10]: #enumerable>
           2: 0x2e0c31281729 <true>
           3: 0x2e0c312850e9 <String[3]: #get>
           4: 0x2e0c31281501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x3fe9fbce50c9 points to: [0x3fe9fbce5138]
=== [0x3fe9fbce5138] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  320 S> 0x3fe9fbce5138 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3fe9fbce513a @    2 : c4                Star0 
  334 E> 0x3fe9fbce513b @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
  353 S> 0x3fe9fbce513f @    7 : a9                Return 
Constant pool (size = 1)
0x3fe9fbce5141: [FixedArray] in OldSpace
 - map: 0x2e0c312812e1 <Map>
 - length: 1
           0: 0x3fe9fbce5031 <String[18]: #Blitz2025Challenge>
Handler Table (size = 0)
Source Position Table (size = 9)
0x3fe9fbce5159 <ByteArray[9]>
Boilerplate at 0x3fe9fbce5439: 
0x3fe9fbce5439: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x2e0c31282059 <Map>
 - length: 5
           0: 8
           1: 0x2e0c31284e19 <String[10]: #enumerable>
           2: 0x2e0c31281729 <true>
           3: 0x2e0c312850e9 <String[3]: #get>
           4: 0x2e0c31281501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x3fe9fbce52d9 points to: [0x3fe9fbce5348]
=== [0x3fe9fbce5348] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  492 S> 0x3fe9fbce5348 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x3fe9fbce534a @    2 : c4                Star0 
  512 E> 0x3fe9fbce534b @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
  522 S> 0x3fe9fbce534f @    7 : a9                Return 
Constant pool (size = 1)
0x3fe9fbce5351: [FixedArray] in OldSpace
 - map: 0x2e0c312812e1 <Map>
 - length: 1
           0: 0x3fe9fbce5059 <String[9]: #MapLoader>
Handler Table (size = 0)
Source Position Table (size = 9)
0x3fe9fbce5369 <ByteArray[9]>
<< OUTPUTTING DISASSEMBLY END >>
