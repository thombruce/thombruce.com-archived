__NUXT_JSONP__("/blog/github-v-gitlab-lfs", (function(a,b,c,d,e,f,g,h,i,j){return {data:[{slug:j,article:{slug:j,description:"My choice of a Git remote.",title:"GitHub Vs. GitLab LFS",createdAt:"2021-04-27T11:24:19.000Z",categories:["Journal"],series:["Getting Started"],tags:["GitHub","GitLab","Git LFS"],toc:[],body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:a,value:"At the time of writing, this website - despite my having written three blog posts already here - is not online. I've been writing content to roughly describe some thought processes as I develop the site itself, and now the next step is to take it online."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Before talking about hosting and serving the site to the public though (which I know I'll be using "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.netlify.com\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Netlify"}]},{type:a,value:" to do), I need to decide on a place to store my source code... Actually, that's a lie. It isn't strictly necessary, but it is very good practice and I may write a post in the future about the benefits of Git or version control more broadly. Anyway, for my purposes right now I just want to decide on a place to store my source code, and my choices are GitHub or GitLab."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Before this morning, I actually thought I'd go with GitHub because I prefer the interface and it doesn't have the limitations that it used to which made me adopt GitLab in preference a long time ago. But... a static blog website isn't your typical coding project. My last article was about images, and they require some special consideration."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Images, you see, they tend to be binary file formats rather than text. This limits the benefits of version control, significantly; if a file changes, then the whole file changes rather than just a line or two. They're also large files, so this accumulates; the more large files we have, the more changes that are made to them, then the more junk data we're committing to version control. The most popular solution to this is "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgit-lfs.github.com\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Git LFS (or Git Large File Storage)"}]},{type:a,value:". Git LFS, when installed and told which files to exclude, will not commit those files to version control, but will instead commit pointers to the files elsewhere - the files are stored and revised more typically then, in a manner better fitting large, binary files."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"What does this have to do with my choice between GitHub and GitLab? Well... GitHub are the owners and developers of Git LFS, but they have made it open source and it has largely been adopted as a standard by other Git storage providers. What matters to me, since I'm creating a blog that should just grow and grow with more and more images and other files being added, is storage capacity. By default GitHub allow 1GB of Git LFS storage, though I believe this can be increased with other paid plans. Over on GitLab, however, the storage limit is 10GB per repo. This is... ten times more, obviously."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Realistically, do I think I will hit this limit? ... Maybe eventually. The one image I do have stored currently is only around 222 kilobytes, one fifth of a megabyte, or one five-thousandth of a gigabyte, so I could store almost 50 thousand images with GitLab's LFS limit. So... do I think I will hit that limit? No time soon. But if I do upload more and different kinds of files, eventually, then perhaps we bump into that eventually and need to consider another solution."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"The limiting factor, then, is bandwidth. Apparently, GitLab still have no strict limit on bandwidth usage but they do have some general discussion about "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgitlab.com\u002Fgitlab-com\u002Fwww-gitlab-com\u002F-\u002Fissues\u002F1003#note_19874603",rel:[f,g,h],target:i},children:[{type:a,value:"acceptable use"}]},{type:a,value:"; obviously trying to use a free service to serve up the next Netflix would be unfair, and naturally draw quick attention from GitLab to be shut down."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Fortunately, I can prevent high bandwidth usage by caching... and I think this is something which Netlify (mentioned up top) support by default... "},{type:b,tag:"em",props:{},children:[{type:a,value:"I tried to link to information here but all sources found were vague and inconclusive; the answer is roughly \"yes\" though."}]}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"So that... I think that settles it. I'll be pushing this site to GitLab with Git LFS also hosted by GitLab, and I will be hosting it on Netlify very, very soon."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fgithub-v-gitlab-lfs",extension:".md",updatedAt:"2021-06-01T17:50:22.236Z"},_img:{}}],fetch:{"0":{_error:{message:"Cannot read property 'reduce' of undefined",statusCode:500}}},mutations:[]}}("text","element","p","\n","a","nofollow","noopener","noreferrer","_blank","github-v-gitlab-lfs")));