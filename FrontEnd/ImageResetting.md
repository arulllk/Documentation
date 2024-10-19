## Image Resetting - ####

### Steps summary
- The parent defines a `ref` and passes it down to the child.
- The child assigns a function (to reset the image) to this ref.
- The parent can now call this function via the `ref`, and it will trigger the behavior (resetting the image preview) inside the child.

This way, the parent gains control over a function in the child component without directly passing a function as a prop, and the child exposes a behavior (resetting the image preview) to the parent via the `ref`.

**Step-1 : Parent Component Creates a Ref**<br>
The parent component wants to reset the image preview in the child component. To do this, the parent defines a ref using useRef: for eg in `AddBlog` component


```js
  const resetImagePreviewRef = React.useRef(null);
```

This ref will hold a reference to a function that the child will provide, allowing the parent to reset the image preview.

**Step-2 : Parent Passes the Ref to Child**<br>
The parent passes this `resetImagePreviewRef` down to the child component (`ImageUpload`) as a `prop`:

```js
<ImageUpload resetPreviewRef={resetImagePreviewRef} />
```
This ref is initially null, but the child will populate it with a function in the next steps.

<br>

**Step-3: Child Component Defines the Reset Function**<br>
Inside the child component (`ImageUpload`), the child defines a function that resets the image preview by setting `filePreview` to `null`:

```js
const setFilePreview = useState(null);

// This useEffect runs whenever the component is mounted
useEffect(() => {
  if (resetPreviewRef) {
    // Assign a function to the ref's current value
    resetPreviewRef.current = () => setFilePreview(null);
  }
}, [resetPreviewRef]);
```
This means:
- Whenever the child component is mounted (or the ref changes), it assigns a function (`() => setFilePreview(null)`) to `resetPreviewRef.current`.
- Now, `resetPreviewRef.current` holds a reference to the child’s function that resets the image preview.
<br>

**Step-4 Parent calls the reset function**<br>
When the parent component wants to reset the image preview (e.g., after form submission), it can call the function stored in the `resetImagePreviewRef`:

Since `resetImagePreviewRef.current` now holds a function that was defined in the child, calling it will execute the function inside the child component, resetting the image preview by setting `filePreview` to `null`.
 
