<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x393a13b64f28] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x393a13b64f28 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x393a13b64f2c @    4 : c4                Star0 
 6008 S> 0x393a13b64f2d @    5 : a9                Return 
Constant pool (size = 1)
0x393a13b64f31: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 1
           0: 0x393a13b64f49 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x393a13b68bc9 <ByteArray[8]>
0x393a13b64f49 points to: [0x393a13b64fb8]
=== [0x393a13b64fb8] DISASSEMBLY ===
Parameter count 6
Register count 16
Frame size 128
OSR urgency: 0
Bytecode age: 0
   10 E> 0x393a13b64fb8 @    0 : 83 00 06          CreateFunctionContext [0], [6]
         0x393a13b64fbb @    3 : 1a f9             PushContext r1
         0x393a13b64fbd @    5 : 10                LdaTheHole 
         0x393a13b64fbe @    6 : 25 02             StaCurrentContextSlot [2]
         0x393a13b64fc0 @    8 : 10                LdaTheHole 
         0x393a13b64fc1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x393a13b64fc3 @   11 : 10                LdaTheHole 
         0x393a13b64fc4 @   12 : 25 04             StaCurrentContextSlot [4]
         0x393a13b64fc6 @   14 : 10                LdaTheHole 
         0x393a13b64fc7 @   15 : 25 05             StaCurrentContextSlot [5]
         0x393a13b64fc9 @   17 : 10                LdaTheHole 
         0x393a13b64fca @   18 : 25 06             StaCurrentContextSlot [6]
         0x393a13b64fcc @   20 : 10                LdaTheHole 
         0x393a13b64fcd @   21 : 25 07             StaCurrentContextSlot [7]
   76 S> 0x393a13b64fcf @   23 : 21 01 00          LdaGlobal [1], [0]
         0x393a13b64fd2 @   26 : c1                Star3 
   83 E> 0x393a13b64fd3 @   27 : 2d f7 02 02       GetNamedProperty r3, [2], [2]
         0x393a13b64fd7 @   31 : c2                Star2 
         0x393a13b64fd8 @   32 : 13 03             LdaConstant [3]
         0x393a13b64fda @   34 : bf                Star5 
   98 E> 0x393a13b64fdb @   35 : 7c 04 04 29       CreateObjectLiteral [4], [4], #41
         0x393a13b64fdf @   39 : be                Star6 
         0x393a13b64fe0 @   40 : 19 03 f6          Mov a0, r4
   83 E> 0x393a13b64fe3 @   43 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x393a13b64fe8 @   48 : 0e                LdaUndefined 
  153 E> 0x393a13b64fe9 @   49 : 32 03 05 07       SetNamedProperty a0, [5], [7]
  186 S> 0x393a13b64fed @   53 : 13 06             LdaConstant [6]
         0x393a13b64fef @   55 : c1                Star3 
  186 E> 0x393a13b64ff0 @   56 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
  186 E> 0x393a13b64ff4 @   60 : 25 02             StaCurrentContextSlot [2]
  241 S> 0x393a13b64ff6 @   62 : 13 07             LdaConstant [7]
         0x393a13b64ff8 @   64 : c1                Star3 
  241 E> 0x393a13b64ff9 @   65 : 62 04 f7 0b       CallUndefinedReceiver1 a1, r3, [11]
  241 E> 0x393a13b64ffd @   69 : 25 03             StaCurrentContextSlot [3]
  282 S> 0x393a13b64fff @   71 : 13 08             LdaConstant [8]
         0x393a13b65001 @   73 : c1                Star3 
  282 E> 0x393a13b65002 @   74 : 62 04 f7 0d       CallUndefinedReceiver1 a1, r3, [13]
  282 E> 0x393a13b65006 @   78 : 25 04             StaCurrentContextSlot [4]
  337 S> 0x393a13b65008 @   80 : 13 09             LdaConstant [9]
         0x393a13b6500a @   82 : c1                Star3 
  337 E> 0x393a13b6500b @   83 : 62 04 f7 0f       CallUndefinedReceiver1 a1, r3, [15]
  337 E> 0x393a13b6500f @   87 : 25 05             StaCurrentContextSlot [5]
  396 S> 0x393a13b65011 @   89 : 13 0a             LdaConstant [10]
         0x393a13b65013 @   91 : c1                Star3 
  396 E> 0x393a13b65014 @   92 : 62 04 f7 11       CallUndefinedReceiver1 a1, r3, [17]
  396 E> 0x393a13b65018 @   96 : 25 06             StaCurrentContextSlot [6]
  452 S> 0x393a13b6501a @   98 : 13 0b             LdaConstant [11]
         0x393a13b6501c @  100 : c1                Star3 
  452 E> 0x393a13b6501d @  101 : 62 04 f7 13       CallUndefinedReceiver1 a1, r3, [19]
  452 E> 0x393a13b65021 @  105 : 25 07             StaCurrentContextSlot [7]
         0x393a13b65023 @  107 : 81 0c             CreateBlockContext [12]
         0x393a13b65025 @  109 : 1a f8             PushContext r2
         0x393a13b65027 @  111 : 10                LdaTheHole 
         0x393a13b65028 @  112 : 25 02             StaCurrentContextSlot [2]
         0x393a13b6502a @  114 : 10                LdaTheHole 
         0x393a13b6502b @  115 : be                Star6 
         0x393a13b6502c @  116 : 80 0e 00 02       CreateClosure [14], [0], #2
         0x393a13b65030 @  120 : c1                Star3 
         0x393a13b65031 @  121 : 13 0d             LdaConstant [13]
         0x393a13b65033 @  123 : c0                Star4 
         0x393a13b65034 @  124 : 80 0f 01 02       CreateClosure [15], [1], #2
         0x393a13b65038 @  128 : bd                Star7 
         0x393a13b65039 @  129 : 80 10 02 02       CreateClosure [16], [2], #2
         0x393a13b6503d @  133 : bc                Star8 
         0x393a13b6503e @  134 : 80 11 03 02       CreateClosure [17], [3], #2
         0x393a13b65042 @  138 : bb                Star9 
         0x393a13b65043 @  139 : 80 12 04 02       CreateClosure [18], [4], #2
         0x393a13b65047 @  143 : ba                Star10 
         0x393a13b65048 @  144 : 80 13 05 02       CreateClosure [19], [5], #2
         0x393a13b6504c @  148 : b9                Star11 
         0x393a13b6504d @  149 : 80 14 06 02       CreateClosure [20], [6], #2
         0x393a13b65051 @  153 : b8                Star12 
         0x393a13b65052 @  154 : 80 15 07 02       CreateClosure [21], [7], #2
         0x393a13b65056 @  158 : b7                Star13 
         0x393a13b65057 @  159 : 80 16 08 02       CreateClosure [22], [8], #2
         0x393a13b6505b @  163 : b6                Star14 
         0x393a13b6505c @  164 : 80 17 09 02       CreateClosure [23], [9], #2
         0x393a13b65060 @  168 : b5                Star15 
         0x393a13b65061 @  169 : 19 f7 f5          Mov r3, r5
         0x393a13b65064 @  172 : 65 28 00 f6 0c    CallRuntime [DefineClass], r4-r15
         0x393a13b65069 @  177 : c0                Star4 
         0x393a13b6506a @  178 : 0b f5             Ldar r5
         0x393a13b6506c @  180 : 25 02             StaCurrentContextSlot [2]
         0x393a13b6506e @  182 : 1b f8             PopContext r2
         0x393a13b65070 @  184 : c4                Star0 
 5948 S> 0x393a13b65071 @  185 : 0b fa             Ldar r0
 5962 E> 0x393a13b65073 @  187 : 32 03 05 07       SetNamedProperty a0, [5], [7]
         0x393a13b65077 @  191 : 0e                LdaUndefined 
 6005 S> 0x393a13b65078 @  192 : a9                Return 
Constant pool (size = 24)
0x393a13b65081: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 24
           0: 0x393a13b65151 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3f8df8685ab9 <String[6]: #Object>
           2: 0x3f8df8684c11 <String[14]: #defineProperty>
           3: 0x393a13b652b1 <String[10]: #__esModule>
           4: 0x393a13b652d1 <ObjectBoilerplateDescription[3]>
           5: 0x393a13b652f9 <String[5]: #World>
           6: 0x393a13b65311 <String[22]: #./actions/action_types>
           7: 0x393a13b65339 <String[11]: #./character>
           8: 0x393a13b65359 <String[17]: #./geometry/vector>
           9: 0x393a13b65381 <String[24]: #./threats/threat_factory>
          10: 0x393a13b653a9 <String[19]: #./utils/pathfinding>
          11: 0x393a13b653d1 <String[25]: #./generated/GameInterface>
          12: 0x393a13b65401 <ScopeInfo CLASS_SCOPE>
          13: 0x393a13b65449 <FixedArray[7]>
          14: 0x393a13b65791 <SharedFunctionInfo World>
          15: 0x393a13b66981 <SharedFunctionInfo createTiles>
          16: 0x393a13b66e59 <SharedFunctionInfo update>
          17: 0x393a13b671b9 <SharedFunctionInfo applyAction>
          18: 0x393a13b67581 <SharedFunctionInfo moveCharacterAlongPath>
          19: 0x393a13b67871 <SharedFunctionInfo moveCharacter>
          20: 0x393a13b67c09 <SharedFunctionInfo serializeForViewer>
          21: 0x393a13b67eb9 <SharedFunctionInfo serializeForPlayer>
          22: 0x393a13b68229 <SharedFunctionInfo serializeForThreat>
          23: 0x393a13b68521 <SharedFunctionInfo serializeCommon>
Handler Table (size = 0)
Source Position Table (size = 70)
0x393a13b68b51 <ByteArray[70]>
Object boilerplate at 0x393a13b652d1: 
0x393a13b652d1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3f8df8682059 <Map>
 - length: 3
           0: 8
           1: 0x3f8df8686419 <String[5]: #value>
           2: 0x3f8df8681729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x393a13b65449 has 7 elements:
0x393a13b65449: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 7
           0: 12
           1: 0x393a13b65491 <DescriptorArray[5]>
           2: 0x3f8df8683301 <NumberDictionary[7]>
           3: 0x3f8df8681329 <FixedArray[0]>
           4: 0x393a13b65589 <DescriptorArray[9]>
           5: 0x3f8df8683301 <NumberDictionary[7]>
           6: 0x3f8df8681329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0xc (12)
Element[1]
0x393a13b65491: [DescriptorArray] in OldSpace
 - map: 0x3f8df8687761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 5
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3f8df86855f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 0, attrs: [__C]) @ 0x10fa10474fe1 <AccessorInfo>
  [1]: 0x3f8df86858f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 1, attrs: [__C]) @ 0x10fa10474f71 <AccessorInfo>
  [2]: 0x3f8df8685cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x10fa10475051 <AccessorInfo>
  [3]: 0x3f8df86865f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 2, attrs: [W_C]) @ 0x393a13b65551 <ClassPositions 641, 5947>
  [4]: 0x393a13b65569: [String] in OldSpace: #createTiles (const data descriptor, p: 4, attrs: [W_C]) @ 3
Element[2]
0x3f8df8683301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x3f8df8681329: [FixedArray] in ReadOnlySpace
 - map: 0x3f8df86812e1 <Map>
 - length: 0
Element[4]
0x393a13b65589: [DescriptorArray] in OldSpace
 - map: 0x3f8df8687761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 9
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3f8df8684a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 7, attrs: [W_C]) @ 1
  [1]: 0x10fa10443f01: [String] in OldSpace: #update (const data descriptor, p: 1, attrs: [W_C]) @ 4
  [2]: 0x393a13b65691: [String] in OldSpace: #applyAction (const data descriptor, p: 5, attrs: [W_C]) @ 5
  [3]: 0x393a13b656b1: [String] in OldSpace: #moveCharacterAlongPath (const data descriptor, p: 2, attrs: [W_C]) @ 6
  [4]: 0x393a13b656d9: [String] in OldSpace: #moveCharacter (const data descriptor, p: 3, attrs: [W_C]) @ 7
  [5]: 0x393a13b656f9: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 8, attrs: [W_C]) @ 8
  [6]: 0x393a13b65721: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 4, attrs: [W_C]) @ 9
  [7]: 0x393a13b65749: [String] in OldSpace: #serializeForThreat (const data descriptor, p: 0, attrs: [W_C]) @ 10
  [8]: 0x393a13b65771: [String] in OldSpace: #serializeCommon (const data descriptor, p: 6, attrs: [W_C]) @ 11
Element[5]
0x3f8df8683301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x3f8df8681329: [FixedArray] in ReadOnlySpace
 - map: 0x3f8df86812e1 <Map>
 - length: 0
0x393a13b65791 points to: [0x393a13b65800]
=== [0x393a13b65800] DISASSEMBLY ===
Parameter count 5
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
  670 E> 0x393a13b65800 @    0 : 83 00 02          CreateFunctionContext [0], [2]
         0x393a13b65803 @    3 : 1a fa             PushContext r0
         0x393a13b65805 @    5 : 0b 02             Ldar <this>
         0x393a13b65807 @    7 : 25 02             StaCurrentContextSlot [2]
         0x393a13b65809 @    9 : 10                LdaTheHole 
         0x393a13b6580a @   10 : 25 03             StaCurrentContextSlot [3]
  712 S> 0x393a13b6580c @   12 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b6580e @   14 : c3                Star1 
         0x393a13b6580f @   15 : 0b 03             Ldar a0
  725 E> 0x393a13b65811 @   17 : 32 f9 01 00       SetNamedProperty r1, [1], [0]
  744 S> 0x393a13b65815 @   21 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65817 @   23 : c3                Star1 
         0x393a13b65818 @   24 : 0b 04             Ldar a1
  753 E> 0x393a13b6581a @   26 : 32 f9 02 02       SetNamedProperty r1, [2], [2]
  768 S> 0x393a13b6581e @   30 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65820 @   32 : c3                Star1 
         0x393a13b65821 @   33 : 0b 05             Ldar a2
  784 E> 0x393a13b65823 @   35 : 32 f9 03 04       SetNamedProperty r1, [3], [4]
  806 S> 0x393a13b65827 @   39 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65829 @   41 : c3                Star1 
         0x393a13b6582a @   42 : 0b 06             Ldar a3
  815 E> 0x393a13b6582c @   44 : 32 f9 04 06       SetNamedProperty r1, [4], [6]
  830 S> 0x393a13b65830 @   48 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65832 @   50 : c3                Star1 
         0x393a13b65833 @   51 : 0c                LdaZero 
  847 E> 0x393a13b65834 @   52 : 32 f9 05 08       SetNamedProperty r1, [5], [8]
  860 S> 0x393a13b65838 @   56 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b6583a @   58 : c3                Star1 
         0x393a13b6583b @   59 : 7b 0a             CreateEmptyArrayLiteral [10]
  873 E> 0x393a13b6583d @   61 : 32 f9 06 0b       SetNamedProperty r1, [6], [11]
  887 S> 0x393a13b65841 @   65 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65843 @   67 : c3                Star1 
         0x393a13b65844 @   68 : 7d                CreateEmptyObjectLiteral 
  902 E> 0x393a13b65845 @   69 : 32 f9 07 0d       SetNamedProperty r1, [7], [13]
  916 S> 0x393a13b65849 @   73 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b6584b @   75 : c3                Star1 
         0x393a13b6584c @   76 : 80 08 00 01       CreateClosure [8], [0], #1
  942 E> 0x393a13b65850 @   80 : 32 f9 09 0f       SetNamedProperty r1, [9], [15]
 1213 S> 0x393a13b65854 @   84 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65856 @   86 : c3                Star1 
         0x393a13b65857 @   87 : 80 0a 01 01       CreateClosure [10], [1], #1
 1237 E> 0x393a13b6585b @   91 : 32 f9 0b 11       SetNamedProperty r1, [11], [17]
 1454 S> 0x393a13b6585f @   95 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65861 @   97 : c3                Star1 
 1471 E> 0x393a13b65862 @   98 : 2d 06 0c 13       GetNamedProperty a3, [12], [19]
 1465 E> 0x393a13b65866 @  102 : 32 f9 0c 15       SetNamedProperty r1, [12], [21]
 1486 S> 0x393a13b6586a @  106 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b6586c @  108 : c3                Star1 
 1504 E> 0x393a13b6586d @  109 : 2d 06 0d 17       GetNamedProperty a3, [13], [23]
 1498 E> 0x393a13b65871 @  113 : 32 f9 0d 19       SetNamedProperty r1, [13], [25]
 1520 S> 0x393a13b65875 @  117 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65877 @  119 : c3                Star1 
         0x393a13b65878 @  120 : 14 fa 02 00       LdaContextSlot r0, [2], [0]
 1533 E> 0x393a13b6587c @  124 : aa 0e             ThrowReferenceErrorIfHole [14]
         0x393a13b6587e @  126 : c1                Star3 
 1539 E> 0x393a13b6587f @  127 : 2d f7 0f 1b       GetNamedProperty r3, [15], [27]
         0x393a13b65883 @  131 : c2                Star2 
 1539 E> 0x393a13b65884 @  132 : 5e f8 f7 06 1d    CallProperty1 r2, r3, a3, [29]
 1531 E> 0x393a13b65889 @  137 : 32 f9 10 1f       SetNamedProperty r1, [16], [31]
 1565 S> 0x393a13b6588d @  141 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b6588f @  143 : c3                Star1 
         0x393a13b65890 @  144 : 0b 05             Ldar a2
 1575 E> 0x393a13b65892 @  146 : 32 f9 11 21       SetNamedProperty r1, [17], [33]
 1624 S> 0x393a13b65896 @  150 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65898 @  152 : c2                Star2 
 1629 E> 0x393a13b65899 @  153 : 2d f8 10 23       GetNamedProperty r2, [16], [35]
         0x393a13b6589d @  157 : c2                Star2 
 1635 E> 0x393a13b6589e @  158 : 2d f8 04 25       GetNamedProperty r2, [4], [37]
         0x393a13b658a2 @  162 : c3                Star1 
         0x393a13b658a3 @  163 : 80 12 02 02       CreateClosure [18], [2], #2
         0x393a13b658a7 @  167 : c1                Star3 
 1635 E> 0x393a13b658a8 @  168 : 5e f9 f8 f7 27    CallProperty1 r1, r2, r3, [39]
 1624 E> 0x393a13b658ad @  173 : 25 03             StaCurrentContextSlot [3]
 1731 S> 0x393a13b658af @  175 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b658b1 @  177 : c3                Star1 
         0x393a13b658b2 @  178 : 15 ff 06 02       LdaImmutableContextSlot <context>, [6], [2]
 1754 E> 0x393a13b658b6 @  182 : aa 13             ThrowReferenceErrorIfHole [19]
         0x393a13b658b8 @  184 : c1                Star3 
 1768 E> 0x393a13b658b9 @  185 : 2d f7 14 29       GetNamedProperty r3, [20], [41]
         0x393a13b658bd @  189 : c1                Star3 
 1784 E> 0x393a13b658be @  190 : 2d f7 15 2b       GetNamedProperty r3, [21], [43]
         0x393a13b658c2 @  194 : c2                Star2 
         0x393a13b658c3 @  195 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b658c5 @  197 : bf                Star5 
 1801 E> 0x393a13b658c6 @  198 : 2d f5 10 2d       GetNamedProperty r5, [16], [45]
         0x393a13b658ca @  202 : bf                Star5 
 1807 E> 0x393a13b658cb @  203 : 2d f5 04 2f       GetNamedProperty r5, [4], [47]
         0x393a13b658cf @  207 : c0                Star4 
         0x393a13b658d0 @  208 : 80 16 03 02       CreateClosure [22], [3], #2
         0x393a13b658d4 @  212 : be                Star6 
 1807 E> 0x393a13b658d5 @  213 : 5e f6 f5 f4 31    CallProperty1 r4, r5, r6, [49]
         0x393a13b658da @  218 : c0                Star4 
         0x393a13b658db @  219 : 12                LdaFalse 
         0x393a13b658dc @  220 : bf                Star5 
 1784 E> 0x393a13b658dd @  221 : 5f f8 f7 f6 f5 33 CallProperty2 r2, r3, r4, r5, [51]
 1752 E> 0x393a13b658e3 @  227 : 32 f9 17 35       SetNamedProperty r1, [23], [53]
 1911 S> 0x393a13b658e7 @  231 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b658e9 @  233 : c3                Star1 
 1937 E> 0x393a13b658ea @  234 : 2d 06 07 37       GetNamedProperty a3, [7], [55]
 1931 E> 0x393a13b658ee @  238 : 32 f9 18 39       SetNamedProperty r1, [24], [57]
 1956 S> 0x393a13b658f2 @  242 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b658f4 @  244 : c3                Star1 
 1965 E> 0x393a13b658f5 @  245 : 2d f9 11 3b       GetNamedProperty r1, [17], [59]
         0x393a13b658f9 @  249 : c3                Star1 
 1970 E> 0x393a13b658fa @  250 : 2d f9 19 3d       GetNamedProperty r1, [25], [61]
         0x393a13b658fe @  254 : 1d                TestUndetectable 
         0x393a13b658ff @  255 : 98 34             JumpIfTrue [52] (0x393a13b65933 @ 307)
 1996 S> 0x393a13b65901 @  257 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65903 @  259 : c3                Star1 
         0x393a13b65904 @  260 : 15 ff 03 02       LdaImmutableContextSlot <context>, [3], [2]
 2017 E> 0x393a13b65908 @  264 : aa 1a             ThrowReferenceErrorIfHole [26]
         0x393a13b6590a @  266 : c2                Star2 
 2029 E> 0x393a13b6590b @  267 : 2d f8 1b 3f       GetNamedProperty r2, [27], [63]
         0x393a13b6590f @  271 : c2                Star2 
         0x393a13b65910 @  272 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65912 @  274 : c0                Star4 
 2053 E> 0x393a13b65913 @  275 : 2d f6 11 41       GetNamedProperty r4, [17], [65]
         0x393a13b65917 @  279 : c0                Star4 
 2058 E> 0x393a13b65918 @  280 : 2d f6 19 43       GetNamedProperty r4, [25], [67]
         0x393a13b6591c @  284 : c0                Star4 
         0x393a13b6591d @  285 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b6591f @  287 : bf                Star5 
 2067 E> 0x393a13b65920 @  288 : 2d f5 18 45       GetNamedProperty r5, [24], [69]
         0x393a13b65924 @  292 : bf                Star5 
         0x393a13b65925 @  293 : 0b f8             Ldar r2
         0x393a13b65927 @  295 : 19 03 f7          Mov a0, r3
 2013 E> 0x393a13b6592a @  298 : 69 f8 f7 03 47    Construct r2, r3-r5, [71]
 2011 E> 0x393a13b6592f @  303 : 32 f9 07 49       SetNamedProperty r1, [7], [73]
 2102 S> 0x393a13b65933 @  307 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65935 @  309 : c3                Star1 
 2121 E> 0x393a13b65936 @  310 : 2d 06 06 4b       GetNamedProperty a3, [6], [75]
         0x393a13b6593a @  314 : c1                Star3 
 2129 E> 0x393a13b6593b @  315 : 2d f7 04 4d       GetNamedProperty r3, [4], [77]
         0x393a13b6593f @  319 : c2                Star2 
         0x393a13b65940 @  320 : 80 1c 04 02       CreateClosure [28], [4], #2
         0x393a13b65944 @  324 : c0                Star4 
 2129 E> 0x393a13b65945 @  325 : 5e f8 f7 f6 4f    CallProperty1 r2, r3, r4, [79]
 2115 E> 0x393a13b6594a @  330 : 32 f9 06 51       SetNamedProperty r1, [6], [81]
         0x393a13b6594e @  334 : 0e                LdaUndefined 
 2269 S> 0x393a13b6594f @  335 : a9                Return 
Constant pool (size = 29)
0x393a13b65951: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 29
           0: 0x393a13b65a49 <ScopeInfo FUNCTION_SCOPE>
           1: 0x10fa1044cbb9 <String[7]: #options>
           2: 0x10fa10468a51 <String[3]: #rng>
           3: 0x393a13b65b11 <String[10]: #engineTeam>
           4: 0x10fa10449ea9 <String[3]: #map>
           5: 0x393a13b65b49 <String[11]: #tickCounter>
           6: 0x393a13b65b69 <String[7]: #threats>
           7: 0x3f8df8684939 <String[9]: #character>
           8: 0x393a13b65b81 <SharedFunctionInfo>
           9: 0x393a13b68979 <String[20]: #getCharacterPosition>
          10: 0x393a13b65fc1 <SharedFunctionInfo>
          11: 0x393a13b689a1 <String[18]: #getThreatPositions>
          12: 0x393a13b66b71 <String[5]: #width>
          13: 0x393a13b66b89 <String[6]: #height>
          14: 0x393a13b652f9 <String[5]: #World>
          15: 0x393a13b65569 <String[11]: #createTiles>
          16: 0x393a13b66b59 <String[5]: #tiles>
          17: 0x393a13b689c9 <String[4]: #team>
          18: 0x393a13b662d1 <SharedFunctionInfo>
          19: 0x393a13b65271 <String[13]: #pathfinding_1>
          20: 0x393a13b689e1 <String[15]: #PathfindingGrid>
          21: 0x393a13b68a01 <String[11]: #from2DArray>
          22: 0x393a13b66571 <SharedFunctionInfo>
          23: 0x393a13b67729 <String[15]: #pathfindingGrid>
          24: 0x393a13b68a21 <String[14]: #characterSpawn>
          25: 0x3f8df86852d9 <String[2]: #id>
          26: 0x393a13b65219 <String[11]: #character_1>
          27: 0x393a13b68a41 <String[9]: #Character>
          28: 0x393a13b667e1 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 145)
0x393a13b68a61 <ByteArray[145]>
0x393a13b65b81 points to: [0x393a13b65bf0]
=== [0x393a13b65bf0] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
  964 S> 0x393a13b65bf0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65bf2 @    2 : c4                Star0 
  974 E> 0x393a13b65bf3 @    3 : 2d fa 00 00       GetNamedProperty r0, [0], [0]
         0x393a13b65bf7 @    7 : 96 07             JumpIfToBooleanTrue [7] (0x393a13b65bfe @ 14)
 1003 S> 0x393a13b65bf9 @    9 : 7c 01 02 29       CreateObjectLiteral [1], [2], #41
 1027 S> 0x393a13b65bfd @   13 : a9                Return 
 1054 S> 0x393a13b65bfe @   14 : 7c 02 03 29       CreateObjectLiteral [2], [3], #41
         0x393a13b65c02 @   18 : c4                Star0 
         0x393a13b65c03 @   19 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65c05 @   21 : c2                Star2 
 1087 E> 0x393a13b65c06 @   22 : 2d f8 00 04       GetNamedProperty r2, [0], [4]
         0x393a13b65c0a @   26 : c2                Star2 
 1097 E> 0x393a13b65c0b @   27 : 2d f8 03 06       GetNamedProperty r2, [3], [6]
         0x393a13b65c0f @   31 : c2                Star2 
 1106 E> 0x393a13b65c10 @   32 : 2d f8 04 08       GetNamedProperty r2, [4], [8]
         0x393a13b65c14 @   36 : c3                Star1 
 1106 E> 0x393a13b65c15 @   37 : 5d f9 f8 0a       CallProperty0 r1, r2, [10]
         0x393a13b65c19 @   41 : c3                Star1 
 1117 E> 0x393a13b65c1a @   42 : 2d f9 05 0c       GetNamedProperty r1, [5], [12]
         0x393a13b65c1e @   46 : 33 fa 05 0e       DefineNamedOwnProperty r0, [5], [14]
         0x393a13b65c22 @   50 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b65c24 @   52 : c2                Star2 
 1145 E> 0x393a13b65c25 @   53 : 2d f8 00 10       GetNamedProperty r2, [0], [16]
         0x393a13b65c29 @   57 : c2                Star2 
 1155 E> 0x393a13b65c2a @   58 : 2d f8 03 12       GetNamedProperty r2, [3], [18]
         0x393a13b65c2e @   62 : c2                Star2 
 1164 E> 0x393a13b65c2f @   63 : 2d f8 04 14       GetNamedProperty r2, [4], [20]
         0x393a13b65c33 @   67 : c3                Star1 
 1164 E> 0x393a13b65c34 @   68 : 5d f9 f8 16       CallProperty0 r1, r2, [22]
         0x393a13b65c38 @   72 : c3                Star1 
 1175 E> 0x393a13b65c39 @   73 : 2d f9 06 18       GetNamedProperty r1, [6], [24]
         0x393a13b65c3d @   77 : 33 fa 06 1a       DefineNamedOwnProperty r0, [6], [26]
         0x393a13b65c41 @   81 : 0b fa             Ldar r0
 1193 S> 0x393a13b65c43 @   83 : a9                Return 
Constant pool (size = 7)
0x393a13b65c49: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 7
           0: 0x3f8df8684939 <String[9]: #character>
           1: 0x393a13b65c91 <ObjectBoilerplateDescription[5]>
           2: 0x393a13b65cf9 <ObjectBoilerplateDescription[5]>
           3: 0x3f8df8685c19 <String[8]: #position>
           4: 0x10fa104501a9 <String[9]: #serialize>
           5: 0x10fa10458ac9 <String[1]: #x>
           6: 0x10fa10458ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 36)
0x393a13b65d51 <ByteArray[36]>
Object boilerplate at 0x393a13b65c91: 
0x393a13b65c91: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3f8df8682059 <Map>
 - length: 5
           0: 8
           1: 0x10fa10458ac9 <String[1]: #x>
           2: -1
           3: 0x10fa10458ae1 <String[1]: #y>
           4: -1
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x393a13b65cf9: 
0x393a13b65cf9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3f8df8682059 <Map>
 - length: 5
           0: 8
           1: 0x10fa10458ac9 <String[1]: #x>
           2: 0x3f8df8681501 <Odd Oddball: uninitialized>
           3: 0x10fa10458ae1 <String[1]: #y>
           4: 0x3f8df8681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x393a13b65fc1 points to: [0x393a13b66030]
=== [0x393a13b66030] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1258 S> 0x393a13b66030 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b66032 @    2 : c3                Star1 
 1250 E> 0x393a13b66033 @    3 : 2d f9 00 00       GetNamedProperty r1, [0], [0]
         0x393a13b66037 @    7 : c3                Star1 
 1258 E> 0x393a13b66038 @    8 : 2d f9 01 02       GetNamedProperty r1, [1], [2]
         0x393a13b6603c @   12 : c4                Star0 
         0x393a13b6603d @   13 : 80 02 00 02       CreateClosure [2], [0], #2
         0x393a13b66041 @   17 : c2                Star2 
 1258 E> 0x393a13b66042 @   18 : 5e fa f9 f8 04    CallProperty1 r0, r1, r2, [4]
 1444 S> 0x393a13b66047 @   23 : a9                Return 
Constant pool (size = 3)
0x393a13b66049: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 3
           0: 0x393a13b65b69 <String[7]: #threats>
           1: 0x10fa10449ea9 <String[3]: #map>
           2: 0x393a13b66071 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 14)
0x393a13b66249 <ByteArray[14]>
0x393a13b66071 points to: [0x393a13b660e0]
=== [0x393a13b660e0] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1300 S> 0x393a13b660e0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b660e4 @    4 : 96 07             JumpIfToBooleanTrue [7] (0x393a13b660eb @ 11)
 1328 S> 0x393a13b660e6 @    6 : 7c 01 02 29       CreateObjectLiteral [1], [2], #41
 1352 S> 0x393a13b660ea @   10 : a9                Return 
 1379 S> 0x393a13b660eb @   11 : 7c 02 03 29       CreateObjectLiteral [2], [3], #41
         0x393a13b660ef @   15 : c4                Star0 
 1398 E> 0x393a13b660f0 @   16 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b660f4 @   20 : c3                Star1 
 1407 E> 0x393a13b660f5 @   21 : 2d f9 03 04       GetNamedProperty r1, [3], [4]
         0x393a13b660f9 @   25 : 33 fa 03 06       DefineNamedOwnProperty r0, [3], [6]
 1420 E> 0x393a13b660fd @   29 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b66101 @   33 : c3                Star1 
 1429 E> 0x393a13b66102 @   34 : 2d f9 04 08       GetNamedProperty r1, [4], [8]
         0x393a13b66106 @   38 : 33 fa 04 0a       DefineNamedOwnProperty r0, [4], [10]
         0x393a13b6610a @   42 : 0b fa             Ldar r0
 1433 S> 0x393a13b6610c @   44 : a9                Return 
Constant pool (size = 5)
0x393a13b66111: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 5
           0: 0x3f8df8685c19 <String[8]: #position>
           1: 0x393a13b66149 <ObjectBoilerplateDescription[5]>
           2: 0x393a13b66181 <ObjectBoilerplateDescription[5]>
           3: 0x10fa10458ac9 <String[1]: #x>
           4: 0x10fa10458ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 22)
0x393a13b661b9 <ByteArray[22]>
Object boilerplate at 0x393a13b66149: 
0x393a13b66149: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3f8df8682059 <Map>
 - length: 5
           0: 8
           1: 0x10fa10458ac9 <String[1]: #x>
           2: -1
           3: 0x10fa10458ae1 <String[1]: #y>
           4: -1
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x393a13b66181: 
0x393a13b66181: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3f8df8682059 <Map>
 - length: 5
           0: 8
           1: 0x10fa10458ac9 <String[1]: #x>
           2: 0x3f8df8681501 <Odd Oddball: uninitialized>
           3: 0x10fa10458ae1 <String[1]: #y>
           4: 0x3f8df8681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x393a13b662d1 points to: [0x393a13b66340]
=== [0x393a13b66340] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1652 S> 0x393a13b66340 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b66344 @    4 : c4                Star0 
         0x393a13b66345 @    5 : 80 01 00 02       CreateClosure [1], [0], #2
         0x393a13b66349 @    9 : c2                Star2 
 1652 E> 0x393a13b6634a @   10 : 5e fa 03 f8 02    CallProperty1 r0, a0, r2, [2]
 1720 S> 0x393a13b6634f @   15 : a9                Return 
Constant pool (size = 2)
0x393a13b66351: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 2
           0: 0x10fa10449ea9 <String[3]: #map>
           1: 0x393a13b66371 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 10)
0x393a13b664e9 <ByteArray[10]>
0x393a13b66371 points to: [0x393a13b663e0]
=== [0x393a13b663e0] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1672 S> 0x393a13b663e0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b663e4 @    4 : c4                Star0 
         0x393a13b663e5 @    5 : 15 ff 07 02       LdaImmutableContextSlot <context>, [7], [2]
 1681 E> 0x393a13b663e9 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x393a13b663eb @   11 : c3                Star1 
 1697 E> 0x393a13b663ec @   12 : 2d f9 02 02       GetNamedProperty r1, [2], [2]
         0x393a13b663f0 @   16 : c3                Star1 
 1706 E> 0x393a13b663f1 @   17 : 2d f9 03 04       GetNamedProperty r1, [3], [4]
 1677 E> 0x393a13b663f5 @   21 : 6c fa 06          TestEqualStrict r0, [6]
         0x393a13b663f8 @   24 : 99 05             JumpIfFalse [5] (0x393a13b663fd @ 29)
         0x393a13b663fa @   26 : 0c                LdaZero 
         0x393a13b663fb @   27 : 8a 04             Jump [4] (0x393a13b663ff @ 31)
         0x393a13b663fd @   29 : 0d 01             LdaSmi [1]
 1719 S> 0x393a13b663ff @   31 : a9                Return 
Constant pool (size = 4)
0x393a13b66401: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 4
           0: 0x3f8df8684469 <String[4]: #type>
           1: 0x393a13b65291 <String[15]: #GameInterface_1>
           2: 0x393a13b66431 <String[8]: #TileType>
           3: 0x393a13b66449 <String[4]: #WALL>
Handler Table (size = 0)
Source Position Table (size = 16)
0x393a13b66461 <ByteArray[16]>
0x393a13b66571 points to: [0x393a13b665e0]
=== [0x393a13b665e0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 1824 S> 0x393a13b665e0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b665e4 @    4 : c4                Star0 
         0x393a13b665e5 @    5 : 80 01 00 02       CreateClosure [1], [0], #2
         0x393a13b665e9 @    9 : c2                Star2 
 1824 E> 0x393a13b665ea @   10 : 5e fa 03 f8 02    CallProperty1 r0, a0, r2, [2]
 1892 S> 0x393a13b665ef @   15 : a9                Return 
Constant pool (size = 2)
0x393a13b665f1: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 2
           0: 0x10fa10449ea9 <String[3]: #map>
           1: 0x393a13b66611 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 10)
0x393a13b66759 <ByteArray[10]>
0x393a13b66611 points to: [0x393a13b66680]
=== [0x393a13b66680] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1844 S> 0x393a13b66680 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b66684 @    4 : c4                Star0 
         0x393a13b66685 @    5 : 15 ff 07 02       LdaImmutableContextSlot <context>, [7], [2]
 1853 E> 0x393a13b66689 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x393a13b6668b @   11 : c3                Star1 
 1869 E> 0x393a13b6668c @   12 : 2d f9 02 02       GetNamedProperty r1, [2], [2]
         0x393a13b66690 @   16 : c3                Star1 
 1878 E> 0x393a13b66691 @   17 : 2d f9 03 04       GetNamedProperty r1, [3], [4]
 1849 E> 0x393a13b66695 @   21 : 6c fa 06          TestEqualStrict r0, [6]
         0x393a13b66698 @   24 : 99 06             JumpIfFalse [6] (0x393a13b6669e @ 30)
         0x393a13b6669a @   26 : 0d 01             LdaSmi [1]
         0x393a13b6669c @   28 : 8a 03             Jump [3] (0x393a13b6669f @ 31)
         0x393a13b6669e @   30 : 0c                LdaZero 
 1891 S> 0x393a13b6669f @   31 : a9                Return 
Constant pool (size = 4)
0x393a13b666a1: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 4
           0: 0x3f8df8684469 <String[4]: #type>
           1: 0x393a13b65291 <String[15]: #GameInterface_1>
           2: 0x393a13b66431 <String[8]: #TileType>
           3: 0x393a13b66449 <String[4]: #WALL>
Handler Table (size = 0)
Source Position Table (size = 16)
0x393a13b666d1 <ByteArray[16]>
0x393a13b667e1 points to: [0x393a13b66850]
=== [0x393a13b66850] DISASSEMBLY ===
Parameter count 2
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 2187 S> 0x393a13b66850 @    0 : 15 ff 05 02       LdaImmutableContextSlot <context>, [5], [2]
         0x393a13b66854 @    4 : aa 00             ThrowReferenceErrorIfHole [0]
         0x393a13b66856 @    6 : c3                Star1 
 2174 E> 0x393a13b66857 @    7 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x393a13b6685b @   11 : c4                Star0 
         0x393a13b6685c @   12 : 17 03             LdaImmutableCurrentContextSlot [3]
 2188 E> 0x393a13b6685e @   14 : aa 02             ThrowReferenceErrorIfHole [2]
         0x393a13b66860 @   16 : c3                Star1 
 2223 E> 0x393a13b66861 @   17 : 2d 03 03 02       GetNamedProperty a0, [3], [2]
         0x393a13b66865 @   21 : c2                Star2 
         0x393a13b66866 @   22 : 13 04             LdaConstant [4]
         0x393a13b66868 @   24 : c1                Star3 
 2256 E> 0x393a13b66869 @   25 : 2d 03 05 04       GetNamedProperty a0, [5], [4]
         0x393a13b6686d @   29 : c0                Star4 
 2187 E> 0x393a13b6686e @   30 : 60 fa f9 04 06    CallUndefinedReceiver r0, r1-r4, [6]
 2262 S> 0x393a13b66873 @   35 : a9                Return 
Constant pool (size = 6)
0x393a13b66879: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 6
           0: 0x393a13b65251 <String[16]: #threat_factory_1>
           1: 0x393a13b668b9 <String[12]: #createThreat>
           2: 0x393a13b65ab9 <String[18]: #pathfindingRawGrid>
           3: 0x3f8df8685c19 <String[8]: #position>
           4: 0x393a13b668d9 <String[4]: #lazy>
           5: 0x3f8df8684381 <String[5]: #style>
Handler Table (size = 0)
Source Position Table (size = 22)
0x393a13b668f1 <ByteArray[22]>
0x393a13b66981 points to: [0x393a13b669f0]
=== [0x393a13b669f0] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 2293 E> 0x393a13b669f0 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x393a13b669f3 @    3 : 1a f8             PushContext r2
         0x393a13b669f5 @    5 : 10                LdaTheHole 
         0x393a13b669f6 @    6 : 25 02             StaCurrentContextSlot [2]
 2323 S> 0x393a13b669f8 @    8 : 21 01 00          LdaGlobal [1], [0]
         0x393a13b669fb @   11 : c1                Star3 
 2337 E> 0x393a13b669fc @   12 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
         0x393a13b66a00 @   16 : c0                Star4 
         0x393a13b66a01 @   17 : 0b f7             Ldar r3
 2323 E> 0x393a13b66a03 @   19 : 69 f7 f6 01 04    Construct r3, r4-r4, [4]
 2323 E> 0x393a13b66a08 @   24 : 25 02             StaCurrentContextSlot [2]
 2366 S> 0x393a13b66a0a @   26 : 0c                LdaZero 
         0x393a13b66a0b @   27 : c4                Star0 
 2377 S> 0x393a13b66a0c @   28 : 2d 03 02 02       GetNamedProperty a0, [2], [2]
 2371 E> 0x393a13b66a10 @   32 : 6d fa 06          TestLessThan r0, [6]
         0x393a13b66a13 @   35 : 99 5c             JumpIfFalse [92] (0x393a13b66a6f @ 127)
 2403 S> 0x393a13b66a15 @   37 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b66a17 @   39 : c1                Star3 
 2418 E> 0x393a13b66a18 @   40 : 21 01 00          LdaGlobal [1], [0]
         0x393a13b66a1b @   43 : bf                Star5 
 2428 E> 0x393a13b66a1c @   44 : 2d 03 03 07       GetNamedProperty a0, [3], [7]
         0x393a13b66a20 @   48 : be                Star6 
         0x393a13b66a21 @   49 : 0b f5             Ldar r5
 2414 E> 0x393a13b66a23 @   51 : 69 f5 f4 01 09    Construct r5, r6-r6, [9]
 2412 E> 0x393a13b66a28 @   56 : 34 f7 fa 0b       SetKeyedProperty r3, r0, [11]
 2462 S> 0x393a13b66a2c @   60 : 0c                LdaZero 
         0x393a13b66a2d @   61 : c3                Star1 
 2473 S> 0x393a13b66a2e @   62 : 2d 03 03 07       GetNamedProperty a0, [3], [7]
 2467 E> 0x393a13b66a32 @   66 : 6d f9 0d          TestLessThan r1, [13]
         0x393a13b66a35 @   69 : 99 32             JumpIfFalse [50] (0x393a13b66a67 @ 119)
 2504 S> 0x393a13b66a37 @   71 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b66a39 @   73 : c1                Star3 
         0x393a13b66a3a @   74 : 0b fa             Ldar r0
 2509 E> 0x393a13b66a3c @   76 : 2f f7 0e          GetKeyedProperty r3, [14]
         0x393a13b66a3f @   79 : c1                Star3 
 2513 E> 0x393a13b66a40 @   80 : 7c 04 10 29       CreateObjectLiteral [4], [16], #41
         0x393a13b66a44 @   84 : bf                Star5 
         0x393a13b66a45 @   85 : 15 ff 07 02       LdaImmutableContextSlot <context>, [7], [2]
 2526 E> 0x393a13b66a49 @   89 : aa 05             ThrowReferenceErrorIfHole [5]
         0x393a13b66a4b @   91 : be                Star6 
 2542 E> 0x393a13b66a4c @   92 : 2d f4 06 11       GetNamedProperty r6, [6], [17]
         0x393a13b66a50 @   96 : be                Star6 
 2551 E> 0x393a13b66a51 @   97 : 2d f4 07 13       GetNamedProperty r6, [7], [19]
         0x393a13b66a55 @  101 : 33 f5 08 15       DefineNamedOwnProperty r5, [8], [21]
         0x393a13b66a59 @  105 : 0b f5             Ldar r5
 2516 E> 0x393a13b66a5b @  107 : 34 f7 f9 17       SetKeyedProperty r3, r1, [23]
 2482 S> 0x393a13b66a5f @  111 : 0b f9             Ldar r1
         0x393a13b66a61 @  113 : 51 19             Inc [25]
         0x393a13b66a63 @  115 : c3                Star1 
 2449 E> 0x393a13b66a64 @  116 : 89 36 01          JumpLoop [54], [1] (0x393a13b66a2e @ 62)
 2385 S> 0x393a13b66a67 @  119 : 0b fa             Ldar r0
         0x393a13b66a69 @  121 : 51 1a             Inc [26]
         0x393a13b66a6b @  123 : c4                Star0 
 2353 E> 0x393a13b66a6c @  124 : 89 60 00          JumpLoop [96], [0] (0x393a13b66a0c @ 28)
 2596 S> 0x393a13b66a6f @  127 : 2d 03 09 1b       GetNamedProperty a0, [9], [27]
         0x393a13b66a73 @  131 : c0                Star4 
 2613 E> 0x393a13b66a74 @  132 : 2d f6 0a 1d       GetNamedProperty r4, [10], [29]
         0x393a13b66a78 @  136 : c1                Star3 
         0x393a13b66a79 @  137 : 80 0b 00 02       CreateClosure [11], [0], #2
         0x393a13b66a7d @  141 : bf                Star5 
 2613 E> 0x393a13b66a7e @  142 : 5e f7 f6 f5 1f    CallProperty1 r3, r4, r5, [31]
 2730 S> 0x393a13b66a83 @  147 : 17 02             LdaImmutableCurrentContextSlot [2]
 2743 S> 0x393a13b66a85 @  149 : a9                Return 
Constant pool (size = 12)
0x393a13b66a89: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 12
           0: 0x393a13b66af9 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3f8df8684681 <String[5]: #Array>
           2: 0x393a13b66b71 <String[5]: #width>
           3: 0x393a13b66b89 <String[6]: #height>
           4: 0x393a13b66ba1 <ObjectBoilerplateDescription[3]>
           5: 0x393a13b65291 <String[15]: #GameInterface_1>
           6: 0x393a13b66431 <String[8]: #TileType>
           7: 0x393a13b66bc9 <String[5]: #EMPTY>
           8: 0x3f8df8684469 <String[4]: #type>
           9: 0x393a13b66be1 <String[16]: #nonWalkableTiles>
          10: 0x10fa1044a021 <String[7]: #forEach>
          11: 0x393a13b66c19 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 77)
0x393a13b66dd1 <ByteArray[77]>
Object boilerplate at 0x393a13b66ba1: 
0x393a13b66ba1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3f8df8682059 <Map>
 - length: 3
           0: 8
           1: 0x3f8df8684469 <String[4]: #type>
           2: 0x3f8df8681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x393a13b66c19 points to: [0x393a13b66c88]
=== [0x393a13b66c88] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2645 S> 0x393a13b66c88 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b66c8a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x393a13b66c8c @    4 : c4                Star0 
 2656 E> 0x393a13b66c8d @    5 : 2d 03 01 00       GetNamedProperty a0, [1], [0]
 2650 E> 0x393a13b66c91 @    9 : 2f fa 02          GetKeyedProperty r0, [2]
         0x393a13b66c94 @   12 : c4                Star0 
 2664 E> 0x393a13b66c95 @   13 : 2d 03 02 04       GetNamedProperty a0, [2], [4]
         0x393a13b66c99 @   17 : c3                Star1 
         0x393a13b66c9a @   18 : 7c 03 06 29       CreateObjectLiteral [3], [6], #41
         0x393a13b66c9e @   22 : c2                Star2 
         0x393a13b66c9f @   23 : 15 ff 07 02       LdaImmutableContextSlot <context>, [7], [2]
 2677 E> 0x393a13b66ca3 @   27 : aa 04             ThrowReferenceErrorIfHole [4]
         0x393a13b66ca5 @   29 : c1                Star3 
 2693 E> 0x393a13b66ca6 @   30 : 2d f7 05 07       GetNamedProperty r3, [5], [7]
         0x393a13b66caa @   34 : c1                Star3 
 2702 E> 0x393a13b66cab @   35 : 2d f7 06 09       GetNamedProperty r3, [6], [9]
         0x393a13b66caf @   39 : 33 f8 07 0b       DefineNamedOwnProperty r2, [7], [11]
         0x393a13b66cb3 @   43 : 0b f8             Ldar r2
 2667 E> 0x393a13b66cb5 @   45 : 34 fa f9 0d       SetKeyedProperty r0, r1, [13]
         0x393a13b66cb9 @   49 : 0e                LdaUndefined 
 2718 S> 0x393a13b66cba @   50 : a9                Return 
Constant pool (size = 8)
0x393a13b66cc1: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 8
           0: 0x393a13b66b59 <String[5]: #tiles>
           1: 0x10fa10458ac9 <String[1]: #x>
           2: 0x10fa10458ae1 <String[1]: #y>
           3: 0x393a13b66d11 <ObjectBoilerplateDescription[3]>
           4: 0x393a13b65291 <String[15]: #GameInterface_1>
           5: 0x393a13b66431 <String[8]: #TileType>
           6: 0x393a13b66449 <String[4]: #WALL>
           7: 0x3f8df8684469 <String[4]: #type>
Handler Table (size = 0)
Source Position Table (size = 23)
0x393a13b66d39 <ByteArray[23]>
Object boilerplate at 0x393a13b66d11: 
0x393a13b66d11: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3f8df8682059 <Map>
 - length: 3
           0: 8
           1: 0x3f8df8684469 <String[4]: #type>
           2: 0x3f8df8681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x393a13b66e59 points to: [0x393a13b66ec8]
=== [0x393a13b66ec8] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2760 E> 0x393a13b66ec8 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x393a13b66ecb @    3 : 1a fa             PushContext r0
         0x393a13b66ecd @    5 : 0b 02             Ldar <this>
         0x393a13b66ecf @    7 : 25 02             StaCurrentContextSlot [2]
 2773 S> 0x393a13b66ed1 @    9 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b66ed3 @   11 : c2                Star2 
 2778 E> 0x393a13b66ed4 @   12 : 2d f8 01 00       GetNamedProperty r2, [1], [0]
         0x393a13b66ed8 @   16 : c2                Star2 
 2788 E> 0x393a13b66ed9 @   17 : 2d f8 02 02       GetNamedProperty r2, [2], [2]
         0x393a13b66edd @   21 : c3                Star1 
 2788 E> 0x393a13b66ede @   22 : 5d f9 f8 04       CallProperty0 r1, r2, [4]
 2806 S> 0x393a13b66ee2 @   26 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b66ee4 @   28 : c2                Star2 
 2811 E> 0x393a13b66ee5 @   29 : 2d f8 03 06       GetNamedProperty r2, [3], [6]
         0x393a13b66ee9 @   33 : c2                Star2 
 2819 E> 0x393a13b66eea @   34 : 2d f8 04 08       GetNamedProperty r2, [4], [8]
         0x393a13b66eee @   38 : c3                Star1 
         0x393a13b66eef @   39 : 80 05 00 02       CreateClosure [5], [0], #2
         0x393a13b66ef3 @   43 : c1                Star3 
 2819 E> 0x393a13b66ef4 @   44 : 5e f9 f8 f7 0a    CallProperty1 r1, r2, r3, [10]
 2993 S> 0x393a13b66ef9 @   49 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b66efb @   51 : c3                Star1 
         0x393a13b66efc @   52 : 2d f9 06 0c       GetNamedProperty r1, [6], [12]
         0x393a13b66f00 @   56 : 51 0e             Inc [14]
 3009 E> 0x393a13b66f02 @   58 : 32 f9 06 0f       SetNamedProperty r1, [6], [15]
         0x393a13b66f06 @   62 : 0e                LdaUndefined 
 3058 S> 0x393a13b66f07 @   63 : a9                Return 
Constant pool (size = 7)
0x393a13b66f09: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 7
           0: 0x393a13b66f51 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3f8df8684939 <String[9]: #character>
           2: 0x10fa10443f01 <String[6]: #update>
           3: 0x393a13b65b69 <String[7]: #threats>
           4: 0x10fa1044a021 <String[7]: #forEach>
           5: 0x393a13b66fb1 <SharedFunctionInfo>
           6: 0x393a13b65b49 <String[11]: #tickCounter>
Handler Table (size = 0)
Source Position Table (size = 29)
0x393a13b67169 <ByteArray[29]>
0x393a13b66fb1 points to: [0x393a13b67020]
=== [0x393a13b67020] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 2860 S> 0x393a13b67020 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b67024 @    4 : c4                Star0 
         0x393a13b67025 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b67027 @    7 : c1                Star3 
 2872 E> 0x393a13b67028 @    8 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x393a13b6702c @   12 : c2                Star2 
 2872 E> 0x393a13b6702d @   13 : 5d f8 f7 04       CallProperty0 r2, r3, [4]
         0x393a13b67031 @   17 : c2                Star2 
 2860 E> 0x393a13b67032 @   18 : 5e fa 03 f8 06    CallProperty1 r0, a0, r2, [6]
 2914 S> 0x393a13b67037 @   23 : 2d 03 02 08       GetNamedProperty a0, [2], [8]
         0x393a13b6703b @   27 : c4                Star0 
         0x393a13b6703c @   28 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b6703e @   30 : c1                Star3 
 2940 E> 0x393a13b6703f @   31 : 2d f7 03 0a       GetNamedProperty r3, [3], [10]
         0x393a13b67043 @   35 : c1                Star3 
 2950 E> 0x393a13b67044 @   36 : 2d f7 04 0c       GetNamedProperty r3, [4], [12]
         0x393a13b67048 @   40 : c1                Star3 
 2959 E> 0x393a13b67049 @   41 : 2d f7 05 0e       GetNamedProperty r3, [5], [14]
         0x393a13b6704d @   45 : c2                Star2 
 2959 E> 0x393a13b6704e @   46 : 5d f8 f7 10       CallProperty0 r2, r3, [16]
         0x393a13b67052 @   50 : c2                Star2 
 2914 E> 0x393a13b67053 @   51 : 5e fa 03 f8 12    CallProperty1 r0, a0, r2, [18]
         0x393a13b67058 @   56 : 0e                LdaUndefined 
 2981 S> 0x393a13b67059 @   57 : a9                Return 
Constant pool (size = 6)
0x393a13b67061: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 6
           0: 0x10fa10443f01 <String[6]: #update>
           1: 0x393a13b65749 <String[18]: #serializeForThreat>
           2: 0x393a13b670a1 <String[20]: #setCharacterPosition>
           3: 0x3f8df8684939 <String[9]: #character>
           4: 0x3f8df8685c19 <String[8]: #position>
           5: 0x10fa104501a9 <String[9]: #serialize>
Handler Table (size = 0)
Source Position Table (size = 29)
0x393a13b670c9 <ByteArray[29]>
0x393a13b671b9 points to: [0x393a13b67228]
=== [0x393a13b67228] DISASSEMBLY ===
Parameter count 3
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 3117 S> 0x393a13b67228 @    0 : 2d 04 00 00       GetNamedProperty a1, [0], [0]
         0x393a13b6722c @    4 : c4                Star0 
         0x393a13b6722d @    5 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 3142 E> 0x393a13b67231 @    9 : aa 01             ThrowReferenceErrorIfHole [1]
         0x393a13b67233 @   11 : c3                Star1 
 3157 E> 0x393a13b67234 @   12 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x393a13b67238 @   16 : c3                Star1 
 3168 E> 0x393a13b67239 @   17 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x393a13b6723d @   21 : 6c fa 02          TestEqualStrict r0, [2]
         0x393a13b67240 @   24 : 98 58             JumpIfTrue [88] (0x393a13b67298 @ 112)
         0x393a13b67242 @   26 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 3283 E> 0x393a13b67246 @   30 : aa 01             ThrowReferenceErrorIfHole [1]
         0x393a13b67248 @   32 : c3                Star1 
 3298 E> 0x393a13b67249 @   33 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x393a13b6724d @   37 : c3                Star1 
 3309 E> 0x393a13b6724e @   38 : 2d f9 04 07       GetNamedProperty r1, [4], [7]
         0x393a13b67252 @   42 : 6c fa 02          TestEqualStrict r0, [2]
         0x393a13b67255 @   45 : 98 68             JumpIfTrue [104] (0x393a13b672bd @ 149)
         0x393a13b67257 @   47 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 3424 E> 0x393a13b6725b @   51 : aa 01             ThrowReferenceErrorIfHole [1]
         0x393a13b6725d @   53 : c3                Star1 
 3439 E> 0x393a13b6725e @   54 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x393a13b67262 @   58 : c3                Star1 
 3450 E> 0x393a13b67263 @   59 : 2d f9 05 09       GetNamedProperty r1, [5], [9]
         0x393a13b67267 @   63 : 6c fa 02          TestEqualStrict r0, [2]
         0x393a13b6726a @   66 : 98 78             JumpIfTrue [120] (0x393a13b672e2 @ 186)
         0x393a13b6726c @   68 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 3563 E> 0x393a13b67270 @   72 : aa 01             ThrowReferenceErrorIfHole [1]
         0x393a13b67272 @   74 : c3                Star1 
 3578 E> 0x393a13b67273 @   75 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x393a13b67277 @   79 : c3                Star1 
 3589 E> 0x393a13b67278 @   80 : 2d f9 06 0b       GetNamedProperty r1, [6], [11]
         0x393a13b6727c @   84 : 6c fa 02          TestEqualStrict r0, [2]
         0x393a13b6727f @   87 : 98 88             JumpIfTrue [136] (0x393a13b67307 @ 223)
         0x393a13b67281 @   89 : 15 ff 02 01       LdaImmutableContextSlot <context>, [2], [1]
 3703 E> 0x393a13b67285 @   93 : aa 01             ThrowReferenceErrorIfHole [1]
         0x393a13b67287 @   95 : c3                Star1 
 3718 E> 0x393a13b67288 @   96 : 2d f9 02 03       GetNamedProperty r1, [2], [3]
         0x393a13b6728c @  100 : c3                Star1 
 3729 E> 0x393a13b6728d @  101 : 2d f9 07 0d       GetNamedProperty r1, [7], [13]
         0x393a13b67291 @  105 : 6c fa 02          TestEqualStrict r0, [2]
         0x393a13b67294 @  108 : 98 98             JumpIfTrue [152] (0x393a13b6732c @ 260)
         0x393a13b67296 @  110 : 8a a7             Jump [167] (0x393a13b6733d @ 277)
 3200 S> 0x393a13b67298 @  112 : 2d 02 08 0f       GetNamedProperty <this>, [8], [15]
         0x393a13b6729c @  116 : c3                Star1 
         0x393a13b6729d @  117 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 3218 E> 0x393a13b672a1 @  121 : aa 09             ThrowReferenceErrorIfHole [9]
         0x393a13b672a3 @  123 : c1                Star3 
 3227 E> 0x393a13b672a4 @  124 : 2d f7 0a 11       GetNamedProperty r3, [10], [17]
         0x393a13b672a8 @  128 : c1                Star3 
         0x393a13b672a9 @  129 : 0d ff             LdaSmi [-1]
         0x393a13b672ab @  131 : c0                Star4 
         0x393a13b672ac @  132 : 0c                LdaZero 
         0x393a13b672ad @  133 : bf                Star5 
         0x393a13b672ae @  134 : 0b f7             Ldar r3
 3214 E> 0x393a13b672b0 @  136 : 69 f7 f6 02 13    Construct r3, r4-r5, [19]
         0x393a13b672b5 @  141 : c1                Star3 
 3200 E> 0x393a13b672b6 @  142 : 5e f9 02 f7 15    CallProperty1 r1, <this>, r3, [21]
 3259 S> 0x393a13b672bb @  147 : 8a 82             Jump [130] (0x393a13b6733d @ 277)
 3342 S> 0x393a13b672bd @  149 : 2d 02 08 17       GetNamedProperty <this>, [8], [23]
         0x393a13b672c1 @  153 : c3                Star1 
         0x393a13b672c2 @  154 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 3360 E> 0x393a13b672c6 @  158 : aa 09             ThrowReferenceErrorIfHole [9]
         0x393a13b672c8 @  160 : c1                Star3 
 3369 E> 0x393a13b672c9 @  161 : 2d f7 0a 11       GetNamedProperty r3, [10], [17]
         0x393a13b672cd @  165 : c1                Star3 
         0x393a13b672ce @  166 : 0d 01             LdaSmi [1]
         0x393a13b672d0 @  168 : c0                Star4 
         0x393a13b672d1 @  169 : 0c                LdaZero 
         0x393a13b672d2 @  170 : bf                Star5 
         0x393a13b672d3 @  171 : 0b f7             Ldar r3
 3356 E> 0x393a13b672d5 @  173 : 69 f7 f6 02 19    Construct r3, r4-r5, [25]
         0x393a13b672da @  178 : c1                Star3 
 3342 E> 0x393a13b672db @  179 : 5e f9 02 f7 1b    CallProperty1 r1, <this>, r3, [27]
 3400 S> 0x393a13b672e0 @  184 : 8a 5d             Jump [93] (0x393a13b6733d @ 277)
 3480 S> 0x393a13b672e2 @  186 : 2d 02 08 1d       GetNamedProperty <this>, [8], [29]
         0x393a13b672e6 @  190 : c3                Star1 
         0x393a13b672e7 @  191 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 3498 E> 0x393a13b672eb @  195 : aa 09             ThrowReferenceErrorIfHole [9]
         0x393a13b672ed @  197 : c1                Star3 
 3507 E> 0x393a13b672ee @  198 : 2d f7 0a 11       GetNamedProperty r3, [10], [17]
         0x393a13b672f2 @  202 : c1                Star3 
         0x393a13b672f3 @  203 : 0c                LdaZero 
         0x393a13b672f4 @  204 : c0                Star4 
         0x393a13b672f5 @  205 : 0d ff             LdaSmi [-1]
         0x393a13b672f7 @  207 : bf                Star5 
         0x393a13b672f8 @  208 : 0b f7             Ldar r3
 3494 E> 0x393a13b672fa @  210 : 69 f7 f6 02 1f    Construct r3, r4-r5, [31]
         0x393a13b672ff @  215 : c1                Star3 
 3480 E> 0x393a13b67300 @  216 : 5e f9 02 f7 21    CallProperty1 r1, <this>, r3, [33]
 3539 S> 0x393a13b67305 @  221 : 8a 38             Jump [56] (0x393a13b6733d @ 277)
 3621 S> 0x393a13b67307 @  223 : 2d 02 08 23       GetNamedProperty <this>, [8], [35]
         0x393a13b6730b @  227 : c3                Star1 
         0x393a13b6730c @  228 : 15 ff 04 01       LdaImmutableContextSlot <context>, [4], [1]
 3639 E> 0x393a13b67310 @  232 : aa 09             ThrowReferenceErrorIfHole [9]
         0x393a13b67312 @  234 : c1                Star3 
 3648 E> 0x393a13b67313 @  235 : 2d f7 0a 11       GetNamedProperty r3, [10], [17]
         0x393a13b67317 @  239 : c1                Star3 
         0x393a13b67318 @  240 : 0c                LdaZero 
         0x393a13b67319 @  241 : c0                Star4 
         0x393a13b6731a @  242 : 0d 01             LdaSmi [1]
         0x393a13b6731c @  244 : bf                Star5 
         0x393a13b6731d @  245 : 0b f7             Ldar r3
 3635 E> 0x393a13b6731f @  247 : 69 f7 f6 02 25    Construct r3, r4-r5, [37]
         0x393a13b67324 @  252 : c1                Star3 
 3621 E> 0x393a13b67325 @  253 : 5e f9 02 f7 27    CallProperty1 r1, <this>, r3, [39]
 3679 S> 0x393a13b6732a @  258 : 8a 13             Jump [19] (0x393a13b6733d @ 277)
 3759 S> 0x393a13b6732c @  260 : 2d 02 0b 29       GetNamedProperty <this>, [11], [41]
         0x393a13b67330 @  264 : c3                Star1 
 3789 E> 0x393a13b67331 @  265 : 2d 04 0c 2b       GetNamedProperty a1, [12], [43]
         0x393a13b67335 @  269 : c1                Star3 
 3759 E> 0x393a13b67336 @  270 : 5e f9 02 f7 2d    CallProperty1 r1, <this>, r3, [45]
 3816 S> 0x393a13b6733b @  275 : 8a 02             Jump [2] (0x393a13b6733d @ 277)
         0x393a13b6733d @  277 : 0e                LdaUndefined 
 3837 S> 0x393a13b6733e @  278 : a9                Return 
Constant pool (size = 13)
0x393a13b67341: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 13
           0: 0x3f8df8684469 <String[4]: #type>
           1: 0x393a13b651f9 <String[14]: #action_types_1>
           2: 0x393a13b673b9 <String[10]: #ActionType>
           3: 0x393a13b673d9 <String[9]: #MOVE_LEFT>
           4: 0x393a13b673f9 <String[10]: #MOVE_RIGHT>
           5: 0x393a13b67419 <String[7]: #MOVE_UP>
           6: 0x393a13b67431 <String[9]: #MOVE_DOWN>
           7: 0x393a13b67451 <String[7]: #MOVE_TO>
           8: 0x393a13b656d9 <String[13]: #moveCharacter>
           9: 0x393a13b65239 <String[8]: #vector_1>
          10: 0x393a13b67469 <String[6]: #Vector>
          11: 0x393a13b656b1 <String[22]: #moveCharacterAlongPath>
          12: 0x3f8df8685c19 <String[8]: #position>
Handler Table (size = 0)
Source Position Table (size = 108)
0x393a13b67481 <ByteArray[108]>
0x393a13b67581 points to: [0x393a13b675f0]
=== [0x393a13b675f0] DISASSEMBLY ===
Parameter count 2
Register count 7
Frame size 56
OSR urgency: 0
Bytecode age: 0
 3893 S> 0x393a13b675f0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x393a13b675f4 @    4 : 1d                TestUndetectable 
         0x393a13b675f5 @    5 : 99 15             JumpIfFalse [21] (0x393a13b6760a @ 26)
 3926 S> 0x393a13b675f7 @    7 : 21 01 02          LdaGlobal [1], [2]
         0x393a13b675fa @   10 : c1                Star3 
 3934 E> 0x393a13b675fb @   11 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x393a13b675ff @   15 : c2                Star2 
         0x393a13b67600 @   16 : 13 03             LdaConstant [3]
         0x393a13b67602 @   18 : c0                Star4 
 3934 E> 0x393a13b67603 @   19 : 5e f8 f7 f6 06    CallProperty1 r2, r3, r4, [6]
 3967 S> 0x393a13b67608 @   24 : 0e                LdaUndefined 
 3974 S> 0x393a13b67609 @   25 : a9                Return 
 4026 S> 0x393a13b6760a @   26 : 2d 02 04 08       GetNamedProperty <this>, [4], [8]
         0x393a13b6760e @   30 : c1                Star3 
 4042 E> 0x393a13b6760f @   31 : 2d f7 05 0a       GetNamedProperty r3, [5], [10]
         0x393a13b67613 @   35 : c2                Star2 
 4055 E> 0x393a13b67614 @   36 : 2d 02 00 0c       GetNamedProperty <this>, [0], [12]
         0x393a13b67618 @   40 : c0                Star4 
 4065 E> 0x393a13b67619 @   41 : 2d f6 06 0e       GetNamedProperty r4, [6], [14]
         0x393a13b6761d @   45 : c0                Star4 
 4042 E> 0x393a13b6761e @   46 : 5f f8 f7 f6 03 10 CallProperty2 r2, r3, r4, a0, [16]
         0x393a13b67624 @   52 : c4                Star0 
 4092 S> 0x393a13b67625 @   53 : 9a 0d             JumpIfNull [13] (0x393a13b67632 @ 66)
 4118 E> 0x393a13b67627 @   55 : 2d fa 07 12       GetNamedProperty r0, [7], [18]
         0x393a13b6762b @   59 : c2                Star2 
         0x393a13b6762c @   60 : 0c                LdaZero 
 4125 E> 0x393a13b6762d @   61 : 6c f8 14          TestEqualStrict r2, [20]
         0x393a13b67630 @   64 : 99 22             JumpIfFalse [34] (0x393a13b67652 @ 98)
 4146 S> 0x393a13b67632 @   66 : 21 01 02          LdaGlobal [1], [2]
         0x393a13b67635 @   69 : c1                Star3 
 4154 E> 0x393a13b67636 @   70 : 2d f7 02 04       GetNamedProperty r3, [2], [4]
         0x393a13b6763a @   74 : c2                Star2 
         0x393a13b6763b @   75 : 13 08             LdaConstant [8]
         0x393a13b6763d @   77 : c0                Star4 
 4154 E> 0x393a13b6763e @   78 : 5e f8 f7 f6 15    CallProperty1 r2, r3, r4, [21]
 4188 S> 0x393a13b67643 @   83 : 21 09 17          LdaGlobal [9], [23]
         0x393a13b67646 @   86 : c2                Star2 
         0x393a13b67647 @   87 : 13 08             LdaConstant [8]
         0x393a13b67649 @   89 : c1                Star3 
         0x393a13b6764a @   90 : 0b f8             Ldar r2
 4194 E> 0x393a13b6764c @   92 : 69 f8 f7 01 19    Construct r2, r3-r3, [25]
 4188 E> 0x393a13b67651 @   97 : a7                Throw 
 4261 S> 0x393a13b67652 @   98 : 0d 01             LdaSmi [1]
 4265 E> 0x393a13b67654 @  100 : 2f fa 1b          GetKeyedProperty r0, [27]
         0x393a13b67657 @  103 : c3                Star1 
 4283 S> 0x393a13b67658 @  104 : 2d 02 0a 1d       GetNamedProperty <this>, [10], [29]
         0x393a13b6765c @  108 : c2                Star2 
 4310 E> 0x393a13b6765d @  109 : 2d f9 0b 1f       GetNamedProperty r1, [11], [31]
         0x393a13b67661 @  113 : c0                Star4 
 4324 E> 0x393a13b67662 @  114 : 2d 02 00 21       GetNamedProperty <this>, [0], [33]
         0x393a13b67666 @  118 : be                Star6 
 4334 E> 0x393a13b67667 @  119 : 2d f4 06 23       GetNamedProperty r6, [6], [35]
         0x393a13b6766b @  123 : be                Star6 
 4310 E> 0x393a13b6766c @  124 : 5e f6 f9 f4 25    CallProperty1 r4, r1, r6, [37]
         0x393a13b67671 @  129 : c0                Star4 
 4283 E> 0x393a13b67672 @  130 : 5e f8 02 f6 27    CallProperty1 r2, <this>, r4, [39]
         0x393a13b67677 @  135 : 0e                LdaUndefined 
 4350 S> 0x393a13b67678 @  136 : a9                Return 
Constant pool (size = 12)
0x393a13b67681: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 12
           0: 0x3f8df8684939 <String[9]: #character>
           1: 0x3f8df8684a09 <String[7]: #console>
           2: 0x10fa1044ac99 <String[3]: #log>
           3: 0x393a13b67709 <String[12]: #no character>
           4: 0x393a13b67729 <String[15]: #pathfindingGrid>
           5: 0x393a13b67749 <String[7]: #getPath>
           6: 0x3f8df8685c19 <String[8]: #position>
           7: 0x3f8df86855f9 <String[6]: #length>
           8: 0x393a13b67761 <String[13]: #No path found>
           9: 0x3f8df8684de1 <String[5]: #Error>
          10: 0x393a13b656d9 <String[13]: #moveCharacter>
          11: 0x393a13b67781 <String[8]: #subtract>
Handler Table (size = 0)
Source Position Table (size = 68)
0x393a13b67799 <ByteArray[68]>
0x393a13b67871 points to: [0x393a13b678e0]
=== [0x393a13b678e0] DISASSEMBLY ===
Parameter count 2
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4369 E> 0x393a13b678e0 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x393a13b678e3 @    3 : 1a fa             PushContext r0
         0x393a13b678e5 @    5 : 10                LdaTheHole 
         0x393a13b678e6 @    6 : 25 02             StaCurrentContextSlot [2]
 4400 S> 0x393a13b678e8 @    8 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x393a13b678ec @   12 : 1d                TestUndetectable 
         0x393a13b678ed @   13 : 99 04             JumpIfFalse [4] (0x393a13b678f1 @ 17)
 4433 S> 0x393a13b678ef @   15 : 0e                LdaUndefined 
 4440 S> 0x393a13b678f0 @   16 : a9                Return 
 4525 S> 0x393a13b678f1 @   17 : 2d 02 01 02       GetNamedProperty <this>, [1], [2]
         0x393a13b678f5 @   21 : c2                Star2 
 4535 E> 0x393a13b678f6 @   22 : 2d f8 02 04       GetNamedProperty r2, [2], [4]
         0x393a13b678fa @   26 : c2                Star2 
 4544 E> 0x393a13b678fb @   27 : 2d f8 03 06       GetNamedProperty r2, [3], [6]
         0x393a13b678ff @   31 : c3                Star1 
 4544 E> 0x393a13b67900 @   32 : 5e f9 f8 03 08    CallProperty1 r1, r2, a0, [8]
 4520 E> 0x393a13b67905 @   37 : 25 02             StaCurrentContextSlot [2]
 4578 S> 0x393a13b67907 @   39 : 2d 02 04 0a       GetNamedProperty <this>, [4], [10]
         0x393a13b6790b @   43 : c2                Star2 
 4582 E> 0x393a13b6790c @   44 : 2d f8 05 0c       GetNamedProperty r2, [5], [12]
         0x393a13b67910 @   48 : c2                Star2 
 4596 E> 0x393a13b67911 @   49 : 2d f8 06 0e       GetNamedProperty r2, [6], [14]
         0x393a13b67915 @   53 : c3                Star1 
         0x393a13b67916 @   54 : 80 07 00 02       CreateClosure [7], [0], #2
         0x393a13b6791a @   58 : c1                Star3 
 4596 E> 0x393a13b6791b @   59 : 5e f9 f8 f7 10    CallProperty1 r1, r2, r3, [16]
         0x393a13b67920 @   64 : 96 04             JumpIfToBooleanTrue [4] (0x393a13b67924 @ 68)
 4652 S> 0x393a13b67922 @   66 : 0e                LdaUndefined 
 4659 S> 0x393a13b67923 @   67 : a9                Return 
 4724 S> 0x393a13b67924 @   68 : 2d 02 01 12       GetNamedProperty <this>, [1], [18]
         0x393a13b67928 @   72 : c2                Star2 
 4734 E> 0x393a13b67929 @   73 : 2d f8 08 14       GetNamedProperty r2, [8], [20]
         0x393a13b6792d @   77 : c3                Star1 
         0x393a13b6792e @   78 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x393a13b67930 @   80 : c1                Star3 
 4734 E> 0x393a13b67931 @   81 : 5f f9 f8 f7 03 16 CallProperty2 r1, r2, r3, a0, [22]
         0x393a13b67937 @   87 : 0e                LdaUndefined 
 4768 S> 0x393a13b67938 @   88 : a9                Return 
Constant pool (size = 9)
0x393a13b67941: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 9
           0: 0x393a13b67999 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3f8df8684939 <String[9]: #character>
           2: 0x3f8df8685c19 <String[8]: #position>
           3: 0x3f8df8684569 <String[3]: #add>
           4: 0x10fa10449ea9 <String[3]: #map>
           5: 0x393a13b67a19 <String[13]: #walkableTiles>
           6: 0x10fa10449f49 <String[4]: #some>
           7: 0x393a13b67a51 <SharedFunctionInfo>
           8: 0x393a13b67b91 <String[4]: #move>
Handler Table (size = 0)
Source Position Table (size = 48)
0x393a13b67ba9 <ByteArray[48]>
0x393a13b67a51 points to: [0x393a13b67ac0]
=== [0x393a13b67ac0] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 4616 S> 0x393a13b67ac0 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b67ac4 @    4 : c4                Star0 
         0x393a13b67ac5 @    5 : 17 02             LdaImmutableCurrentContextSlot [2]
 4623 E> 0x393a13b67ac7 @    7 : aa 01             ThrowReferenceErrorIfHole [1]
         0x393a13b67ac9 @    9 : c2                Star2 
 4616 E> 0x393a13b67aca @   10 : 5e fa 03 f8 02    CallProperty1 r0, a0, r2, [2]
 4635 S> 0x393a13b67acf @   15 : a9                Return 
Constant pool (size = 2)
0x393a13b67ad1: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 2
           0: 0x10fa10447411 <String[6]: #equals>
           1: 0x393a13b679f9 <String[11]: #newPosition>
Handler Table (size = 0)
Source Position Table (size = 12)
0x393a13b67b09 <ByteArray[12]>
0x393a13b67c09 points to: [0x393a13b67c78]
=== [0x393a13b67c78] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 4834 S> 0x393a13b67c78 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x393a13b67c7c @    4 : c3                Star1 
 4834 E> 0x393a13b67c7d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x393a13b67c81 @    9 : c3                Star1 
         0x393a13b67c82 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x393a13b67c86 @   14 : c4                Star0 
 4879 E> 0x393a13b67c87 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x393a13b67c8b @   19 : c2                Star2 
 4887 E> 0x393a13b67c8c @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x393a13b67c90 @   24 : c3                Star1 
         0x393a13b67c91 @   25 : 80 03 00 02       CreateClosure [3], [0], #2
         0x393a13b67c95 @   29 : c1                Star3 
 4887 E> 0x393a13b67c96 @   30 : 5e f9 f8 f7 0a    CallProperty1 r1, r2, r3, [10]
         0x393a13b67c9b @   35 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 4961 E> 0x393a13b67c9f @   39 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x393a13b67ca3 @   43 : c2                Star2 
 4971 E> 0x393a13b67ca4 @   44 : 2d f8 05 10       GetNamedProperty r2, [5], [16]
         0x393a13b67ca8 @   48 : c3                Star1 
 4971 E> 0x393a13b67ca9 @   49 : 5d f9 f8 12       CallProperty0 r1, r2, [18]
         0x393a13b67cad @   53 : 33 fa 04 14       DefineNamedOwnProperty r0, [4], [20]
         0x393a13b67cb1 @   57 : 0b fa             Ldar r0
 5003 S> 0x393a13b67cb3 @   59 : a9                Return 
Constant pool (size = 6)
0x393a13b67cb9: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 6
           0: 0x393a13b65771 <String[15]: #serializeCommon>
           1: 0x393a13b65b69 <String[7]: #threats>
           2: 0x10fa10449ea9 <String[3]: #map>
           3: 0x393a13b67cf9 <SharedFunctionInfo>
           4: 0x3f8df8684939 <String[9]: #character>
           5: 0x393a13b656f9 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 26)
0x393a13b67e19 <ByteArray[26]>
0x393a13b67cf9 points to: [0x393a13b67d68]
=== [0x393a13b67d68] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 4910 S> 0x393a13b67d68 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b67d6c @    4 : c4                Star0 
 4910 E> 0x393a13b67d6d @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 4930 S> 0x393a13b67d71 @    9 : a9                Return 
Constant pool (size = 1)
0x393a13b67d79: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 1
           0: 0x393a13b656f9 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x393a13b67d91 <ByteArray[10]>
0x393a13b67eb9 points to: [0x393a13b67f28]
=== [0x393a13b67f28] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5074 S> 0x393a13b67f28 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x393a13b67f2c @    4 : c3                Star1 
 5074 E> 0x393a13b67f2d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x393a13b67f31 @    9 : c3                Star1 
         0x393a13b67f32 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x393a13b67f36 @   14 : c4                Star0 
 5119 E> 0x393a13b67f37 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x393a13b67f3b @   19 : c2                Star2 
 5127 E> 0x393a13b67f3c @   20 : 2d f8 02 08       GetNamedProperty r2, [2], [8]
         0x393a13b67f40 @   24 : c3                Star1 
         0x393a13b67f41 @   25 : 80 03 00 02       CreateClosure [3], [0], #2
         0x393a13b67f45 @   29 : c1                Star3 
 5127 E> 0x393a13b67f46 @   30 : 5e f9 f8 f7 0a    CallProperty1 r1, r2, r3, [10]
         0x393a13b67f4b @   35 : 33 fa 01 0c       DefineNamedOwnProperty r0, [1], [12]
 5226 E> 0x393a13b67f4f @   39 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x393a13b67f53 @   43 : c1                Star3 
 5236 E> 0x393a13b67f54 @   44 : 2d f7 05 10       GetNamedProperty r3, [5], [16]
         0x393a13b67f58 @   48 : c2                Star2 
 5236 E> 0x393a13b67f59 @   49 : 5d f8 f7 12       CallProperty0 r2, r3, [18]
         0x393a13b67f5d @   53 : c2                Star2 
         0x393a13b67f5e @   54 : 7e f8 29 14       CloneObject r2, #41, [20]
         0x393a13b67f62 @   58 : c3                Star1 
 5290 E> 0x393a13b67f63 @   59 : 2d 02 06 16       GetNamedProperty <this>, [6], [22]
         0x393a13b67f67 @   63 : c1                Star3 
 5306 E> 0x393a13b67f68 @   64 : 2d f7 07 18       GetNamedProperty r3, [7], [24]
         0x393a13b67f6c @   68 : c2                Star2 
 5324 E> 0x393a13b67f6d @   69 : 2d 02 04 1a       GetNamedProperty <this>, [4], [26]
         0x393a13b67f71 @   73 : c0                Star4 
 5334 E> 0x393a13b67f72 @   74 : 2d f6 08 1c       GetNamedProperty r4, [8], [28]
         0x393a13b67f76 @   78 : c0                Star4 
 5306 E> 0x393a13b67f77 @   79 : 5e f8 f7 f6 1e    CallProperty1 r2, r3, r4, [30]
         0x393a13b67f7c @   84 : 33 f9 09 20       DefineNamedOwnProperty r1, [9], [32]
         0x393a13b67f80 @   88 : 0b f9             Ldar r1
         0x393a13b67f82 @   90 : 33 fa 0a 22       DefineNamedOwnProperty r0, [10], [34]
         0x393a13b67f86 @   94 : 0b fa             Ldar r0
 5370 S> 0x393a13b67f88 @   96 : a9                Return 
Constant pool (size = 11)
0x393a13b67f91: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 11
           0: 0x393a13b65771 <String[15]: #serializeCommon>
           1: 0x393a13b65b69 <String[7]: #threats>
           2: 0x10fa10449ea9 <String[3]: #map>
           3: 0x393a13b67ff9 <SharedFunctionInfo>
           4: 0x3f8df8684939 <String[9]: #character>
           5: 0x393a13b65721 <String[18]: #serializeForPlayer>
           6: 0x393a13b67729 <String[15]: #pathfindingGrid>
           7: 0x393a13b68119 <String[12]: #getDistances>
           8: 0x3f8df8685c19 <String[8]: #position>
           9: 0x393a13b68139 <String[9]: #distances>
          10: 0x393a13b68159 <String[13]: #yourCharacter>
Handler Table (size = 0)
Source Position Table (size = 37)
0x393a13b68179 <ByteArray[37]>
0x393a13b67ff9 points to: [0x393a13b68068]
=== [0x393a13b68068] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5150 S> 0x393a13b68068 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b6806c @    4 : c4                Star0 
 5150 E> 0x393a13b6806d @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5170 S> 0x393a13b68071 @    9 : a9                Return 
Constant pool (size = 1)
0x393a13b68079: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 1
           0: 0x393a13b65721 <String[18]: #serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x393a13b68091 <ByteArray[10]>
0x393a13b68229 points to: [0x393a13b68298]
=== [0x393a13b68298] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 5441 S> 0x393a13b68298 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x393a13b6829c @    4 : c3                Star1 
 5441 E> 0x393a13b6829d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x393a13b682a1 @    9 : c3                Star1 
         0x393a13b682a2 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x393a13b682a6 @   14 : c4                Star0 
 5483 E> 0x393a13b682a7 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x393a13b682ab @   19 : 33 fa 02 08       DefineNamedOwnProperty r0, [2], [8]
 5522 E> 0x393a13b682af @   23 : 2d 02 03 0a       GetNamedProperty <this>, [3], [10]
         0x393a13b682b3 @   27 : c2                Star2 
 5530 E> 0x393a13b682b4 @   28 : 2d f8 04 0c       GetNamedProperty r2, [4], [12]
         0x393a13b682b8 @   32 : c3                Star1 
         0x393a13b682b9 @   33 : 80 05 00 02       CreateClosure [5], [0], #2
         0x393a13b682bd @   37 : c1                Star3 
 5530 E> 0x393a13b682be @   38 : 5e f9 f8 f7 0e    CallProperty1 r1, r2, r3, [14]
         0x393a13b682c3 @   43 : 33 fa 03 10       DefineNamedOwnProperty r0, [3], [16]
 5604 E> 0x393a13b682c7 @   47 : 2d 02 06 12       GetNamedProperty <this>, [6], [18]
         0x393a13b682cb @   51 : c2                Star2 
 5614 E> 0x393a13b682cc @   52 : 2d f8 07 14       GetNamedProperty r2, [7], [20]
         0x393a13b682d0 @   56 : c3                Star1 
 5614 E> 0x393a13b682d1 @   57 : 5d f9 f8 16       CallProperty0 r1, r2, [22]
         0x393a13b682d5 @   61 : 33 fa 06 18       DefineNamedOwnProperty r0, [6], [24]
 5670 E> 0x393a13b682d9 @   65 : 2d 02 08 1a       GetNamedProperty <this>, [8], [26]
         0x393a13b682dd @   69 : 33 fa 08 1c       DefineNamedOwnProperty r0, [8], [28]
         0x393a13b682e1 @   73 : 0b fa             Ldar r0
 5697 S> 0x393a13b682e3 @   75 : a9                Return 
Constant pool (size = 9)
0x393a13b682e9: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 9
           0: 0x393a13b65771 <String[15]: #serializeCommon>
           1: 0x393a13b65b49 <String[11]: #tickCounter>
           2: 0x393a13b68341 <String[4]: #tick>
           3: 0x393a13b65b69 <String[7]: #threats>
           4: 0x10fa10449ea9 <String[3]: #map>
           5: 0x393a13b68359 <SharedFunctionInfo>
           6: 0x3f8df8684939 <String[9]: #character>
           7: 0x393a13b656f9 <String[18]: #serializeForViewer>
           8: 0x393a13b67729 <String[15]: #pathfindingGrid>
Handler Table (size = 0)
Source Position Table (size = 31)
0x393a13b68479 <ByteArray[31]>
0x393a13b68359 points to: [0x393a13b683c8]
=== [0x393a13b683c8] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
 5553 S> 0x393a13b683c8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b683cc @    4 : c4                Star0 
 5553 E> 0x393a13b683cd @    5 : 5d fa 03 02       CallProperty0 r0, a0, [2]
 5573 S> 0x393a13b683d1 @    9 : a9                Return 
Constant pool (size = 1)
0x393a13b683d9: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 1
           0: 0x393a13b656f9 <String[18]: #serializeForViewer>
Handler Table (size = 0)
Source Position Table (size = 10)
0x393a13b683f1 <ByteArray[10]>
0x393a13b68521 points to: [0x393a13b68590]
=== [0x393a13b68590] DISASSEMBLY ===
Parameter count 1
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
 5736 S> 0x393a13b68590 @    0 : 7c 00 00 08       CreateObjectLiteral [0], [0], #8
         0x393a13b68594 @    4 : c4                Star0 
 5762 E> 0x393a13b68595 @    5 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x393a13b68599 @    9 : c3                Star1 
 5792 E> 0x393a13b6859a @   10 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x393a13b6859e @   14 : 33 f9 02 04       DefineNamedOwnProperty r1, [2], [4]
 5828 E> 0x393a13b685a2 @   18 : 2d 02 03 06       GetNamedProperty <this>, [3], [6]
         0x393a13b685a6 @   22 : 33 f9 03 08       DefineNamedOwnProperty r1, [3], [8]
 5864 E> 0x393a13b685aa @   26 : 2d 02 04 0a       GetNamedProperty <this>, [4], [10]
         0x393a13b685ae @   30 : c1                Star3 
 5870 E> 0x393a13b685af @   31 : 2d f7 05 0c       GetNamedProperty r3, [5], [12]
         0x393a13b685b3 @   35 : c2                Star2 
         0x393a13b685b4 @   36 : 80 06 00 02       CreateClosure [6], [0], #2
         0x393a13b685b8 @   40 : c0                Star4 
 5870 E> 0x393a13b685b9 @   41 : 5e f8 f7 f6 0e    CallProperty1 r2, r3, r4, [14]
         0x393a13b685be @   46 : 33 f9 04 10       DefineNamedOwnProperty r1, [4], [16]
         0x393a13b685c2 @   50 : 0b f9             Ldar r1
         0x393a13b685c4 @   52 : 33 fa 05 12       DefineNamedOwnProperty r0, [5], [18]
         0x393a13b685c8 @   56 : 0b fa             Ldar r0
 5939 S> 0x393a13b685ca @   58 : a9                Return 
Constant pool (size = 7)
0x393a13b685d1: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 7
           0: 0x393a13b68619 <ObjectBoilerplateDescription[3]>
           1: 0x393a13b68641 <ObjectBoilerplateDescription[7]>
           2: 0x393a13b66b71 <String[5]: #width>
           3: 0x393a13b66b89 <String[6]: #height>
           4: 0x393a13b66b59 <String[5]: #tiles>
           5: 0x10fa10449ea9 <String[3]: #map>
           6: 0x393a13b68689 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 23)
0x393a13b688c1 <ByteArray[23]>
Object boilerplate at 0x393a13b68619: 
0x393a13b68619: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3f8df8682059 <Map>
 - length: 3
           0: 8
           1: 0x10fa10449ea9 <String[3]: #map>
           2: 0x3f8df8681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Object boilerplate at 0x393a13b68641: 
0x393a13b68641: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3f8df8682059 <Map>
 - length: 7
           0: 8
           1: 0x393a13b66b71 <String[5]: #width>
           2: 0x3f8df8681501 <Odd Oddball: uninitialized>
           3: 0x393a13b66b89 <String[6]: #height>
           4: 0x3f8df8681501 <Odd Oddball: uninitialized>
           5: 0x393a13b66b59 <String[5]: #tiles>
           6: 0x3f8df8681501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x393a13b68689 points to: [0x393a13b686f8]
=== [0x393a13b686f8] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 5887 S> 0x393a13b686f8 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x393a13b686fc @    4 : c4                Star0 
         0x393a13b686fd @    5 : 80 01 00 02       CreateClosure [1], [0], #2
         0x393a13b68701 @    9 : c2                Star2 
 5887 E> 0x393a13b68702 @   10 : 5e fa 03 f8 02    CallProperty1 r0, a0, r2, [2]
 5911 S> 0x393a13b68707 @   15 : a9                Return 
Constant pool (size = 2)
0x393a13b68709: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 2
           0: 0x10fa10449ea9 <String[3]: #map>
           1: 0x393a13b68729 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 10)
0x393a13b68839 <ByteArray[10]>
0x393a13b68729 points to: [0x393a13b68798]
=== [0x393a13b68798] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 5906 S> 0x393a13b68798 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
 5910 S> 0x393a13b6879c @    4 : a9                Return 
Constant pool (size = 1)
0x393a13b687a1: [FixedArray] in OldSpace
 - map: 0x3f8df86812e1 <Map>
 - length: 1
           0: 0x3f8df8684469 <String[4]: #type>
Handler Table (size = 0)
Source Position Table (size = 8)
0x393a13b687b9 <ByteArray[8]>
<< OUTPUTTING DISASSEMBLY END >>
