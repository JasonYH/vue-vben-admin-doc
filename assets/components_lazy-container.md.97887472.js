import{o as n,c as a,a as s}from"./app.b2699450.js";const t='{"title":"LazyContainer","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/lazy-container.md","lastUpdated":1627636000709}',p={},o=s('<h1 id="lazycontainer"><a class="header-anchor" href="#lazycontainer" aria-hidden="true">#</a> LazyContainer</h1><p>延时加载/懒加载组件, 只在组件可见或者延迟一段时间才进行加载</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4 lazy-base-demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lazy-base-demo-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>向下滚动<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LazyContainer</span> <span class="token attr-name">@init</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>() =&gt; {}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TargetContent</span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#skeleton</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Skeleton</span> <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LazyContainer</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> TargetContent <span class="token keyword">from</span> <span class="token string">&#39;./TargetContent.vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> LazyContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Container/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> LazyContainer<span class="token punctuation">,</span> TargetContent<span class="token punctuation">,</span> Skeleton <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.lazy-base-demo</span> <span class="token punctuation">{</span>\n    <span class="token selector">&amp;-wrap</span> <span class="token punctuation">{</span>\n      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 2000px<span class="token punctuation">;</span>\n      <span class="token property">margin</span><span class="token punctuation">:</span> 20px auto<span class="token punctuation">;</span>\n      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n      <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n      <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">h1</span> <span class="token punctuation">{</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 1300px<span class="token punctuation">;</span>\n      <span class="token property">margin</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>timeout</td><td><code>number</code></td><td>-</td><td>-</td><td>等待时间，如果指定了时间，不论可见与否，在指定时间之后自动加载</td></tr><tr><td>viewport</td><td><code>HTMLElement</code></td><td>-</td><td>-</td><td>组件所在的视口，如果组件是在页面容器内滚动，视口就是该容器</td></tr><tr><td>threshold</td><td><code>string</code></td><td><code>0px</code></td><td>-</td><td>预加载阈值, css 单位</td></tr><tr><td>direction</td><td><code>&#39;vertical&#39;, &#39;horizontal&#39;</code> , <code>vertical</code></td><td>-</td><td>视口的滚动方向, vertical 代表垂直方向，horizontal 代表水平方向</td><td></td></tr><tr><td>tag</td><td><code>string&#39;</code></td><td><code>div</code></td><td>-</td><td>包裹组件的外层容器的标签名</td></tr><tr><td>transitionName</td><td><code>string&#39;</code></td><td>lazy-container</td><td>-</td><td>transition 动画 name</td></tr><tr><td>maxWaitingTime</td><td><code>number&#39;</code></td><td><code>80</code></td><td>-</td><td>最大等待时间</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>事件</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>init</td><td><code>()=&gt;void</code></td><td>初始化之后</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认区域</td></tr><tr><td>skeleton</td><td>懒加载骨架屏</td></tr></tbody></table>',10);p.render=function(s,t,p,e,c,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};