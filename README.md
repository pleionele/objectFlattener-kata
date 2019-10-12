Take a Object or Array with deeply nested Objects and Arrays and flatten into a single level plain object.

For example:

flattenObject({ hai: { yo: 'test' } }); // =>  { 'hai.yo': 'test' }
flattenObject([1, 2, 3]); // =>  { 0: 1, 1: 2, 2: 3 }
flattenObject([{ foo: 'test' }, 2, 3]); // =>  { '0.foo': 'test', 1: 2, 2: 3 }