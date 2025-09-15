import { DecoratorFunction } from "storybook/internal/csf";

export const withMaxWidth: DecoratorFunction = (StoryFn, context) => {
    console.log(context)
    return (
        <div style={{
            maxWidth: "800px",
            margin: "0 auto",
            border: "1px solid pink",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px"
        }}>
            <StoryFn />
        </div>
    );
};

/*
What Decorators Are For
Decorators in Storybook are wrapper functions that allow you to:

Add context around your components - like providers, themes, layouts
Simulate different environments - including screen sizes, device types, etc.
Add global styling or behavior - consistent padding, backgrounds, etc.
Mock external dependencies - APIs, services, etc.

# Mobile breakpoint decorator
export const withMobileBreakpoint: DecoratorFunction = (StoryFn) => {
  return (
    <div style={{ 
      maxWidth: "375px", 
      border: "1px solid #ccc",
      margin: "0 auto"
    }}>
      <StoryFn />
    </div>
  );
};

# Tablet breakpoint decorator
export const withTabletBreakpoint: DecoratorFunction = (StoryFn) => {
  return (
    <div style={{ 
      maxWidth: "768px", 
      border: "1px solid #ccc",
      margin: "0 auto"
    }}>
      <StoryFn />
    </div>
  );
};

# Desktop breakpoint decorator
export const withDesktopBreakpoint: DecoratorFunction = (StoryFn) => {
  return (
    <div style={{ 
      maxWidth: "1200px", 
      border: "1px solid #ccc",
      margin: "0 auto"
    }}>
      <StoryFn />
    </div>
  );
};

Other Common Decorator Uses
1.Theme providers:

export const withDarkTheme: DecoratorFunction = (StoryFn) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <StoryFn />
    </ThemeProvider>
  );
};
2.Layout containers:
export const withCardLayout: DecoratorFunction = (StoryFn) => {
  return (
    <div className="card p-4 shadow-lg">
      <StoryFn />
    </div>
  );
};
3.Data providers:
export const withMockData: DecoratorFunction = (StoryFn) => {
  return (
    <MockDataProvider>
      <StoryFn />
    </StoryFn>
  );
};
Built-in Storybook Viewport Addon
For breakpoint testing specifically, Storybook also has a built-in Viewport addon that might be easier:

It's already included in your setup (part of the core now)
Provides preset device sizes (iPhone, iPad, Desktop, etc.)
Lets you switch between viewports in the toolbar
No need to write custom decorators
*/