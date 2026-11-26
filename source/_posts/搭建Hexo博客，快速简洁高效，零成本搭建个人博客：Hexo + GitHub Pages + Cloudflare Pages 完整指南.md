---
title: 搭建Hexo博客，快速简洁高效，零成本搭建个人博客：Hexo + GitHub Pages + Cloudflare Pages 完整指南
cover: 'https://img.090227.xyz/file/ae62475a131f3734a201c.png'
swiper_index: 10
background: '#fff'
tags: []
categories:
  - 开发运维
top: 1
date: 2024-10-21 17:24:00
updated:
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
<iframe width="1280" height="720" src="https://www.youtube.com/embed/GtYcFZ55GJI" title="【Hexo博客系列】No.1 搭建Hexo博客，快速简洁高效，零成本搭建个人博客：Hexo + GitHub Pages + Cloudflare Pages 完整指南 #blog" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
</style>

<h1 id="搭建Hexo博客，快速简洁高效，零成本搭建个人博客：Hexo-GitHub-Pages-Cloudflare-Pages-完整指南"><a href="#搭建Hexo博客，快速简洁高效，零成本搭建个人博客：Hexo-GitHub-Pages-Cloudflare-Pages-完整指南" class="headerlink" title="搭建Hexo博客，快速简洁高效，零成本搭建个人博客：Hexo + GitHub Pages + Cloudflare Pages 完整指南"></a>搭建Hexo博客，快速简洁高效，零成本搭建个人博客：Hexo + GitHub Pages + Cloudflare Pages 完整指南</h1><p>本文详细介绍了如何使用Hexo框架搭建一个个人博客，并将其部署到GitHub Pages和Cloudflare Pages上。主要内容包括：</p>
<ul>
<li>环境准备：安装Node.js和Git</li>
<li>配置Git和GitHub：设置SSH密钥，创建GitHub仓库</li>
<li>初始化Hexo项目：安装Hexo，创建新博客</li>
<li>部署到GitHub Pages：配置部署设置，推送静态文件</li>
<li>部署到Cloudflare Pages：连接GitHub仓库，自动部署</li>
<li>基本使用方法：创建新文章，本地预览，发布更新</li>
</ul>
<p>这个教程适合那些想要快速搭建个人博客，但又不想花费太多成本的人。通过使用Hexo、GitHub和Cloudflare的免费服务，您可以轻松创建一个高效、简洁的博客网站。</p>
<hr>
<h2 id="1-事前准备"><a href="#1-事前准备" class="headerlink" title="1.事前准备"></a>1.事前准备</h2><ol>
<li>域名（<strong>非必须</strong>，你也可以使用免费域名，或者<code>GitHub.io</code>或<code>Pages.dev</code>分配的域名也可以）</li>
<li><a target="_blank" rel="noopener" href="https://github.com/">GitHub</a>（<strong>必须</strong>，你需要注册一个GitHub帐号）</li>
<li><a target="_blank" rel="noopener" href="https://dash.cloudflare.com/">Cloudflare</a>（<strong>非必须</strong>，你需要注册一个Cloudflare帐号，这样你就可以将博客部署在CF的CDN里加速，但是你也可以直接使用<code>GitHub.io</code>分配的域名）</li>
</ol>
<hr>
<h2 id="2-软件支持"><a href="#2-软件支持" class="headerlink" title="2.软件支持"></a>2.软件支持</h2><ol>
<li><a href="./#2-1-%E5%AE%89%E8%A3%85-Node">Node</a>（<strong>必须</strong>）</li>
<li><a href="./#2-2-%E5%AE%89%E8%A3%85-Git">Git</a>（<strong>必须</strong>）</li>
<li><a target="_blank" rel="noopener" href="https://code.visualstudio.com/">VSCode</a>（<strong>非必须</strong>，这是一款轻量型的代码编辑器，可以帮助你养成一个很好的编程习惯）</li>
</ol>
<h3 id="2-1-安装-Node"><a href="#2-1-安装-Node" class="headerlink" title="2.1.安装 Node"></a>2.1.安装 Node</h3><ol>
<li>打开Node官网，下载和自己系统相配的Node的安装程序，否则会出现安装问题。下载地址：<a target="_blank" rel="noopener" href="https://nodejs.org/en">https://nodejs.org/en</a></li>
<li>下载后安装，安装的目录可以使用默认目录<code>C:/Program Files/nodejs/</code></li>
<li>安装完成后，检查是否安装成功。在键盘按下win + R键，输入CMD，然后回车，打开CMD窗口，执行<code>node -v</code>命令，看到版本信息，则说明安装成功。<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-![cmd.jpg](https://img.090227.xyz/api/cfile/AgACAgUAAyEGAASOgsooAAM0ZxZlHtqxLihSOkNwo-kltJWXn9YAAvS_MRsXq7hUkpCLRJfKSlgBAAMCAAN5AAM2BA) alt="2.1.3.安装 Node"></li>
<li>修改npm源。npm下载各种模块，默认是从国处服务器下载，速度较慢，建议配置成华为云镜像源。打开CMD窗口，运行如下命令:<figure class="highlight cmd"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm config <span class="built_in">set</span> registry https://mirrors.huaweicloud.com/repository/npm/</span><br></pre></td></tr></table></figure></li>
</ol>
<h3 id="2-2-安装-Git"><a href="#2-2-安装-Git" class="headerlink" title="2.2.安装 Git"></a>2.2.安装 Git</h3><ol>
<li>进入官网下载适合你当前系统的 Git：<a target="_blank" rel="noopener" href="https://git-scm.com/downloads">https://git-scm.com/downloads</a><br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/14b9fdf14c49320e531fb.jpg" alt="2.2.1.安装 Git"></li>
<li>下载后傻瓜式安装Git即可，安装的目录最好使用默认目录<code>C:/Program Files/Git</code></li>
<li>点击电脑左下角开始即可看见<code>Git CMD</code>、<code>Git Bash</code>、<code>Git GUI</code>。<ul>
<li><code>Git CMD</code> 是windows 命令行的指令风格</li>
<li><code>Git Bash</code> 是linux系统的指令风格（建议使用）</li>
<li><code>Git GUI</code>是图形化界面（新手学习不建议使用）</li>
</ul>
</li>
</ol>
<hr>
<h2 id="3-配置-Git-密钥并连接至-Github"><a href="#3-配置-Git-密钥并连接至-Github" class="headerlink" title="3.配置 Git 密钥并连接至 Github"></a>3.配置 Git 密钥并连接至 Github</h2><p>常用 Git 命令</p>
<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line">git config -l  //查看所有配置</span><br><span class="line">git config --system --list //查看系统配置</span><br><span class="line">git config --global --list //查看用户（全局）配置</span><br></pre></td></tr></table></figure>
<p><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/f403664b22ad3488a5fb4.jpg" alt="启动Git"></p>
<h3 id="3-1-配置用户名和邮箱"><a href="#3-1-配置用户名和邮箱" class="headerlink" title="3.1. 配置用户名和邮箱"></a>3.1. 配置用户名和邮箱</h3><figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line">git config --global user.name &quot;你的用户名&quot;</span><br><span class="line">git config --global user.email &quot;你的邮箱&quot;</span><br></pre></td></tr></table></figure>
<p>通过<code>git config -l</code> 检查是否配置成功。<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/67dca39142021e2214e2b.jpg" alt="3.1. 配置用户名和邮箱"></p>
<h3 id="3-2-配置公钥连接Github"><a href="#3-2-配置公钥连接Github" class="headerlink" title="3.2. 配置公钥连接Github"></a>3.2. 配置公钥连接Github</h3><ol>
<li>执行以下命令生成ssh公钥，此公钥用于你的计算机连接Github<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">ssh-keygen -t rsa -C &quot;你的邮箱&quot;</span><br></pre></td></tr></table></figure>
提示<code>Enter file in which to save the key</code>直接<strong>一路回车</strong>即可，新手小白不推荐设置密钥<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/45d70737c64caeb4393ad.jpg" alt="3.2.1.1"><br>之后打开C盘下用户文件夹下的.ssh的文件夹，会看到以下文件<ul>
<li><code>id_rsa</code>私钥</li>
<li><code>id_rsa.pub</code>公钥<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/40bd636f749347666f9f7.jpg" alt="3.2.1.2"><br>用记事本打开上述图片中的公钥<code>id_rsa.pub</code>，复制里面的内容，然后开始在github中配置ssh密钥。<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/0086246f3ccc703b9035e.jpg" alt="3.2.1.3"></li>
</ul>
</li>
<li>将 SSH KEY 配置到 GitHub<br>进入github，点击右上角头像 选择<code>settings</code>，进入设置页后选择 <code>SSH and GPG keys</code>，名字随便起，公钥填到<code>Key</code>那一栏。<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/75fc281237bfc6751a295.jpg" alt="3.2.2.1"><br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/993edae3bbca9489dc156.jpg" alt="3.2.2.2"><br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/fa8a7628c285e6be5c0a4.png" alt="3.2.2.3"><br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/f3fa79cf3d639ef2d5bcb.png" alt="3.2.2.4"></li>
<li>测试连接，输入以下命令<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">ssh -T git@github.com</span><br></pre></td></tr></table></figure>
第一次连接会提示<code>Are you sure you want to continue connecting (yes/no/[fingerprint])?</code>，输入<code>yes</code>即可<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/faa0077eeab8c82f1de9e.png" alt="3.2.3.1"><br>出现连接到账户的信息，说明已经大功告成，至此完成了环境准备工作。<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/faa0077eeab8c82f1de9e.png" alt="3.2.3.2"></li>
</ol>
<h3 id="3-3-创建GitHub-io仓库"><a href="#3-3-创建GitHub-io仓库" class="headerlink" title="3.3. 创建GitHub.io仓库"></a>3.3. 创建GitHub.io仓库</h3><ol>
<li>点击右上角的<code>+</code>按钮，选择<strong>New repository</strong>，创建一个<code>&lt;用户名&gt;.github.io</code>的仓库。</li>
<li>仓库名字的格式必须为：<code>&lt;用户名&gt;.github.io</code> (注意：前缀必须为用户名，此为预览博客需要，后期可修改仓库名)</li>
<li>可见性必须选择 <code>Public</code> 方便第一次部署检查问题，点击 <strong>Creat repository</strong> 进行创建即可<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/3d9274644460cd1ffeb26.png" alt="3.3. 创建GitHub.io仓库"></li>
</ol>
<hr>
<h2 id="4-初始化-Hexo-博客"><a href="#4-初始化-Hexo-博客" class="headerlink" title="4.初始化 Hexo 博客"></a>4.初始化 Hexo 博客</h2><ol>
<li>创建一个文件夹来保存博客源码（我这里选的路径为<code>D:/Hexo-Blog</code>），在文件夹内右键鼠标，选择<code>Open Git Bash here</code><br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/f78e04406dc803d610538.png" alt="4.1"></li>
<li>在<code>Git BASH</code>输入如下命令安装 Hexo<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm install -g hexo-cli &amp;&amp; hexo -v</span><br></pre></td></tr></table></figure>
<img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/808bff9b7ab5b13fcd200.png" alt="4.2"></li>
<li>安装完后输入<code>hexo -v</code>验证是否安装成功。<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/17349517f78516f7ac8ff.png" alt="4.3"></li>
<li>初始化 Hexo 项目安装相关依赖。<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line">hexo init blog-demo</span><br><span class="line">cd blog-demo</span><br><span class="line">npm i</span><br></pre></td></tr></table></figure>
<img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/1c130d7beed537111d448.png" alt="4.4"></li>
<li>初始化项目后，<code>blog-demo</code>有如下结构：<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/74128294708705e22e188.png" alt="4.5"></li>
</ol>
<ul>
<li><strong>node_modules</strong>：依赖包</li>
<li><strong>scaffolds</strong>：生成文章的一些模板</li>
<li><strong>source</strong>：用来存放你的文章</li>
<li><strong>themes</strong>：主题</li>
<li><strong>.npmignore</strong>：发布时忽略的文件（可忽略）</li>
<li><strong>_config.landscape.yml</strong>：主题的配置文件</li>
<li><strong>config.yml</strong>：博客的配置文件</li>
<li><strong>package.json</strong>：项目名称、描述、版本、运行和开发等信</li>
</ul>
<ol start="6">
<li>输入<code>hexo cl &amp;&amp; hexo s</code>启动项目<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/e8c930919bb49270bde5a.png" alt="4.6"></li>
<li>打开浏览器，输入地址：<a target="_blank" rel="noopener" href="http://localhost:4000/">http://localhost:4000/</a> ，看到下面的效果，说明你的博客已经构建成功了。<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/e285037815104f68f4514.jpg" alt="4.7"></li>
</ol>
<hr>
<h2 id="5-将静态博客挂载到-GitHub-Pages"><a href="#5-将静态博客挂载到-GitHub-Pages" class="headerlink" title="5.将静态博客挂载到 GitHub Pages"></a>5.将静态博客挂载到 GitHub Pages</h2><ol>
<li>安装 hexo-deployer-git<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">npm install hexo-deployer-git --save</span><br></pre></td></tr></table></figure></li>
<li>修改 <code>_config.yml</code> 文件<br>在blog-demo目录下的_config.yml，就是整个Hexo框架的配置文件了。可以在里面修改大部分的配置。详细可参考官方的<a target="_blank" rel="noopener" href="https://hexo.io/zh-cn/docs/configuration">配置描述</a>。<br>修改最后一行的配置，将repository修改为你自己的github项目地址即可，还有分支要改为<code>main</code>代表主分支（注意缩进）。<figure class="highlight yaml"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line"><span class="attr">deploy:</span></span><br><span class="line">  <span class="attr">type:</span> <span class="string">git</span></span><br><span class="line">  <span class="attr">repository:</span> <span class="string">git@github.com:cmliussss2024/cmliussss2024.github.io.git</span></span><br><span class="line">  <span class="attr">branch:</span> <span class="string">main</span></span><br></pre></td></tr></table></figure></li>
<li>修改好配置后，运行如下命令，将代码部署到 GitHub（Hexo三连）。<figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br></pre></td><td class="code"><pre><span class="line">// Git BASH终端</span><br><span class="line">hexo clean &amp;&amp; hexo generate &amp;&amp; hexo deploy  </span><br><span class="line"></span><br><span class="line">// 或者</span><br><span class="line"></span><br><span class="line">// VSCODE终端</span><br><span class="line">hexo cl; hexo g; hexo d</span><br></pre></td></tr></table></figure></li>
</ol>
<ul>
<li><strong>hexo clean</strong>：删除之前生成的文件，可以用<code>hexo cl</code>缩写。</li>
<li><strong>hexo generate</strong>：生成静态文章，可以用<code>hexo g</code>缩写</li>
<li><strong>hexo deploy</strong>：部署文章，可以用<code>hexo d</code>缩写<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/18b052b831896bf00cfc4.jpg" alt="5.3.1"><br><em>注意：deploy时可能要你输入 username 和 password。</em></li>
</ul>
<p>如果出现<strong>Deploy done</strong>，则说明部署成功了。<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/93a5d61648491a5278556.jpg" alt="5.3.2"><br>稍等两分钟，打开浏览器访问：<a target="_blank" rel="noopener" href="https://cmliussss2024.github.io/">https://cmliussss2024.github.io</a> ，这时候我们就可以看到博客内容了。<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/1239b1270fcdc8bd896a6.jpg" alt="5.3.3"></p>
<hr>
<h2 id="6-将静态博客挂载到-Cloudflare-Pages"><a href="#6-将静态博客挂载到-Cloudflare-Pages" class="headerlink" title="6.将静态博客挂载到 Cloudflare Pages"></a>6.将静态博客挂载到 Cloudflare Pages</h2><ol>
<li><p>在 <code>Workers 和 Pages</code> 中选择 <code>Pages</code> 的 <code>连接到 Git</code><br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/b3eae4e84c4c7c31af665.jpg" alt="6.1.1"><br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/440581264cb313ed77e75.jpg" alt="6.1.2"></p>
</li>
<li><p>然后登录你Blog仓库对应的GitHub帐号<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/733c0a673bb66670b7ca1.jpg" alt="6.2.1"><br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/8fb282e32991167a98f57.jpg" alt="6.2.2"></p>
</li>
<li><p>点击<code>保存并部署</code>后等待部署完成即可。<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/60cca5e2200e260327227.jpg" alt="6.3"></p>
</li>
<li><p>提示<code>成功！您的项目已部署到以下区域：全球</code>后，浏览器访问：<a target="_blank" rel="noopener" href="https://cmliussss2024-github-io.pages.dev/">https://cmliussss2024-github-io.pages.dev</a> ，这时候我们就可以看到博客内容了。<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/0f2a697243725c6fa2ab8.jpg" alt="6.4"><br> <em>这时你也就可以将你的<code>&lt;用户名&gt;.github.io</code>的仓库设置为<code>Private</code>私库了</em></p>
</li>
<li><p>如果你有自己的域名，你可以在这里绑定你自己的自定义域，即可<br><img src= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onerror="this.onerror=null,this.src=&quot;/img/404.jpg&quot;" data-lazy-src="https://img.090227.xyz/file/2c9ce4b9b67c09376bb91.jpg" alt="6.5"></p>
</li>
</ol>
<hr>
<h1 id="如何使用"><a href="#如何使用" class="headerlink" title="如何使用"></a>如何使用</h1><h2 id="新建一篇博文"><a href="#新建一篇博文" class="headerlink" title="新建一篇博文"></a>新建一篇博文</h2><figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">hexo new 这是一篇新的博文</span><br></pre></td></tr></table></figure>
<p>然后用文本编辑器去编辑<code>_posts/这是一篇新的博文.md</code>里的内容即可，注意要使用<strong>Markdown</strong>格式书写。<br>详细使用方法可以查阅 <a target="_blank" rel="noopener" href="https://hexo.io/zh-cn/docs/writing">https://hexo.io/zh-cn/docs/writing</a></p>
<h2 id="编辑完文章保存后可以使用如下命令，生成本地页面-http-localhost-4000-，进行预览"><a href="#编辑完文章保存后可以使用如下命令，生成本地页面-http-localhost-4000-，进行预览" class="headerlink" title="编辑完文章保存后可以使用如下命令，生成本地页面 http://localhost:4000/ ，进行预览"></a>编辑完文章保存后可以使用如下命令，生成本地页面 <a target="_blank" rel="noopener" href="http://localhost:4000/">http://localhost:4000/</a> ，进行预览</h2><figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br></pre></td><td class="code"><pre><span class="line">// Git BASH终端</span><br><span class="line">hexo cl &amp;&amp; hexo s</span><br><span class="line"></span><br><span class="line">// 或者</span><br><span class="line"></span><br><span class="line">// VSCODE终端</span><br><span class="line">hexo cl; hexo s</span><br></pre></td></tr></table></figure>

<h2 id="确认无误后使用以下命令，将本地文章推送至GitHub仓库即可"><a href="#确认无误后使用以下命令，将本地文章推送至GitHub仓库即可" class="headerlink" title="确认无误后使用以下命令，将本地文章推送至GitHub仓库即可"></a>确认无误后使用以下命令，将本地文章推送至GitHub仓库即可</h2><figure class="highlight shell"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br></pre></td><td class="code"><pre><span class="line">// Git BASH终端</span><br><span class="line">hexo cl &amp;&amp; hexo g &amp;&amp; hexo d</span><br><span class="line"></span><br><span class="line">// 或者</span><br><span class="line"></span><br><span class="line">// VSCODE终端</span><br><span class="line">hexo cl; hexo g; hexo d</span><br></pre></td></tr></table></figure>
<p>下一期会讲讲进阶的使用方法，<strong>主题美化</strong></p>
<hr>
<h1 id="VSCODE-终端首次执行报错"><a href="#VSCODE-终端首次执行报错" class="headerlink" title="VSCODE 终端首次执行报错"></a>VSCODE 终端首次执行报错</h1><p>使用管理员身份打开 powershell ,输入以下命令</p>
<figure class="highlight powershell"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="built_in">Set-ExecutionPolicy</span> RemoteSigned</span><br></pre></td></tr></table></figure>