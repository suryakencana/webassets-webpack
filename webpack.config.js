/**
 * Copyright (c) 2017, Boolein Integer Indonesia, PT.
 * 3/29/17 nanang.suryadi@boolein.id
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Boolein.
 *
 * As with any software that integrates with the Boolein platform, your use
 * of this software is subject to the Boolein Developer Principles and
 * Policies [http://developers.Boolein.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 * webpack.config.js
 * @flow
 */
var path = require('path');



module.exports = {
    entry: './main.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'mobile.js'
    }
}
