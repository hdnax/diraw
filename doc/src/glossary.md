# Glossary

## Graphics/Rendering

_Coordinate systems and geometry_

- Clip space: The normalized coordinate system vertex shaders output to. X and Y range from -1.0 to +1.0, with (-1, -1) at bottom-left, regardless of screen size. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
- Rasterization: The GPU process of converting triangle geometry into discrete pixels and invoking the fragment shader for each covered pixel. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)

_Shaders: each runs at a different stage of the pipeline_

- Shader: A function executed on the GPU, once per unit of work (vertex, pixel, etc.), run in parallel across many units simultaneously. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
- Vertex shader: Runs before rasterization. Computes the clip-space position of each vertex; every 3 invocations define one triangle. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
- Fragment shader: Runs after rasterization. Computes the color of each pixel covered by a triangle. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
- Compute shader: A shader for arbitrary GPU computation, not tied to rendering. Each invocation receives an iteration index. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-draw-diagram)

## GPU (general)

_Data runtime entities_

- Texture: A 2D grid of pixels stored on the GPU. The canvas you draw to is a texture. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
- Render target: A texture the GPU writes fragment shader output into at the end of a render pass. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
- Vertex buffer: A buffer holding per-vertex data (positions, colors, UVs, etc.) that the pipeline reads and feeds into the vertex shader. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-draw-diagram)

_Executable runtime entities_

- Render pass: A recorded sequence of draw commands targeting a set of render targets. Multiple render passes can be encoded into one command buffer. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-draw-diagram)
- Command buffer: A recorded sequence of GPU commands, submitted to the device queue for execution. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-draw-diagram)

## WebGPU

_Device handles_

- Adapter: Represents a specific physical GPU on the system. Used to select which hardware to connect to. (`navigator.gpu.requestAdapter()`) [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
- Device: A logical connection to an adapter, used to create all GPU resources (buffers, textures, pipelines, etc.). (`adapter.requestDevice()`) [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
- Render pass descriptor: Specifies the target textures, clear color, and load/store operations for a render pass. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
  > Remark: Pipeline is a configure of the shaders to run. It's like a static program, without any allocated resources. The render pass description is more like a process, with buffers attached, etc.

_Shaders_

- WGSL: WebGPU Shading Language (pronounced "wig-sil"). A strongly typed language for writing WebGPU shaders. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
- Attribute (WGSL): An `@keyword` annotation that binds a function or variable to a GPU stage or input/output slot (e.g. `@vertex`, `@fragment`, `@builtin`, `@location`). [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
- Shader module: A compiled WGSL program that can contain multiple shader entry points. Pipelines select which entry point to use. (`device.createShaderModule(...)`) [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-drawing-triangles-to-textures)
- Command encoder: Records GPU commands into a command buffer. Calling `finish()` produces the command buffer. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-draw-diagram)

_Executable static entities_

- Pipeline: A GPU object that describes a complete job: which shaders to run and how to run them. Immutable once created. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-draw-diagram)
  > Remark: Pipeline is a configure of the shaders to run. It's like a static program, without any allocated resources. The render pass description is more like a process, with buffers attached, etc.
- Render pipeline: A pipeline specifically for rendering. It wires together a vertex shader and a fragment shader, along with configuration for how geometry is fed in and how output is written. (`device.createRenderPipeline(...)`)
- Bind group: A set of resources (buffers, textures, samplers) bound together for shaders to access during a draw or dispatch. [source](https://webgpufundamentals.org/webgpu/lessons/webgpu-fundamentals.html#a-draw-diagram)
