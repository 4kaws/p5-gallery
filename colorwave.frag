precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
varying vec2 vTexCoord;
uniform vec2 u_mouse;
uniform sampler2D tex0;

void main(){
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;
  //uv.x = 1.0 - uv.x;
  //uv += u_mouse;
  vec4 tex = texture2D(tex0, uv);
  vec2 coord = u_mouse *8.0 * gl_FragCoord.xy/ u_resolution;
  for(int n=1; n<8; n++){
    float i = float(n);
      coord += vec2(0.7 / i * sin(i * coord.y * u_time + 0.7 * i) + 0.8, 0.4 / i * cos(i * coord.x * u_time + 0.9 * i) + 1.9);
      coord -= vec2(0.2 / i * cos(i * coord.x * u_time + 1.2 * i) + 0.3, 0.8 / i * sin(i * coord.y * u_time + 0.3 * i) + 0.9);
      coord += vec2(0.4 / i * atan(i * coord.y * u_time + 0.2 * i) + 0.6, 0.7 / i * cos(i * coord.x * u_time + 0.5 * i) + 1.3);
  }
  
  //coord += vec2(0.7 / sin(coord.y * u_time + 0.3) + 0.8, 0.4 / sin(coord.x * u_time + 0.3) + 1.6);
  
  vec3 color = vec3(0.5 *sin(coord.x *tex.r)+ 0.5, 0.5 * sin(coord.y *tex.g) + 0.5, sin((coord.x + coord.y)*tex.b)) ; 
  
  gl_FragColor = vec4(color, 1.0);
}