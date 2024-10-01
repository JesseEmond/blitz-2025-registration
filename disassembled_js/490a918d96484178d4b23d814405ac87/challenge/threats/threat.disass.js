<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x3bbdad624f18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x3bbdad624f18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x3bbdad624f1c @    4 : c4                Star0 
 6564 S> 0x3bbdad624f1d @    5 : a9                Return 
Constant pool (size = 1)
0x3bbdad624f21: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 1
           0: 0x3bbdad624f39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x3bbdad628989 <ByteArray[8]>
0x3bbdad624f39 points to: [0x3bbdad624fa8]
=== [0x3bbdad624fa8] DISASSEMBLY ===
Parameter count 6
Register count 28
Frame size 224
OSR urgency: 0
Bytecode age: 0
   76 S> 0x3bbdad624fa8 @    0 : 21 00 00          LdaGlobal [0], [0]
         0x3bbdad624fab @    3 : c1                Star3 
   83 E> 0x3bbdad624fac @    4 : 2d f7 01 02       GetNamedProperty r3, [1], [2]
         0x3bbdad624fb0 @    8 : c2                Star2 
         0x3bbdad624fb1 @    9 : 13 02             LdaConstant [2]
         0x3bbdad624fb3 @   11 : bf                Star5 
   98 E> 0x3bbdad624fb4 @   12 : 7c 03 04 29       CreateObjectLiteral [3], [4], #41
         0x3bbdad624fb8 @   16 : be                Star6 
         0x3bbdad624fb9 @   17 : 19 03 f6          Mov a0, r4
   83 E> 0x3bbdad624fbc @   20 : 5c f8 f7 04 05    CallProperty r2, r3-r6, [5]
  139 S> 0x3bbdad624fc1 @   25 : 0e                LdaUndefined 
  154 E> 0x3bbdad624fc2 @   26 : 32 03 04 07       SetNamedProperty a0, [4], [7]
  181 S> 0x3bbdad624fc6 @   30 : 13 05             LdaConstant [5]
         0x3bbdad624fc8 @   32 : c1                Star3 
  181 E> 0x3bbdad624fc9 @   33 : 62 04 f7 09       CallUndefinedReceiver1 a1, r3, [9]
         0x3bbdad624fcd @   37 : c4                Star0 
  233 E> 0x3bbdad624fce @   38 : 2d fa 07 0b       GetNamedProperty r0, [7], [11]
         0x3bbdad624fd2 @   42 : bf                Star5 
         0x3bbdad624fd3 @   43 : 80 08 00 02       CreateClosure [8], [0], #2
         0x3bbdad624fd7 @   47 : c2                Star2 
         0x3bbdad624fd8 @   48 : 13 06             LdaConstant [6]
         0x3bbdad624fda @   50 : c1                Star3 
         0x3bbdad624fdb @   51 : 80 09 01 02       CreateClosure [9], [1], #2
         0x3bbdad624fdf @   55 : be                Star6 
         0x3bbdad624fe0 @   56 : 80 0a 02 02       CreateClosure [10], [2], #2
         0x3bbdad624fe4 @   60 : bd                Star7 
         0x3bbdad624fe5 @   61 : 80 0b 03 02       CreateClosure [11], [3], #2
         0x3bbdad624fe9 @   65 : bc                Star8 
         0x3bbdad624fea @   66 : 80 0c 04 02       CreateClosure [12], [4], #2
         0x3bbdad624fee @   70 : bb                Star9 
         0x3bbdad624fef @   71 : 80 0d 05 02       CreateClosure [13], [5], #2
         0x3bbdad624ff3 @   75 : ba                Star10 
         0x3bbdad624ff4 @   76 : 80 0e 06 02       CreateClosure [14], [6], #2
         0x3bbdad624ff8 @   80 : b9                Star11 
         0x3bbdad624ff9 @   81 : 80 0f 07 02       CreateClosure [15], [7], #2
         0x3bbdad624ffd @   85 : b8                Star12 
         0x3bbdad624ffe @   86 : 80 10 08 02       CreateClosure [16], [8], #2
         0x3bbdad625002 @   90 : b7                Star13 
         0x3bbdad625003 @   91 : 80 11 09 02       CreateClosure [17], [9], #2
         0x3bbdad625007 @   95 : b6                Star14 
         0x3bbdad625008 @   96 : 80 12 0a 02       CreateClosure [18], [10], #2
         0x3bbdad62500c @  100 : b5                Star15 
         0x3bbdad62500d @  101 : 80 13 0b 02       CreateClosure [19], [11], #2
         0x3bbdad625011 @  105 : 18 ea             Star r16
         0x3bbdad625013 @  107 : 80 14 0c 02       CreateClosure [20], [12], #2
         0x3bbdad625017 @  111 : 18 e9             Star r17
         0x3bbdad625019 @  113 : 80 15 0d 02       CreateClosure [21], [13], #2
         0x3bbdad62501d @  117 : 18 e8             Star r18
         0x3bbdad62501f @  119 : 80 16 0e 02       CreateClosure [22], [14], #2
         0x3bbdad625023 @  123 : 18 e7             Star r19
         0x3bbdad625025 @  125 : 80 17 0f 02       CreateClosure [23], [15], #2
         0x3bbdad625029 @  129 : 18 e6             Star r20
         0x3bbdad62502b @  131 : 80 18 10 02       CreateClosure [24], [16], #2
         0x3bbdad62502f @  135 : 18 e5             Star r21
         0x3bbdad625031 @  137 : 80 19 11 02       CreateClosure [25], [17], #2
         0x3bbdad625035 @  141 : 18 e4             Star r22
         0x3bbdad625037 @  143 : 80 1a 12 02       CreateClosure [26], [18], #2
         0x3bbdad62503b @  147 : 18 e3             Star r23
         0x3bbdad62503d @  149 : 80 1b 13 02       CreateClosure [27], [19], #2
         0x3bbdad625041 @  153 : 18 e2             Star r24
         0x3bbdad625043 @  155 : 80 1c 14 02       CreateClosure [28], [20], #2
         0x3bbdad625047 @  159 : 18 e1             Star r25
         0x3bbdad625049 @  161 : 80 1d 15 02       CreateClosure [29], [21], #2
         0x3bbdad62504d @  165 : 18 e0             Star r26
         0x3bbdad62504f @  167 : 80 1e 16 02       CreateClosure [30], [22], #2
         0x3bbdad625053 @  171 : 18 df             Star r27
         0x3bbdad625055 @  173 : 19 f8 f6          Mov r2, r4
         0x3bbdad625058 @  176 : 65 28 00 f7 19    CallRuntime [DefineClass], r3-r27
         0x3bbdad62505d @  181 : c1                Star3 
         0x3bbdad62505e @  182 : 19 f6 f9          Mov r4, r1
 6501 S> 0x3bbdad625061 @  185 : 0b f9             Ldar r1
 6516 E> 0x3bbdad625063 @  187 : 32 03 04 07       SetNamedProperty a0, [4], [7]
         0x3bbdad625067 @  191 : 0e                LdaUndefined 
 6561 S> 0x3bbdad625068 @  192 : a9                Return 
Constant pool (size = 31)
0x3bbdad625071: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 31
           0: 0x3d7752dc5ab9 <String[6]: #Object>
           1: 0x3d7752dc4c11 <String[14]: #defineProperty>
           2: 0x3bbdad625179 <String[10]: #__esModule>
           3: 0x3bbdad625199 <ObjectBoilerplateDescription[3]>
           4: 0x3bbdad6251c1 <String[6]: #Threat>
           5: 0x3bbdad6251d9 <String[9]: #../entity>
           6: 0x3bbdad6251f9 <FixedArray[7]>
           7: 0x3bbdad625849 <String[6]: #Entity>
           8: 0x3bbdad625861 <SharedFunctionInfo Threat>
           9: 0x3bbdad6261e9 <SharedFunctionInfo get direction>
          10: 0x3bbdad626311 <SharedFunctionInfo get map>
          11: 0x3bbdad626431 <SharedFunctionInfo get characterPosition>
          12: 0x3bbdad626561 <SharedFunctionInfo get randomNumber>
          13: 0x3bbdad626719 <SharedFunctionInfo setCharacterPosition>
          14: 0x3bbdad626829 <SharedFunctionInfo getRandomDirection>
          15: 0x3bbdad626bb9 <SharedFunctionInfo canMoveUp>
          16: 0x3bbdad626d29 <SharedFunctionInfo canMoveDown>
          17: 0x3bbdad626ed1 <SharedFunctionInfo canMoveLeft>
          18: 0x3bbdad627041 <SharedFunctionInfo canMoveRight>
          19: 0x3bbdad6271d9 <SharedFunctionInfo computeNewPositionAfterMove>
          20: 0x3bbdad627521 <SharedFunctionInfo moveUp>
          21: 0x3bbdad627679 <SharedFunctionInfo moveDown>
          22: 0x3bbdad6277d1 <SharedFunctionInfo moveLeft>
          23: 0x3bbdad627929 <SharedFunctionInfo moveRight>
          24: 0x3bbdad627a81 <SharedFunctionInfo getPossibleDirections>
          25: 0x3bbdad627ee9 <SharedFunctionInfo move>
          26: 0x3bbdad6280c9 <SharedFunctionInfo update>
          27: 0x3bbdad6282f1 <SharedFunctionInfo get position>
          28: 0x3bbdad628419 <SharedFunctionInfo serializeCommon>
          29: 0x3bbdad6285e9 <SharedFunctionInfo serializeForViewer>
          30: 0x3bbdad628751 <SharedFunctionInfo serializeForPlayer>
Handler Table (size = 0)
Source Position Table (size = 33)
0x3bbdad6288e9 <ByteArray[33]>
Boilerplate at 0x3bbdad625199: 
0x3bbdad625199: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3d7752dc2059 <Map>
 - length: 3
           0: 8
           1: 0x3d7752dc6419 <String[5]: #value>
           2: 0x3d7752dc1729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Array at 0x3bbdad6251f9 has 7 elements:
0x3bbdad6251f9: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 7
           0: 25
           1: 0x3bbdad625241 <DescriptorArray[4]>
           2: 0x3d7752dc3301 <NumberDictionary[7]>
           3: 0x3d7752dc1329 <FixedArray[0]>
           4: 0x3bbdad625301 <DescriptorArray[23]>
           5: 0x3d7752dc3301 <NumberDictionary[7]>
           6: 0x3d7752dc1329 <FixedArray[0]>
Elements...
Element[0]
Smi: 0x19 (25)
Element[1]
0x3bbdad625241: [DescriptorArray] in OldSpace
 - map: 0x3d7752dc7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 2
 - nof descriptors: 4
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3d7752dc55f9: [String] in ReadOnlySpace: #length (const accessor descriptor, p: 2, attrs: [__C]) @ 0x09aa5c274fe1 <AccessorInfo>
  [1]: 0x3d7752dc58f1: [String] in ReadOnlySpace: #name (const accessor descriptor, p: 0, attrs: [__C]) @ 0x09aa5c274f71 <AccessorInfo>
  [2]: 0x3d7752dc5cb1: [String] in ReadOnlySpace: #prototype (const accessor descriptor, p: 3, attrs: [___]) @ 0x09aa5c275051 <AccessorInfo>
  [3]: 0x3d7752dc65f9 <Symbol: (class_positions_symbol)> (const data descriptor, p: 1, attrs: [W_C]) @ 0x3bbdad6252e9 <ClassPositions 203, 6500>
Element[2]
0x3d7752dc3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[3]
0x3d7752dc1329: [FixedArray] in ReadOnlySpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 0
Element[4]
0x3bbdad625301: [DescriptorArray] in OldSpace
 - map: 0x3d7752dc7761 <Map>
 - enum_cache: empty
 - nof slack descriptors: 0
 - nof descriptors: 23
 - raw marked descriptors: mc epoch 0, marked 0
  [0]: 0x3d7752dc4a61: [String] in ReadOnlySpace: #constructor (const data descriptor, p: 21, attrs: [W_C]) @ 1
  [1]: 0x3d7752dc39a1: [String] in ReadOnlySpace: #direction (const accessor descriptor, p: 10, attrs: [W_C]) @ 0x3bbdad625541 <AccessorPair>(get: 3, set: 0x3d7752dc1339 <null>)
  [2]: 0x9aa5c249ea9: [String] in OldSpace: #map (const accessor descriptor, p: 8, attrs: [W_C]) @ 0x3bbdad625571 <AccessorPair>(get: 4, set: 0x3d7752dc1339 <null>)
  [3]: 0x3bbdad625589: [String] in OldSpace: #characterPosition (const accessor descriptor, p: 2, attrs: [W_C]) @ 0x3bbdad6255b1 <AccessorPair>(get: 5, set: 0x3d7752dc1339 <null>)
  [4]: 0x3bbdad6255c9: [String] in OldSpace: #randomNumber (const accessor descriptor, p: 4, attrs: [W_C]) @ 0x3bbdad6255e9 <AccessorPair>(get: 6, set: 0x3d7752dc1339 <null>)
  [5]: 0x3bbdad625601: [String] in OldSpace: #setCharacterPosition (const data descriptor, p: 7, attrs: [W_C]) @ 7
  [6]: 0x3bbdad625629: [String] in OldSpace: #getRandomDirection (const data descriptor, p: 18, attrs: [W_C]) @ 8
  [7]: 0x3bbdad625651: [String] in OldSpace: #canMoveUp (const data descriptor, p: 15, attrs: [W_C]) @ 9
  [8]: 0x3bbdad625671: [String] in OldSpace: #canMoveDown (const data descriptor, p: 1, attrs: [W_C]) @ 10
  [9]: 0x3bbdad625691: [String] in OldSpace: #canMoveLeft (const data descriptor, p: 22, attrs: [W_C]) @ 11
  [10]: 0x3bbdad6256b1: [String] in OldSpace: #canMoveRight (const data descriptor, p: 12, attrs: [W_C]) @ 12
  [11]: 0x3bbdad6256d1: [String] in OldSpace: #computeNewPositionAfterMove (const data descriptor, p: 3, attrs: [W_C]) @ 13
  [12]: 0x3bbdad625701: [String] in OldSpace: #moveUp (const data descriptor, p: 5, attrs: [W_C]) @ 14
  [13]: 0x3bbdad625719: [String] in OldSpace: #moveDown (const data descriptor, p: 20, attrs: [W_C]) @ 15
  [14]: 0x3bbdad625731: [String] in OldSpace: #moveLeft (const data descriptor, p: 16, attrs: [W_C]) @ 16
  [15]: 0x3bbdad625749: [String] in OldSpace: #moveRight (const data descriptor, p: 13, attrs: [W_C]) @ 17
  [16]: 0x3bbdad625769: [String] in OldSpace: #getPossibleDirections (const data descriptor, p: 14, attrs: [W_C]) @ 18
  [17]: 0x3bbdad625791: [String] in OldSpace: #move (const data descriptor, p: 17, attrs: [W_C]) @ 19
  [18]: 0x9aa5c243f01: [String] in OldSpace: #update (const data descriptor, p: 9, attrs: [W_C]) @ 20
  [19]: 0x3d7752dc5c19: [String] in ReadOnlySpace: #position (const accessor descriptor, p: 0, attrs: [W_C]) @ 0x3bbdad6257c1 <AccessorPair>(get: 21, set: 0x3d7752dc1339 <null>)
  [20]: 0x3bbdad6257d9: [String] in OldSpace: #serializeCommon (const data descriptor, p: 11, attrs: [W_C]) @ 22
  [21]: 0x3bbdad6257f9: [String] in OldSpace: #serializeForViewer (const data descriptor, p: 6, attrs: [W_C]) @ 23
  [22]: 0x3bbdad625821: [String] in OldSpace: #serializeForPlayer (const data descriptor, p: 19, attrs: [W_C]) @ 24
Element[5]
0x3d7752dc3301: [NumberDictionary] in ReadOnlySpace
 - FixedArray length: 7
 - elements: 0
 - deleted: 0
 - capacity: 1
 - elements: {
 }
Element[6]
0x3d7752dc1329: [FixedArray] in ReadOnlySpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 0
0x3bbdad625861 points to: [0x3bbdad6258d0]
=== [0x3bbdad6258d0] DISASSEMBLY ===
Parameter count 5
Register count 5
Frame size 40
OSR urgency: 0
Bytecode age: 0
         0x3bbdad6258d0 @    0 : 19 fe f9          Mov <closure>, r1
  304 S> 0x3bbdad6258d3 @    3 : 0b f9             Ldar r1
         0x3bbdad6258d5 @    5 : 5a f7             GetSuperConstructor r3
         0x3bbdad6258d7 @    7 : ad f7             ThrowIfNotSuperConstructor r3
         0x3bbdad6258d9 @    9 : 0b fa             Ldar r0
  304 E> 0x3bbdad6258db @   11 : 69 f7 fa 00 00    Construct r3, r0-r0, [0]
         0x3bbdad6258e0 @   16 : c0                Star4 
         0x3bbdad6258e1 @   17 : 0b 02             Ldar <this>
         0x3bbdad6258e3 @   19 : ac                ThrowSuperAlreadyCalledIfNotHole 
         0x3bbdad6258e4 @   20 : 19 f6 02          Mov r4, <this>
  321 S> 0x3bbdad6258e7 @   23 : 0b 02             Ldar <this>
         0x3bbdad6258e9 @   25 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad6258ea @   26 : 0c                LdaZero 
  349 E> 0x3bbdad6258eb @   27 : 32 02 00 02       SetNamedProperty <this>, [0], [2]
  362 S> 0x3bbdad6258ef @   31 : 0b 02             Ldar <this>
         0x3bbdad6258f1 @   33 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad6258f2 @   34 : 13 01             LdaConstant [1]
  379 E> 0x3bbdad6258f4 @   36 : 32 02 02 04       SetNamedProperty <this>, [2], [4]
  397 S> 0x3bbdad6258f8 @   40 : 0b 02             Ldar <this>
         0x3bbdad6258fa @   42 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad6258fb @   43 : 13 03             LdaConstant [3]
  408 E> 0x3bbdad6258fd @   45 : 32 02 04 06       SetNamedProperty <this>, [4], [6]
  432 S> 0x3bbdad625901 @   49 : 0b 02             Ldar <this>
         0x3bbdad625903 @   51 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad625904 @   52 : 7c 05 08 29       CreateObjectLiteral [5], [8], #41
  456 E> 0x3bbdad625908 @   56 : 32 02 06 09       SetNamedProperty <this>, [6], [9]
  581 S> 0x3bbdad62590c @   60 : 0b 02             Ldar <this>
         0x3bbdad62590e @   62 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad62590f @   63 : 0c                LdaZero 
  592 E> 0x3bbdad625910 @   64 : 32 02 07 0b       SetNamedProperty <this>, [7], [11]
  605 S> 0x3bbdad625914 @   68 : 0b 02             Ldar <this>
         0x3bbdad625916 @   70 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad625917 @   71 : 7c 08 0d 29       CreateObjectLiteral [8], [13], #41
  623 E> 0x3bbdad62591b @   75 : 32 02 09 0e       SetNamedProperty <this>, [9], [14]
  757 S> 0x3bbdad62591f @   79 : 0b 02             Ldar <this>
         0x3bbdad625921 @   81 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad625922 @   82 : 7c 0a 10 29       CreateObjectLiteral [10], [16], #41
  786 E> 0x3bbdad625926 @   86 : 32 02 0b 11       SetNamedProperty <this>, [11], [17]
 1022 S> 0x3bbdad62592a @   90 : 0b 02             Ldar <this>
         0x3bbdad62592c @   92 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad62592d @   93 : 0b 04             Ldar a1
 1037 E> 0x3bbdad62592f @   95 : 32 02 0c 13       SetNamedProperty <this>, [12], [19]
 1057 S> 0x3bbdad625933 @   99 : 0b 02             Ldar <this>
         0x3bbdad625935 @  101 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad625936 @  102 : 0b 04             Ldar a1
 1076 E> 0x3bbdad625938 @  104 : 32 02 0d 15       SetNamedProperty <this>, [13], [21]
 1096 S> 0x3bbdad62593c @  108 : 0b 02             Ldar <this>
         0x3bbdad62593e @  110 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad62593f @  111 : ab                ThrowSuperNotCalledIfHole 
 1119 E> 0x3bbdad625940 @  112 : 2d 02 0e 17       GetNamedProperty <this>, [14], [23]
         0x3bbdad625944 @  116 : c1                Star3 
 1119 E> 0x3bbdad625945 @  117 : 5d f7 02 19       CallProperty0 r3, <this>, [25]
 1112 E> 0x3bbdad625949 @  121 : 32 02 0f 1b       SetNamedProperty <this>, [15], [27]
 1149 S> 0x3bbdad62594d @  125 : 0b 02             Ldar <this>
         0x3bbdad62594f @  127 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad625950 @  128 : 0b 05             Ldar a2
 1166 E> 0x3bbdad625952 @  130 : 32 02 02 1d       SetNamedProperty <this>, [2], [29]
 1189 S> 0x3bbdad625956 @  134 : 0b 02             Ldar <this>
         0x3bbdad625958 @  136 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad625959 @  137 : 0b 06             Ldar a3
 1200 E> 0x3bbdad62595b @  139 : 32 02 04 1f       SetNamedProperty <this>, [4], [31]
 1217 S> 0x3bbdad62595f @  143 : 0b 02             Ldar <this>
         0x3bbdad625961 @  145 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad625962 @  146 : 0b 03             Ldar a0
 1227 E> 0x3bbdad625964 @  148 : 32 02 10 21       SetNamedProperty <this>, [16], [33]
 1243 S> 0x3bbdad625968 @  152 : 0b 02             Ldar <this>
         0x3bbdad62596a @  154 : ab                ThrowSuperNotCalledIfHole 
         0x3bbdad62596b @  155 : 7c 11 23 29       CreateObjectLiteral [17], [35], #41
 1267 E> 0x3bbdad62596f @  159 : 32 02 12 24       SetNamedProperty <this>, [18], [36]
         0x3bbdad625973 @  163 : 0b 02             Ldar <this>
         0x3bbdad625975 @  165 : ab                ThrowSuperNotCalledIfHole 
 1291 S> 0x3bbdad625976 @  166 : a9                Return 
Constant pool (size = 19)
0x3bbdad625979: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 19
           0: 0x3bbdad625a21 <String[22]: #nbOfTicksSinceLastMove>
           1: 0x3bbdad625a49 <String[4]: #lazy>
           2: 0x3bbdad625a61 <String[11]: #personality>
           3: 0x3bbdad625a81 <String[10]: #straitHead>
           4: 0x3d7752dc4381 <String[5]: #style>
           5: 0x3bbdad625aa1 <ObjectBoilerplateDescription[9]>
           6: 0x3bbdad625b59 <String[18]: #oppositeDirections>
           7: 0x3bbdad625b81 <String[5]: #_seed>
           8: 0x3bbdad625b99 <ObjectBoilerplateDescription[11]>
           9: 0x3bbdad625c61 <String[12]: #tickSpeedMap>
          10: 0x3bbdad625c81 <ObjectBoilerplateDescription[13]>
          11: 0x3bbdad625e31 <String[23]: #threatStyleHumanizedMap>
          12: 0x3bbdad625e59 <String[9]: #_position>
          13: 0x3bbdad625e79 <String[13]: #spawnPosition>
          14: 0x3bbdad625629 <String[18]: #getRandomDirection>
          15: 0x3bbdad625e99 <String[10]: #_direction>
          16: 0x3bbdad625eb9 <String[4]: #_map>
          17: 0x3bbdad625ed1 <ObjectBoilerplateDescription[5]>
          18: 0x3bbdad625f39 <String[18]: #_characterPosition>
Handler Table (size = 0)
Source Position Table (size = 74)
0x3bbdad625f61 <ByteArray[74]>
Boilerplate at 0x3bbdad625aa1: 
0x3bbdad625aa1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3d7752dc2059 <Map>
 - length: 9
           0: 8
           1: 0x3bbdad625af9 <String[4]: #left>
         2-3: 0x3bbdad625b11 <String[5]: #right>
           4: 0x3bbdad625af9 <String[4]: #left>
           5: 0x3bbdad625b29 <String[2]: #up>
         6-7: 0x3bbdad625b41 <String[4]: #down>
           8: 0x3bbdad625b29 <String[2]: #up>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x3bbdad625b99: 
0x3bbdad625b99: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3d7752dc2059 <Map>
 - length: 11
           0: 8
           1: 0x3bbdad625a49 <String[4]: #lazy>
           2: 5
           3: 0x3bbdad625c01 <String[5]: #tease>
           4: 4
           5: 0x3bbdad625c19 <String[5]: #awake>
           6: 3
           7: 0x3bbdad625c31 <String[6]: #hungry>
           8: 2
           9: 0x3bbdad625c49 <String[6]: #insane>
          10: 1
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x3bbdad625c81: 
0x3bbdad625c81: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3d7752dc2059 <Map>
 - length: 13
           0: 8
           1: 0x3bbdad625a81 <String[10]: #straitHead>
           2: 0x3bbdad625cf9 <String[4]: #bull>
           3: 0x3bbdad625d11 <String[9]: #girouette>
           4: 0x3bbdad625d31 <String[8]: #goldfish>
           5: 0x3bbdad625d49 <String[10]: #aggressive>
           6: 0x3bbdad625d69 <String[5]: #shark>
           7: 0x3bbdad625d81 <String[12]: #surveillance>
           8: 0x3bbdad625da1 <String[3]: #owl>
           9: 0x3bbdad625db9 <String[29]: #le_fantome_orange_dans_pacman>
          10: 0x3bbdad625de9 <String[4]: #deer>
          11: 0x3bbdad625e01 <String[7]: #sheriff>
          12: 0x3bbdad625e19 <String[4]: #hawk>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x3bbdad625ed1: 
0x3bbdad625ed1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3d7752dc2059 <Map>
 - length: 5
           0: 8
           1: 0x09aa5c258ac9 <String[1]: #x>
           2: -1
           3: 0x09aa5c258ae1 <String[1]: #y>
           4: -1
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x3bbdad6261e9 points to: [0x3bbdad626258]
=== [0x3bbdad626258] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1335 S> 0x3bbdad626258 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1346 S> 0x3bbdad62625c @    4 : a9                Return 
Constant pool (size = 1)
0x3bbdad626261: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 1
           0: 0x3bbdad625e99 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3bbdad626279 <ByteArray[7]>
0x3bbdad626311 points to: [0x3bbdad626380]
=== [0x3bbdad626380] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1389 S> 0x3bbdad626380 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1394 S> 0x3bbdad626384 @    4 : a9                Return 
Constant pool (size = 1)
0x3bbdad626389: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 1
           0: 0x3bbdad625eb9 <String[4]: #_map>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3bbdad6263a1 <ByteArray[7]>
0x3bbdad626431 points to: [0x3bbdad6264a0]
=== [0x3bbdad6264a0] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1451 S> 0x3bbdad6264a0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 1470 S> 0x3bbdad6264a4 @    4 : a9                Return 
Constant pool (size = 1)
0x3bbdad6264a9: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 1
           0: 0x3bbdad625f39 <String[18]: #_characterPosition>
Handler Table (size = 0)
Source Position Table (size = 7)
0x3bbdad6264c1 <ByteArray[7]>
0x3bbdad626561 points to: [0x3bbdad6265d0]
=== [0x3bbdad6265d0] DISASSEMBLY ===
Parameter count 1
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 1520 S> 0x3bbdad6265d0 @    0 : 21 00 01          LdaGlobal [0], [1]
         0x3bbdad6265d3 @    3 : c2                Star2 
 1525 E> 0x3bbdad6265d4 @    4 : 2d f8 01 03       GetNamedProperty r2, [1], [3]
         0x3bbdad6265d8 @    8 : c3                Star1 
         0x3bbdad6265d9 @    9 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x3bbdad6265dd @   13 : 75 07             ToNumeric [7]
         0x3bbdad6265df @   15 : c0                Star4 
         0x3bbdad6265e0 @   16 : 51 07             Inc [7]
         0x3bbdad6265e2 @   18 : bf                Star5 
 1539 E> 0x3bbdad6265e3 @   19 : 32 02 02 08       SetNamedProperty <this>, [2], [8]
 1525 E> 0x3bbdad6265e7 @   23 : 5e f9 f8 f6 0a    CallProperty1 r1, r2, r4, [10]
 1543 E> 0x3bbdad6265ec @   28 : 00 47 10 27 00 00 MulSmi.Wide [10000], [0]
         0x3bbdad6265f2 @   34 : c4                Star0 
 1571 S> 0x3bbdad6265f3 @   35 : 21 00 01          LdaGlobal [0], [1]
         0x3bbdad6265f6 @   38 : c1                Star3 
 1576 E> 0x3bbdad6265f7 @   39 : 2d f7 03 0d       GetNamedProperty r3, [3], [13]
         0x3bbdad6265fb @   43 : c2                Star2 
 1576 E> 0x3bbdad6265fc @   44 : 5e f8 f7 fa 0f    CallProperty1 r2, r3, r0, [15]
 1569 E> 0x3bbdad626601 @   49 : 3a fa 0c          Sub r0, [12]
 1585 S> 0x3bbdad626604 @   52 : a9                Return 
Constant pool (size = 4)
0x3bbdad626609: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 4
           0: 0x09aa5c25a991 <String[4]: #Math>
           1: 0x09aa5c25abd1 <String[3]: #sin>
           2: 0x3bbdad625b81 <String[5]: #_seed>
           3: 0x3d7752dc3ae9 <String[5]: #floor>
Handler Table (size = 0)
Source Position Table (size = 23)
0x3bbdad626669 <ByteArray[23]>
0x3bbdad626719 points to: [0x3bbdad626788]
=== [0x3bbdad626788] DISASSEMBLY ===
Parameter count 2
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 1637 S> 0x3bbdad626788 @    0 : 0b 03             Ldar a0
 1661 E> 0x3bbdad62678a @    2 : 32 02 00 00       SetNamedProperty <this>, [0], [0]
         0x3bbdad62678e @    6 : 0e                LdaUndefined 
 1677 S> 0x3bbdad62678f @    7 : a9                Return 
Constant pool (size = 1)
0x3bbdad626791: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 1
           0: 0x3bbdad625f39 <String[18]: #_characterPosition>
Handler Table (size = 0)
Source Position Table (size = 9)
0x3bbdad6267a9 <ByteArray[9]>
0x3bbdad626829 points to: [0x3bbdad626898]
=== [0x3bbdad626898] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 1701 E> 0x3bbdad626898 @    0 : 83 00 01          CreateFunctionContext [0], [1]
         0x3bbdad62689b @    3 : 1a f8             PushContext r2
         0x3bbdad62689d @    5 : 10                LdaTheHole 
         0x3bbdad62689e @    6 : 25 02             StaCurrentContextSlot [2]
         0x3bbdad6268a0 @    8 : 0b 03             Ldar a0
         0x3bbdad6268a2 @   10 : 9d 06             JumpIfNotUndefined [6] (0x3bbdad6268a8 @ 16)
         0x3bbdad6268a4 @   12 : 7b 00             CreateEmptyArrayLiteral [0]
         0x3bbdad6268a6 @   14 : 8a 04             Jump [4] (0x3bbdad6268aa @ 18)
         0x3bbdad6268a8 @   16 : 0b 03             Ldar a0
         0x3bbdad6268aa @   18 : 25 02             StaCurrentContextSlot [2]
 1754 S> 0x3bbdad6268ac @   20 : 79 01 01 25       CreateArrayLiteral [1], [1], #37
         0x3bbdad6268b0 @   24 : c4                Star0 
 1819 S> 0x3bbdad6268b1 @   25 : 2d fa 02 02       GetNamedProperty r0, [2], [2]
         0x3bbdad6268b5 @   29 : c1                Star3 
         0x3bbdad6268b6 @   30 : 80 03 00 02       CreateClosure [3], [0], #2
         0x3bbdad6268ba @   34 : bf                Star5 
 1819 E> 0x3bbdad6268bb @   35 : 5e f7 fa f5 04    CallProperty1 r3, r0, r5, [4]
         0x3bbdad6268c0 @   40 : c4                Star0 
 1911 S> 0x3bbdad6268c1 @   41 : 21 04 06          LdaGlobal [4], [6]
         0x3bbdad6268c4 @   44 : c0                Star4 
 1916 E> 0x3bbdad6268c5 @   45 : 2d f6 05 08       GetNamedProperty r4, [5], [8]
         0x3bbdad6268c9 @   49 : c1                Star3 
 1927 E> 0x3bbdad6268ca @   50 : 2d 02 06 0b       GetNamedProperty <this>, [6], [11]
         0x3bbdad6268ce @   54 : bf                Star5 
 1953 E> 0x3bbdad6268cf @   55 : 2d fa 07 0d       GetNamedProperty r0, [7], [13]
 1940 E> 0x3bbdad6268d3 @   59 : 3b f5 0a          Mul r5, [10]
         0x3bbdad6268d6 @   62 : bf                Star5 
 1916 E> 0x3bbdad6268d7 @   63 : 5e f7 f6 f5 0f    CallProperty1 r3, r4, r5, [15]
         0x3bbdad6268dc @   68 : c3                Star1 
 1970 S> 0x3bbdad6268dd @   69 : 0b f9             Ldar r1
 1987 E> 0x3bbdad6268df @   71 : 2f fa 11          GetKeyedProperty r0, [17]
 2001 S> 0x3bbdad6268e2 @   74 : a9                Return 
Constant pool (size = 8)
0x3bbdad6268e9: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 8
           0: 0x3bbdad626939 <ScopeInfo FUNCTION_SCOPE>
           1: 0x3bbdad6269b9 <ArrayBoilerplateDescription PACKED_ELEMENTS, 0x3bbdad6269d1 <FixedArray[4]>>
           2: 0x09aa5c249f61 <String[6]: #filter>
           3: 0x3bbdad626a19 <SharedFunctionInfo>
           4: 0x09aa5c25a991 <String[4]: #Math>
           5: 0x3d7752dc3ae9 <String[5]: #floor>
           6: 0x3bbdad6255c9 <String[12]: #randomNumber>
           7: 0x3d7752dc55f9 <String[6]: #length>
Handler Table (size = 0)
Source Position Table (size = 33)
0x3bbdad626b61 <ByteArray[33]>
0x3bbdad626a19 points to: [0x3bbdad626a88]
=== [0x3bbdad626a88] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 1841 S> 0x3bbdad626a88 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x3bbdad626a8a @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x3bbdad626a8c @    4 : c3                Star1 
 1861 E> 0x3bbdad626a8d @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
         0x3bbdad626a91 @    9 : c4                Star0 
 1861 E> 0x3bbdad626a92 @   10 : 5e fa f9 03 02    CallProperty1 r0, r1, a0, [2]
         0x3bbdad626a97 @   15 : 55                ToBooleanLogicalNot 
 1880 S> 0x3bbdad626a98 @   16 : a9                Return 
Constant pool (size = 2)
0x3bbdad626aa1: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 2
           0: 0x3bbdad626991 <String[18]: #excludedDirections>
           1: 0x09aa5c247449 <String[8]: #includes>
Handler Table (size = 0)
Source Position Table (size = 11)
0x3bbdad626ad9 <ByteArray[11]>
0x3bbdad626bb9 points to: [0x3bbdad626c28]
=== [0x3bbdad626c28] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2046 S> 0x3bbdad626c28 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad626c2c @    4 : c4                Star0 
 2056 E> 0x3bbdad626c2d @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x3bbdad626c31 @    9 : c4                Star0 
         0x3bbdad626c32 @   10 : 0c                LdaZero 
 2058 E> 0x3bbdad626c33 @   11 : 6e fa 04          TestGreaterThan r0, [4]
         0x3bbdad626c36 @   14 : 99 29             JumpIfFalse [41] (0x3bbdad626c5f @ 55)
 2070 E> 0x3bbdad626c38 @   16 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x3bbdad626c3c @   20 : c4                Star0 
 2080 E> 0x3bbdad626c3d @   21 : 2d 02 00 07       GetNamedProperty <this>, [0], [7]
         0x3bbdad626c41 @   25 : c3                Star1 
 2090 E> 0x3bbdad626c42 @   26 : 2d f9 03 09       GetNamedProperty r1, [3], [9]
 2074 E> 0x3bbdad626c46 @   30 : 2f fa 0b          GetKeyedProperty r0, [11]
         0x3bbdad626c49 @   33 : c4                Star0 
 2098 E> 0x3bbdad626c4a @   34 : 2d 02 00 0e       GetNamedProperty <this>, [0], [14]
         0x3bbdad626c4e @   38 : c3                Star1 
 2108 E> 0x3bbdad626c4f @   39 : 2d f9 01 10       GetNamedProperty r1, [1], [16]
 2110 E> 0x3bbdad626c53 @   43 : 46 01 0d          SubSmi [1], [13]
 2092 E> 0x3bbdad626c56 @   46 : 2f fa 12          GetKeyedProperty r0, [18]
         0x3bbdad626c59 @   49 : c4                Star0 
         0x3bbdad626c5a @   50 : 0d 01             LdaSmi [1]
 2115 E> 0x3bbdad626c5c @   52 : 6c fa 14          TestEqualStrict r0, [20]
 2121 S> 0x3bbdad626c5f @   55 : a9                Return 
Constant pool (size = 4)
0x3bbdad626c61: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 4
           0: 0x3bbdad625e59 <String[9]: #_position>
           1: 0x09aa5c258ae1 <String[1]: #y>
           2: 0x3bbdad625eb9 <String[4]: #_map>
           3: 0x09aa5c258ac9 <String[1]: #x>
Handler Table (size = 0)
Source Position Table (size = 29)
0x3bbdad626c91 <ByteArray[29]>
0x3bbdad626d29 points to: [0x3bbdad626d98]
=== [0x3bbdad626d98] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2168 S> 0x3bbdad626d98 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad626d9c @    4 : c4                Star0 
 2178 E> 0x3bbdad626d9d @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x3bbdad626da1 @    9 : c4                Star0 
 2187 E> 0x3bbdad626da2 @   10 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x3bbdad626da6 @   14 : c3                Star1 
 2197 E> 0x3bbdad626da7 @   15 : 2d 02 00 07       GetNamedProperty <this>, [0], [7]
         0x3bbdad626dab @   19 : c2                Star2 
 2207 E> 0x3bbdad626dac @   20 : 2d f8 03 09       GetNamedProperty r2, [3], [9]
 2191 E> 0x3bbdad626db0 @   24 : 2f f9 0b          GetKeyedProperty r1, [11]
         0x3bbdad626db3 @   27 : c3                Star1 
 2210 E> 0x3bbdad626db4 @   28 : 2d f9 04 0d       GetNamedProperty r1, [4], [13]
 2217 E> 0x3bbdad626db8 @   32 : 46 01 04          SubSmi [1], [4]
 2180 E> 0x3bbdad626dbb @   35 : 6d fa 0f          TestLessThan r0, [15]
         0x3bbdad626dbe @   38 : 99 29             JumpIfFalse [41] (0x3bbdad626de7 @ 79)
 2229 E> 0x3bbdad626dc0 @   40 : 2d 02 02 10       GetNamedProperty <this>, [2], [16]
         0x3bbdad626dc4 @   44 : c4                Star0 
 2239 E> 0x3bbdad626dc5 @   45 : 2d 02 00 12       GetNamedProperty <this>, [0], [18]
         0x3bbdad626dc9 @   49 : c3                Star1 
 2249 E> 0x3bbdad626dca @   50 : 2d f9 03 14       GetNamedProperty r1, [3], [20]
 2233 E> 0x3bbdad626dce @   54 : 2f fa 16          GetKeyedProperty r0, [22]
         0x3bbdad626dd1 @   57 : c4                Star0 
 2257 E> 0x3bbdad626dd2 @   58 : 2d 02 00 19       GetNamedProperty <this>, [0], [25]
         0x3bbdad626dd6 @   62 : c3                Star1 
 2267 E> 0x3bbdad626dd7 @   63 : 2d f9 01 1b       GetNamedProperty r1, [1], [27]
 2269 E> 0x3bbdad626ddb @   67 : 45 01 18          AddSmi [1], [24]
 2251 E> 0x3bbdad626dde @   70 : 2f fa 1d          GetKeyedProperty r0, [29]
         0x3bbdad626de1 @   73 : c4                Star0 
         0x3bbdad626de2 @   74 : 0d 01             LdaSmi [1]
 2274 E> 0x3bbdad626de4 @   76 : 6c fa 1f          TestEqualStrict r0, [31]
 2280 S> 0x3bbdad626de7 @   79 : a9                Return 
Constant pool (size = 5)
0x3bbdad626de9: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 5
           0: 0x3bbdad625e59 <String[9]: #_position>
           1: 0x09aa5c258ae1 <String[1]: #y>
           2: 0x3bbdad625eb9 <String[4]: #_map>
           3: 0x09aa5c258ac9 <String[1]: #x>
           4: 0x3d7752dc55f9 <String[6]: #length>
Handler Table (size = 0)
Source Position Table (size = 43)
0x3bbdad626e21 <ByteArray[43]>
0x3bbdad626ed1 points to: [0x3bbdad626f40]
=== [0x3bbdad626f40] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2327 S> 0x3bbdad626f40 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad626f44 @    4 : c4                Star0 
 2337 E> 0x3bbdad626f45 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x3bbdad626f49 @    9 : c4                Star0 
         0x3bbdad626f4a @   10 : 0c                LdaZero 
 2339 E> 0x3bbdad626f4b @   11 : 6e fa 04          TestGreaterThan r0, [4]
         0x3bbdad626f4e @   14 : 99 29             JumpIfFalse [41] (0x3bbdad626f77 @ 55)
 2351 E> 0x3bbdad626f50 @   16 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x3bbdad626f54 @   20 : c4                Star0 
 2361 E> 0x3bbdad626f55 @   21 : 2d 02 00 08       GetNamedProperty <this>, [0], [8]
         0x3bbdad626f59 @   25 : c3                Star1 
 2371 E> 0x3bbdad626f5a @   26 : 2d f9 01 0a       GetNamedProperty r1, [1], [10]
 2373 E> 0x3bbdad626f5e @   30 : 46 01 07          SubSmi [1], [7]
 2355 E> 0x3bbdad626f61 @   33 : 2f fa 0c          GetKeyedProperty r0, [12]
         0x3bbdad626f64 @   36 : c4                Star0 
 2383 E> 0x3bbdad626f65 @   37 : 2d 02 00 0e       GetNamedProperty <this>, [0], [14]
         0x3bbdad626f69 @   41 : c3                Star1 
 2393 E> 0x3bbdad626f6a @   42 : 2d f9 03 10       GetNamedProperty r1, [3], [16]
 2377 E> 0x3bbdad626f6e @   46 : 2f fa 12          GetKeyedProperty r0, [18]
         0x3bbdad626f71 @   49 : c4                Star0 
         0x3bbdad626f72 @   50 : 0d 01             LdaSmi [1]
 2396 E> 0x3bbdad626f74 @   52 : 6c fa 14          TestEqualStrict r0, [20]
 2402 S> 0x3bbdad626f77 @   55 : a9                Return 
Constant pool (size = 4)
0x3bbdad626f79: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 4
           0: 0x3bbdad625e59 <String[9]: #_position>
           1: 0x09aa5c258ac9 <String[1]: #x>
           2: 0x3bbdad625eb9 <String[4]: #_map>
           3: 0x09aa5c258ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 29)
0x3bbdad626fa9 <ByteArray[29]>
0x3bbdad627041 points to: [0x3bbdad6270b0]
=== [0x3bbdad6270b0] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 2450 S> 0x3bbdad6270b0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad6270b4 @    4 : c4                Star0 
 2460 E> 0x3bbdad6270b5 @    5 : 2d fa 01 02       GetNamedProperty r0, [1], [2]
         0x3bbdad6270b9 @    9 : c4                Star0 
 2469 E> 0x3bbdad6270ba @   10 : 2d 02 02 05       GetNamedProperty <this>, [2], [5]
         0x3bbdad6270be @   14 : c3                Star1 
 2474 E> 0x3bbdad6270bf @   15 : 2d f9 03 07       GetNamedProperty r1, [3], [7]
 2481 E> 0x3bbdad6270c3 @   19 : 46 01 04          SubSmi [1], [4]
 2462 E> 0x3bbdad6270c6 @   22 : 6d fa 09          TestLessThan r0, [9]
         0x3bbdad6270c9 @   25 : 99 29             JumpIfFalse [41] (0x3bbdad6270f2 @ 66)
 2493 E> 0x3bbdad6270cb @   27 : 2d 02 02 0a       GetNamedProperty <this>, [2], [10]
         0x3bbdad6270cf @   31 : c4                Star0 
 2503 E> 0x3bbdad6270d0 @   32 : 2d 02 00 0d       GetNamedProperty <this>, [0], [13]
         0x3bbdad6270d4 @   36 : c3                Star1 
 2513 E> 0x3bbdad6270d5 @   37 : 2d f9 01 0f       GetNamedProperty r1, [1], [15]
 2515 E> 0x3bbdad6270d9 @   41 : 45 01 0c          AddSmi [1], [12]
 2497 E> 0x3bbdad6270dc @   44 : 2f fa 11          GetKeyedProperty r0, [17]
         0x3bbdad6270df @   47 : c4                Star0 
 2525 E> 0x3bbdad6270e0 @   48 : 2d 02 00 13       GetNamedProperty <this>, [0], [19]
         0x3bbdad6270e4 @   52 : c3                Star1 
 2535 E> 0x3bbdad6270e5 @   53 : 2d f9 04 15       GetNamedProperty r1, [4], [21]
 2519 E> 0x3bbdad6270e9 @   57 : 2f fa 17          GetKeyedProperty r0, [23]
         0x3bbdad6270ec @   60 : c4                Star0 
         0x3bbdad6270ed @   61 : 0d 01             LdaSmi [1]
 2538 E> 0x3bbdad6270ef @   63 : 6c fa 19          TestEqualStrict r0, [25]
 2544 S> 0x3bbdad6270f2 @   66 : a9                Return 
Constant pool (size = 5)
0x3bbdad6270f9: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 5
           0: 0x3bbdad625e59 <String[9]: #_position>
           1: 0x09aa5c258ac9 <String[1]: #x>
           2: 0x3bbdad625eb9 <String[4]: #_map>
           3: 0x3d7752dc55f9 <String[6]: #length>
           4: 0x09aa5c258ae1 <String[1]: #y>
Handler Table (size = 0)
Source Position Table (size = 35)
0x3bbdad627131 <ByteArray[35]>
0x3bbdad6271d9 points to: [0x3bbdad627248]
=== [0x3bbdad627248] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 2604 S> 0x3bbdad627248 @    0 : 13 00             LdaConstant [0]
         0x3bbdad62724a @    2 : 6c 03 00          TestEqualStrict a0, [0]
         0x3bbdad62724d @    5 : 19 03 fa          Mov a0, r0
         0x3bbdad627250 @    8 : 98 19             JumpIfTrue [25] (0x3bbdad627269 @ 33)
         0x3bbdad627252 @   10 : 13 01             LdaConstant [1]
         0x3bbdad627254 @   12 : 6c fa 00          TestEqualStrict r0, [0]
         0x3bbdad627257 @   15 : 98 37             JumpIfTrue [55] (0x3bbdad62728e @ 70)
         0x3bbdad627259 @   17 : 13 02             LdaConstant [2]
         0x3bbdad62725b @   19 : 6c fa 00          TestEqualStrict r0, [0]
         0x3bbdad62725e @   22 : 98 55             JumpIfTrue [85] (0x3bbdad6272b3 @ 107)
         0x3bbdad627260 @   24 : 13 03             LdaConstant [3]
         0x3bbdad627262 @   26 : 6c fa 00          TestEqualStrict r0, [0]
         0x3bbdad627265 @   29 : 98 73             JumpIfTrue [115] (0x3bbdad6272d8 @ 144)
         0x3bbdad627267 @   31 : 8a 96             Jump [150] (0x3bbdad6272fd @ 181)
 2664 S> 0x3bbdad627269 @   33 : 7c 04 01 29       CreateObjectLiteral [4], [1], #41
         0x3bbdad62726d @   37 : c3                Star1 
 2681 E> 0x3bbdad62726e @   38 : 2d 02 05 02       GetNamedProperty <this>, [5], [2]
         0x3bbdad627272 @   42 : c2                Star2 
 2691 E> 0x3bbdad627273 @   43 : 2d f8 06 04       GetNamedProperty r2, [6], [4]
         0x3bbdad627277 @   47 : 33 f9 06 06       DefineNamedOwnProperty r1, [6], [6]
 2702 E> 0x3bbdad62727b @   51 : 2d 02 05 09       GetNamedProperty <this>, [5], [9]
         0x3bbdad62727f @   55 : c2                Star2 
 2712 E> 0x3bbdad627280 @   56 : 2d f8 07 0b       GetNamedProperty r2, [7], [11]
 2714 E> 0x3bbdad627284 @   60 : 46 01 08          SubSmi [1], [8]
         0x3bbdad627287 @   63 : 33 f9 07 0d       DefineNamedOwnProperty r1, [7], [13]
         0x3bbdad62728b @   67 : 0b f9             Ldar r1
 2720 S> 0x3bbdad62728d @   69 : a9                Return 
 2762 S> 0x3bbdad62728e @   70 : 7c 08 0f 29       CreateObjectLiteral [8], [15], #41
         0x3bbdad627292 @   74 : c3                Star1 
 2779 E> 0x3bbdad627293 @   75 : 2d 02 05 10       GetNamedProperty <this>, [5], [16]
         0x3bbdad627297 @   79 : c2                Star2 
 2789 E> 0x3bbdad627298 @   80 : 2d f8 06 12       GetNamedProperty r2, [6], [18]
         0x3bbdad62729c @   84 : 33 f9 06 14       DefineNamedOwnProperty r1, [6], [20]
 2800 E> 0x3bbdad6272a0 @   88 : 2d 02 05 17       GetNamedProperty <this>, [5], [23]
         0x3bbdad6272a4 @   92 : c2                Star2 
 2810 E> 0x3bbdad6272a5 @   93 : 2d f8 07 19       GetNamedProperty r2, [7], [25]
 2812 E> 0x3bbdad6272a9 @   97 : 45 01 16          AddSmi [1], [22]
         0x3bbdad6272ac @  100 : 33 f9 07 1b       DefineNamedOwnProperty r1, [7], [27]
         0x3bbdad6272b0 @  104 : 0b f9             Ldar r1
 2818 S> 0x3bbdad6272b2 @  106 : a9                Return 
 2860 S> 0x3bbdad6272b3 @  107 : 7c 09 1d 29       CreateObjectLiteral [9], [29], #41
         0x3bbdad6272b7 @  111 : c3                Star1 
 2877 E> 0x3bbdad6272b8 @  112 : 2d 02 05 1f       GetNamedProperty <this>, [5], [31]
         0x3bbdad6272bc @  116 : c2                Star2 
 2887 E> 0x3bbdad6272bd @  117 : 2d f8 06 21       GetNamedProperty r2, [6], [33]
 2889 E> 0x3bbdad6272c1 @  121 : 46 01 1e          SubSmi [1], [30]
         0x3bbdad6272c4 @  124 : 33 f9 06 23       DefineNamedOwnProperty r1, [6], [35]
 2902 E> 0x3bbdad6272c8 @  128 : 2d 02 05 25       GetNamedProperty <this>, [5], [37]
         0x3bbdad6272cc @  132 : c2                Star2 
 2912 E> 0x3bbdad6272cd @  133 : 2d f8 07 27       GetNamedProperty r2, [7], [39]
         0x3bbdad6272d1 @  137 : 33 f9 07 29       DefineNamedOwnProperty r1, [7], [41]
         0x3bbdad6272d5 @  141 : 0b f9             Ldar r1
 2916 S> 0x3bbdad6272d7 @  143 : a9                Return 
 2959 S> 0x3bbdad6272d8 @  144 : 7c 0a 2b 29       CreateObjectLiteral [10], [43], #41
         0x3bbdad6272dc @  148 : c3                Star1 
 2976 E> 0x3bbdad6272dd @  149 : 2d 02 05 2d       GetNamedProperty <this>, [5], [45]
         0x3bbdad6272e1 @  153 : c2                Star2 
 2986 E> 0x3bbdad6272e2 @  154 : 2d f8 06 2f       GetNamedProperty r2, [6], [47]
 2988 E> 0x3bbdad6272e6 @  158 : 45 01 2c          AddSmi [1], [44]
         0x3bbdad6272e9 @  161 : 33 f9 06 31       DefineNamedOwnProperty r1, [6], [49]
 3001 E> 0x3bbdad6272ed @  165 : 2d 02 05 33       GetNamedProperty <this>, [5], [51]
         0x3bbdad6272f1 @  169 : c2                Star2 
 3011 E> 0x3bbdad6272f2 @  170 : 2d f8 07 35       GetNamedProperty r2, [7], [53]
         0x3bbdad6272f6 @  174 : 33 f9 07 37       DefineNamedOwnProperty r1, [7], [55]
         0x3bbdad6272fa @  178 : 0b f9             Ldar r1
 3015 S> 0x3bbdad6272fc @  180 : a9                Return 
         0x3bbdad6272fd @  181 : 0e                LdaUndefined 
 3030 S> 0x3bbdad6272fe @  182 : a9                Return 
Constant pool (size = 11)
0x3bbdad627301: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 11
           0: 0x3bbdad625b29 <String[2]: #up>
           1: 0x3bbdad625b41 <String[4]: #down>
           2: 0x3bbdad625af9 <String[4]: #left>
           3: 0x3bbdad625b11 <String[5]: #right>
           4: 0x3bbdad627369 <ObjectBoilerplateDescription[5]>
           5: 0x3bbdad625e59 <String[9]: #_position>
           6: 0x09aa5c258ac9 <String[1]: #x>
           7: 0x09aa5c258ae1 <String[1]: #y>
           8: 0x3bbdad6273a1 <ObjectBoilerplateDescription[5]>
           9: 0x3bbdad6273d9 <ObjectBoilerplateDescription[5]>
          10: 0x3bbdad627411 <ObjectBoilerplateDescription[5]>
Handler Table (size = 0)
Source Position Table (size = 67)
0x3bbdad627449 <ByteArray[67]>
Boilerplate at 0x3bbdad627369: 
0x3bbdad627369: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3d7752dc2059 <Map>
 - length: 5
           0: 8
           1: 0x09aa5c258ac9 <String[1]: #x>
           2: 0x3d7752dc1501 <Odd Oddball: uninitialized>
           3: 0x09aa5c258ae1 <String[1]: #y>
           4: 0x3d7752dc1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x3bbdad6273a1: 
0x3bbdad6273a1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3d7752dc2059 <Map>
 - length: 5
           0: 8
           1: 0x09aa5c258ac9 <String[1]: #x>
           2: 0x3d7752dc1501 <Odd Oddball: uninitialized>
           3: 0x09aa5c258ae1 <String[1]: #y>
           4: 0x3d7752dc1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x3bbdad6273d9: 
0x3bbdad6273d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3d7752dc2059 <Map>
 - length: 5
           0: 8
           1: 0x09aa5c258ac9 <String[1]: #x>
           2: 0x3d7752dc1501 <Odd Oddball: uninitialized>
           3: 0x09aa5c258ae1 <String[1]: #y>
           4: 0x3d7752dc1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x3bbdad627411: 
0x3bbdad627411: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3d7752dc2059 <Map>
 - length: 5
           0: 8
           1: 0x09aa5c258ac9 <String[1]: #x>
           2: 0x3d7752dc1501 <Odd Oddball: uninitialized>
           3: 0x09aa5c258ae1 <String[1]: #y>
           4: 0x3d7752dc1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x3bbdad627521 points to: [0x3bbdad627590]
=== [0x3bbdad627590] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 3064 S> 0x3bbdad627590 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad627594 @    4 : c4                Star0 
 3064 E> 0x3bbdad627595 @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
         0x3bbdad627599 @    9 : 97 19             JumpIfToBooleanFalse [25] (0x3bbdad6275b2 @ 34)
 3113 S> 0x3bbdad62759b @   11 : 2d 02 01 04       GetNamedProperty <this>, [1], [4]
         0x3bbdad62759f @   15 : c3                Star1 
         0x3bbdad6275a0 @   16 : 13 02             LdaConstant [2]
         0x3bbdad6275a2 @   18 : c1                Star3 
 3113 E> 0x3bbdad6275a3 @   19 : 5e f9 02 f7 06    CallProperty1 r1, <this>, r3, [6]
 3106 E> 0x3bbdad6275a8 @   24 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
 3160 S> 0x3bbdad6275ac @   28 : 13 02             LdaConstant [2]
 3176 E> 0x3bbdad6275ae @   30 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
         0x3bbdad6275b2 @   34 : 0e                LdaUndefined 
 3198 S> 0x3bbdad6275b3 @   35 : a9                Return 
Constant pool (size = 5)
0x3bbdad6275b9: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 5
           0: 0x3bbdad625651 <String[9]: #canMoveUp>
           1: 0x3bbdad6256d1 <String[27]: #computeNewPositionAfterMove>
           2: 0x3bbdad625b29 <String[2]: #up>
           3: 0x3bbdad625e59 <String[9]: #_position>
           4: 0x3bbdad625e99 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 21)
0x3bbdad6275f1 <ByteArray[21]>
0x3bbdad627679 points to: [0x3bbdad6276e8]
=== [0x3bbdad6276e8] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 3234 S> 0x3bbdad6276e8 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad6276ec @    4 : c4                Star0 
 3234 E> 0x3bbdad6276ed @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
         0x3bbdad6276f1 @    9 : 97 19             JumpIfToBooleanFalse [25] (0x3bbdad62770a @ 34)
 3285 S> 0x3bbdad6276f3 @   11 : 2d 02 01 04       GetNamedProperty <this>, [1], [4]
         0x3bbdad6276f7 @   15 : c3                Star1 
         0x3bbdad6276f8 @   16 : 13 02             LdaConstant [2]
         0x3bbdad6276fa @   18 : c1                Star3 
 3285 E> 0x3bbdad6276fb @   19 : 5e f9 02 f7 06    CallProperty1 r1, <this>, r3, [6]
 3278 E> 0x3bbdad627700 @   24 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
 3334 S> 0x3bbdad627704 @   28 : 13 02             LdaConstant [2]
 3350 E> 0x3bbdad627706 @   30 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
         0x3bbdad62770a @   34 : 0e                LdaUndefined 
 3374 S> 0x3bbdad62770b @   35 : a9                Return 
Constant pool (size = 5)
0x3bbdad627711: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 5
           0: 0x3bbdad625671 <String[11]: #canMoveDown>
           1: 0x3bbdad6256d1 <String[27]: #computeNewPositionAfterMove>
           2: 0x3bbdad625b41 <String[4]: #down>
           3: 0x3bbdad625e59 <String[9]: #_position>
           4: 0x3bbdad625e99 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 21)
0x3bbdad627749 <ByteArray[21]>
0x3bbdad6277d1 points to: [0x3bbdad627840]
=== [0x3bbdad627840] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 3410 S> 0x3bbdad627840 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad627844 @    4 : c4                Star0 
 3410 E> 0x3bbdad627845 @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
         0x3bbdad627849 @    9 : 97 19             JumpIfToBooleanFalse [25] (0x3bbdad627862 @ 34)
 3461 S> 0x3bbdad62784b @   11 : 2d 02 01 04       GetNamedProperty <this>, [1], [4]
         0x3bbdad62784f @   15 : c3                Star1 
         0x3bbdad627850 @   16 : 13 02             LdaConstant [2]
         0x3bbdad627852 @   18 : c1                Star3 
 3461 E> 0x3bbdad627853 @   19 : 5e f9 02 f7 06    CallProperty1 r1, <this>, r3, [6]
 3454 E> 0x3bbdad627858 @   24 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
 3510 S> 0x3bbdad62785c @   28 : 13 02             LdaConstant [2]
 3526 E> 0x3bbdad62785e @   30 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
         0x3bbdad627862 @   34 : 0e                LdaUndefined 
 3550 S> 0x3bbdad627863 @   35 : a9                Return 
Constant pool (size = 5)
0x3bbdad627869: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 5
           0: 0x3bbdad625691 <String[11]: #canMoveLeft>
           1: 0x3bbdad6256d1 <String[27]: #computeNewPositionAfterMove>
           2: 0x3bbdad625af9 <String[4]: #left>
           3: 0x3bbdad625e59 <String[9]: #_position>
           4: 0x3bbdad625e99 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 21)
0x3bbdad6278a1 <ByteArray[21]>
0x3bbdad627929 points to: [0x3bbdad627998]
=== [0x3bbdad627998] DISASSEMBLY ===
Parameter count 1
Register count 4
Frame size 32
OSR urgency: 0
Bytecode age: 0
 3587 S> 0x3bbdad627998 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad62799c @    4 : c4                Star0 
 3587 E> 0x3bbdad62799d @    5 : 5d fa 02 02       CallProperty0 r0, <this>, [2]
         0x3bbdad6279a1 @    9 : 97 19             JumpIfToBooleanFalse [25] (0x3bbdad6279ba @ 34)
 3639 S> 0x3bbdad6279a3 @   11 : 2d 02 01 04       GetNamedProperty <this>, [1], [4]
         0x3bbdad6279a7 @   15 : c3                Star1 
         0x3bbdad6279a8 @   16 : 13 02             LdaConstant [2]
         0x3bbdad6279aa @   18 : c1                Star3 
 3639 E> 0x3bbdad6279ab @   19 : 5e f9 02 f7 06    CallProperty1 r1, <this>, r3, [6]
 3632 E> 0x3bbdad6279b0 @   24 : 32 02 03 08       SetNamedProperty <this>, [3], [8]
 3689 S> 0x3bbdad6279b4 @   28 : 13 02             LdaConstant [2]
 3705 E> 0x3bbdad6279b6 @   30 : 32 02 04 0a       SetNamedProperty <this>, [4], [10]
         0x3bbdad6279ba @   34 : 0e                LdaUndefined 
 3730 S> 0x3bbdad6279bb @   35 : a9                Return 
Constant pool (size = 5)
0x3bbdad6279c1: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 5
           0: 0x3bbdad6256b1 <String[12]: #canMoveRight>
           1: 0x3bbdad6256d1 <String[27]: #computeNewPositionAfterMove>
           2: 0x3bbdad625b11 <String[5]: #right>
           3: 0x3bbdad625e59 <String[9]: #_position>
           4: 0x3bbdad625e99 <String[10]: #_direction>
Handler Table (size = 0)
Source Position Table (size = 21)
0x3bbdad6279f9 <ByteArray[21]>
0x3bbdad627a81 points to: [0x3bbdad627af0]
=== [0x3bbdad627af0] DISASSEMBLY ===
Parameter count 1
Register count 18
Frame size 144
OSR urgency: 0
Bytecode age: 0
 3785 S> 0x3bbdad627af0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad627af4 @    4 : bd                Star7 
 3795 E> 0x3bbdad627af5 @    5 : 2d f3 01 02       GetNamedProperty r7, [1], [2]
         0x3bbdad627af9 @    9 : c4                Star0 
 3821 S> 0x3bbdad627afa @   10 : 2d 02 00 04       GetNamedProperty <this>, [0], [4]
         0x3bbdad627afe @   14 : bd                Star7 
 3831 E> 0x3bbdad627aff @   15 : 2d f3 02 06       GetNamedProperty r7, [2], [6]
         0x3bbdad627b03 @   19 : c3                Star1 
 3861 S> 0x3bbdad627b04 @   20 : 79 03 08 25       CreateArrayLiteral [3], [8], #37
         0x3bbdad627b08 @   24 : c2                Star2 
 3929 S> 0x3bbdad627b09 @   25 : 7b 09             CreateEmptyArrayLiteral [9]
         0x3bbdad627b0b @   27 : c1                Star3 
 3997 S> 0x3bbdad627b0c @   28 : b1 f8 0a 0c       GetIterator r2, [10], [12]
         0x3bbdad627b10 @   32 : 9f 07             JumpIfJSReceiver [7] (0x3bbdad627b17 @ 39)
         0x3bbdad627b12 @   34 : 65 c7 00 fa 00    CallRuntime [ThrowSymbolIteratorInvalid], r0-r0
         0x3bbdad627b17 @   39 : bc                Star8 
         0x3bbdad627b18 @   40 : 2d f2 04 0e       GetNamedProperty r8, [4], [14]
         0x3bbdad627b1c @   44 : bd                Star7 
         0x3bbdad627b1d @   45 : 12                LdaFalse 
         0x3bbdad627b1e @   46 : bb                Star9 
         0x3bbdad627b1f @   47 : 19 ff ee          Mov <context>, r12
         0x3bbdad627b22 @   50 : 11                LdaTrue 
         0x3bbdad627b23 @   51 : bb                Star9 
 3984 S> 0x3bbdad627b24 @   52 : 5d f3 f2 10       CallProperty0 r7, r8, [16]
         0x3bbdad627b28 @   56 : b7                Star13 
         0x3bbdad627b29 @   57 : 9f 07             JumpIfJSReceiver [7] (0x3bbdad627b30 @ 64)
         0x3bbdad627b2b @   59 : 65 be 00 ed 01    CallRuntime [ThrowIteratorResultNotAnObject], r13-r13
         0x3bbdad627b30 @   64 : 2d ed 05 12       GetNamedProperty r13, [5], [18]
         0x3bbdad627b34 @   68 : 94 0e             JumpIfToBooleanTrueConstant [14] (0x3bbdad627c4c @ 348)
         0x3bbdad627b36 @   70 : 2d ed 06 14       GetNamedProperty r13, [6], [20]
         0x3bbdad627b3a @   74 : b7                Star13 
         0x3bbdad627b3b @   75 : 12                LdaFalse 
         0x3bbdad627b3c @   76 : bb                Star9 
         0x3bbdad627b3d @   77 : 19 ed f6          Mov r13, r4
 3984 S> 0x3bbdad627b40 @   80 : 19 f6 f4          Mov r4, r6
 4023 S> 0x3bbdad627b43 @   83 : 13 07             LdaConstant [7]
         0x3bbdad627b45 @   85 : 6c f4 16          TestEqualStrict r6, [22]
         0x3bbdad627b48 @   88 : 19 ed ec          Mov r13, r14
         0x3bbdad627b4b @   91 : 98 19             JumpIfTrue [25] (0x3bbdad627b64 @ 116)
         0x3bbdad627b4d @   93 : 13 08             LdaConstant [8]
         0x3bbdad627b4f @   95 : 6c ec 16          TestEqualStrict r14, [22]
         0x3bbdad627b52 @   98 : 98 43             JumpIfTrue [67] (0x3bbdad627b95 @ 165)
         0x3bbdad627b54 @  100 : 13 09             LdaConstant [9]
         0x3bbdad627b56 @  102 : 6c ec 16          TestEqualStrict r14, [22]
         0x3bbdad627b59 @  105 : 98 79             JumpIfTrue [121] (0x3bbdad627bd2 @ 226)
         0x3bbdad627b5b @  107 : 13 0a             LdaConstant [10]
         0x3bbdad627b5d @  109 : 6c ec 16          TestEqualStrict r14, [22]
         0x3bbdad627b60 @  112 : 98 a3             JumpIfTrue [163] (0x3bbdad627c03 @ 275)
         0x3bbdad627b62 @  114 : 8a e4             Jump [228] (0x3bbdad627c46 @ 342)
 4093 S> 0x3bbdad627b64 @  116 : 0c                LdaZero 
 4099 E> 0x3bbdad627b65 @  117 : 6e fa 17          TestGreaterThan r0, [23]
         0x3bbdad627b68 @  120 : 99 2b             JumpIfFalse [43] (0x3bbdad627b93 @ 163)
 4111 E> 0x3bbdad627b6a @  122 : 2d 02 0b 18       GetNamedProperty <this>, [11], [24]
         0x3bbdad627b6e @  126 : b5                Star15 
         0x3bbdad627b6f @  127 : 0b fa             Ldar r0
 4118 E> 0x3bbdad627b71 @  129 : 46 01 1a          SubSmi [1], [26]
 4115 E> 0x3bbdad627b74 @  132 : 2f eb 1b          GetKeyedProperty r15, [27]
         0x3bbdad627b77 @  135 : b5                Star15 
         0x3bbdad627b78 @  136 : 0b f9             Ldar r1
 4122 E> 0x3bbdad627b7a @  138 : 2f eb 1d          GetKeyedProperty r15, [29]
         0x3bbdad627b7d @  141 : b5                Star15 
         0x3bbdad627b7e @  142 : 0d 01             LdaSmi [1]
 4126 E> 0x3bbdad627b80 @  144 : 6c eb 1f          TestEqualStrict r15, [31]
         0x3bbdad627b83 @  147 : 99 10             JumpIfFalse [16] (0x3bbdad627b93 @ 163)
 4178 S> 0x3bbdad627b85 @  149 : 2d f7 0c 20       GetNamedProperty r3, [12], [32]
         0x3bbdad627b89 @  153 : b5                Star15 
         0x3bbdad627b8a @  154 : 13 07             LdaConstant [7]
         0x3bbdad627b8c @  156 : 18 e9             Star r17
 4178 E> 0x3bbdad627b8e @  158 : 5e eb f7 e9 22    CallProperty1 r15, r3, r17, [34]
 4234 S> 0x3bbdad627b93 @  163 : 8a b3             Jump [179] (0x3bbdad627c46 @ 342)
 4304 S> 0x3bbdad627b95 @  165 : 2d 02 0b 25       GetNamedProperty <this>, [11], [37]
         0x3bbdad627b99 @  169 : 18 ea             Star r16
 4309 E> 0x3bbdad627b9b @  171 : 2d ea 0d 27       GetNamedProperty r16, [13], [39]
 4316 E> 0x3bbdad627b9f @  175 : 46 01 24          SubSmi [1], [36]
 4297 E> 0x3bbdad627ba2 @  178 : 6d fa 29          TestLessThan r0, [41]
         0x3bbdad627ba5 @  181 : 99 2b             JumpIfFalse [43] (0x3bbdad627bd0 @ 224)
 4328 E> 0x3bbdad627ba7 @  183 : 2d 02 0b 2a       GetNamedProperty <this>, [11], [42]
         0x3bbdad627bab @  187 : b5                Star15 
         0x3bbdad627bac @  188 : 0b fa             Ldar r0
 4335 E> 0x3bbdad627bae @  190 : 45 01 2c          AddSmi [1], [44]
 4332 E> 0x3bbdad627bb1 @  193 : 2f eb 2d          GetKeyedProperty r15, [45]
         0x3bbdad627bb4 @  196 : b5                Star15 
         0x3bbdad627bb5 @  197 : 0b f9             Ldar r1
 4339 E> 0x3bbdad627bb7 @  199 : 2f eb 2f          GetKeyedProperty r15, [47]
         0x3bbdad627bba @  202 : b5                Star15 
         0x3bbdad627bbb @  203 : 0d 01             LdaSmi [1]
 4343 E> 0x3bbdad627bbd @  205 : 6c eb 31          TestEqualStrict r15, [49]
         0x3bbdad627bc0 @  208 : 99 10             JumpIfFalse [16] (0x3bbdad627bd0 @ 224)
 4395 S> 0x3bbdad627bc2 @  210 : 2d f7 0c 20       GetNamedProperty r3, [12], [32]
         0x3bbdad627bc6 @  214 : b5                Star15 
         0x3bbdad627bc7 @  215 : 13 08             LdaConstant [8]
         0x3bbdad627bc9 @  217 : 18 e9             Star r17
 4395 E> 0x3bbdad627bcb @  219 : 5e eb f7 e9 32    CallProperty1 r15, r3, r17, [50]
 4452 S> 0x3bbdad627bd0 @  224 : 8a 76             Jump [118] (0x3bbdad627c46 @ 342)
 4506 S> 0x3bbdad627bd2 @  226 : 0c                LdaZero 
 4512 E> 0x3bbdad627bd3 @  227 : 6e f9 34          TestGreaterThan r1, [52]
         0x3bbdad627bd6 @  230 : 99 2b             JumpIfFalse [43] (0x3bbdad627c01 @ 273)
 4524 E> 0x3bbdad627bd8 @  232 : 2d 02 0b 35       GetNamedProperty <this>, [11], [53]
         0x3bbdad627bdc @  236 : b5                Star15 
         0x3bbdad627bdd @  237 : 0b fa             Ldar r0
 4528 E> 0x3bbdad627bdf @  239 : 2f eb 37          GetKeyedProperty r15, [55]
         0x3bbdad627be2 @  242 : b5                Star15 
         0x3bbdad627be3 @  243 : 0b f9             Ldar r1
 4534 E> 0x3bbdad627be5 @  245 : 46 01 39          SubSmi [1], [57]
 4531 E> 0x3bbdad627be8 @  248 : 2f eb 3a          GetKeyedProperty r15, [58]
         0x3bbdad627beb @  251 : b5                Star15 
         0x3bbdad627bec @  252 : 0d 01             LdaSmi [1]
 4539 E> 0x3bbdad627bee @  254 : 6c eb 3c          TestEqualStrict r15, [60]
         0x3bbdad627bf1 @  257 : 99 10             JumpIfFalse [16] (0x3bbdad627c01 @ 273)
 4591 S> 0x3bbdad627bf3 @  259 : 2d f7 0c 20       GetNamedProperty r3, [12], [32]
         0x3bbdad627bf7 @  263 : b5                Star15 
         0x3bbdad627bf8 @  264 : 13 09             LdaConstant [9]
         0x3bbdad627bfa @  266 : 18 e9             Star r17
 4591 E> 0x3bbdad627bfc @  268 : 5e eb f7 e9 3d    CallProperty1 r15, r3, r17, [61]
 4645 S> 0x3bbdad627c01 @  273 : 8a 45             Jump [69] (0x3bbdad627c46 @ 342)
 4714 S> 0x3bbdad627c03 @  275 : 2d 02 0b 40       GetNamedProperty <this>, [11], [64]
         0x3bbdad627c07 @  279 : 18 ea             Star r16
         0x3bbdad627c09 @  281 : 0c                LdaZero 
 4718 E> 0x3bbdad627c0a @  282 : 2f ea 42          GetKeyedProperty r16, [66]
         0x3bbdad627c0d @  285 : 18 ea             Star r16
 4722 E> 0x3bbdad627c0f @  287 : 2d ea 0d 44       GetNamedProperty r16, [13], [68]
 4729 E> 0x3bbdad627c13 @  291 : 46 01 3f          SubSmi [1], [63]
 4707 E> 0x3bbdad627c16 @  294 : 6d f9 46          TestLessThan r1, [70]
         0x3bbdad627c19 @  297 : 99 2b             JumpIfFalse [43] (0x3bbdad627c44 @ 340)
 4741 E> 0x3bbdad627c1b @  299 : 2d 02 0b 47       GetNamedProperty <this>, [11], [71]
         0x3bbdad627c1f @  303 : b5                Star15 
         0x3bbdad627c20 @  304 : 0b fa             Ldar r0
 4745 E> 0x3bbdad627c22 @  306 : 2f eb 49          GetKeyedProperty r15, [73]
         0x3bbdad627c25 @  309 : b5                Star15 
         0x3bbdad627c26 @  310 : 0b f9             Ldar r1
 4751 E> 0x3bbdad627c28 @  312 : 45 01 4b          AddSmi [1], [75]
 4748 E> 0x3bbdad627c2b @  315 : 2f eb 4c          GetKeyedProperty r15, [76]
         0x3bbdad627c2e @  318 : b5                Star15 
         0x3bbdad627c2f @  319 : 0d 01             LdaSmi [1]
 4756 E> 0x3bbdad627c31 @  321 : 6c eb 4e          TestEqualStrict r15, [78]
         0x3bbdad627c34 @  324 : 99 10             JumpIfFalse [16] (0x3bbdad627c44 @ 340)
 4808 S> 0x3bbdad627c36 @  326 : 2d f7 0c 20       GetNamedProperty r3, [12], [32]
         0x3bbdad627c3a @  330 : b5                Star15 
         0x3bbdad627c3b @  331 : 13 0a             LdaConstant [10]
         0x3bbdad627c3d @  333 : 18 e9             Star r17
 4808 E> 0x3bbdad627c3f @  335 : 5e eb f7 e9 4f    CallProperty1 r15, r3, r17, [79]
 4864 S> 0x3bbdad627c44 @  340 : 8a 02             Jump [2] (0x3bbdad627c46 @ 342)
 3973 E> 0x3bbdad627c46 @  342 : 00 89 25 01 00 00 JumpLoop.Wide [293], [0] (0x3bbdad627b22 @ 50)
         0x3bbdad627c4c @  348 : 0d ff             LdaSmi [-1]
         0x3bbdad627c4e @  350 : b9                Star11 
         0x3bbdad627c4f @  351 : ba                Star10 
         0x3bbdad627c50 @  352 : 8a 05             Jump [5] (0x3bbdad627c55 @ 357)
         0x3bbdad627c52 @  354 : b9                Star11 
         0x3bbdad627c53 @  355 : 0c                LdaZero 
         0x3bbdad627c54 @  356 : ba                Star10 
         0x3bbdad627c55 @  357 : 10                LdaTheHole 
         0x3bbdad627c56 @  358 : a6                SetPendingMessage 
         0x3bbdad627c57 @  359 : b8                Star12 
         0x3bbdad627c58 @  360 : 0b f1             Ldar r9
         0x3bbdad627c5a @  362 : 96 24             JumpIfToBooleanTrue [36] (0x3bbdad627c7e @ 398)
         0x3bbdad627c5c @  364 : 19 ff ec          Mov <context>, r14
         0x3bbdad627c5f @  367 : 2d f2 0f 51       GetNamedProperty r8, [15], [81]
         0x3bbdad627c63 @  371 : 9e 1b             JumpIfUndefinedOrNull [27] (0x3bbdad627c7e @ 398)
         0x3bbdad627c65 @  373 : b5                Star15 
         0x3bbdad627c66 @  374 : 5d eb f2 53       CallProperty0 r15, r8, [83]
         0x3bbdad627c6a @  378 : 9f 14             JumpIfJSReceiver [20] (0x3bbdad627c7e @ 398)
         0x3bbdad627c6c @  380 : 18 ea             Star r16
         0x3bbdad627c6e @  382 : 65 be 00 ea 01    CallRuntime [ThrowIteratorResultNotAnObject], r16-r16
         0x3bbdad627c73 @  387 : 8a 0b             Jump [11] (0x3bbdad627c7e @ 398)
         0x3bbdad627c75 @  389 : b6                Star14 
         0x3bbdad627c76 @  390 : 0c                LdaZero 
         0x3bbdad627c77 @  391 : 1c f0             TestReferenceEqual r10
         0x3bbdad627c79 @  393 : 98 05             JumpIfTrue [5] (0x3bbdad627c7e @ 398)
         0x3bbdad627c7b @  395 : 0b ec             Ldar r14
         0x3bbdad627c7d @  397 : a8                ReThrow 
         0x3bbdad627c7e @  398 : 0b ee             Ldar r12
         0x3bbdad627c80 @  400 : a6                SetPendingMessage 
         0x3bbdad627c81 @  401 : 0c                LdaZero 
         0x3bbdad627c82 @  402 : 1c f0             TestReferenceEqual r10
         0x3bbdad627c84 @  404 : 99 05             JumpIfFalse [5] (0x3bbdad627c89 @ 409)
         0x3bbdad627c86 @  406 : 0b ef             Ldar r11
         0x3bbdad627c88 @  408 : a8                ReThrow 
 4903 S> 0x3bbdad627c89 @  409 : 0b f7             Ldar r3
 4929 S> 0x3bbdad627c8b @  411 : a9                Return 
Constant pool (size = 16)
0x3bbdad627c91: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 16
           0: 0x3bbdad625e59 <String[9]: #_position>
           1: 0x09aa5c258ac9 <String[1]: #x>
           2: 0x09aa5c258ae1 <String[1]: #y>
           3: 0x3bbdad627d21 <ArrayBoilerplateDescription PACKED_ELEMENTS, 0x3bbdad627d39 <FixedArray[4]>>
           4: 0x3d7752dc59b1 <String[4]: #next>
           5: 0x3d7752dc4c71 <String[4]: #done>
           6: 0x3d7752dc6419 <String[5]: #value>
           7: 0x3bbdad625af9 <String[4]: #left>
           8: 0x3bbdad625b11 <String[5]: #right>
           9: 0x3bbdad625b29 <String[2]: #up>
          10: 0x3bbdad625b41 <String[4]: #down>
          11: 0x3bbdad625eb9 <String[4]: #_map>
          12: 0x09aa5c249551 <String[4]: #push>
          13: 0x3d7752dc55f9 <String[6]: #length>
          14: 280
          15: 0x3d7752dc5e81 <String[6]: #return>
Handler Table (size = 32)
   from   to       hdlr (prediction,   data)
  (  50, 348)  ->   354 (prediction=0, data=12)
  ( 367, 387)  ->   389 (prediction=0, data=14)
Source Position Table (size = 138)
0x3bbdad627db1 <ByteArray[138]>
0x3bbdad627ee9 points to: [0x3bbdad627f58]
=== [0x3bbdad627f58] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 4975 S> 0x3bbdad627f58 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad627f5c @    4 : c4                Star0 
 4975 E> 0x3bbdad627f5d @    5 : 5e fa 02 03 02    CallProperty1 r0, <this>, a0, [2]
         0x3bbdad627f62 @   10 : c4                Star0 
         0x3bbdad627f63 @   11 : 13 01             LdaConstant [1]
         0x3bbdad627f65 @   13 : 6c fa 04          TestEqualStrict r0, [4]
         0x3bbdad627f68 @   16 : 98 19             JumpIfTrue [25] (0x3bbdad627f81 @ 41)
         0x3bbdad627f6a @   18 : 13 02             LdaConstant [2]
         0x3bbdad627f6c @   20 : 6c fa 04          TestEqualStrict r0, [4]
         0x3bbdad627f6f @   23 : 98 1d             JumpIfTrue [29] (0x3bbdad627f8c @ 52)
         0x3bbdad627f71 @   25 : 13 03             LdaConstant [3]
         0x3bbdad627f73 @   27 : 6c fa 04          TestEqualStrict r0, [4]
         0x3bbdad627f76 @   30 : 98 21             JumpIfTrue [33] (0x3bbdad627f97 @ 63)
         0x3bbdad627f78 @   32 : 13 04             LdaConstant [4]
         0x3bbdad627f7a @   34 : 6c fa 04          TestEqualStrict r0, [4]
         0x3bbdad627f7d @   37 : 98 25             JumpIfTrue [37] (0x3bbdad627fa2 @ 74)
         0x3bbdad627f7f @   39 : 8a 2e             Jump [46] (0x3bbdad627fad @ 85)
 5043 S> 0x3bbdad627f81 @   41 : 2d 02 05 05       GetNamedProperty <this>, [5], [5]
         0x3bbdad627f85 @   45 : c3                Star1 
 5043 E> 0x3bbdad627f86 @   46 : 5d f9 02 07       CallProperty0 r1, <this>, [7]
 5069 S> 0x3bbdad627f8a @   50 : 8a 23             Jump [35] (0x3bbdad627fad @ 85)
 5122 S> 0x3bbdad627f8c @   52 : 2d 02 06 09       GetNamedProperty <this>, [6], [9]
         0x3bbdad627f90 @   56 : c3                Star1 
 5122 E> 0x3bbdad627f91 @   57 : 5d f9 02 0b       CallProperty0 r1, <this>, [11]
 5150 S> 0x3bbdad627f95 @   61 : 8a 18             Jump [24] (0x3bbdad627fad @ 85)
 5203 S> 0x3bbdad627f97 @   63 : 2d 02 07 0d       GetNamedProperty <this>, [7], [13]
         0x3bbdad627f9b @   67 : c3                Star1 
 5203 E> 0x3bbdad627f9c @   68 : 5d f9 02 0f       CallProperty0 r1, <this>, [15]
 5231 S> 0x3bbdad627fa0 @   72 : 8a 0d             Jump [13] (0x3bbdad627fad @ 85)
 5285 S> 0x3bbdad627fa2 @   74 : 2d 02 08 11       GetNamedProperty <this>, [8], [17]
         0x3bbdad627fa6 @   78 : c3                Star1 
 5285 E> 0x3bbdad627fa7 @   79 : 5d f9 02 13       CallProperty0 r1, <this>, [19]
 5314 S> 0x3bbdad627fab @   83 : 8a 02             Jump [2] (0x3bbdad627fad @ 85)
         0x3bbdad627fad @   85 : 0e                LdaUndefined 
 5335 S> 0x3bbdad627fae @   86 : a9                Return 
Constant pool (size = 9)
0x3bbdad627fb1: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 9
           0: 0x3bbdad628009 <String[13]: #get_next_move>
           1: 0x3bbdad625b29 <String[2]: #up>
           2: 0x3bbdad625b41 <String[4]: #down>
           3: 0x3bbdad625af9 <String[4]: #left>
           4: 0x3bbdad625b11 <String[5]: #right>
           5: 0x3bbdad625701 <String[6]: #moveUp>
           6: 0x3bbdad625719 <String[8]: #moveDown>
           7: 0x3bbdad625731 <String[8]: #moveLeft>
           8: 0x3bbdad625749 <String[9]: #moveRight>
Handler Table (size = 0)
Source Position Table (size = 38)
0x3bbdad628029 <ByteArray[38]>
0x3bbdad6280c9 points to: [0x3bbdad628138]
=== [0x3bbdad628138] DISASSEMBLY ===
Parameter count 2
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 5375 S> 0x3bbdad628138 @    0 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x3bbdad62813c @    4 : c4                Star0 
         0x3bbdad62813d @    5 : 00 0d 84 03       LdaSmi.Wide [900]
 5380 E> 0x3bbdad628141 @    9 : 6e fa 02          TestGreaterThan r0, [2]
         0x3bbdad628144 @   12 : 99 0a             JumpIfFalse [10] (0x3bbdad62814e @ 22)
 5401 S> 0x3bbdad628146 @   14 : 13 01             LdaConstant [1]
 5418 E> 0x3bbdad628148 @   16 : 32 02 02 03       SetNamedProperty <this>, [2], [3]
         0x3bbdad62814c @   20 : 8a 42             Jump [66] (0x3bbdad62818e @ 86)
 5463 S> 0x3bbdad62814e @   22 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x3bbdad628152 @   26 : c4                Star0 
         0x3bbdad628153 @   27 : 00 0d bc 02       LdaSmi.Wide [700]
 5468 E> 0x3bbdad628157 @   31 : 6e fa 05          TestGreaterThan r0, [5]
         0x3bbdad62815a @   34 : 99 0a             JumpIfFalse [10] (0x3bbdad628164 @ 44)
 5489 S> 0x3bbdad62815c @   36 : 13 03             LdaConstant [3]
 5506 E> 0x3bbdad62815e @   38 : 32 02 02 06       SetNamedProperty <this>, [2], [6]
         0x3bbdad628162 @   42 : 8a 2c             Jump [44] (0x3bbdad62818e @ 86)
 5551 S> 0x3bbdad628164 @   44 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x3bbdad628168 @   48 : c4                Star0 
         0x3bbdad628169 @   49 : 00 0d f4 01       LdaSmi.Wide [500]
 5556 E> 0x3bbdad62816d @   53 : 6e fa 08          TestGreaterThan r0, [8]
         0x3bbdad628170 @   56 : 99 0a             JumpIfFalse [10] (0x3bbdad62817a @ 66)
 5577 S> 0x3bbdad628172 @   58 : 13 04             LdaConstant [4]
 5594 E> 0x3bbdad628174 @   60 : 32 02 02 09       SetNamedProperty <this>, [2], [9]
         0x3bbdad628178 @   64 : 8a 16             Jump [22] (0x3bbdad62818e @ 86)
 5638 S> 0x3bbdad62817a @   66 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x3bbdad62817e @   70 : c4                Star0 
         0x3bbdad62817f @   71 : 00 0d 2c 01       LdaSmi.Wide [300]
 5643 E> 0x3bbdad628183 @   75 : 6e fa 0b          TestGreaterThan r0, [11]
         0x3bbdad628186 @   78 : 99 08             JumpIfFalse [8] (0x3bbdad62818e @ 86)
 5664 S> 0x3bbdad628188 @   80 : 13 05             LdaConstant [5]
 5681 E> 0x3bbdad62818a @   82 : 32 02 02 0c       SetNamedProperty <this>, [2], [12]
 5710 S> 0x3bbdad62818e @   86 : 2d 02 06 0e       GetNamedProperty <this>, [6], [14]
         0x3bbdad628192 @   90 : 51 10             Inc [16]
 5737 E> 0x3bbdad628194 @   92 : 32 02 06 11       SetNamedProperty <this>, [6], [17]
 5758 S> 0x3bbdad628198 @   96 : 2d 02 06 13       GetNamedProperty <this>, [6], [19]
         0x3bbdad62819c @  100 : c4                Star0 
 5789 E> 0x3bbdad62819d @  101 : 2d 02 07 15       GetNamedProperty <this>, [7], [21]
         0x3bbdad6281a1 @  105 : c3                Star1 
 5807 E> 0x3bbdad6281a2 @  106 : 2d 02 02 17       GetNamedProperty <this>, [2], [23]
 5801 E> 0x3bbdad6281a6 @  110 : 2f f9 19          GetKeyedProperty r1, [25]
 5781 E> 0x3bbdad6281a9 @  113 : 70 fa 1b          TestGreaterThanOrEqual r0, [27]
         0x3bbdad6281ac @  116 : 99 11             JumpIfFalse [17] (0x3bbdad6281bd @ 133)
 5835 S> 0x3bbdad6281ae @  118 : 0c                LdaZero 
 5863 E> 0x3bbdad6281af @  119 : 32 02 06 1c       SetNamedProperty <this>, [6], [28]
 5885 S> 0x3bbdad6281b3 @  123 : 2d 02 08 1e       GetNamedProperty <this>, [8], [30]
         0x3bbdad6281b7 @  127 : c4                Star0 
 5885 E> 0x3bbdad6281b8 @  128 : 5e fa 02 03 20    CallProperty1 r0, <this>, a0, [32]
         0x3bbdad6281bd @  133 : 0e                LdaUndefined 
 5912 S> 0x3bbdad6281be @  134 : a9                Return 
Constant pool (size = 9)
0x3bbdad6281c1: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 9
           0: 0x3bbdad628219 <String[4]: #tick>
           1: 0x3bbdad625c49 <String[6]: #insane>
           2: 0x3bbdad625a61 <String[11]: #personality>
           3: 0x3bbdad625c31 <String[6]: #hungry>
           4: 0x3bbdad625c19 <String[5]: #awake>
           5: 0x3bbdad625c01 <String[5]: #tease>
           6: 0x3bbdad625a21 <String[22]: #nbOfTicksSinceLastMove>
           7: 0x3bbdad625c61 <String[12]: #tickSpeedMap>
           8: 0x3bbdad625791 <String[4]: #move>
Handler Table (size = 0)
Source Position Table (size = 64)
0x3bbdad628231 <ByteArray[64]>
0x3bbdad6282f1 points to: [0x3bbdad628360]
=== [0x3bbdad628360] DISASSEMBLY ===
Parameter count 1
Register count 0
Frame size 0
OSR urgency: 0
Bytecode age: 0
 5955 S> 0x3bbdad628360 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
 5965 S> 0x3bbdad628364 @    4 : a9                Return 
Constant pool (size = 1)
0x3bbdad628369: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 1
           0: 0x3bbdad625e59 <String[9]: #_position>
Handler Table (size = 0)
Source Position Table (size = 8)
0x3bbdad628381 <ByteArray[8]>
0x3bbdad628419 points to: [0x3bbdad628488]
=== [0x3bbdad628488] DISASSEMBLY ===
Parameter count 1
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 6004 S> 0x3bbdad628488 @    0 : 7c 00 00 08       CreateObjectLiteral [0], [0], #8
         0x3bbdad62848c @    4 : c4                Star0 
 6035 E> 0x3bbdad62848d @    5 : 7c 01 01 29       CreateObjectLiteral [1], [1], #41
         0x3bbdad628491 @    9 : c3                Star1 
 6045 E> 0x3bbdad628492 @   10 : 2d 02 02 02       GetNamedProperty <this>, [2], [2]
         0x3bbdad628496 @   14 : c2                Star2 
 6055 E> 0x3bbdad628497 @   15 : 2d f8 03 04       GetNamedProperty r2, [3], [4]
         0x3bbdad62849b @   19 : 33 f9 03 06       DefineNamedOwnProperty r1, [3], [6]
 6066 E> 0x3bbdad62849f @   23 : 2d 02 02 08       GetNamedProperty <this>, [2], [8]
         0x3bbdad6284a3 @   27 : c2                Star2 
 6076 E> 0x3bbdad6284a4 @   28 : 2d f8 04 0a       GetNamedProperty r2, [4], [10]
         0x3bbdad6284a8 @   32 : 33 f9 04 0c       DefineNamedOwnProperty r1, [4], [12]
         0x3bbdad6284ac @   36 : 0b f9             Ldar r1
         0x3bbdad6284ae @   38 : 33 fa 05 0e       DefineNamedOwnProperty r0, [5], [14]
         0x3bbdad6284b2 @   42 : 0b fa             Ldar r0
 6091 S> 0x3bbdad6284b4 @   44 : a9                Return 
Constant pool (size = 6)
0x3bbdad6284b9: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 6
           0: 0x3bbdad6284f9 <ObjectBoilerplateDescription[3]>
           1: 0x3bbdad628521 <ObjectBoilerplateDescription[5]>
           2: 0x3bbdad625e59 <String[9]: #_position>
           3: 0x09aa5c258ac9 <String[1]: #x>
           4: 0x09aa5c258ae1 <String[1]: #y>
           5: 0x3d7752dc5c19 <String[8]: #position>
Handler Table (size = 0)
Source Position Table (size = 18)
0x3bbdad628559 <ByteArray[18]>
Boilerplate at 0x3bbdad6284f9: 
0x3bbdad6284f9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3d7752dc2059 <Map>
 - length: 3
           0: 8
           1: 0x3d7752dc5c19 <String[8]: #position>
           2: 0x3d7752dc1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x3bbdad628521: 
0x3bbdad628521: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x3d7752dc2059 <Map>
 - length: 5
           0: 8
           1: 0x09aa5c258ac9 <String[1]: #x>
           2: 0x3d7752dc1501 <Odd Oddball: uninitialized>
           3: 0x09aa5c258ae1 <String[1]: #y>
           4: 0x3d7752dc1501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x3bbdad6285e9 points to: [0x3bbdad628658]
=== [0x3bbdad628658] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 6150 S> 0x3bbdad628658 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad62865c @    4 : c3                Star1 
 6150 E> 0x3bbdad62865d @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x3bbdad628661 @    9 : c3                Star1 
         0x3bbdad628662 @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x3bbdad628666 @   14 : c4                Star0 
 6185 E> 0x3bbdad628667 @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x3bbdad62866b @   19 : 33 fa 02 08       DefineNamedOwnProperty r0, [2], [8]
 6215 E> 0x3bbdad62866f @   23 : 2d 02 03 0a       GetNamedProperty <this>, [3], [10]
         0x3bbdad628673 @   27 : 33 fa 03 0c       DefineNamedOwnProperty r0, [3], [12]
 6240 E> 0x3bbdad628677 @   31 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x3bbdad62867b @   35 : 33 fa 04 10       DefineNamedOwnProperty r0, [4], [16]
         0x3bbdad62867f @   39 : 0b fa             Ldar r0
 6248 S> 0x3bbdad628681 @   41 : a9                Return 
Constant pool (size = 5)
0x3bbdad628689: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 5
           0: 0x3bbdad6257d9 <String[15]: #serializeCommon>
           1: 0x3bbdad625e99 <String[10]: #_direction>
           2: 0x3d7752dc39a1 <String[9]: #direction>
           3: 0x3bbdad625a61 <String[11]: #personality>
           4: 0x3d7752dc4381 <String[5]: #style>
Handler Table (size = 0)
Source Position Table (size = 17)
0x3bbdad6286c1 <ByteArray[17]>
0x3bbdad628751 points to: [0x3bbdad6287c0]
=== [0x3bbdad6287c0] DISASSEMBLY ===
Parameter count 1
Register count 2
Frame size 16
OSR urgency: 0
Bytecode age: 0
 6319 S> 0x3bbdad6287c0 @    0 : 2d 02 00 00       GetNamedProperty <this>, [0], [0]
         0x3bbdad6287c4 @    4 : c3                Star1 
 6319 E> 0x3bbdad6287c5 @    5 : 5d f9 02 02       CallProperty0 r1, <this>, [2]
         0x3bbdad6287c9 @    9 : c3                Star1 
         0x3bbdad6287ca @   10 : 7e f9 29 04       CloneObject r1, #41, [4]
         0x3bbdad6287ce @   14 : c4                Star0 
 6366 E> 0x3bbdad6287cf @   15 : 2d 02 01 06       GetNamedProperty <this>, [1], [6]
         0x3bbdad6287d3 @   19 : 33 fa 02 08       DefineNamedOwnProperty r0, [2], [8]
 6408 E> 0x3bbdad6287d7 @   23 : 2d 02 03 0a       GetNamedProperty <this>, [3], [10]
         0x3bbdad6287db @   27 : 33 fa 03 0c       DefineNamedOwnProperty r0, [3], [12]
 6445 E> 0x3bbdad6287df @   31 : 2d 02 04 0e       GetNamedProperty <this>, [4], [14]
         0x3bbdad6287e3 @   35 : c3                Star1 
 6474 E> 0x3bbdad6287e4 @   36 : 2d 02 05 10       GetNamedProperty <this>, [5], [16]
 6468 E> 0x3bbdad6287e8 @   40 : 2f f9 12          GetKeyedProperty r1, [18]
         0x3bbdad6287eb @   43 : 33 fa 05 14       DefineNamedOwnProperty r0, [5], [20]
         0x3bbdad6287ef @   47 : 0b fa             Ldar r0
 6492 S> 0x3bbdad6287f1 @   49 : a9                Return 
Constant pool (size = 6)
0x3bbdad6287f9: [FixedArray] in OldSpace
 - map: 0x3d7752dc12e1 <Map>
 - length: 6
           0: 0x3bbdad6257d9 <String[15]: #serializeCommon>
           1: 0x3bbdad625e99 <String[10]: #_direction>
           2: 0x3d7752dc39a1 <String[9]: #direction>
           3: 0x3bbdad625a61 <String[11]: #personality>
           4: 0x3bbdad625e31 <String[23]: #threatStyleHumanizedMap>
           5: 0x3d7752dc4381 <String[5]: #style>
Handler Table (size = 0)
Source Position Table (size = 24)
0x3bbdad628839 <ByteArray[24]>
<< OUTPUTTING DISASSEMBLY END >>
