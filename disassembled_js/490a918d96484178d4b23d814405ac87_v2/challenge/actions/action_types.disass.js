<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2a09fae64dc8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2a09fae64dc8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2a09fae64dcc @    4 : c4                Star0 
  398 S> 0x2a09fae64dcd @    5 : a9                Return 
Constant pool (size = 1)
0x2a09fae64dd1: [FixedArray] in OldSpace
 - map: 0x14014eb412e1 <Map>
 - length: 1
           0: 0x2a09fae64de9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2a09fae652f1 <ByteArray[7]>
0x2a09fae64de9 points to: [0x2a09fae64e58]
=== [0x2a09fae64e58] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2a09fae64e58 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2a09fae64e5b @    3 : 1a fa             PushContext r0
   76 S> 0x2a09fae64e5d @    5 : 21 01 00          LdaGlobal [1], [0]
         0x2a09fae64e60 @    8 : c2                Star2 
   83 E> 0x2a09fae64e61 @    9 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2a09fae64e65 @   13 : c3                Star1 
         0x2a09fae64e66 @   14 : 13 03             LdaConstant [3]
         0x2a09fae64e68 @   16 : c0                Star4 
   98 E> 0x2a09fae64e69 @   17 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2a09fae64e6d @   21 : bf                Star5 
         0x2a09fae64e6e @   22 : 19 03 f7          Mov a0, r3
   83 E> 0x2a09fae64e71 @   25 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x2a09fae64e76 @   30 : 0e                LdaUndefined 
  158 E> 0x2a09fae64e77 @   31 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  190 S> 0x2a09fae64e7b @   35 : 13 06             LdaConstant [6]
         0x2a09fae64e7d @   37 : c2                Star2 
  190 E> 0x2a09fae64e7e @   38 : 62 04 f8 09       CallUndefinedReceiver1 a1, r2, [9]
  190 E> 0x2a09fae64e82 @   42 : 25 02             StaCurrentContextSlot [2]
  229 S> 0x2a09fae64e84 @   44 : 21 01 00          LdaGlobal [1], [0]
         0x2a09fae64e87 @   47 : c2                Star2 
  236 E> 0x2a09fae64e88 @   48 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2a09fae64e8c @   52 : c3                Star1 
         0x2a09fae64e8d @   53 : 13 05             LdaConstant [5]
         0x2a09fae64e8f @   55 : c0                Star4 
  251 E> 0x2a09fae64e90 @   56 : 7c 07 0b 29       CreateObjectLiteral [7], [11], #41
         0x2a09fae64e94 @   60 : bf                Star5 
  299 E> 0x2a09fae64e95 @   61 : 80 08 00 02       CreateClosure [8], [0], #2
         0x2a09fae64e99 @   65 : 33 f5 09 0c       DefineNamedOwnProperty r5, [9], [12]
         0x2a09fae64e9d @   69 : 19 03 f7          Mov a0, r3
  236 E> 0x2a09fae64ea0 @   72 : 5c f9 f8 04 0e    CallProperty r1, r2-r5, [14]
         0x2a09fae64ea5 @   77 : 0e                LdaUndefined 
  395 S> 0x2a09fae64ea6 @   78 : a9                Return 
Constant pool (size = 10)
0x2a09fae64ea9: [FixedArray] in OldSpace
 - map: 0x14014eb412e1 <Map>
 - length: 10
           0: 0x2a09fae64f09 <ScopeInfo FUNCTION_SCOPE>
           1: 0x14014eb45ab9 <String[6]: #Object>
           2: 0x14014eb44c11 <String[14]: #defineProperty>
           3: 0x2a09fae64f81 <String[10]: #__esModule>
           4: 0x2a09fae64fa1 <ObjectBoilerplateDescription[3]>
           5: 0x2a09fae64fc9 <String[10]: #ActionType>
           6: 0x2a09fae64fe9 <String[26]: #../generated/GameInterface>
           7: 0x2a09fae65019 <ObjectBoilerplateDescription[5]>
           8: 0x2a09fae65051 <SharedFunctionInfo get>
           9: 0x14014eb450e9 <String[3]: #get>
Handler Table (size = 0)
Source Position Table (size = 41)
0x2a09fae65291 <ByteArray[41]>
Object boilerplate at 0x2a09fae64fa1: 
0x2a09fae64fa1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x14014eb42059 <Map>
 - length: 3
           0: 8
           1: 0x14014eb46419 <String[5]: #value>
           2: 0x14014eb41729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x2a09fae65019: 
0x2a09fae65019: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x14014eb42059 <Map>
 - length: 5
           0: 8
           1: 0x14014eb44e19 <String[10]: #enumerable>
           2: 0x14014eb41729 <true>
           3: 0x14014eb450e9 <String[3]: #get>
           4: 0x14014eb41501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x2a09fae65051 points to: [0x2a09fae650c0]
=== [0x2a09fae650c0] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  313 S> 0x2a09fae650c0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2a09fae650c2 @    2 : c4                Star0 
  336 E> 0x2a09fae650c3 @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
  347 S> 0x2a09fae650c7 @    7 : a9                Return 
Constant pool (size = 1)
0x2a09fae650c9: [FixedArray] in OldSpace
 - map: 0x14014eb412e1 <Map>
 - length: 1
           0: 0x2a09fae64fc9 <String[10]: #ActionType>
Handler Table (size = 0)
Source Position Table (size = 9)
0x2a09fae650e1 <ByteArray[9]>
<< OUTPUTTING DISASSEMBLY END >>
