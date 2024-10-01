<< OUTPUTTING DISASSEMBLY BEGIN >>
=== [0x244aaaee4f18] DISASSEMBLY ===
Parameter count 1
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
    0 S> 0x244aaaee4f18 @    0 : 80 00 00 00       CreateClosure [0], [0], #0
         0x244aaaee4f1c @    4 : c4                Star0 
 6877 S> 0x244aaaee4f1d @    5 : a9                Return 
Constant pool (size = 1)
0x244aaaee4f21: [FixedArray] in OldSpace
 - map: 0x030cfee812e1 <Map>
 - length: 1
           0: 0x244aaaee4f39 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 8)
0x244aaaee7971 <ByteArray[8]>
0x244aaaee4f39 points to: [0x244aaaee4fa8]
=== [0x244aaaee4fa8] DISASSEMBLY ===
Parameter count 6
Register count 23
Frame size 184
OSR urgency: 0
Bytecode age: 0
   10 E> 0x244aaaee4fa8 @    0 : 83 00 03          CreateFunctionContext [0], [3]
         0x244aaaee4fab @    3 : 1a f7             PushContext r3
         0x244aaaee4fad @    5 : 10                LdaTheHole 
         0x244aaaee4fae @    6 : 25 02             StaCurrentContextSlot [2]
         0x244aaaee4fb0 @    8 : 10                LdaTheHole 
         0x244aaaee4fb1 @    9 : 25 03             StaCurrentContextSlot [3]
         0x244aaaee4fb3 @   11 : 10                LdaTheHole 
         0x244aaaee4fb4 @   12 : 25 04             StaCurrentContextSlot [4]
   98 S> 0x244aaaee4fb6 @   14 : 0b 02             Ldar <this>
         0x244aaaee4fb8 @   16 : 97 06             JumpIfToBooleanFalse [6] (0x244aaaee4fbe @ 22)
  112 E> 0x244aaaee4fba @   18 : 2d 02 01 00       GetNamedProperty <this>, [1], [0]
         0x244aaaee4fbe @   22 : 96 06             JumpIfToBooleanTrue [6] (0x244aaaee4fc4 @ 28)
         0x244aaaee4fc0 @   24 : 80 02 00 02       CreateClosure [2], [0], #2
         0x244aaaee4fc4 @   28 : c4                Star0 
  215 S> 0x244aaaee4fc5 @   29 : 21 03 02          LdaGlobal [3], [2]
         0x244aaaee4fc8 @   32 : bf                Star5 
  222 E> 0x244aaaee4fc9 @   33 : 2d f5 04 04       GetNamedProperty r5, [4], [4]
         0x244aaaee4fcd @   37 : c0                Star4 
         0x244aaaee4fce @   38 : 13 05             LdaConstant [5]
         0x244aaaee4fd0 @   40 : bd                Star7 
  237 E> 0x244aaaee4fd1 @   41 : 7c 06 06 29       CreateObjectLiteral [6], [6], #41
         0x244aaaee4fd5 @   45 : bc                Star8 
         0x244aaaee4fd6 @   46 : 19 03 f4          Mov a0, r6
  222 E> 0x244aaaee4fd9 @   49 : 5c f6 f5 04 07    CallProperty r4, r5-r8, [7]
  298 S> 0x244aaaee4fde @   54 : 13 07             LdaConstant [7]
         0x244aaaee4fe0 @   56 : bf                Star5 
  298 E> 0x244aaaee4fe1 @   57 : 62 04 f5 09       CallUndefinedReceiver1 a1, r5, [9]
  298 E> 0x244aaaee4fe5 @   61 : 25 02             StaCurrentContextSlot [2]
  344 S> 0x244aaaee4fe7 @   63 : 13 08             LdaConstant [8]
         0x244aaaee4fe9 @   65 : bf                Star5 
  344 E> 0x244aaaee4fea @   66 : 62 04 f5 0b       CallUndefinedReceiver1 a1, r5, [11]
  344 E> 0x244aaaee4fee @   70 : 25 03             StaCurrentContextSlot [3]
  386 S> 0x244aaaee4ff0 @   72 : 13 09             LdaConstant [9]
         0x244aaaee4ff2 @   74 : be                Star6 
  402 E> 0x244aaaee4ff3 @   75 : 62 04 f4 0d       CallUndefinedReceiver1 a1, r6, [13]
         0x244aaaee4ff7 @   79 : bf                Star5 
  386 E> 0x244aaaee4ff8 @   80 : 62 fa f5 0f       CallUndefinedReceiver1 r0, r5, [15]
         0x244aaaee4ffc @   84 : c3                Star1 
  501 S> 0x244aaaee4ffd @   85 : 13 0a             LdaConstant [10]
         0x244aaaee4fff @   87 : c2                Star2 
 3353 S> 0x244aaaee5000 @   88 : 2d f9 0b 11       GetNamedProperty r1, [11], [17]
         0x244aaaee5004 @   92 : 18 e7             Star r19
 3362 E> 0x244aaaee5006 @   94 : 21 0c 13          LdaGlobal [12], [19]
         0x244aaaee5009 @   97 : 18 e5             Star r21
 3370 E> 0x244aaaee500b @   99 : 2d e5 0d 15       GetNamedProperty r21, [13], [21]
         0x244aaaee500f @  103 : 18 e5             Star r21
 3375 E> 0x244aaaee5011 @  105 : 2d e5 0e 17       GetNamedProperty r21, [14], [23]
         0x244aaaee5015 @  109 : 18 e6             Star r20
         0x244aaaee5017 @  111 : 0d 02             LdaSmi [2]
         0x244aaaee5019 @  113 : 18 e4             Star r22
 3375 E> 0x244aaaee501b @  115 : 5e e6 e5 e4 19    CallProperty1 r20, r21, r22, [25]
         0x244aaaee5020 @  120 : 18 e6             Star r20
 3361 E> 0x244aaaee5022 @  122 : 62 e7 e6 1b       CallUndefinedReceiver1 r19, r20, [27]
         0x244aaaee5026 @  126 : 18 e7             Star r19
 3389 E> 0x244aaaee5028 @  128 : 2d e7 0f 1d       GetNamedProperty r19, [15], [29]
         0x244aaaee502c @  132 : 18 e8             Star r18
         0x244aaaee502e @  134 : 7c 10 1f 08       CreateObjectLiteral [16], [31], #8
         0x244aaaee5032 @  138 : 18 e6             Star r20
 3390 E> 0x244aaaee5034 @  140 : 5e e8 e7 e6 20    CallProperty1 r18, r19, r20, [32]
         0x244aaaee5039 @  145 : 18 e8             Star r18
 4664 E> 0x244aaaee503b @  147 : 2d e8 11 22       GetNamedProperty r18, [17], [34]
         0x244aaaee503f @  151 : 18 e9             Star r17
 4673 E> 0x244aaaee5041 @  153 : 21 0c 13          LdaGlobal [12], [19]
         0x244aaaee5044 @  156 : 18 e7             Star r19
 4681 E> 0x244aaaee5046 @  158 : 2d e7 12 24       GetNamedProperty r19, [18], [36]
         0x244aaaee504a @  162 : 18 e7             Star r19
 4685 E> 0x244aaaee504c @  164 : 2d e7 13 26       GetNamedProperty r19, [19], [38]
         0x244aaaee5050 @  168 : 96 04             JumpIfToBooleanTrue [4] (0x244aaaee5054 @ 172)
         0x244aaaee5052 @  170 : 13 14             LdaConstant [20]
         0x244aaaee5054 @  172 : 18 e7             Star r19
 4665 E> 0x244aaaee5056 @  174 : 5e e9 e8 e7 28    CallProperty1 r17, r18, r19, [40]
         0x244aaaee505b @  179 : 18 e9             Star r17
 4707 E> 0x244aaaee505d @  181 : 2d e9 15 2a       GetNamedProperty r17, [21], [42]
         0x244aaaee5061 @  185 : 18 ea             Star r16
         0x244aaaee5063 @  187 : 13 16             LdaConstant [22]
         0x244aaaee5065 @  189 : 18 e8             Star r18
 4708 E> 0x244aaaee5067 @  191 : 5e ea e9 e8 2c    CallProperty1 r16, r17, r18, [44]
         0x244aaaee506c @  196 : 18 ea             Star r16
 4739 E> 0x244aaaee506e @  198 : 2d ea 15 2e       GetNamedProperty r16, [21], [46]
         0x244aaaee5072 @  202 : b5                Star15 
         0x244aaaee5073 @  203 : 13 17             LdaConstant [23]
         0x244aaaee5075 @  205 : 18 e9             Star r17
 4740 E> 0x244aaaee5077 @  207 : 5e eb ea e9 30    CallProperty1 r15, r16, r17, [48]
         0x244aaaee507c @  212 : b5                Star15 
 4763 E> 0x244aaaee507d @  213 : 2d eb 15 32       GetNamedProperty r15, [21], [50]
         0x244aaaee5081 @  217 : b6                Star14 
         0x244aaaee5082 @  218 : 13 18             LdaConstant [24]
         0x244aaaee5084 @  220 : 18 ea             Star r16
 4764 E> 0x244aaaee5086 @  222 : 5e ec eb ea 34    CallProperty1 r14, r15, r16, [52]
         0x244aaaee508b @  227 : b6                Star14 
 4785 E> 0x244aaaee508c @  228 : 2d ec 15 36       GetNamedProperty r14, [21], [54]
         0x244aaaee5090 @  232 : b7                Star13 
         0x244aaaee5091 @  233 : 13 19             LdaConstant [25]
         0x244aaaee5093 @  235 : b5                Star15 
 4786 E> 0x244aaaee5094 @  236 : 5e ed ec eb 38    CallProperty1 r13, r14, r15, [56]
         0x244aaaee5099 @  241 : b7                Star13 
 4805 E> 0x244aaaee509a @  242 : 2d ed 15 3a       GetNamedProperty r13, [21], [58]
         0x244aaaee509e @  246 : b8                Star12 
         0x244aaaee509f @  247 : 13 1a             LdaConstant [26]
         0x244aaaee50a1 @  249 : b6                Star14 
 4806 E> 0x244aaaee50a2 @  250 : 5e ee ed ec 3c    CallProperty1 r12, r13, r14, [60]
         0x244aaaee50a7 @  255 : b8                Star12 
 4828 E> 0x244aaaee50a8 @  256 : 2d ee 15 3e       GetNamedProperty r12, [21], [62]
         0x244aaaee50ac @  260 : b9                Star11 
         0x244aaaee50ad @  261 : 13 1b             LdaConstant [27]
         0x244aaaee50af @  263 : b7                Star13 
 4829 E> 0x244aaaee50b0 @  264 : 5e ef ee ed 40    CallProperty1 r11, r12, r13, [64]
         0x244aaaee50b5 @  269 : b9                Star11 
 4858 E> 0x244aaaee50b6 @  270 : 2d ef 15 42       GetNamedProperty r11, [21], [66]
         0x244aaaee50ba @  274 : ba                Star10 
         0x244aaaee50bb @  275 : 13 1c             LdaConstant [28]
         0x244aaaee50bd @  277 : b8                Star12 
 4859 E> 0x244aaaee50be @  278 : 5e f0 ef ee 44    CallProperty1 r10, r11, r12, [68]
         0x244aaaee50c3 @  283 : ba                Star10 
 4879 E> 0x244aaaee50c4 @  284 : 2d f0 15 46       GetNamedProperty r10, [21], [70]
         0x244aaaee50c8 @  288 : bb                Star9 
         0x244aaaee50c9 @  289 : 13 1d             LdaConstant [29]
         0x244aaaee50cb @  291 : b9                Star11 
 4880 E> 0x244aaaee50cc @  292 : 5e f1 f0 ef 48    CallProperty1 r9, r10, r11, [72]
         0x244aaaee50d1 @  297 : bb                Star9 
 4897 E> 0x244aaaee50d2 @  298 : 2d f1 15 4a       GetNamedProperty r9, [21], [74]
         0x244aaaee50d6 @  302 : bc                Star8 
         0x244aaaee50d7 @  303 : 13 11             LdaConstant [17]
         0x244aaaee50d9 @  305 : ba                Star10 
 4898 E> 0x244aaaee50da @  306 : 5e f2 f1 f0 4c    CallProperty1 r8, r9, r10, [76]
         0x244aaaee50df @  311 : bc                Star8 
 4918 E> 0x244aaaee50e0 @  312 : 2d f2 15 4e       GetNamedProperty r8, [21], [78]
         0x244aaaee50e4 @  316 : bd                Star7 
         0x244aaaee50e5 @  317 : 13 1e             LdaConstant [30]
         0x244aaaee50e7 @  319 : bb                Star9 
 4919 E> 0x244aaaee50e8 @  320 : 5e f3 f2 f1 50    CallProperty1 r7, r8, r9, [80]
         0x244aaaee50ed @  325 : bd                Star7 
 4942 E> 0x244aaaee50ee @  326 : 2d f3 1f 52       GetNamedProperty r7, [31], [82]
         0x244aaaee50f2 @  330 : be                Star6 
         0x244aaaee50f3 @  331 : 13 1e             LdaConstant [30]
         0x244aaaee50f5 @  333 : bc                Star8 
         0x244aaaee50f6 @  334 : 13 20             LdaConstant [32]
         0x244aaaee50f8 @  336 : bb                Star9 
 4943 E> 0x244aaaee50f9 @  337 : 5f f4 f3 f2 f1 54 CallProperty2 r6, r7, r8, r9, [84]
         0x244aaaee50ff @  343 : be                Star6 
 5040 E> 0x244aaaee5100 @  344 : 2d f4 12 56       GetNamedProperty r6, [18], [86]
         0x244aaaee5104 @  348 : bf                Star5 
         0x244aaaee5105 @  349 : 11                LdaTrue 
         0x244aaaee5106 @  350 : bd                Star7 
 5041 E> 0x244aaaee5107 @  351 : 5e f5 f4 f3 58    CallProperty1 r5, r6, r7, [88]
         0x244aaaee510c @  356 : bf                Star5 
 5055 E> 0x244aaaee510d @  357 : 2d f5 21 5a       GetNamedProperty r5, [33], [90]
         0x244aaaee5111 @  361 : c0                Star4 
 5056 E> 0x244aaaee5112 @  362 : 5d f6 f5 5c       CallProperty0 r4, r5, [92]
 3341 E> 0x244aaaee5116 @  366 : 25 04             StaCurrentContextSlot [4]
 5069 S> 0x244aaaee5118 @  368 : 80 22 01 02       CreateClosure [34], [1], #2
         0x244aaaee511c @  372 : bf                Star5 
 6627 E> 0x244aaaee511d @  373 : 61 f5 5e          CallUndefinedReceiver0 r5, [94]
         0x244aaaee5120 @  376 : bf                Star5 
 6629 E> 0x244aaaee5121 @  377 : 2d f5 23 60       GetNamedProperty r5, [35], [96]
         0x244aaaee5125 @  381 : c0                Star4 
         0x244aaaee5126 @  382 : 80 24 02 02       CreateClosure [36], [2], #2
         0x244aaaee512a @  386 : be                Star6 
 6635 E> 0x244aaaee512b @  387 : 5e f6 f5 f4 62    CallProperty1 r4, r5, r6, [98]
         0x244aaaee5130 @  392 : 0e                LdaUndefined 
 6874 S> 0x244aaaee5131 @  393 : a9                Return 
Constant pool (size = 37)
0x244aaaee5139: [FixedArray] in OldSpace
 - map: 0x030cfee812e1 <Map>
 - length: 37
           0: 0x244aaaee5271 <ScopeInfo FUNCTION_SCOPE>
           1: 0x244aaaee5339 <String[15]: #__importDefault>
           2: 0x244aaaee5359 <SharedFunctionInfo>
           3: 0x030cfee85ab9 <String[6]: #Object>
           4: 0x030cfee84c11 <String[14]: #defineProperty>
           5: 0x244aaaee5411 <String[10]: #__esModule>
           6: 0x244aaaee65d9 <ObjectBoilerplateDescription[3]>
           7: 0x244aaaee6601 <String[16]: #@blitz/challenge>
           8: 0x244aaaee6621 <String[13]: #@blitz/engine>
           9: 0x244aaaee6641 <String[5]: #yargs>
          10: 0x244aaaee6659 <String[2823]: #...<truncated>>>
          11: 0x030cfee84bf9 <String[7]: #default>
          12: 0x05e06df81939 <String[7]: #process>
          13: 0x3b175bdb1881 <String[4]: #argv>
          14: 0x05e06df87319 <String[5]: #slice>
          15: 0x05e06df8cbb9 <String[7]: #options>
          16: 0x244aaaee71b9 <ObjectBoilerplateDescription[27]>
          17: 0x05e06df99699 <String[7]: #version>
          18: 0x05e06dfa2b81 <String[3]: #env>
          19: 0x244aaaee77c9 <String[7]: #VERSION>
          20: 0x244aaaee77e1 <String[3]: #DEV>
          21: 0x244aaaee77f9 <String[4]: #hide>
          22: 0x244aaaee5ec1 <String[18]: #gameStartTimeoutMs>
          23: 0x244aaaee5fa1 <String[10]: #recordPath>
          24: 0x244aaaee6109 <String[8]: #s3Bucket>
          25: 0x244aaaee6121 <String[6]: #s3Path>
          26: 0x244aaaee1801 <String[9]: #keepAlive>
          27: 0x244aaaee5fc1 <String[16]: #teamNamesByToken>
          28: 0x244aaaee6031 <String[7]: #serveUi>
          29: 0x05e06df99081 <String[4]: #port>
          30: 0x244aaaee5cb1 <String[10]: #randomSeed>
          31: 0x244aaaee7811 <String[5]: #alias>
          32: 0x244aaaee7829 <String[7]: #mapName>
          33: 0x244aaaee7841 <String[9]: #parseSync>
          34: 0x244aaaee55f1 <SharedFunctionInfo>
          35: 0x05e06df9b5c9 <String[5]: #catch>
          36: 0x244aaaee6391 <SharedFunctionInfo>
Handler Table (size = 0)
Source Position Table (size = 140)
0x244aaaee7879 <ByteArray[140]>
0x244aaaee5359 points to: [0x244aaaee53c8]
=== [0x244aaaee53c8] DISASSEMBLY ===
Parameter count 2
Register count 1
Frame size 8
OSR urgency: 0
Bytecode age: 0
  153 S> 0x244aaaee53c8 @    0 : 0b 03             Ldar a0
         0x244aaaee53ca @    2 : 97 0c             JumpIfToBooleanFalse [12] (0x244aaaee53d6 @ 14)
  172 E> 0x244aaaee53cc @    4 : 2d 03 00 00       GetNamedProperty a0, [0], [0]
         0x244aaaee53d0 @    8 : 97 06             JumpIfToBooleanFalse [6] (0x244aaaee53d6 @ 14)
         0x244aaaee53d2 @   10 : 0b 03             Ldar a0
         0x244aaaee53d4 @   12 : 8a 0f             Jump [15] (0x244aaaee53e3 @ 27)
  186 E> 0x244aaaee53d6 @   14 : 7c 01 02 29       CreateObjectLiteral [1], [2], #41
         0x244aaaee53da @   18 : c4                Star0 
         0x244aaaee53db @   19 : 0b 03             Ldar a0
  205 E> 0x244aaaee53dd @   21 : 33 fa 02 03       DefineNamedOwnProperty r0, [2], [3]
         0x244aaaee53e1 @   25 : 0b fa             Ldar r0
  211 S> 0x244aaaee53e3 @   27 : a9                Return 
Constant pool (size = 3)
0x244aaaee53e9: [FixedArray] in OldSpace
 - map: 0x030cfee812e1 <Map>
 - length: 3
           0: 0x244aaaee5411 <String[10]: #__esModule>
           1: 0x244aaaee5431 <ObjectBoilerplateDescription[3]>
           2: 0x030cfee84bf9 <String[7]: #default>
Handler Table (size = 0)
Source Position Table (size = 13)
0x244aaaee5459 <ByteArray[13]>
Boilerplate at 0x244aaaee5431: 
0x244aaaee5431: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 3
           0: 8
           1: 0x030cfee84bf9 <String[7]: #default>
           2: 0x030cfee81501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x244aaaee65d9: 
0x244aaaee65d9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 3
           0: 8
           1: 0x030cfee86419 <String[5]: #value>
           2: 0x030cfee81729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x244aaaee71b9: 
0x244aaaee71b9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 27
           0: 8
           1: 0x244aaaee5ea1 <String[13]: #timePerTickMs>
           2: 0x244aaaee72a1 <ObjectBoilerplateDescription[7]>
           3: 0x244aaaee5ee9 <String[19]: #delayBetweenTicksMs>
           4: 0x244aaaee7341 <ObjectBoilerplateDescription[7]>
           5: 0x244aaaee5ec1 <String[18]: #gameStartTimeoutMs>
           6: 0x244aaaee73b9 <ObjectBoilerplateDescription[7]>
           7: 0x244aaaee5fa1 <String[10]: #recordPath>
           8: 0x244aaaee7431 <ObjectBoilerplateDescription[5]>
           9: 0x244aaaee5cb1 <String[10]: #randomSeed>
          10: 0x244aaaee7499 <ObjectBoilerplateDescription[3]>
          11: 0x244aaaee6109 <String[8]: #s3Bucket>
          12: 0x244aaaee74c1 <ObjectBoilerplateDescription[3]>
          13: 0x244aaaee6121 <String[6]: #s3Path>
          14: 0x244aaaee74e9 <ObjectBoilerplateDescription[3]>
          15: 0x244aaaee1801 <String[9]: #keepAlive>
          16: 0x244aaaee7511 <ObjectBoilerplateDescription[7]>
          17: 0x244aaaee5fc1 <String[16]: #teamNamesByToken>
          18: 0x244aaaee75a9 <ObjectBoilerplateDescription[3]>
          19: 0x244aaaee6011 <String[14]: #teamIdsByToken>
          20: 0x244aaaee75d1 <ObjectBoilerplateDescription[3]>
          21: 0x244aaaee6031 <String[7]: #serveUi>
          22: 0x244aaaee75f9 <ObjectBoilerplateDescription[5]>
          23: 0x05e06df99081 <String[4]: #port>
          24: 0x244aaaee7631 <ObjectBoilerplateDescription[7]>
          25: 0x244aaaee5a71 <String[9]: #heartbeat>
          26: 0x244aaaee76a9 <ObjectBoilerplateDescription[5]>
[start ObjectBoilerplate nested objects]
0x244aaaee72a1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 7
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee85a81 <String[6]: #number>
           3: 0x030cfee84bf9 <String[7]: #default>
           4: 1000
           5: 0x05e06df9aef1 <String[11]: #description>
           6: 0x244aaaee7309 <String[38]: #Max time the game will wait for a tick>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee7341: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 7
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee85a81 <String[6]: #number>
           3: 0x030cfee84bf9 <String[7]: #default>
           4: 50
           5: 0x05e06df9aef1 <String[11]: #description>
           6: 0x244aaaee7389 <String[26]: #Time to wait between ticks>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee73b9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 7
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee85a81 <String[6]: #number>
           3: 0x030cfee84bf9 <String[7]: #default>
           4: 500000
           5: 0x05e06df9aef1 <String[11]: #description>
           6: 0x244aaaee7401 <String[30]: #Delay before starting the game>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee7431: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 5
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee86159 <String[6]: #string>
           3: 0x05e06df9aef1 <String[11]: #description>
           4: 0x244aaaee7469 <String[29]: #File path to record replay to>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee7499: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 3
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee86159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee74c1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 3
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee86159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee74e9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 3
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee86159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee7511: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 7
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee81771 <String[7]: #boolean>
           3: 0x030cfee84bf9 <String[7]: #default>
           4: 0x030cfee81729 <true>
           5: 0x05e06df9aef1 <String[11]: #description>
           6: 0x244aaaee7559 <String[59]: #Indicates if the game should close or restart on completion>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee75a9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 3
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee86159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee75d1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 3
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee86159 <String[6]: #string>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee75f9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 5
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee81771 <String[7]: #boolean>
           3: 0x030cfee84bf9 <String[7]: #default>
           4: 0x030cfee81729 <true>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee7631: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 7
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee85a81 <String[6]: #number>
           3: 0x05e06df9aef1 <String[11]: #description>
           4: 0x244aaaee7679 <String[30]: #The port of the server backend>
           5: 0x030cfee84bf9 <String[7]: #default>
           6: 8765
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee76a9: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 5
           0: 8
           1: 0x030cfee84469 <String[4]: #type>
           2: 0x030cfee81771 <String[7]: #boolean>
           3: 0x05e06df9aef1 <String[11]: #description>
           4: 0x244aaaee76e1 <String[165]: #When running with this option, sends a heartbeat to an already running server on localhost and exits. If successful, exit with 0, otherwise, exit with non-zero code.>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee55f1 points to: [0x244aaaee5660]
=== [0x244aaaee5660] DISASSEMBLY ===
Parameter count 1
Register count 13
Frame size 104
OSR urgency: 0
Bytecode age: 0
         0x244aaaee5660 @    0 : ae fa 00 03       SwitchOnGeneratorState r0, [0], [3] { 0: @88, 1: @377, 2: @609 }
         0x244aaaee5664 @    4 : 19 fe f4          Mov <closure>, r6
         0x244aaaee5667 @    7 : 19 02 f3          Mov <this>, r7
 5070 E> 0x244aaaee566a @   10 : 68 02 f4 02       InvokeIntrinsic [_AsyncFunctionEnter], r6-r7
         0x244aaaee566e @   14 : c4                Star0 
         0x244aaaee566f @   15 : 19 ff f4          Mov <context>, r6
 5088 S> 0x244aaaee5672 @   18 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x244aaaee5674 @   20 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee5676 @   22 : bd                Star7 
 5097 E> 0x244aaaee5677 @   23 : 2d f3 04 00       GetNamedProperty r7, [4], [0]
         0x244aaaee567b @   27 : 97 5e             JumpIfToBooleanFalse [94] (0x244aaaee56d9 @ 121)
 5118 S> 0x244aaaee567d @   29 : 21 05 02          LdaGlobal [5], [2]
         0x244aaaee5680 @   32 : bc                Star8 
 5126 E> 0x244aaaee5681 @   33 : 2d f2 06 04       GetNamedProperty r8, [6], [4]
         0x244aaaee5685 @   37 : bd                Star7 
         0x244aaaee5686 @   38 : 17 03             LdaImmutableCurrentContextSlot [3]
 5138 E> 0x244aaaee5688 @   40 : aa 07             ThrowReferenceErrorIfHole [7]
         0x244aaaee568a @   42 : ba                Star10 
 5147 E> 0x244aaaee568b @   43 : 2d f0 08 06       GetNamedProperty r10, [8], [6]
         0x244aaaee568f @   47 : ba                Star10 
 5154 E> 0x244aaaee5690 @   48 : 2d f0 04 08       GetNamedProperty r10, [4], [8]
         0x244aaaee5694 @   52 : bb                Star9 
         0x244aaaee5695 @   53 : 13 09             LdaConstant [9]
         0x244aaaee5697 @   55 : b9                Star11 
         0x244aaaee5698 @   56 : 17 04             LdaImmutableCurrentContextSlot [4]
 5184 E> 0x244aaaee569a @   58 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee569c @   60 : b8                Star12 
 5189 E> 0x244aaaee569d @   61 : 2d ee 0a 0b       GetNamedProperty r12, [10], [11]
         0x244aaaee56a1 @   65 : 77                ToString 
         0x244aaaee56a2 @   66 : 39 ef 0a          Add r11, [10]
         0x244aaaee56a5 @   69 : b9                Star11 
 5154 E> 0x244aaaee56a6 @   70 : 5e f1 f0 ef 0d    CallProperty1 r9, r10, r11, [13]
         0x244aaaee56ab @   75 : ba                Star10 
         0x244aaaee56ac @   76 : 19 fa f1          Mov r0, r9
         0x244aaaee56af @   79 : 68 01 f1 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r9-r10
 5132 E> 0x244aaaee56b3 @   83 : af fa fa 09 00    SuspendGenerator r0, r0-r8, [0]
         0x244aaaee56b8 @   88 : b0 fa fa 09       ResumeGenerator r0, r0-r8
         0x244aaaee56bc @   92 : bb                Star9 
         0x244aaaee56bd @   93 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x244aaaee56c1 @   97 : ba                Star10 
         0x244aaaee56c2 @   98 : 0c                LdaZero 
         0x244aaaee56c3 @   99 : 1c f0             TestReferenceEqual r10
         0x244aaaee56c5 @  101 : 98 05             JumpIfTrue [5] (0x244aaaee56ca @ 106)
         0x244aaaee56c7 @  103 : 0b f1             Ldar r9
         0x244aaaee56c9 @  105 : a8                ReThrow 
         0x244aaaee56ca @  106 : 0b f1             Ldar r9
         0x244aaaee56cc @  108 : 97 05             JumpIfToBooleanFalse [5] (0x244aaaee56d1 @ 113)
         0x244aaaee56ce @  110 : 0c                LdaZero 
         0x244aaaee56cf @  111 : 8a 04             Jump [4] (0x244aaaee56d3 @ 115)
         0x244aaaee56d1 @  113 : 0d 01             LdaSmi [1]
         0x244aaaee56d3 @  115 : bb                Star9 
 5126 E> 0x244aaaee56d4 @  116 : 5e f3 f2 f1 0f    CallProperty1 r7, r8, r9, [15]
 5246 S> 0x244aaaee56d9 @  121 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x244aaaee56db @  123 : aa 07             ThrowReferenceErrorIfHole [7]
         0x244aaaee56dd @  125 : bd                Star7 
 5259 E> 0x244aaaee56de @  126 : 2d f3 0b 11       GetNamedProperty r7, [11], [17]
         0x244aaaee56e2 @  130 : bd                Star7 
         0x244aaaee56e3 @  131 : 80 0c 00 02       CreateClosure [12], [0], #2
         0x244aaaee56e7 @  135 : bc                Star8 
         0x244aaaee56e8 @  136 : 7c 0d 13 29       CreateObjectLiteral [13], [19], #41
         0x244aaaee56ec @  140 : bb                Star9 
         0x244aaaee56ed @  141 : 17 04             LdaImmutableCurrentContextSlot [4]
 5482 E> 0x244aaaee56ef @  143 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee56f1 @  145 : ba                Star10 
 5487 E> 0x244aaaee56f2 @  146 : 2d f0 0e 14       GetNamedProperty r10, [14], [20]
         0x244aaaee56f6 @  150 : 33 f1 0f 16       DefineNamedOwnProperty r9, [15], [22]
         0x244aaaee56fa @  154 : 17 04             LdaImmutableCurrentContextSlot [4]
 5547 E> 0x244aaaee56fc @  156 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee56fe @  158 : ba                Star10 
 5552 E> 0x244aaaee56ff @  159 : 2d f0 10 18       GetNamedProperty r10, [16], [24]
         0x244aaaee5703 @  163 : 33 f1 11 1a       DefineNamedOwnProperty r9, [17], [26]
         0x244aaaee5707 @  167 : 17 04             LdaImmutableCurrentContextSlot [4]
 5643 E> 0x244aaaee5709 @  169 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee570b @  171 : ba                Star10 
 5648 E> 0x244aaaee570c @  172 : 2d f0 12 1c       GetNamedProperty r10, [18], [28]
         0x244aaaee5710 @  176 : 33 f1 13 1e       DefineNamedOwnProperty r9, [19], [30]
         0x244aaaee5714 @  180 : 0b f3             Ldar r7
 5246 E> 0x244aaaee5716 @  182 : 69 f3 f2 02 20    Construct r7, r8-r9, [32]
         0x244aaaee571b @  187 : c3                Star1 
 5706 S> 0x244aaaee571c @  188 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x244aaaee571e @  190 : aa 07             ThrowReferenceErrorIfHole [7]
         0x244aaaee5720 @  192 : bc                Star8 
 5715 E> 0x244aaaee5721 @  193 : 2d f2 14 22       GetNamedProperty r8, [20], [34]
         0x244aaaee5725 @  197 : bc                Star8 
 5724 E> 0x244aaaee5726 @  198 : 2d f2 15 24       GetNamedProperty r8, [21], [36]
         0x244aaaee572a @  202 : bd                Star7 
 5742 E> 0x244aaaee572b @  203 : 7c 16 26 29       CreateObjectLiteral [22], [38], #41
         0x244aaaee572f @  207 : ba                Star10 
         0x244aaaee5730 @  208 : 17 04             LdaImmutableCurrentContextSlot [4]
 5791 E> 0x244aaaee5732 @  210 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee5734 @  212 : b9                Star11 
 5796 E> 0x244aaaee5735 @  213 : 2d ef 17 27       GetNamedProperty r11, [23], [39]
         0x244aaaee5739 @  217 : 55                ToBooleanLogicalNot 
         0x244aaaee573a @  218 : 56                LogicalNot 
         0x244aaaee573b @  219 : 33 f0 18 29       DefineNamedOwnProperty r10, [24], [41]
 5724 E> 0x244aaaee573f @  223 : 5f f3 f2 f9 f0 2b CallProperty2 r7, r8, r1, r10, [43]
         0x244aaaee5745 @  229 : c2                Star2 
 5853 S> 0x244aaaee5746 @  230 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x244aaaee5748 @  232 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee574a @  234 : bd                Star7 
 5858 E> 0x244aaaee574b @  235 : 2d f3 19 2d       GetNamedProperty r7, [25], [45]
         0x244aaaee574f @  239 : 97 1c             JumpIfToBooleanFalse [28] (0x244aaaee576b @ 267)
 5877 E> 0x244aaaee5751 @  241 : 21 1a 2f          LdaGlobal [26], [47]
         0x244aaaee5754 @  244 : bc                Star8 
 5882 E> 0x244aaaee5755 @  245 : 2d f2 1b 31       GetNamedProperty r8, [27], [49]
         0x244aaaee5759 @  249 : bd                Star7 
         0x244aaaee575a @  250 : 17 04             LdaImmutableCurrentContextSlot [4]
 5888 E> 0x244aaaee575c @  252 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee575e @  254 : bb                Star9 
 5893 E> 0x244aaaee575f @  255 : 2d f1 19 2d       GetNamedProperty r9, [25], [45]
         0x244aaaee5763 @  259 : bb                Star9 
 5882 E> 0x244aaaee5764 @  260 : 5e f3 f2 f1 33    CallProperty1 r7, r8, r9, [51]
         0x244aaaee5769 @  265 : 8a 03             Jump [3] (0x244aaaee576c @ 268)
         0x244aaaee576b @  267 : 0f                LdaNull 
         0x244aaaee576c @  268 : c1                Star3 
 5950 S> 0x244aaaee576d @  269 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x244aaaee576f @  271 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee5771 @  273 : bd                Star7 
 5955 E> 0x244aaaee5772 @  274 : 2d f3 1c 35       GetNamedProperty r7, [28], [53]
         0x244aaaee5776 @  278 : 97 1c             JumpIfToBooleanFalse [28] (0x244aaaee5792 @ 306)
 5972 E> 0x244aaaee5778 @  280 : 21 1a 2f          LdaGlobal [26], [47]
         0x244aaaee577b @  283 : bc                Star8 
 5977 E> 0x244aaaee577c @  284 : 2d f2 1b 31       GetNamedProperty r8, [27], [49]
         0x244aaaee5780 @  288 : bd                Star7 
         0x244aaaee5781 @  289 : 17 04             LdaImmutableCurrentContextSlot [4]
 5983 E> 0x244aaaee5783 @  291 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee5785 @  293 : bb                Star9 
 5988 E> 0x244aaaee5786 @  294 : 2d f1 1c 35       GetNamedProperty r9, [28], [53]
         0x244aaaee578a @  298 : bb                Star9 
 5977 E> 0x244aaaee578b @  299 : 5e f3 f2 f1 37    CallProperty1 r7, r8, r9, [55]
         0x244aaaee5790 @  304 : 8a 03             Jump [3] (0x244aaaee5793 @ 307)
         0x244aaaee5792 @  306 : 0f                LdaNull 
         0x244aaaee5793 @  307 : c0                Star4 
 6035 S> 0x244aaaee5794 @  308 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x244aaaee5796 @  310 : aa 07             ThrowReferenceErrorIfHole [7]
         0x244aaaee5798 @  312 : bd                Star7 
 6048 E> 0x244aaaee5799 @  313 : 2d f3 08 06       GetNamedProperty r7, [8], [6]
         0x244aaaee579d @  317 : bd                Star7 
         0x244aaaee579e @  318 : 17 04             LdaImmutableCurrentContextSlot [4]
 6063 E> 0x244aaaee57a0 @  320 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee57a2 @  322 : bb                Star9 
 6068 E> 0x244aaaee57a3 @  323 : 2d f1 0a 0b       GetNamedProperty r9, [10], [11]
         0x244aaaee57a7 @  327 : bb                Star9 
         0x244aaaee57a8 @  328 : 17 04             LdaImmutableCurrentContextSlot [4]
 6074 E> 0x244aaaee57aa @  330 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee57ac @  332 : ba                Star10 
 6079 E> 0x244aaaee57ad @  333 : 2d f0 1d 39       GetNamedProperty r10, [29], [57]
         0x244aaaee57b1 @  337 : ba                Star10 
         0x244aaaee57b2 @  338 : 0b f3             Ldar r7
         0x244aaaee57b4 @  340 : 19 f9 f2          Mov r1, r8
         0x244aaaee57b7 @  343 : 19 f7 ef          Mov r3, r11
         0x244aaaee57ba @  346 : 19 f6 ee          Mov r4, r12
 6035 E> 0x244aaaee57bd @  349 : 69 f3 f2 05 3b    Construct r7, r8-r12, [59]
         0x244aaaee57c2 @  354 : bf                Star5 
 6144 S> 0x244aaaee57c3 @  355 : 2d f5 1e 3d       GetNamedProperty r5, [30], [61]
         0x244aaaee57c7 @  359 : bd                Star7 
 6144 E> 0x244aaaee57c8 @  360 : 5d f3 f5 3f       CallProperty0 r7, r5, [63]
         0x244aaaee57cc @  364 : bc                Star8 
         0x244aaaee57cd @  365 : 19 fa f3          Mov r0, r7
         0x244aaaee57d0 @  368 : 68 01 f3 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r7-r8
 6131 E> 0x244aaaee57d4 @  372 : af fa fa 07 01    SuspendGenerator r0, r0-r6, [1]
         0x244aaaee57d9 @  377 : b0 fa fa 07       ResumeGenerator r0, r0-r6
         0x244aaaee57dd @  381 : bd                Star7 
         0x244aaaee57de @  382 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x244aaaee57e2 @  386 : bc                Star8 
         0x244aaaee57e3 @  387 : 0c                LdaZero 
         0x244aaaee57e4 @  388 : 1c f2             TestReferenceEqual r8
         0x244aaaee57e6 @  390 : 98 05             JumpIfTrue [5] (0x244aaaee57eb @ 395)
         0x244aaaee57e8 @  392 : 0b f3             Ldar r7
         0x244aaaee57ea @  394 : a8                ReThrow 
 6162 S> 0x244aaaee57eb @  395 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x244aaaee57ed @  397 : aa 07             ThrowReferenceErrorIfHole [7]
         0x244aaaee57ef @  399 : bc                Star8 
 6171 E> 0x244aaaee57f0 @  400 : 2d f2 1f 41       GetNamedProperty r8, [31], [65]
         0x244aaaee57f4 @  404 : bc                Star8 
 6178 E> 0x244aaaee57f5 @  405 : 2d f2 20 43       GetNamedProperty r8, [32], [67]
         0x244aaaee57f9 @  409 : bd                Star7 
         0x244aaaee57fa @  410 : 13 21             LdaConstant [33]
         0x244aaaee57fc @  412 : bb                Star9 
 6178 E> 0x244aaaee57fd @  413 : 5e f3 f2 f1 45    CallProperty1 r7, r8, r9, [69]
 6223 S> 0x244aaaee5802 @  418 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x244aaaee5804 @  420 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee5806 @  422 : bd                Star7 
 6232 E> 0x244aaaee5807 @  423 : 2d f3 17 27       GetNamedProperty r7, [23], [39]
         0x244aaaee580b @  427 : 97 3b             JumpIfToBooleanFalse [59] (0x244aaaee5846 @ 486)
 6258 S> 0x244aaaee580d @  429 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x244aaaee580f @  431 : aa 07             ThrowReferenceErrorIfHole [7]
         0x244aaaee5811 @  433 : bc                Star8 
 6267 E> 0x244aaaee5812 @  434 : 2d f2 1f 41       GetNamedProperty r8, [31], [65]
         0x244aaaee5816 @  438 : bc                Star8 
 6274 E> 0x244aaaee5817 @  439 : 2d f2 20 47       GetNamedProperty r8, [32], [71]
         0x244aaaee581b @  443 : bd                Star7 
         0x244aaaee581c @  444 : 13 22             LdaConstant [34]
         0x244aaaee581e @  446 : bb                Star9 
         0x244aaaee581f @  447 : 17 04             LdaImmutableCurrentContextSlot [4]
 6303 E> 0x244aaaee5821 @  449 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee5823 @  451 : ba                Star10 
 6308 E> 0x244aaaee5824 @  452 : 2d f0 17 27       GetNamedProperty r10, [23], [39]
         0x244aaaee5828 @  456 : 77                ToString 
         0x244aaaee5829 @  457 : 39 f1 49          Add r9, [73]
         0x244aaaee582c @  460 : bb                Star9 
 6274 E> 0x244aaaee582d @  461 : 5e f3 f2 f1 4a    CallProperty1 r7, r8, r9, [74]
 6344 S> 0x244aaaee5832 @  466 : 2d f8 23 4c       GetNamedProperty r2, [35], [76]
         0x244aaaee5836 @  470 : bd                Star7 
         0x244aaaee5837 @  471 : 17 04             LdaImmutableCurrentContextSlot [4]
 6355 E> 0x244aaaee5839 @  473 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee583b @  475 : bb                Star9 
 6360 E> 0x244aaaee583c @  476 : 2d f1 17 27       GetNamedProperty r9, [23], [39]
         0x244aaaee5840 @  480 : bb                Star9 
 6344 E> 0x244aaaee5841 @  481 : 5e f3 f8 f1 4e    CallProperty1 r7, r2, r9, [78]
 6391 S> 0x244aaaee5846 @  486 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x244aaaee5848 @  488 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee584a @  490 : bd                Star7 
 6400 E> 0x244aaaee584b @  491 : 2d f3 24 50       GetNamedProperty r7, [36], [80]
         0x244aaaee584f @  495 : 97 86             JumpIfToBooleanFalse [134] (0x244aaaee58d5 @ 629)
         0x244aaaee5851 @  497 : 17 04             LdaImmutableCurrentContextSlot [4]
 6412 E> 0x244aaaee5853 @  499 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee5855 @  501 : bd                Star7 
 6417 E> 0x244aaaee5856 @  502 : 2d f3 25 52       GetNamedProperty r7, [37], [82]
         0x244aaaee585a @  506 : 97 7b             JumpIfToBooleanFalse [123] (0x244aaaee58d5 @ 629)
 6439 S> 0x244aaaee585c @  508 : 17 03             LdaImmutableCurrentContextSlot [3]
         0x244aaaee585e @  510 : aa 07             ThrowReferenceErrorIfHole [7]
         0x244aaaee5860 @  512 : bc                Star8 
 6448 E> 0x244aaaee5861 @  513 : 2d f2 1f 41       GetNamedProperty r8, [31], [65]
         0x244aaaee5865 @  517 : bc                Star8 
 6455 E> 0x244aaaee5866 @  518 : 2d f2 20 54       GetNamedProperty r8, [32], [84]
         0x244aaaee586a @  522 : bd                Star7 
         0x244aaaee586b @  523 : 13 26             LdaConstant [38]
         0x244aaaee586d @  525 : bb                Star9 
         0x244aaaee586e @  526 : 17 04             LdaImmutableCurrentContextSlot [4]
 6487 E> 0x244aaaee5870 @  528 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee5872 @  530 : ba                Star10 
 6492 E> 0x244aaaee5873 @  531 : 2d f0 24 50       GetNamedProperty r10, [36], [80]
         0x244aaaee5877 @  535 : 77                ToString 
         0x244aaaee5878 @  536 : 39 f1 56          Add r9, [86]
         0x244aaaee587b @  539 : bb                Star9 
         0x244aaaee587c @  540 : 13 27             LdaConstant [39]
         0x244aaaee587e @  542 : 39 f1 56          Add r9, [86]
         0x244aaaee5881 @  545 : bb                Star9 
         0x244aaaee5882 @  546 : 17 04             LdaImmutableCurrentContextSlot [4]
 6504 E> 0x244aaaee5884 @  548 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee5886 @  550 : ba                Star10 
 6509 E> 0x244aaaee5887 @  551 : 2d f0 25 52       GetNamedProperty r10, [37], [82]
         0x244aaaee588b @  555 : 77                ToString 
         0x244aaaee588c @  556 : 39 f1 56          Add r9, [86]
         0x244aaaee588f @  559 : bb                Star9 
 6455 E> 0x244aaaee5890 @  560 : 5e f3 f2 f1 57    CallProperty1 r7, r8, r9, [87]
 6547 S> 0x244aaaee5895 @  565 : 2d f8 28 59       GetNamedProperty r2, [40], [89]
         0x244aaaee5899 @  569 : bd                Star7 
         0x244aaaee589a @  570 : 17 04             LdaImmutableCurrentContextSlot [4]
 6556 E> 0x244aaaee589c @  572 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee589e @  574 : bb                Star9 
 6561 E> 0x244aaaee589f @  575 : 2d f1 24 50       GetNamedProperty r9, [36], [80]
         0x244aaaee58a3 @  579 : bb                Star9 
         0x244aaaee58a4 @  580 : 17 04             LdaImmutableCurrentContextSlot [4]
 6571 E> 0x244aaaee58a6 @  582 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee58a8 @  584 : ba                Star10 
 6576 E> 0x244aaaee58a9 @  585 : 2d f0 25 52       GetNamedProperty r10, [37], [82]
         0x244aaaee58ad @  589 : ba                Star10 
 6547 E> 0x244aaaee58ae @  590 : 5f f3 f8 f1 f0 5b CallProperty2 r7, r2, r9, r10, [91]
         0x244aaaee58b4 @  596 : bc                Star8 
         0x244aaaee58b5 @  597 : 19 fa f3          Mov r0, r7
         0x244aaaee58b8 @  600 : 68 01 f3 02       InvokeIntrinsic [_AsyncFunctionAwaitUncaught], r7-r8
 6532 E> 0x244aaaee58bc @  604 : af fa fa 07 02    SuspendGenerator r0, r0-r6, [2]
         0x244aaaee58c1 @  609 : b0 fa fa 07       ResumeGenerator r0, r0-r6
         0x244aaaee58c5 @  613 : bd                Star7 
         0x244aaaee58c6 @  614 : 68 0b fa 01       InvokeIntrinsic [_GeneratorGetResumeMode], r0-r0
         0x244aaaee58ca @  618 : bc                Star8 
         0x244aaaee58cb @  619 : 0c                LdaZero 
         0x244aaaee58cc @  620 : 1c f2             TestReferenceEqual r8
         0x244aaaee58ce @  622 : 98 05             JumpIfTrue [5] (0x244aaaee58d3 @ 627)
         0x244aaaee58d0 @  624 : 0b f3             Ldar r7
         0x244aaaee58d2 @  626 : a8                ReThrow 
         0x244aaaee58d3 @  627 : 0b f3             Ldar r7
 6613 S> 0x244aaaee58d5 @  629 : 17 04             LdaImmutableCurrentContextSlot [4]
         0x244aaaee58d7 @  631 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee58d9 @  633 : bd                Star7 
 6613 E> 0x244aaaee58da @  634 : 2d f3 29 5d       GetNamedProperty r7, [41], [93]
         0x244aaaee58de @  638 : 97 08             JumpIfToBooleanFalse [8] (0x244aaaee58e6 @ 646)
 5218 E> 0x244aaaee58e0 @  640 : 00 89 08 02 00 00 JumpLoop.Wide [520], [0] (0x244aaaee56d9 @ 121)
         0x244aaaee58e6 @  646 : 0e                LdaUndefined 
         0x244aaaee58e7 @  647 : bc                Star8 
         0x244aaaee58e8 @  648 : 19 fa f3          Mov r0, r7
         0x244aaaee58eb @  651 : 68 04 f3 02       InvokeIntrinsic [_AsyncFunctionResolve], r7-r8
 6625 S> 0x244aaaee58ef @  655 : a9                Return 
         0x244aaaee58f0 @  656 : bd                Star7 
         0x244aaaee58f1 @  657 : 82 f3 2a          CreateCatchContext r7, [42]
         0x244aaaee58f4 @  660 : be                Star6 
         0x244aaaee58f5 @  661 : 10                LdaTheHole 
         0x244aaaee58f6 @  662 : a6                SetPendingMessage 
         0x244aaaee58f7 @  663 : 0b f4             Ldar r6
         0x244aaaee58f9 @  665 : 1a f3             PushContext r7
         0x244aaaee58fb @  667 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x244aaaee58fd @  669 : bb                Star9 
         0x244aaaee58fe @  670 : 19 fa f2          Mov r0, r8
         0x244aaaee5901 @  673 : 68 03 f2 02       InvokeIntrinsic [_AsyncFunctionReject], r8-r9
         0x244aaaee5905 @  677 : a9                Return 
Constant pool (size = 43)
0x244aaaee5909: [FixedArray] in OldSpace
 - map: 0x030cfee812e1 <Map>
 - length: 43
           0: 88
           1: 377
           2: 609
           3: 0x05e06df97f81 <String[4]: #args>
           4: 0x244aaaee5a71 <String[9]: #heartbeat>
           5: 0x05e06df81939 <String[7]: #process>
           6: 0x05e06df88cd9 <String[4]: #exit>
           7: 0x244aaaee5309 <String[8]: #engine_1>
           8: 0x195ee3d97c39 <String[6]: #Server>
           9: 0x244aaaee5ad9 <String[17]: #http://localhost:>
          10: 0x05e06df99081 <String[4]: #port>
          11: 0x244aaaee5b19 <String[6]: #Engine>
          12: 0x244aaaee5b31 <SharedFunctionInfo>
          13: 0x244aaaee5da1 <ObjectBoilerplateDescription[9]>
          14: 0x244aaaee5ea1 <String[13]: #timePerTickMs>
          15: 0x244aaaee5df9 <String[21]: #timeMsAllowedPerTicks>
          16: 0x244aaaee5ec1 <String[18]: #gameStartTimeoutMs>
          17: 0x244aaaee5e21 <String[31]: #maxWaitTimeMsBeforeStartingGame>
          18: 0x244aaaee5ee9 <String[19]: #delayBetweenTicksMs>
          19: 0x244aaaee5e79 <String[19]: #delayMsBetweenTicks>
          20: 0x244aaaee5f11 <String[8]: #Recorder>
          21: 0x244aaaee5f29 <String[17]: #createAndRegister>
          22: 0x244aaaee5f51 <ObjectBoilerplateDescription[3]>
          23: 0x244aaaee5fa1 <String[10]: #recordPath>
          24: 0x244aaaee5f79 <String[23]: #keepAllCommandsAndTicks>
          25: 0x244aaaee5fc1 <String[16]: #teamNamesByToken>
          26: 0x05e06df9c529 <String[4]: #JSON>
          27: 0x05e06df8cb31 <String[5]: #parse>
          28: 0x244aaaee6011 <String[14]: #teamIdsByToken>
          29: 0x244aaaee6031 <String[7]: #serveUi>
          30: 0x195ee3d9bc41 <String[6]: #listen>
          31: 0x05e06df86461 <String[6]: #logger>
          32: 0x05e06df9c1f9 <String[4]: #info>
          33: 0x244aaaee6091 <String[27]: #Game finished, saving state>
          34: 0x244aaaee60c1 <String[21]: #Saving state file to >
          35: 0x244aaaee60e9 <String[10]: #saveToFile>
          36: 0x244aaaee6109 <String[8]: #s3Bucket>
          37: 0x244aaaee6121 <String[6]: #s3Path>
          38: 0x244aaaee6139 <String[24]: #Saving state file to S3 >
          39: 0x05e06df81179 <String[1]: #/>
          40: 0x244aaaee6179 <String[8]: #saveToS3>
          41: 0x244aaaee1801 <String[9]: #keepAlive>
          42: 0x244aaaee61b1 <ScopeInfo CATCH_SCOPE>
Handler Table (size = 16)
   from   to       hdlr (prediction,   data)
  (  18, 656)  ->   656 (prediction=3, data=6)
Source Position Table (size = 212)
0x244aaaee6209 <ByteArray[212]>
0x244aaaee5b31 points to: [0x244aaaee5ba0]
=== [0x244aaaee5ba0] DISASSEMBLY ===
Parameter count 2
Register count 6
Frame size 48
OSR urgency: 0
Bytecode age: 0
 5292 S> 0x244aaaee5ba0 @    0 : 17 02             LdaImmutableCurrentContextSlot [2]
         0x244aaaee5ba2 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x244aaaee5ba4 @    4 : c4                Star0 
 5315 E> 0x244aaaee5ba5 @    5 : 2d fa 01 00       GetNamedProperty r0, [1], [0]
         0x244aaaee5ba9 @    9 : c4                Star0 
 5334 E> 0x244aaaee5baa @   10 : 7c 02 02 29       CreateObjectLiteral [2], [2], #41
         0x244aaaee5bae @   14 : c2                Star2 
         0x244aaaee5baf @   15 : 17 04             LdaImmutableCurrentContextSlot [4]
 5373 E> 0x244aaaee5bb1 @   17 : aa 03             ThrowReferenceErrorIfHole [3]
         0x244aaaee5bb3 @   19 : c1                Star3 
 5378 E> 0x244aaaee5bb4 @   20 : 2d f7 04 03       GetNamedProperty r3, [4], [3]
         0x244aaaee5bb8 @   24 : 19 03 f9          Mov a0, r1
         0x244aaaee5bbb @   27 : 9e 04             JumpIfUndefinedOrNull [4] (0x244aaaee5bbf @ 31)
         0x244aaaee5bbd @   29 : 8a 19             Jump [25] (0x244aaaee5bd6 @ 54)
 5392 E> 0x244aaaee5bbf @   31 : 21 05 05          LdaGlobal [5], [5]
         0x244aaaee5bc2 @   34 : bf                Star5 
 5397 E> 0x244aaaee5bc3 @   35 : 2d f5 06 07       GetNamedProperty r5, [6], [7]
         0x244aaaee5bc7 @   39 : c0                Star4 
 5397 E> 0x244aaaee5bc8 @   40 : 5d f6 f5 09       CallProperty0 r4, r5, [9]
         0x244aaaee5bcc @   44 : c0                Star4 
 5405 E> 0x244aaaee5bcd @   45 : 2d f6 07 0b       GetNamedProperty r4, [7], [11]
         0x244aaaee5bd1 @   49 : c1                Star3 
 5406 E> 0x244aaaee5bd2 @   50 : 5d f7 f6 0d       CallProperty0 r3, r4, [13]
         0x244aaaee5bd6 @   54 : 33 f8 08 0f       DefineNamedOwnProperty r2, [8], [15]
         0x244aaaee5bda @   58 : 0b fa             Ldar r0
 5299 E> 0x244aaaee5bdc @   60 : 69 fa f9 02 11    Construct r0, r1-r2, [17]
 5433 S> 0x244aaaee5be1 @   65 : a9                Return 
Constant pool (size = 9)
0x244aaaee5be9: [FixedArray] in OldSpace
 - map: 0x030cfee812e1 <Map>
 - length: 9
           0: 0x244aaaee52e9 <String[11]: #challenge_1>
           1: 0x244aaaee5c41 <String[18]: #Blitz2025Challenge>
           2: 0x244aaaee5c69 <ObjectBoilerplateDescription[3]>
           3: 0x05e06df97f81 <String[4]: #args>
           4: 0x244aaaee5cb1 <String[10]: #randomSeed>
           5: 0x05e06df9a991 <String[4]: #Math>
           6: 0x05e06df9aba1 <String[6]: #random>
           7: 0x030cfee862b9 <String[8]: #toString>
           8: 0x244aaaee5c91 <String[11]: #RANDOM_SEED>
Handler Table (size = 0)
Source Position Table (size = 31)
0x244aaaee5d01 <ByteArray[31]>
Boilerplate at 0x244aaaee5c69: 
0x244aaaee5c69: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 3
           0: 8
           1: 0x244aaaee5c91 <String[11]: #RANDOM_SEED>
           2: 0x030cfee81501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x244aaaee5da1: 
0x244aaaee5da1: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 9
           0: 8
           1: 0x244aaaee5df9 <String[21]: #timeMsAllowedPerTicks>
           2: 0x030cfee81501 <Odd Oddball: uninitialized>
           3: 0x244aaaee5e21 <String[31]: #maxWaitTimeMsBeforeStartingGame>
           4: 0x030cfee81501 <Odd Oddball: uninitialized>
           5: 0x244aaaee5e51 <String[21]: #expectedNumberOfTeams>
           6: 1
           7: 0x244aaaee5e79 <String[19]: #delayMsBetweenTicks>
           8: 0x030cfee81501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
Boilerplate at 0x244aaaee5f51: 
0x244aaaee5f51: [ObjectBoilerplateDescription] in OldSpace
 - map: 0x030cfee82059 <Map>
 - length: 3
           0: 8
           1: 0x244aaaee5f79 <String[23]: #keepAllCommandsAndTicks>
           2: 0x030cfee81501 <Odd Oddball: uninitialized>
[start ObjectBoilerplate nested objects]
[end ObjectBoilerplate nested objects]
0x244aaaee6391 points to: [0x244aaaee6400]
=== [0x244aaaee6400] DISASSEMBLY ===
Parameter count 2
Register count 3
Frame size 24
OSR urgency: 0
Bytecode age: 0
 6651 S> 0x244aaaee6400 @    0 : 17 03             LdaImmutableCurrentContextSlot [3]
 6670 E> 0x244aaaee6402 @    2 : aa 00             ThrowReferenceErrorIfHole [0]
         0x244aaaee6404 @    4 : c3                Star1 
 6679 E> 0x244aaaee6405 @    5 : 2d f9 01 00       GetNamedProperty r1, [1], [0]
 6659 E> 0x244aaaee6409 @    9 : 71 03 02          TestInstanceOf a0, [2]
         0x244aaaee640c @   12 : 99 17             JumpIfFalse [23] (0x244aaaee6423 @ 35)
 6704 S> 0x244aaaee640e @   14 : 21 02 03          LdaGlobal [2], [3]
         0x244aaaee6411 @   17 : c3                Star1 
 6712 E> 0x244aaaee6412 @   18 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x244aaaee6416 @   22 : c4                Star0 
 6720 E> 0x244aaaee6417 @   23 : 2d 03 04 07       GetNamedProperty a0, [4], [7]
         0x244aaaee641b @   27 : c2                Star2 
 6712 E> 0x244aaaee641c @   28 : 5e fa f9 f8 09    CallProperty1 r0, r1, r2, [9]
         0x244aaaee6421 @   33 : 8a 1a             Jump [26] (0x244aaaee643b @ 59)
 6755 S> 0x244aaaee6423 @   35 : 21 02 03          LdaGlobal [2], [3]
         0x244aaaee6426 @   38 : c3                Star1 
 6763 E> 0x244aaaee6427 @   39 : 2d f9 03 05       GetNamedProperty r1, [3], [5]
         0x244aaaee642b @   43 : c4                Star0 
         0x244aaaee642c @   44 : 13 05             LdaConstant [5]
         0x244aaaee642e @   46 : c2                Star2 
         0x244aaaee642f @   47 : 0b 03             Ldar a0
 6801 E> 0x244aaaee6431 @   49 : 77                ToString 
         0x244aaaee6432 @   50 : 39 f8 0b          Add r2, [11]
         0x244aaaee6435 @   53 : c2                Star2 
 6763 E> 0x244aaaee6436 @   54 : 5e fa f9 f8 0c    CallProperty1 r0, r1, r2, [12]
 6819 S> 0x244aaaee643b @   59 : 21 06 0e          LdaGlobal [6], [14]
         0x244aaaee643e @   62 : c3                Star1 
 6827 E> 0x244aaaee643f @   63 : 2d f9 07 10       GetNamedProperty r1, [7], [16]
         0x244aaaee6443 @   67 : c4                Star0 
         0x244aaaee6444 @   68 : 0d 01             LdaSmi [1]
         0x244aaaee6446 @   70 : c2                Star2 
 6827 E> 0x244aaaee6447 @   71 : 5e fa f9 f8 12    CallProperty1 r0, r1, r2, [18]
         0x244aaaee644c @   76 : 0e                LdaUndefined 
 6836 S> 0x244aaaee644d @   77 : a9                Return 
Constant pool (size = 8)
0x244aaaee6451: [FixedArray] in OldSpace
 - map: 0x030cfee812e1 <Map>
 - length: 8
           0: 0x244aaaee5309 <String[8]: #engine_1>
           1: 0x244aaaee64a1 <String[13]: #ArgumentError>
           2: 0x030cfee84a09 <String[7]: #console>
           3: 0x05e06df8ac99 <String[3]: #log>
           4: 0x030cfee85721 <String[7]: #message>
           5: 0x244aaaee64d9 <String[31]: #Something went terribly wrong! >
           6: 0x05e06df81939 <String[7]: #process>
           7: 0x05e06df88cd9 <String[4]: #exit>
Handler Table (size = 0)
Source Position Table (size = 41)
0x244aaaee6509 <ByteArray[41]>
<< OUTPUTTING DISASSEMBLY END >>
