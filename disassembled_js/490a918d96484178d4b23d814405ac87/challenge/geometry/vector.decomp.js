function func_unknown()
{
    r0 = func_unknown_000001888FD5DD69
    return func_unknown_000001888FD5DD69
}
function func_unknown_000001888FD5DD69(a0, a1, a2, a3, a4)
{
    r5 = new {"value": true}
    r3 = a0
    ACCU = "Object"["defineProperty"](r3, "__esModule", r5)
    a0["Vector"] = undefined
    r1 = Scope[0]
    Scope[1][2] = null
    r3 = DefineClass([12, DescriptorArray[5], NumberDictionary[7], [], DescriptorArray[9], NumberDictionary[7], []], func_Vector_000001888FD5E2A1, null, func_fromPosition_000001888FD5E599, func_get x_000001888FD5E6D1, func_get y_000001888FD5E7F9, func_get magnitude_000001888FD5E921, func_add_000001888FD5EAC9, func_subtract_000001888FD5EC29, func_equals_000001888FD5ED89, func_serialize_000001888FD5EED9, func_toString_000001888FD5F049)
    Scope[1][2] = func_Vector_000001888FD5E2A1
    a0["Vector"] = Scope[0]
    return undefined
}
function func_toString_000001888FD5F049()
{
    r0 = ("(X:" + String(this["_x"]))
    r0 = (r0 + ", Y:")
    r0 = (r0 + String(this["_y"]))
    return (r0 + ")")
}
function func_serialize_000001888FD5EED9()
{
    r0 = new {"x": null, "y": null}
    r0["x"] = this["x"]
    r0["y"] = this["y"]
    return r0
}
function func_equals_000001888FD5ED89(a0)
{
    r0 = this["_x"]
    ACCU = r0 == a0["x"]
    if (r0 == a0["x"])
    {
        r0 = this["_y"]
        ACCU = r0 == a0["y"]
    }
    return ACCU
}
function func_subtract_000001888FD5EC29(a0)
{
    r1 = this["_x"]
    r1 = (r1 - a0["x"])
    r2 = this["_y"]
    r2 = (r2 - a0["y"])
    ACCU = Scope[1][2]
    return Scope[1][2](r1, r2)
}
function func_add_000001888FD5EAC9(a0)
{
    r1 = this["_x"]
    r1 = (r1 + a0["x"])
    r2 = this["_y"]
    r2 = (r2 + a0["y"])
    ACCU = Scope[1][2]
    return Scope[1][2](r1, r2)
}
function func_get magnitude_000001888FD5E921()
{
    r2 = this["_x"]
    r2 = (r2 * this["_x"])
    r3 = this["_y"]
    r2 = (r2 + (r3 * this["_y"]))
    return "Math"["sqrt"](r2)
}
function func_get y_000001888FD5E7F9()
{
    return this["_y"]
}
function func_get x_000001888FD5E6D1()
{
    return this["_x"]
}
function func_fromPosition_000001888FD5E599(a0)
{
    ACCU = Scope[1][2]
    return Scope[1][2](a0["x"], a0["y"])
}
function func_Vector_000001888FD5E2A1(a0, a1)
{
    this["_x"] = "Math"["round"](a0)
    this["_y"] = "Math"["round"](a1)
    return undefined
}
