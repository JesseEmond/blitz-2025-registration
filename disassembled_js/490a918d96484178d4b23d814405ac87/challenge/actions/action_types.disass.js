<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x2bb5c29a4db8] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x2bb5c29a4db8 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x2bb5c29a4dbc @    4 : c4                Star0 
  398 S> 0x2bb5c29a4dbd @    5 : a9                Return 
Constant pool (size = 1)
0x2bb5c29a4dc1: [FixedArray] in OldSpace
 - map: 0x3ccb09b012e1 <Map>
 - length: 1
           0: 0x2bb5c29a4dd9 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 7)
0x2bb5c29a52e1 <ByteArray[7]>
0x2bb5c29a4dd9 points to: [0x2bb5c29a4e48]
=== [0x2bb5c29a4e48] DISASSEMBLY ===
Parameter count 6
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
   10 E> 0x2bb5c29a4e48 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x2bb5c29a4e4b @    3 : 1a fa             PushContext r0
   76 S> 0x2bb5c29a4e4d @    5 : 21 01 00          LdaGlobal [1], [0]
         0x2bb5c29a4e50 @    8 : c2                Star2 
   83 E> 0x2bb5c29a4e51 @    9 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2bb5c29a4e55 @   13 : c3                Star1 
         0x2bb5c29a4e56 @   14 : 13 03             LdaConstant [3]
         0x2bb5c29a4e58 @   16 : c0                Star4 
   98 E> 0x2bb5c29a4e59 @   17 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x2bb5c29a4e5d @   21 : bf                Star5 
         0x2bb5c29a4e5e @   22 : 19 03 f7          Mov a0, r3
   83 E> 0x2bb5c29a4e61 @   25 : 5c f9 f8 04 05    CallProperty r1, r2-r5, [5]
  139 S> 0x2bb5c29a4e66 @   30 : 0e                LdaUndefined 
  158 E> 0x2bb5c29a4e67 @   31 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  190 S> 0x2bb5c29a4e6b @   35 : 13 06             LdaConstant [6]
         0x2bb5c29a4e6d @   37 : c2                Star2 
  190 E> 0x2bb5c29a4e6e @   38 : 62 04 f8 09       CallUndefinedReceiver1 a1, r2, [9]
  190 E> 0x2bb5c29a4e72 @   42 : 25 02             StaCurrentContextSlot [2]
  229 S> 0x2bb5c29a4e74 @   44 : 21 01 00          LdaGlobal [1], [0]
         0x2bb5c29a4e77 @   47 : c2                Star2 
  236 E> 0x2bb5c29a4e78 @   48 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x2bb5c29a4e7c @   52 : c3                Star1 
         0x2bb5c29a4e7d @   53 : 13 05             LdaConstant [5]
         0x2bb5c29a4e7f @   55 : c0                Star4 
  251 E> 0x2bb5c29a4e80 @   56 : 7c 07 0b 29       CreateObjectLiteral [7], [11], #41
         0x2bb5c29a4e84 @   60 : bf                Star5 
  299 E> 0x2bb5c29a4e85 @   61 : 80 08 00 02       CreateClosure [8], [0], #2
         0x2bb5c29a4e89 @   65 : 33 f5 09 0c       DefineNamedOwnProperty r5, [9], [12]
         0x2bb5c29a4e8d @   69 : 19 03 f7          Mov a0, r3
  236 E> 0x2bb5c29a4e90 @   72 : 5c f9 f8 04 0e    CallProperty r1, r2-r5, [14]
         0x2bb5c29a4e95 @   77 : 0e                LdaUndefined 
  395 S> 0x2bb5c29a4e96 @   78 : a9                Return 
Constant pool (size = 10)
0x2bb5c29a4e99: [FixedArray] in OldSpace
 - map: 0x3ccb09b012e1 <Map>
 - length: 10
           0: 0x2bb5c29a4ef9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3ccb09b05ab9 <String[6]: #Object>
           2: 0x3ccb09b04c11 <String[14]: #defineProperty>
           3: 0x2bb5c29a4f71 <String[10]: #__esModule>
           4: 0x2bb5c29a4f91 <ObjectBoilerplateDescription[3]>
           5: 0x2bb5c29a4fb9 <String[10]: #ActionType>
           6: 0x2bb5c29a4fd9 <String[26]: #../generated/GameInterface>
           7: 0x2bb5c29a5009 <ObjectBoilerplateDescription[5]>
           8: 0x2bb5c29a5041 <SharedFunctionInfo get>
           9: 0x3ccb09b050e9 <String[3]: #get>
Handler Table (size = 0)
Source Position Table (size = 41)
0x2bb5c29a5281 <ByteArray[41]>
Boilerplate at 0x2bb5c29a4f91: 
0x2bb5c29a4f91: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3ccb09b02059 <Map>
 - length: 3
           0: 8
           1: 0x3ccb09b06419 <String[5]: #value>
           2: 0x3ccb09b01729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x2bb5c29a5009: 
0x2bb5c29a5009: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3ccb09b02059 <Map>
 - length: 5
           0: 8
           1: 0x3ccb09b04e19 <String[10]: #enumerable>
           2: 0x3ccb09b01729 <true>
           3: 0x3ccb09b050e9 <String[3]: #get>
           4: 0x3ccb09b01501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x2bb5c29a5041 points to: [0x2bb5c29a50b0]
=== [0x2bb5c29a50b0] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  313 S> 0x2bb5c29a50b0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x2bb5c29a50b2 @    2 : c4                Star0 
  336 E> 0x2bb5c29a50b3 @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
  347 S> 0x2bb5c29a50b7 @    7 : a9                Return 
Constant pool (size = 1)
0x2bb5c29a50b9: [FixedArray] in OldSpace
 - map: 0x3ccb09b012e1 <Map>
 - length: 1
           0: 0x2bb5c29a4fb9 <String[10]: #ActionType>
Handler Table (size = 0)
Source Position Table (size = 9)
0x2bb5c29a50d1 <ByteArray[9]>
<< OUTPUTTING DISASSEMBLY END >>
