import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// directives
import { TemplateWrapper } from './directives/TemplateWrapper.js';
import { DblClickCopy } from './directives/DblClickCopy.js';

// components
import { PasswordStrength } from './components/password/PasswordModule.js';
import { DropdownMenu, DropdownToggle, Dropdown } from './components/dropdown/Dropdown.js';
import { CodeHighlight } from './components/codeHighlight/CodeHighlight.js';
import { Drawer, DrawerManager, DrawerContainer, DrawerOverlay } from './components/drawer/DrawerModule.js';
import { Toolbar, ToolbarTitle, ToolbarContent } from './components/toolbar/index.js';

// styles
import './styles/index.scss';

// all components
export const components = [
  DblClickCopy,
  TemplateWrapper,
  CodeHighlight,
  PasswordStrength,

  ToolbarTitle,
  ToolbarContent,
  Toolbar,

  Drawer,
  DrawerContainer,
  DrawerOverlay,

  Dropdown,
  DropdownMenu,
  DropdownToggle
];

// all providers
export const providers = [
  DrawerManager
];

// module
@NgModule({
  declarations: components,
  exports: components,
  providers: providers,
  imports: [BrowserModule]
})
export class CommonModule { }