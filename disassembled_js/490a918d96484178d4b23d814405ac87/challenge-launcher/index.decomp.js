function func_unknown()
{
    r0 = func_unknown_0000027678EDDD69
    return func_unknown_0000027678EDDD69
}
function func_unknown_0000027678EDDD69(a0, a1, a2, a3, a4)
{
    r3 = Scope[0]
    Scope[1][2] = null
    Scope[1][3] = null
    Scope[1][4] = null
    ACCU = this
    if (this)
    {
        ACCU = this["__importDefault"]
    }
    if (!ACCU)
    {
        ACCU = func_unknown_0000027678EDE189
    }
    r0 = ACCU
    r8 = new {"value": true}
    r6 = a0
    ACCU = "Object"["defineProperty"](r6, "__esModule", r8)
    Scope[1][2] = a1("@blitz/challenge")
    Scope[1][3] = a1("@blitz/engine")
    r5 = a1("yargs")
    r1 = r0(r5)
    r2 = "...<truncated"
    r20 = "process"["argv"]["slice"](2)
    r19 = r1["default"](r20)
    r20 = new {"timePerTickMs": {"type": "number", "default": 1000, "description": "Max time the game will wait for a tick"}, "delayBetweenTicksMs": {"type": "number", "default": 50, "description": "Time to wait between ticks"}, "gameStartTimeoutMs": {"type": "number", "default": 500000, "description": "Delay before starting the game"}, "recordPath": {"type": "string", "description": "File path to record replay to"}, "randomSeed": {"type": "string"}, "s3Bucket": {"type": "string"}, "s3Path": {"type": "string"}, "keepAlive": {"type": "boolean", "default": true, "description": "Indicates if the game should close or restart on completion"}, "teamNamesByToken": {"type": "string"}, "teamIdsByToken": {"type": "string"}, "serveUi": {"type": "boolean", "default": true}, "port": {"type": "number", "description": "The port of the server backend", "default": 8765}, "heartbeat": {"type": "boolean", "description": "When running with this option, sends a heartbeat to an already running server on localhost and exits. If successful, exit with 0, otherwise, exit with non-zero code."}}
    r18 = r19["options"](r20)
    ACCU = "process"["env"]["VERSION"]
    if (!"process"["env"]["VERSION"])
    {
        ACCU = "DEV"
    }
    r19 = ACCU
    r17 = r18["version"](r19)
    r16 = r17["hide"]("gameStartTimeoutMs")
    r15 = r16["hide"]("recordPath")
    r14 = r15["hide"]("s3Bucket")
    r13 = r14["hide"]("s3Path")
    r12 = r13["hide"]("keepAlive")
    r11 = r12["hide"]("teamNamesByToken")
    r10 = r11["hide"]("serveUi")
    r9 = r10["hide"]("port")
    r8 = r9["hide"]("version")
    r7 = r8["hide"]("randomSeed")
    r6 = r7["alias"]("randomSeed", "mapName")
    r5 = r6["env"](true)
    Scope[1][4] = r5["parseSync"]()
    r5 = func_unknown_0000027678EDE421()
    ACCU = r5["catch"](func_unknown_0000027678EDF1C1)
    return undefined
}
function func_unknown_0000027678EDF1C1(a0)
{
    if (a0 instanceof Scope[1][3]["ArgumentError"])
    {
        ACCU = "console"["log"](a0["message"])
    }
    else
    {
        r2 = ("Something went terribly wrong!" + String(a0))
        ACCU = "console"["log"](r2)
    }
    ACCU = "process"["exit"](1)
    return undefined
}
function func_unknown_0000027678EDE421()
{
    r6 = <closure>
    r7 = this
    r0 = ACCU
    r6 = <context>
    try
    {
        r7 = Scope[1][4]
        if (Scope[1][4]["heartbeat"])
        {
            r7 = "process"["exit"]
            r11 = ("http://localhost:" + String(Scope[1][4]["port"]))
            r10 = Scope[1][3]["Server"]["heartbeat"](r11)
            r9 = r0
            r9 = await r10
            r10 = _GeneratorGetResumeMode(r0)
            if (!r10 === 0)
            {
                ACCU = r9
            }
            ACCU = r9
            if (r9)
            {
                ACCU = 0
            }
            else
            {
                ACCU = 1
            }
            r9 = ACCU
            ACCU = "process"["exit"](r9)
        }
        while (true)
        {
            r9 = new {"timeMsAllowedPerTicks": null, "maxWaitTimeMsBeforeStartingGame": null, "expectedNumberOfTeams": 1, "delayMsBetweenTicks": null}
            r9["timeMsAllowedPerTicks"] = Scope[1][4]["timePerTickMs"]
            r9["maxWaitTimeMsBeforeStartingGame"] = Scope[1][4]["gameStartTimeoutMs"]
            r9["delayMsBetweenTicks"] = Scope[1][4]["delayBetweenTicksMs"]
            ACCU = Scope[1][3]["Engine"]
            r1 = Scope[1][3]["Engine"](func_unknown_0000027678EDE961, r9)
            r10 = new {"keepAllCommandsAndTicks": null}
            r10["keepAllCommandsAndTicks"] = !(!Boolean(Scope[1][4]["recordPath"]))
            r2 = Scope[1][3]["Recorder"]["createAndRegister"](r1, r10)
            ACCU = Scope[1][4]["teamNamesByToken"]
            if (Scope[1][4]["teamNamesByToken"])
            {
                ACCU = "JSON"["parse"](Scope[1][4]["teamNamesByToken"])
            }
            else
            {
                ACCU = null
            }
            r3 = ACCU
            ACCU = Scope[1][4]["teamIdsByToken"]
            if (Scope[1][4]["teamIdsByToken"])
            {
                ACCU = "JSON"["parse"](Scope[1][4]["teamIdsByToken"])
            }
            else
            {
                ACCU = null
            }
            r4 = ACCU
            ACCU = Scope[1][3]["Server"]
            r8 = r1
            r11 = r3
            r12 = r4
            r5 = Scope[1][3]["Server"](r8, Scope[1][4]["port"], Scope[1][4]["serveUi"], r11, r12)
            r8 = r5["listen"]()
            r7 = r0
            r7 = await r8
            r8 = _GeneratorGetResumeMode(r0)
            if (!r8 === 0)
            {
                ACCU = r7
            }
            ACCU = Scope[1][3]["logger"]["info"]("Game finished, saving state")
            if (Scope[1][4]["recordPath"])
            {
                r9 = ("Saving state file to" + String(Scope[1][4]["recordPath"]))
                ACCU = Scope[1][3]["logger"]["info"](r9)
                ACCU = r2["saveToFile"](Scope[1][4]["recordPath"])
            }
            if (Scope[1][4]["s3Bucket"])
            {
                r7 = Scope[1][4]
                if (Scope[1][4]["s3Path"])
                {
                    r9 = ("Saving state file to S3" + String(Scope[1][4]["s3Bucket"]))
                    r9 = (r9 + "/")
                    r9 = (r9 + String(Scope[1][4]["s3Path"]))
                    ACCU = Scope[1][3]["logger"]["info"](r9)
                    r8 = r2["saveToS3"](Scope[1][4]["s3Bucket"], Scope[1][4]["s3Path"])
                    r7 = r0
                    r7 = await r8
                    r8 = _GeneratorGetResumeMode(r0)
                    if (!r8 === 0)
                    {
                        ACCU = r7
                    }
                    ACCU = r7
                }
            }
            if (!Scope[1][4]["keepAlive"]) break
        }
        r8 = undefined
        r7 = r0
        return r8
    }
    catch {}
    r7 = ACCU
    ACCU = null
    r7 = Scope[1]
    r8 = r0
    return Scope[2][2]
}
function func_unknown_0000027678EDE961(a0)
{
    r2 = new {"RANDOM_SEED": null}
    ACCU = Scope[1][4]["randomSeed"]
    r1 = a0
    if (!Scope[1][4]["randomSeed"] == undefined)
    {
        r4 = "Math"["random"]()
        ACCU = r4["toString"]()
    }
    r2["RANDOM_SEED"] = ACCU
    ACCU = Scope[1][2]["Blitz2025Challenge"]
    return Scope[1][2]["Blitz2025Challenge"](r1, r2)
}
function func_unknown_0000027678EDE189(a0)
{
    if (a0)
    ACCU = a0["__esModule"]
    	&& (a0["__esModule"])
    {
        ACCU = a0
    }
    else
    {
        r0 = new {"default": null}
        r0["default"] = a0
        ACCU = r0
    }
    return ACCU
}
