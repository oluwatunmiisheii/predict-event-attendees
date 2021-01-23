class Tix {
  constructor() {
  }
  openDropdowns() {
    const dropdownToggles = document.querySelectorAll('.tix-dropdown__toggle');
    for (const toggle of dropdownToggles) {
      toggle.addEventListener('click', e => {
        let target = e.currentTarget.dataset.dropdown;
        let dropdown = document.getElementById(`dropdown-${target}`);
        dropdown.classList.toggle('tix-dropdown__active');
        e.stopPropagation();
      });
    }
  }

  closeDropdowns() {
    document.addEventListener('click', e => {
      if (e.target.classList !== 'undefined' && !e.target.classList.contains('tix-dropdown') &&
        !this.isDescendant('tix-dropdown', e.target) && !this.isDescendant('wj-dropdown__toggle', e.target)
      ) {
        const dropdowns = document.querySelectorAll('.tix-dropdown');
        for (const dropdown of dropdowns) {
          dropdown.classList.remove('tix-dropdown__active');
        }
      }
    });
  }


  isDescendant(parent, child) {
    var parent_node = child.parentNode;
    while (parent_node != null) {
      if (parent_node == parent) {
        return true;
      }
      parent_node = parent_node.parentNode;
    }
    return false;
  }
}

export default Tix;