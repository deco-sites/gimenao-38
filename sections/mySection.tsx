
  interface Props {
    /**
    * @description The description of name.
    */
    name?: string;
    /**
    * @description The description of textColor.
    */
    textColor?: string;
  }
  
  export default function Section({ name = "Capy", textColor = "text-green-500" }: Props) {
    return (
      <div class={`bg-white p-8 rounded-md shadow-md ${textColor}`}>
        <h2 class="text-2xl font-semibold mb-4">Fancy Green Component</h2>
  
        <div class="space-y-4">
          <button class="btn btn-primary">Click me</button>
  
          <input type="text" class="input input-bordered" placeholder="Type something" />
  
          <div class="alert alert-success">
            Hello {name}
          </div>
        </div>
      </div>
    )
  }
