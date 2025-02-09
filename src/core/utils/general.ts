export function setClassName(
  target: string,
  stringToFind: string,
  add: string,
  position: string = 'startsWith' || 'endsWith',
): void {
  const element: Element | null = document.querySelector(target);
  if (!element) {
    return;
  }

  const classes: string[] = Array.from(element.classList);
  if (!classes.length) {
    return;
  }

  classes.forEach((className: string): void => {
    const targetClass: boolean =
      position === 'startsWith'
        ? className.startsWith(stringToFind)
        : className.endsWith(stringToFind);
    if (!targetClass) {
      element.classList.add(`${stringToFind}${add}`);
    } else {
      element.classList.remove(className);
      element.classList.add(`${stringToFind}${add}`);
    }
  });
}

export function replaceClasses(
  el: Element,
  classes: Array<string>,
  themeClass: string,
): void {
  const rootClasses: Array<string> = Array.from(el.classList); // получаем список классов el

  const currentClass: string | undefined = classes.find((className) =>
    rootClasses.includes(className),
  ); // возвращает совпадение класса или undefined
  if (typeof currentClass !== 'undefined') {
    // Если класс совпадает, удаляем его и устанавливаем новый. Если нет, то устанавливаем переданный класс
    document.documentElement.classList.remove(currentClass);
    document.documentElement.classList.add(themeClass as string);
  } else {
    document.documentElement.classList.add(themeClass as string);
  }
}

export function getScrollbarWidth(el: HTMLElement): string {
  let scrollbarWidth: number = 0;
  if (el === document.body) {
    scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  } else {
    const scrollbarContainer: HTMLDivElement = document.createElement('div');
    scrollbarContainer.className = 'scrollbar-container';
    document.body.appendChild(scrollbarContainer);

    scrollbarWidth =
      scrollbarContainer.offsetWidth - scrollbarContainer.clientWidth;

    document.body.removeChild(scrollbarContainer);
  }
  return `${scrollbarWidth}px`;
}

export function trapFocus(target: HTMLElement): void {
  const interactiveElements: string[] = [
    'a[href]',
    'button',
    'textarea',
    'input:not([type=hidden])',
    'label',
    'select',
  ];

  const interactiveElementsSelector: string = interactiveElements
    .map((element) => `${element}:not([disabled])`)
    .join(', ');
  const focusableElements: NodeListOf<HTMLElement> = target.querySelectorAll(
    interactiveElementsSelector,
  );

  const firstElement: HTMLElement = focusableElements[0];
  const lastElement: HTMLElement =
    focusableElements[focusableElements.length - 1];
  const KEYCODE_TAB: number = 9;

  target.addEventListener('keydown', (e: KeyboardEvent): void => {
    const isTabPressed: boolean = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // shift + tab
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === lastElement) {
      // tab
      firstElement.focus();
      e.preventDefault();
    }
  });
}
