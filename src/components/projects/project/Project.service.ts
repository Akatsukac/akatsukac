export function triggerEvent(e:React.MouseEvent) {
  let button = e.currentTarget;
  let parent = button.parentElement;
  if (parent !== null && parent.parentElement !== null) {
    toggleClasses(parent);
  }
}

function toggleClasses(parent: HTMLElement) {
  // Collapsible button: inactive has display none
  let activeElems = parent.getElementsByClassName("active");
  let inactiveElems = parent.getElementsByClassName("inactive");
  let activeElem = activeElems[0];
  let inactiveElem = inactiveElems[0];
  activeElem.classList.add("inactive");
  activeElem.classList.remove("active");
  inactiveElem.classList.add("active");
  inactiveElem.classList.remove("inactive");
  
  // Collapsible paragraphs
  if (parent.parentElement === null) {
    return;
  }

  let collapsibleContentList = parent.parentElement.getElementsByClassName("collapsible-content");

  for (let i = 0; i < collapsibleContentList.length; i++) {
    let collapsibleContent = collapsibleContentList[i];
    if (collapsibleContent.classList.contains("collapsed")) {
      collapsibleContent.classList.add("visible");
      collapsibleContent.classList.remove("collapsed");
    } else {
      collapsibleContent.classList.add("collapsed");
      collapsibleContent.classList.remove("visible");
    }
  }
}
