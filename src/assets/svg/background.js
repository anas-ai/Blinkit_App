import * as React from "react"
import Svg, { Defs, Path, ClipPath, Use } from "react-native-svg"
const BackGroundSvg = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 4000 9000",
    }}
    viewBox="0 0 4000 9000"
  >
    <Defs>
      <Path id="a" d="M0 17.303h3998.357v8967.385H0z" />
    </Defs>
    <ClipPath id="b">
      <Use
        xlinkHref="#a"
        style={{
          overflow: "visible",
        }}
      />
    </ClipPath>
    <Path
      d="M0 17.303h3998.357v8967.385H0z"
      style={{
        clipPath: "url(#b)",
        fill: "url(#SVGID_00000113333676474225872190000012343101017847688585_)",
      }}
    />
    <Defs>
      <Path
        id="c"
        d="M1843.711 8984.688H0V5250.779c759.489-427.242 1344.257 77.681 875.076 485.504-469.179 407.823-665.935 932.167 45.405 776.805 711.34-155.362 1165.386 38.838 559.989 718.547-955.313 1072.575 1542.099-40.06 363.241 1753.053"
      />
    </Defs>
    <ClipPath id="d">
      <Use
        xlinkHref="#c"
        style={{
          overflow: "visible",
        }}
      />
    </ClipPath>
    <Path
      d="M0 4823.537h3022.569v4161.15H0z"
      style={{
        clipPath: "url(#d)",
        fill: "url(#SVGID_00000098219102255148466490000007455129003652093321_)",
      }}
    />
    <Defs>
      <Path
        id="e"
        d="M973.463 8377.402c612.962 155.36 166.485 607.285 166.485 607.285H0V5590.613c555.161-184.492 481.581 368.984 307.527 669.995C133.477 6561.621 0 6950.022 587.523 6950.022c587.524 0 703.772 203.913 370.801 514.636-332.965 310.72-597.823 757.386 15.139 912.744"
      />
    </Defs>
    <ClipPath id="f">
      <Use
        xlinkHref="#e"
        style={{
          overflow: "visible",
        }}
      />
    </ClipPath>
    <Path
      d="M0 5406.122h1586.425v3578.566H0z"
      style={{
        clipPath: "url(#f)",
        fill: "url(#SVGID_00000074426692108053064310000001319842482610732966_)",
      }}
    />
    <Defs>
      <Path
        id="g"
        d="M2154.645 17.299h1843.712v3733.908c-759.489 427.242-1344.257-77.681-875.077-485.505 469.178-407.823 665.936-932.165-45.406-776.804-711.34 155.362-1165.386-38.838-559.988-718.547C3473.2 697.776 975.789 1810.411 2154.645 17.299"
      />
    </Defs>
    <ClipPath id="h">
      <Use
        xlinkHref="#g"
        style={{
          overflow: "visible",
        }}
      />
    </ClipPath>
    <Path
      d="M975.789 17.299h3022.568v4161.15H975.789z"
      style={{
        clipPath: "url(#h)",
        fill: "url(#SVGID_00000104668555687404902280000009934045025681097391_)",
      }}
    />
    <Defs>
      <Path
        id="i"
        d="M3024.895 624.584c-612.962-155.362-166.487-607.285-166.487-607.285h1139.949v3394.074c-555.16 184.491-481.581-368.985-307.527-669.995 174.049-301.014 307.527-689.414-279.996-689.414s-703.771-203.913-370.802-514.636c332.965-310.72 597.825-757.387-15.137-912.744"
      />
    </Defs>
    <ClipPath id="j">
      <Use
        xlinkHref="#i"
        style={{
          overflow: "visible",
        }}
      />
    </ClipPath>
    <Path
      d="M2411.933 17.299h1586.424v3578.565H2411.933z"
      style={{
        clipPath: "url(#j)",
        fill: "url(#SVGID_00000152949125757882509680000009031023357757209005_)",
      }}
    />
  </Svg>
)
export default BackGroundSvg
