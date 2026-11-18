---
title: 搭建Hexo博客NO2
top: 1
cover: https://img.090227.xyz/file/ae62475a131f3734a201c.png
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2025-04-17 10:01:49
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
ai:
---

<div class="video-container">
<iframe width="1280" height="720" src="https://www.youtube.com/embed/Qss3XdMsHKM" title="【Hexo博客系列】No.2 美化Hexo博客，详细教程，教你如何安装和美化Hexo博客 - 使用安知鱼主题进行个性化配置，涵盖安装、设置、标签页生成及本地搜索等内容 #blog" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<style>
.video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio (height/width = 9/16 * 100%) */
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>


<h1 id="美化Hexo博客，主题安装配置"><a href="#美化Hexo博客，主题安装配置" class="headerlink" title="美化Hexo博客，主题安装配置"></a>美化Hexo博客，主题安装配置</h1><p>这期教程演示将使用一款基于<a target="_blank" rel="noopener" href="https://github.com/jerryc127/hexo-theme-butterfly">hexo-theme-butterfly</a>修改的主題-<strong>安知鱼</strong>，安知鱼是一个简洁、美丽的静态hexo主题</p>
<p><strong>项目地址</strong>：<a target="_blank" rel="noopener" href="https://github.com/anzhiyu-c/hexo-theme-anzhiyu">https://github.com/anzhiyu-c/hexo-theme-anzhiyu</a><br><strong>官方文档</strong>：<a target="_blank" rel="noopener" href="https://docs.anheyu.com/initall.html">https://docs.anheyu.com/initall.html</a></p>
<hr>
<h2 id="1-安装主题"><a href="#1-安装主题" class="headerlink" title="1.安装主题"></a>1.安装主题</h2><h3 id="1-1-Git-安裝"><a href="#1-1-Git-安裝" class="headerlink" title="1.1. Git 安裝"></a>1.1. Git 安裝</h3><p>在博客根目录里安装最新版主题</p>
<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu</span><br></pre></td></tr></table></figure>

<p>第一次使用需要安装 pug 以及 stylus 的渲染器</p>
<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm install hexo-renderer-pug hexo-renderer-stylus --save</span><br></pre></td></tr></table></figure>

<h3 id="1-2-应用主题"><a href="#1-2-应用主题" class="headerlink" title="1.2. 应用主题"></a>1.2. 应用主题</h3><p>修改 hexo 配置文件<code>_config.yml</code>，把主题改为<code>anzhiyu</code></p>
<figure class="highlight plaintext"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">theme: anzhiyu</span><br></pre></td></tr></table></figure>

<h3 id="1-3-覆盖配置"><a href="#1-3-覆盖配置" class="headerlink" title="1.3. 覆盖配置"></a>1.3. 覆盖配置</h3><p>覆盖配置可以使<code>主题配置</code>放置在 anzhiyu 目录之外，避免在更新主题时丢失自定义的配置。</p>
<p>如果你是<strong>linux系统</strong>就执行以下命令</p>
<figure class="highlight bash"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="built_in">cp</span> -rf ./themes/anzhiyu/_config.yml ./_config.anzhiyu.yml</span><br></pre></td></tr></table></figure>

<p>如果你是<strong>windows系统</strong>就请手动将<code>/themes/anzhiyu/_config.yml</code>复制到根目录下并重命名为<code>_config.anzhiyu.yml</code>即可。</p>
<p>以后如果修改任何主题配置，都只需修改 <code>_config.anzhiyu.yml</code> 的配置即可。</p>
<p>注意：</p>
<ul>
<li>只要存在于 <code>_config.anzhiyu.yml</code> 的配置都是高优先级，修改原 <code>_config.yml</code> 是无效的。</li>
<li>每次更新主题可能存在配置变更，请注意更新说明，可能需要手动对 <code>_config.anzhiyu.yml</code> 同步修改。</li>
<li>想查看覆盖配置有没有生效，可以通过 <code>hexo g --debug</code> 查看命令行输出。</li>
<li>如果想将某些配置覆盖为空，注意不要把主键删掉，不然是无法覆盖的</li>
</ul>
<h3 id="1-4-配置主题与主站配置文件"><a href="#1-4-配置主题与主站配置文件" class="headerlink" title="1.4. 配置主题与主站配置文件"></a>1.4. 配置主题与主站配置文件</h3><p>到这一步主题部署就完成了，<strong>就是这么简单！！！</strong></p>
<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line">//本地预览</span><br><span class="line">hexo cl; hexo s</span><br><span class="line"></span><br><span class="line">//推送更新上线</span><br><span class="line">hexo cl; hexo g; hexo d</span><br></pre></td></tr></table></figure>

<h3 id="1-5-生成标签页和分类页"><a href="#1-5-生成标签页和分类页" class="headerlink" title="1.5. 生成标签页和分类页"></a>1.5. 生成标签页和分类页</h3><p>执行以下命令生成标签页</p>
<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">hexo new page tags</span><br></pre></td></tr></table></figure>
<p>找到 <code>source/tags/index.md</code> 这个文件，修改添加 <code>type: &quot;tags&quot;</code></p>
<figure class="highlight plaintext"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br></pre></td><td class="code"><pre><span class="line">---</span><br><span class="line">title: 标签</span><br><span class="line">date: 2024-07-05 03:36:02</span><br><span class="line">type: &quot;tags&quot;</span><br><span class="line">comments: false</span><br><span class="line">top_img: false</span><br><span class="line">---</span><br></pre></td></tr></table></figure>

<p>执行以下命令生成分类页</p>
<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">hexo new page categories</span><br></pre></td></tr></table></figure>
<p>找到 <code>source/categories/index.md</code> 这个文件，修改添加 <code>type: &quot;categories&quot;</code></p>
<figure class="highlight plaintext"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br></pre></td><td class="code"><pre><span class="line">---</span><br><span class="line">title: 分类</span><br><span class="line">date: 2024-07-05 03:36:48</span><br><span class="line">aside: false</span><br><span class="line">top_img: false</span><br><span class="line">type: &quot;categories&quot;</span><br><span class="line">---</span><br></pre></td></tr></table></figure>


<p>剩下的工作就是配置<code>_config.yml</code>和<code>_config.anzhiyu.yml</code>文件，修改博客参数。</p>
<hr>
<h2 id="2-配置文章模版"><a href="#2-配置文章模版" class="headerlink" title="2. 配置文章模版"></a>2. 配置文章模版</h2><p><code>/scaffolds</code>目录下有几个模版文件，其中</p>
<ul>
<li><strong>post.md</strong>：新建博文模版</li>
<li><strong>page.md</strong>：新建标签页模版</li>
</ul>
<h3 id="post-md模版，仅供参考"><a href="#post-md模版，仅供参考" class="headerlink" title="post.md模版，仅供参考"></a><strong>post.md</strong>模版，仅供参考</h3><figure class="highlight yml"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br><span class="line">19</span><br><span class="line">20</span><br><span class="line">21</span><br><span class="line">22</span><br><span class="line">23</span><br><span class="line">24</span><br><span class="line">25</span><br><span class="line">26</span><br><span class="line">27</span><br><span class="line">28</span><br><span class="line">29</span><br><span class="line">30</span><br><span class="line">31</span><br><span class="line">32</span><br><span class="line">33</span><br><span class="line">34</span><br><span class="line">35</span><br><span class="line">36</span><br><span class="line">37</span><br><span class="line">38</span><br><span class="line">39</span><br><span class="line">40</span><br><span class="line">41</span><br><span class="line">42</span><br><span class="line">43</span><br><span class="line">44</span><br><span class="line">45</span><br><span class="line">46</span><br><span class="line">47</span><br><span class="line">48</span><br><span class="line">49</span><br><span class="line">50</span><br><span class="line">51</span><br></pre></td><td class="code"><pre><span class="line"><span class="meta">---</span></span><br><span class="line"><span class="attr">title:</span> &#123;&#123; <span class="string">title</span> &#125;&#125; <span class="comment">#【必需】页面标题</span></span><br><span class="line"><span class="attr">date:</span> &#123;&#123; <span class="string">date</span> &#125;&#125; <span class="comment">#【必需】页面创建日期</span></span><br><span class="line"><span class="attr">updated:</span> <span class="comment">#【可选】页面更新日期</span></span><br><span class="line"><span class="attr">tags:</span> <span class="comment">#【可选】文章标签</span></span><br><span class="line"><span class="attr">categories:</span> <span class="comment">#【可选】文章分类</span></span><br><span class="line"><span class="attr">keywords:</span> <span class="comment">#【可选】文章关键字</span></span><br><span class="line"><span class="attr">description:</span> <span class="comment">#【可选】文章描述</span></span><br><span class="line"><span class="attr">top:</span> <span class="comment"># 1 置顶</span></span><br><span class="line"><span class="attr">top_img:</span> <span class="comment">#【可选】文章顶部图片</span></span><br><span class="line"><span class="attr">comments:</span> <span class="comment">#【可选】显示文章评论模块(默认 true)</span></span><br><span class="line"><span class="attr">cover:</span> <span class="string">https://img.090227.xyz/file/ae62475a131f3734a201c.png</span> <span class="comment">#【可选】文章缩略图(如果没有设置 top_img,文章页顶部将显示缩略图，可设为 false/图片地址/留空)</span></span><br><span class="line"><span class="attr">toc:</span> <span class="comment">#【可选】显示文章 TOC(默认为设置中 toc 的 enable 配置)</span></span><br><span class="line"><span class="attr">toc_number:</span> <span class="comment">#【可选】显示 toc_number(默认为设置中 toc 的 number 配置)</span></span><br><span class="line"><span class="attr">toc_style_simple:</span> <span class="comment">#【可选】显示 toc 简洁模式</span></span><br><span class="line"><span class="attr">copyright:</span> <span class="comment">#【可选】显示文章版权模块(默认为设置中 post_copyright 的 enable 配置)</span></span><br><span class="line"><span class="attr">copyright_author:</span> <span class="comment">#【可选】文章版权模块的文章作者</span></span><br><span class="line"><span class="attr">copyright_author_href:</span> <span class="comment">#【可选】文章版权模块的文章作者链接</span></span><br><span class="line"><span class="attr">copyright_url:</span> <span class="comment">#【可选】文章版权模块的文章作者链接</span></span><br><span class="line"><span class="attr">copyright_info:</span> <span class="comment">#【可选】文章版权模块的版权声明文字</span></span><br><span class="line"><span class="attr">mathjax:</span> <span class="comment">#【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false)</span></span><br><span class="line"><span class="attr">katex:</span> <span class="comment">#【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false)</span></span><br><span class="line"><span class="attr">aplayer:</span> <span class="comment">#【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的音乐 配置</span></span><br><span class="line"><span class="attr">highlight_shrink:</span> <span class="comment">#【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置)</span></span><br><span class="line"><span class="attr">aside:</span> <span class="comment">#【可选】显示侧边栏 (默认 true)</span></span><br><span class="line"><span class="attr">swiper_index:</span> <span class="number">10</span> <span class="comment">#【可选】首页轮播图配置 index 索引，数字越小越靠前</span></span><br><span class="line"><span class="attr">top_group_index:</span> <span class="number">10</span> <span class="comment">#【可选】首页右侧卡片组配置, 数字越小越靠前</span></span><br><span class="line"><span class="attr">ai:</span> <span class="comment">#【可选】文章ai摘要</span></span><br><span class="line"><span class="attr">background:</span> <span class="string">&quot;#fff&quot;</span> <span class="comment">#【可选】文章主色，必须是16进制颜色且有6位，不可缩减，例如#ffffff 不可写成#fff</span></span><br><span class="line"><span class="meta">---</span></span><br><span class="line"><span class="meta"></span></span><br><span class="line"><span class="string">&lt;div</span> <span class="string">class=&quot;video-container&quot;&gt;</span></span><br><span class="line">[<span class="string">up主专用，视频内嵌代码贴在这</span>]</span><br><span class="line"><span class="string">&lt;/div&gt;</span></span><br><span class="line"></span><br><span class="line"><span class="string">&lt;style&gt;</span></span><br><span class="line"><span class="string">.video-container</span> &#123;</span><br><span class="line">    <span class="attr">position:</span> <span class="string">relative;</span></span><br><span class="line">    <span class="attr">width:</span> <span class="number">100</span><span class="string">%;</span></span><br><span class="line">    <span class="attr">padding-top:</span> <span class="number">56.25</span><span class="string">%;</span> <span class="string">/*</span> <span class="number">16</span><span class="string">:9</span> <span class="string">aspect</span> <span class="string">ratio</span> <span class="string">(height/width</span> <span class="string">=</span> <span class="number">9</span><span class="string">/16</span> <span class="string">*</span> <span class="number">100</span><span class="string">%)</span> <span class="string">*/</span></span><br><span class="line">&#125;</span><br><span class="line"></span><br><span class="line"><span class="string">.video-container</span> <span class="string">iframe</span> &#123;</span><br><span class="line">    <span class="attr">position:</span> <span class="string">absolute;</span></span><br><span class="line">    <span class="attr">top:</span> <span class="number">0</span><span class="string">;</span></span><br><span class="line">    <span class="attr">left:</span> <span class="number">0</span><span class="string">;</span></span><br><span class="line">    <span class="attr">width:</span> <span class="number">100</span><span class="string">%;</span></span><br><span class="line">    <span class="attr">height:</span> <span class="number">100</span><span class="string">%;</span></span><br><span class="line">&#125;</span><br><span class="line"><span class="string">&lt;/style&gt;</span></span><br><span class="line"></span><br></pre></td></tr></table></figure>


<h3 id="page-md模版，仅供参考"><a href="#page-md模版，仅供参考" class="headerlink" title="page.md模版，仅供参考"></a><strong>page.md</strong>模版，仅供参考</h3><figure class="highlight yml"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br></pre></td><td class="code"><pre><span class="line"><span class="meta">---</span></span><br><span class="line"><span class="attr">title:</span> &#123;&#123; <span class="string">title</span> &#125;&#125; <span class="comment">#【必需】页面标题</span></span><br><span class="line"><span class="attr">date:</span> &#123;&#123; <span class="string">date</span> &#125;&#125; <span class="comment">#【必需】页面创建日期</span></span><br><span class="line"><span class="attr">type:</span> <span class="comment">#【必需】标签、分类、关于、音乐馆、友情链接、相册、相册详情、朋友圈、即刻页面需要配置</span></span><br><span class="line"><span class="attr">updated:</span> <span class="comment">#【可选】页面更新日期</span></span><br><span class="line"><span class="attr">comments:</span> <span class="comment">#【可选】显示页面评论模块(默认 true)</span></span><br><span class="line"><span class="attr">description:</span> <span class="comment">#【可选】页面描述</span></span><br><span class="line"><span class="attr">keywords:</span> <span class="comment">#【可选】页面关键字</span></span><br><span class="line"><span class="attr">top_img:</span> <span class="string">https://img.090227.xyz/file/ae62475a131f3734a201c.png</span> <span class="comment">#【可选】页面顶部图片</span></span><br><span class="line"><span class="attr">mathjax:</span> <span class="comment">#【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false)</span></span><br><span class="line"><span class="attr">katex:</span> <span class="comment">#【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false)</span></span><br><span class="line"><span class="attr">aside:</span> <span class="comment">#【可选】显示侧边栏 (默认 true)</span></span><br><span class="line"><span class="attr">aplayer:</span> <span class="comment">#【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的音乐 配置</span></span><br><span class="line"><span class="attr">highlight_shrink:</span> <span class="comment">#【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置)</span></span><br><span class="line"><span class="attr">top_single_background:</span> <span class="comment">#【可选】部分页面的顶部模块背景图片</span></span><br><span class="line"><span class="meta">---</span></span><br><span class="line"><span class="meta"></span></span><br></pre></td></tr></table></figure>

<hr>
<h1 id="更多功能"><a href="#更多功能" class="headerlink" title="更多功能"></a>更多功能</h1><h2 id="新建文章"><a href="#新建文章" class="headerlink" title="新建文章"></a>新建文章</h2><h3 id="新建博文命令"><a href="#新建博文命令" class="headerlink" title="新建博文命令"></a>新建博文命令</h3><figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">hexo new 这是一篇新的博文</span><br></pre></td></tr></table></figure>
<h3 id="新建标签页命令"><a href="#新建标签页命令" class="headerlink" title="新建标签页命令"></a>新建标签页命令</h3><figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">hexo new page 新建的标签页</span><br></pre></td></tr></table></figure>

<hr>
<h2 id="文章置顶"><a href="#文章置顶" class="headerlink" title="文章置顶"></a>文章置顶</h2><h3 id="安装插件"><a href="#安装插件" class="headerlink" title="安装插件"></a>安装插件</h3><figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm install hexo-generator-topindex --save</span><br></pre></td></tr></table></figure>

<h3 id="设置置顶"><a href="#设置置顶" class="headerlink" title="设置置顶"></a>设置置顶</h3><p>给需要置顶的文章加入top参数，如下：</p>
<figure class="highlight yml"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br></pre></td><td class="code"><pre><span class="line"><span class="meta">---</span></span><br><span class="line"><span class="attr">title:</span> <span class="string">每天一个linux命令</span></span><br><span class="line"><span class="attr">date:</span> <span class="number">2017-01-23 11:41:48</span></span><br><span class="line"><span class="attr">top:</span> <span class="number">1</span></span><br><span class="line"><span class="attr">categories:</span></span><br><span class="line"><span class="bullet">-</span> <span class="string">运维</span></span><br><span class="line"><span class="attr">tags:</span></span><br><span class="line"><span class="bullet">-</span> <span class="string">linux命令</span></span><br><span class="line"><span class="meta">---</span></span><br></pre></td></tr></table></figure>
<p>如果存在多个置顶文章，top后的参数越大，越靠前。</p>
<hr>
<h2 id="开启本地搜索"><a href="#开启本地搜索" class="headerlink" title="开启本地搜索"></a>开启本地搜索</h2><h3 id="安装插件-1"><a href="#安装插件-1" class="headerlink" title="安装插件"></a>安装插件</h3><p>你需要安装 <a target="_blank" rel="noopener" href="https://github.com/wzpan/hexo-generator-search">hexo-generator-search</a>，根据它的文档去做相应配置</p>
<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm install hexo-generator-search --save</span><br></pre></td></tr></table></figure>

<h3 id="设置主题配置文件"><a href="#设置主题配置文件" class="headerlink" title="设置主题配置文件"></a>设置主题配置文件</h3><figure class="highlight yml"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="attr">local_search:</span></span><br><span class="line">  <span class="attr">enable:</span> <span class="literal">true</span></span><br><span class="line">  <span class="attr">preload:</span> <span class="literal">false</span></span><br><span class="line">  <span class="attr">CDN:</span></span><br></pre></td></tr></table></figure>

<table>
<thead>
<tr>
<th>参数</th>
<th>解释</th>
</tr>
</thead>
<tbody><tr>
<td>enable</td>
<td>是否开启本地搜索</td>
</tr>
<tr>
<td>preload</td>
<td>预加载，开启后，进入网页后会自动加载搜索文件。关闭时，只有点击搜索按钮后，才会加载搜索文件</td>
</tr>
<tr>
<td>CDN</td>
<td>搜索文件的 CDN 地址（默认使用的本地链接）</td>
</tr>
</tbody></table>
<hr>
<h2 id="添加任意文件"><a href="#添加任意文件" class="headerlink" title="添加任意文件"></a>添加任意文件</h2><p>例如当我们想在网站根目录添加<code>ads.txt</code>文件，来通过站长验证时，我们只需要在<code>/source</code>文件夹下放置该文件即可。</p>
