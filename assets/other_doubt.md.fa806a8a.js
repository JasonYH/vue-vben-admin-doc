import{o as n,c as s,a}from"./app.b2699450.js";const t='{"title":"常见疑点说明","description":"","frontmatter":{},"headers":[{"level":2,"title":"项目别名","slug":"项目别名"},{"level":2,"title":"为什么在本地没有按需引入组件库样式，在生产才引入","slug":"为什么在本地没有按需引入组件库样式，在生产才引入"},{"level":2,"title":"为什么单独把 moment 放到 dataUtil 内","slug":"为什么单独把-moment-放到-datautil-内"}],"relativePath":"other/doubt.md","lastUpdated":1627636000709}',p={},o=a('<h1 id="常见疑点说明"><a class="header-anchor" href="#常见疑点说明" aria-hidden="true">#</a> 常见疑点说明</h1><p>该分类主要说明一些地方为什么这样做，以及原因是什么</p><h2 id="项目别名"><a class="header-anchor" href="#项目别名" aria-hidden="true">#</a> 项目别名</h2><p><code>/@/</code> 是 <code>vite</code> 内配置的别名</p><p><code>/@/settings</code> 等同于 <code>src/settings</code></p><div class="tip custom-block"><p class="custom-block-title">为什么是/@/</p><p>因为项目是从 <code>vite1.0</code> 过渡过来的，<code>vite1.0</code> 只能以 <code>/</code> 开头，所以有一部分从 <code>webpack</code> 用户转过来的可能不习惯。</p></div><h2 id="为什么在本地没有按需引入组件库样式，在生产才引入"><a class="header-anchor" href="#为什么在本地没有按需引入组件库样式，在生产才引入" aria-hidden="true">#</a> 为什么在本地没有按需引入组件库样式，在生产才引入</h2><p>在 main.ts 内可以看到，本地开发会全量引入 antd.less，vite-plugin-style-import 在本地是没有作用的。</p><p>这样做的原因主要是加快本地开发刷新速度。如果在本地开发中也按需按需引入，则在浏览器控制台内可以看到，平均一个页面大概增加了 100 次 http 请求。如果全量引入，只增加了一个请求，所以为了减少请求数量，才这样种。</p><div class="language-ts"><pre><code><span class="token comment">// src/main.ts</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEV</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;ant-design-vue/dist/antd.less&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// build/vite/plugin/styleImport</span>\n<span class="token keyword">import</span> styleImport <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-style-import&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">configStyleImportPlugin</span><span class="token punctuation">(</span>isBuild<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isBuild<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> styleImportPlugin <span class="token operator">=</span> <span class="token function">styleImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    libs<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        libraryName<span class="token operator">:</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">,</span>\n        esModule<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ant-design-vue/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/style/index</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> styleImportPlugin<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="为什么单独把-moment-放到-datautil-内"><a class="header-anchor" href="#为什么单独把-moment-放到-datautil-内" aria-hidden="true">#</a> 为什么单独把 moment 放到 dataUtil 内</h2><p>在 <code>src/utils/dataUtil</code> 内，使用的是 moment，其次在页面中对时间的操作也是使用 dateUtil，而不是直接 <code>import moment from &#39;moment&#39;</code>。</p><p>这样做主要是方便后续切换到 <code>dayjs</code>，因为 api 一样，所以在后续切换中，只需更改 dataUtil 内的 import 即可，而不用全部更改。</p>',13);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};