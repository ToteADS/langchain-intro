import test from 'node:test'
import assert from 'node:assert/strict'
import { createServer } from '../src/server.ts'

test('command upper trasnforms message into UPPERCASE', async () => {
    const app = createServer()
    const msg = 'make This message uppercase'
    const expected = msg.toUpperCase()

    const response = await app.inject({
        method: 'POST',
        url: '/chat',
        body:{ question:msg}
    })
    assert.equal(response.statusCode, 200)
    assert.equal(response.body, expected)
})

test('unknown command falls back to help message', async () => {
    const app = createServer()
    const msg = 'hello, how are you?'
    const expected = "Unknown command. Try 'make this uppercase' or 'convert to lowecase'"

    const response = await app.inject({
        method: 'POST',
        url: '/chat',
        body:{ question:msg}
    })
    assert.equal(response.statusCode, 200)
    assert.equal(response.body, expected)
})

test('command lower trasnforms message into lowercase', async () => {
    const app = createServer()
    const msg = 'MAKE THIS MESSAGE LOWERCASE'
    const expected = msg.toLowerCase()

    const response = await app.inject({
        method: 'POST',
        url: '/chat',
        body:{ question:msg}
    })
    assert.equal(response.statusCode, 200)
    assert.equal(response.body, expected)
})

