/**
 * @license
 * Copyright 2021 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */export class ToolTipController{constructor(i){this.el=i;document.addEventListener("click",e=>{this.el.contains(e.target)||this.el.removeAttribute("open")})}}
//# sourceMappingURL=tooltip.js.map
