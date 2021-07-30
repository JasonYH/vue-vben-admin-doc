import{o as t,c as n,a}from"./app.b2699450.js";const s='{"title":"CollapseContainer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/collapse-container.md","lastUpdated":1627636000705}',e={},p=a('<h1 id="collapsecontainer"><a class="header-anchor" href="#collapsecontainer" aria-hidden="true">#</a> CollapseContainer</h1><p>区域折叠卡片容器</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CollapseContainer</span><span class="token punctuation">&gt;</span></span> content <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CollapseContainer</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> CollapseContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Container/index&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n      CollapseContainer<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>标题</td></tr><tr><td>canExpan</td><td><code>boolean</code></td><td>true</td><td>-</td><td>是否可以展开，为<code>true</code>显示折叠按钮</td></tr><tr><td>helpMessage</td><td><code>string[],string</code></td><td>-</td><td>-</td><td>标题右侧温馨提醒</td></tr><tr><td>triggerWindowResize</td><td><code>boolean</code></td><td>false</td><td>-</td><td>展开收缩的时候是否触发 window.resize</td></tr><tr><td>loading</td><td><code>boolean</code></td><td>false</td><td>-</td><td>显示加载骨架屏</td></tr><tr><td>lazyTime</td><td><code>number</code></td><td>0</td><td>-</td><td>延迟加载时间</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>自定义标题</td></tr><tr><td>action</td><td>自定义右侧操作按钮</td></tr><tr><td>default</td><td>默认区域</td></tr><tr><td>footer</td><td>自定义底部区域</td></tr></tbody></table>',8);e.render=function(a,s,e,o,c,d){return t(),n("div",null,[p])};export default e;export{s as __pageData};
