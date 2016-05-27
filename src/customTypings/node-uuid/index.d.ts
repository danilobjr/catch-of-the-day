declare namespace NodeUuid {
    function v1() : string;
    function v4() : string;
}

declare module 'node-uuid' {
    import uuid = NodeUuid;
    export = uuid;
}