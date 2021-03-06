const { useReducer } = require('@amove/next');
useReducer({
    processComponentIs (node) {
        let {code, isPath} = node;
        if (isPath) {
            this.$node.content = `
            my.setStorageSync({
                key: 'activeComponent',
                data: {
                    is: '${isPath}'
                }
            })\n
            `+ code;
        }
    }  
});