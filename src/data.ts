import type { CheatSheet } from './types';
import { Difficulty } from './types';

// Helper to create snippets quickly to reach high volume
const createSnippet = (id: string, title: string, desc: string, code: string, lang: string, tags: string[], diff: Difficulty = Difficulty.Beginner) => ({
  id, title, description: desc, code, language: lang, tags, difficulty: diff
});

export const CHEAT_SHEETS: CheatSheet[] = [
  // =========================================================================
  // HTML5
  // =========================================================================
  {
    id: 'html',
    name: 'HTML5',
    slug: 'html',
    iconName: 'FileCode',
    type: 'Language',
    description: 'The standard markup language for documents designed to be displayed in a web browser.',
    categories: [
      {
        id: 'html-structure',
        title: 'Document Structure',
        snippets: [
          createSnippet('html-doctype', 'Doctype', 'Defines the document type.', '<!DOCTYPE html>', 'html', ['Basics']),
          createSnippet('html-root', 'HTML Root', 'Root element.', '<html lang="en">...</html>', 'html', ['Basics']),
          createSnippet('html-head', 'Head', 'Contains metadata.', '<head>...</head>', 'html', ['Basics']),
          createSnippet('html-body', 'Body', 'Visible content.', '<body>...</body>', 'html', ['Basics']),
          createSnippet('html-meta', 'Meta Tags', 'Charset & Viewport.', '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">', 'html', ['Meta']),
        ]
      },
      {
        id: 'html-forms',
        title: 'Forms & Input',
        snippets: [
          createSnippet('html-form', 'Form', 'Form container.', '<form action="/submit" method="POST">...</form>', 'html', ['Forms']),
          createSnippet('html-input', 'Input Types', 'Common inputs.', '<input type="text">\n<input type="password">\n<input type="email">\n<input type="date">', 'html', ['Forms']),
          createSnippet('html-select', 'Select', 'Dropdown.', '<select>\n  <option value="1">One</option>\n</select>', 'html', ['Forms']),
          createSnippet('html-textarea', 'Textarea', 'Multiline text.', '<textarea rows="4"></textarea>', 'html', ['Forms']),
        ]
      },
      {
        id: 'html-advanced',
        title: 'Advanced & APIs',
        snippets: [
          createSnippet('html-canvas', 'Canvas API', 'Drawing graphics.', '<canvas id="myCanvas" width="200" height="100"></canvas>\n<script>\n  const c = document.getElementById("myCanvas");\n  const ctx = c.getContext("2d");\n  ctx.fillStyle = "#FF0000";\n  ctx.fillRect(0, 0, 150, 75);\n</script>', 'html', ['Graphics'], Difficulty.Advanced),
          createSnippet('html-geo', 'Geolocation', 'Get location.', 'navigator.geolocation.getCurrentPosition(position => {\n  console.log(position.coords.latitude);\n});', 'javascript', ['API'], Difficulty.Advanced),
          createSnippet('html-storage', 'Web Storage', 'Local Storage.', 'localStorage.setItem("key", "value");\nconst val = localStorage.getItem("key");', 'javascript', ['API'], Difficulty.Advanced),
          createSnippet('html-worker', 'Web Workers', 'Background threads.', 'const w = new Worker("worker.js");\nw.onmessage = (e) => { ... };', 'javascript', ['Performance'], Difficulty.Advanced),
          createSnippet('html-aria', 'ARIA Roles', 'Accessibility.', '<div role="alert" aria-live="assertive">Error</div>', 'html', ['Accessibility'], Difficulty.Intermediate),
          createSnippet('html-template', 'Template Tag', 'Invisible content.', '<template id="myTemp">\n  <h2>Hidden</h2>\n</template>', 'html', ['Advanced'], Difficulty.Intermediate),
        ]
      }
    ]
  },
  // =========================================================================
  // CSS3
  // =========================================================================
  {
    id: 'css',
    name: 'CSS3',
    slug: 'css',
    iconName: 'Palette',
    type: 'Language',
    description: 'Style sheet language used for describing the presentation of a document.',
    categories: [
      {
        id: 'css-basics',
        title: 'Selectors & Box Model',
        snippets: [
          createSnippet('css-selectors', 'Selectors', 'Class & ID.', '.class { } \n#id { } \nelement { }', 'css', ['Basics']),
          createSnippet('css-box', 'Box Model', 'Spacing.', 'margin: 10px;\npadding: 20px;\nborder: 1px solid black;', 'css', ['Basics']),
          createSnippet('css-pseudo', 'Pseudo-classes', 'State.', 'a:hover { color: red; }\ninput:focus { outline: none; }', 'css', ['Basics']),
        ]
      },
      {
        id: 'css-layout',
        title: 'Flexbox & Grid',
        snippets: [
          createSnippet('css-flex', 'Flexbox', 'Layout.', 'display: flex;\njustify-content: center;\nalign-items: center;', 'css', ['Layout']),
          createSnippet('css-grid', 'CSS Grid', '2D Layout.', 'display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: 1rem;', 'css', ['Layout']),
        ]
      },
      {
        id: 'css-advanced',
        title: 'Advanced & Animations',
        snippets: [
          createSnippet('css-vars', 'CSS Variables', 'Custom properties.', ':root { --main-color: #333; }\ndiv { color: var(--main-color); }', 'css', ['Variables'], Difficulty.Intermediate),
          createSnippet('css-keyframes', 'Keyframes', 'Animation steps.', '@keyframes slide {\n  from { left: 0; }\n  to { left: 100px; }\n}', 'css', ['Animation'], Difficulty.Advanced),
          createSnippet('css-anim', 'Animation', 'Apply keyframes.', 'div { animation: slide 2s infinite alternate; }', 'css', ['Animation'], Difficulty.Advanced),
          createSnippet('css-transform', 'Transform', '3D/2D.', 'transform: rotate(45deg) scale(1.5) translateX(10px);', 'css', ['Visuals'], Difficulty.Intermediate),
          createSnippet('css-media', 'Media Queries', 'Responsive.', '@media (max-width: 768px) {\n  .container { flex-direction: column; }\n}', 'css', ['Responsive'], Difficulty.Intermediate),
          createSnippet('css-clamp', 'Clamp()', 'Responsive Text.', 'font-size: clamp(1rem, 2.5vw, 2rem);', 'css', ['Functions'], Difficulty.Advanced),
          createSnippet('css-layers', 'Cascade Layers', 'Organization.', '@layer base, components;\n@layer base { ... }', 'css', ['Advanced'], Difficulty.Advanced),
        ]
      }
    ]
  },
  // =========================================================================
  // JavaScript
  // =========================================================================
  {
    id: 'js',
    name: 'JavaScript',
    slug: 'javascript',
    iconName: 'Braces',
    type: 'Language',
    description: 'The core language of the web.',
    categories: [
      {
        id: 'js-basics',
        title: 'Basics & DOM',
        snippets: [
          createSnippet('js-vars', 'Variables', 'Let/Const.', 'let x = 10;\nconst y = 20;', 'javascript', ['Basics']),
          createSnippet('js-arrow', 'Arrow Function', 'Syntax.', 'const add = (a, b) => a + b;', 'javascript', ['Basics']),
          createSnippet('js-dom', 'DOM Select', 'Query.', 'const el = document.querySelector(".class");', 'javascript', ['DOM']),
        ]
      },
      {
        id: 'js-api-req',
        title: 'API & Networking',
        snippets: [
          createSnippet('js-fetch-get', 'Fetch GET', 'Basic request.', 'fetch("https://api.example.com/data")\n  .then(response => response.json())\n  .then(data => console.log(data));', 'javascript', ['API', 'Fetch']),
          createSnippet('js-fetch-post', 'Fetch POST', 'Sending JSON.', 'fetch(url, {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ key: "value" })\n});', 'javascript', ['API', 'Fetch']),
          createSnippet('js-fetch-auth', 'Fetch with Auth', 'Bearer Token.', 'fetch(url, {\n  headers: { "Authorization": "Bearer " + token }\n});', 'javascript', ['API', 'Security']),
          createSnippet('js-url-params', 'URLSearchParams', 'Query strings.', 'const params = new URLSearchParams({ q: "search", page: 1 });\nconst url = `https://api.com?${params}`;', 'javascript', ['API']),
          createSnippet('js-form-data', 'FormData', 'File Uploads.', 'const formData = new FormData();\nformData.append("file", fileInput.files[0]);\nfetch(url, { method: "POST", body: formData });', 'javascript', ['API', 'Files']),
          createSnippet('js-async-fetch', 'Async/Await Fetch', 'Modern syntax.', 'try {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error("404");\n  const data = await res.json();\n} catch (e) { ... }', 'javascript', ['API'], Difficulty.Intermediate),
        ]
      },
      {
        id: 'js-async',
        title: 'Async Programming',
        snippets: [
          createSnippet('js-promise', 'Promises', 'Handling async.', 'fetch(url).then(res => res.json()).catch(err => ...);', 'javascript', ['Async']),
          createSnippet('js-async-await', 'Async/Await', 'Modern syntax.', 'async function getData() {\n  const res = await fetch(url);\n  return await res.json();\n}', 'javascript', ['Async']),
        ]
      },
      {
        id: 'js-advanced',
        title: 'Advanced Concepts',
        snippets: [
          createSnippet('js-closure', 'Closures', 'Scope retention.', 'function outer(x) {\n  return function inner(y) { return x + y; };\n}\nconst add5 = outer(5);', 'javascript', ['Scope'], Difficulty.Advanced),
          createSnippet('js-generator', 'Generators', 'Iterators.', 'function* idMaker() {\n  let index = 0;\n  while(true) yield index++;\n}', 'javascript', ['ES6'], Difficulty.Advanced),
          createSnippet('js-proxy', 'Proxy', 'Meta-programming.', 'const handler = {\n  get: (obj, prop) => prop in obj ? obj[prop] : "Not found"\n};\nconst p = new Proxy({}, handler);', 'javascript', ['Advanced'], Difficulty.Advanced),
          createSnippet('js-currying', 'Currying', 'Functional.', 'const sum = a => b => a + b;\nsum(1)(2);', 'javascript', ['Functional'], Difficulty.Advanced),
          createSnippet('js-modules', 'ES Modules', 'Import/Export.', 'export const data = 1;\nimport { data } from "./file.js";', 'javascript', ['Modules'], Difficulty.Intermediate),
          createSnippet('js-intl', 'Intl API', 'Formatting.', 'new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(1234.56)', 'javascript', ['API'], Difficulty.Intermediate),
        ]
      }
    ]
  },
  // =========================================================================
  // TypeScript
  // =========================================================================
  {
    id: 'ts',
    name: 'TypeScript',
    slug: 'typescript',
    iconName: 'FileType2',
    type: 'Language',
    description: 'Typed superset of JavaScript.',
    categories: [
      {
        id: 'ts-basics',
        title: 'Types & Interfaces',
        snippets: [
          createSnippet('ts-types', 'Basic Types', 'Primitives.', 'let id: number = 5;\nlet name: string = "John";', 'typescript', ['Basics']),
          createSnippet('ts-interface', 'Interface', 'Object shape.', 'interface User { id: number; name: string; }', 'typescript', ['Basics']),
          createSnippet('ts-enum', 'Enums', 'Constants.', 'enum Dir { Up, Down, Left, Right }', 'typescript', ['Basics']),
        ]
      },
      {
        id: 'ts-api-types',
        title: 'API Typing',
        snippets: [
          createSnippet('ts-api-response', 'Typed Response', 'Generic Fetch.', 'async function get<T>(url: string): Promise<T> {\n  const res = await fetch(url);\n  return res.json();\n}\n\n// Usage\nconst user = await get<User>("/api/user");', 'typescript', ['API', 'Generics']),
          createSnippet('ts-dto', 'DTO Interface', 'Data Transfer Object.', 'interface LoginResponse {\n  token: string;\n  expiresIn: number;\n}', 'typescript', ['API']),
        ]
      },
      {
        id: 'ts-advanced',
        title: 'Advanced Types',
        snippets: [
          createSnippet('ts-generics', 'Generics', 'Reusable code.', 'function identity<T>(arg: T): T { return arg; }', 'typescript', ['Generics'], Difficulty.Intermediate),
          createSnippet('ts-utility', 'Utility Types', 'Partial/Pick.', 'type PartialUser = Partial<User>;\ntype NameOnly = Pick<User, "name">;', 'typescript', ['Utility'], Difficulty.Intermediate),
          createSnippet('ts-conditional', 'Conditional Types', 'Type logic.', 'type IsString<T> = T extends string ? true : false;', 'typescript', ['Advanced'], Difficulty.Advanced),
          createSnippet('ts-infer', 'Infer Keyword', 'Type inference.', 'type Return<T> = T extends (...args: any[]) => infer R ? R : any;', 'typescript', ['Advanced'], Difficulty.Advanced),
          createSnippet('ts-keyof', 'Keyof Operator', 'Index types.', 'function getProp<T, K extends keyof T>(obj: T, key: K) { return obj[key]; }', 'typescript', ['Advanced'], Difficulty.Advanced),
          createSnippet('ts-mapped', 'Mapped Types', 'Transform types.', 'type Readonly<T> = { readonly [P in keyof T]: T[P] };', 'typescript', ['Advanced'], Difficulty.Advanced),
          createSnippet('ts-narrowing', 'Type Guards', 'Narrowing.', 'function isString(x: any): x is string {\n  return typeof x === "string";\n}', 'typescript', ['Advanced'], Difficulty.Advanced),
        ]
      }
    ]
  },
  // =========================================================================
  // React
  // =========================================================================
  {
    id: 'react',
    name: 'React',
    slug: 'react',
    iconName: 'Atom',
    type: 'Framework',
    description: 'UI Library.',
    categories: [
      {
        id: 'react-basics',
        title: 'Components & Hooks',
        snippets: [
          createSnippet('react-component', 'Component', 'Functional.', 'function Welcome({ name }) {\n  return <h1>Hello, {name}</h1>;\n}', 'javascript', ['Basics']),
          createSnippet('react-state', 'useState', 'State.', 'const [count, setCount] = useState(0);', 'javascript', ['Hooks']),
          createSnippet('react-effect', 'useEffect', 'Side effects.', 'useEffect(() => {\n  document.title = count;\n}, [count]);', 'javascript', ['Hooks']),
        ]
      },
      {
        id: 'react-api',
        title: 'Data Fetching & API',
        snippets: [
          createSnippet('react-use-effect-fetch', 'Fetch on Mount', 'Basic pattern.', 'useEffect(() => {\n  const fetchData = async () => {\n    const res = await fetch("/api");\n    setData(await res.json());\n  };\n  fetchData();\n}, []);', 'javascript', ['API', 'Hooks']),
          createSnippet('react-fetch-loading', 'Loading/Error State', 'Full pattern.', 'const [data, setData] = useState(null);\nconst [loading, setLoading] = useState(true);\nconst [error, setError] = useState(null);\n\nuseEffect(() => {\n  fetch(url)\n    .then(res => res.json())\n    .then(setData)\n    .catch(setError)\n    .finally(() => setLoading(false));\n}, []);', 'javascript', ['API'], Difficulty.Intermediate),
          createSnippet('react-abort', 'AbortController', 'Cleanup fetch.', 'useEffect(() => {\n  const controller = new AbortController();\n  fetch(url, { signal: controller.signal })...;\n  return () => controller.abort();\n}, []);', 'javascript', ['API', 'Hooks'], Difficulty.Intermediate),
          createSnippet('react-query-basic', 'React Query (GET)', 'TanStack Query.', 'const { isPending, error, data } = useQuery({\n  queryKey: ["repoData"],\n  queryFn: () => fetch(url).then(res => res.json())\n});', 'javascript', ['API', 'Libraries'], Difficulty.Intermediate),
          createSnippet('react-query-mutation', 'React Query (POST)', 'Mutations.', 'const mutation = useMutation({\n  mutationFn: (newTodo) => axios.post("/todos", newTodo)\n});\n\n// Usage\nmutation.mutate({ title: "Do work" });', 'javascript', ['API', 'Libraries'], Difficulty.Advanced),
        ]
      },
      {
        id: 'react-advanced',
        title: 'Advanced Patterns',
        snippets: [
          createSnippet('react-memo', 'React.memo', 'Performance.', 'const MemoComp = React.memo(MyComp);', 'javascript', ['Performance'], Difficulty.Intermediate),
          createSnippet('react-usememo', 'useMemo', 'Memoize value.', 'const val = useMemo(() => computeExpensive(a, b), [a, b]);', 'javascript', ['Performance'], Difficulty.Intermediate),
          createSnippet('react-usecallback', 'useCallback', 'Memoize func.', 'const fn = useCallback(() => doSomething(a), [a]);', 'javascript', ['Performance'], Difficulty.Intermediate),
          createSnippet('react-context', 'Context API', 'Global state.', 'const ThemeCtx = createContext("light");\nconst theme = useContext(ThemeCtx);', 'javascript', ['State'], Difficulty.Intermediate),
          createSnippet('react-reducer', 'useReducer', 'Complex state.', 'const [state, dispatch] = useReducer(reducer, initialState);', 'javascript', ['State'], Difficulty.Intermediate),
          createSnippet('react-portal', 'Portals', 'Render outside.', 'createPortal(<div>Modal</div>, document.body)', 'javascript', ['Advanced'], Difficulty.Advanced),
          createSnippet('react-custom-hook', 'Custom Hook', 'Logic reuse.', 'function useWindowSize() { ... return size; }', 'javascript', ['Hooks'], Difficulty.Advanced),
          createSnippet('react-lazy', 'Lazy & Suspense', 'Code splitting.', 'const Other = React.lazy(() => import("./Other"));\n<Suspense fallback="Loading..."><Other /></Suspense>', 'javascript', ['Performance'], Difficulty.Advanced),
        ]
      }
    ]
  },
  // =========================================================================
  // React Native (Massive Update)
  // =========================================================================
  {
    id: 'react-native',
    name: 'React Native',
    slug: 'react-native',
    iconName: 'Smartphone',
    type: 'Framework',
    description: 'Framework for building native apps using React.',
    categories: [
      {
        id: 'rn-core',
        title: 'Core Components',
        snippets: [
          createSnippet('rn-view', 'View', 'The basic building block.', '<View style={{flex: 1, padding: 20}}>\n  <Text>Content</Text>\n</View>', 'javascript', ['UI']),
          createSnippet('rn-text', 'Text', 'Displaying text.', '<Text style={{fontSize: 20, fontWeight: "bold"}}>\n  Hello World\n</Text>', 'javascript', ['UI']),
          createSnippet('rn-image-local', 'Image (Local)', 'Display local asset.', '<Image source={require("./logo.png")} style={{width: 50}} />', 'javascript', ['UI']),
          createSnippet('rn-image-remote', 'Image (Remote)', 'Display URL.', '<Image\n  source={{uri: "https://example.com/img.png"}}\n  style={{width: 100, height: 100}}\n/>', 'javascript', ['UI']),
          createSnippet('rn-scrollview', 'ScrollView', 'Scrollable container.', '<ScrollView contentContainerStyle={{padding: 20}}>\n  {items.map(i => <Text>{i}</Text>)}\n</ScrollView>', 'javascript', ['UI']),
          createSnippet('rn-flatlist', 'FlatList', 'Efficient list.', '<FlatList\n  data={data}\n  renderItem={({item}) => <Text>{item.title}</Text>}\n  keyExtractor={item => item.id}\n/>', 'javascript', ['UI']),
          createSnippet('rn-sectionlist', 'SectionList', 'Grouped list.', '<SectionList\n  sections={sections}\n  renderItem={({item}) => <Text>{item}</Text>}\n  renderSectionHeader={({section}) => <Text>{section.title}</Text>}\n/>', 'javascript', ['UI']),
          createSnippet('rn-textinput', 'TextInput', 'User input.', '<TextInput\n  style={styles.input}\n  placeholder="Type here..."\n  onChangeText={setText}\n  value={text}\n/>', 'javascript', ['UI']),
          createSnippet('rn-pressable', 'Pressable', 'Custom button.', '<Pressable\n  onPress={() => console.log("Pressed")}\n  style={({pressed}) => [\n    {backgroundColor: pressed ? "rgb(210, 230, 255)" : "white"}\n  ]}>\n  <Text>Button</Text>\n</Pressable>', 'javascript', ['UI']),
          createSnippet('rn-modal', 'Modal', 'Overlay.', '<Modal animationType="slide" transparent={true} visible={modalVisible}>\n  <View><Text>Popup</Text></View>\n</Modal>', 'javascript', ['UI']),
          createSnippet('rn-switch', 'Switch', 'Toggle.', '<Switch trackColor={{false: "#767577", true: "#81b0ff"}} value={isEnabled} onValueChange={toggle} />', 'javascript', ['UI']),
          createSnippet('rn-statusbar', 'StatusBar', 'Status bar config.', '<StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />', 'javascript', ['UI']),
          createSnippet('rn-activity', 'ActivityIndicator', 'Loading spinner.', '<ActivityIndicator size="large" color="#0000ff" />', 'javascript', ['UI']),
          createSnippet('rn-safearea', 'SafeAreaView', 'Notch handling.', '<SafeAreaView style={{flex: 1}}>\n  <View>...</View>\n</SafeAreaView>', 'javascript', ['UI']),
          createSnippet('rn-keyboard-avoid', 'KeyboardAvoidingView', 'Keyboard handling.', '<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>\n  <TextInput />\n</KeyboardAvoidingView>', 'javascript', ['UI']),
        ]
      },
      {
        id: 'rn-styles',
        title: 'Layout & Styling',
        snippets: [
          createSnippet('rn-stylesheet', 'StyleSheet', 'Create styles.', 'const styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: "#fff",\n  },\n});', 'javascript', ['Styling']),
          createSnippet('rn-flex-col', 'Flex Column', 'Vertical layout.', 'container: {\n  flex: 1,\n  flexDirection: "column",\n  justifyContent: "space-between",\n}', 'javascript', ['Styling']),
          createSnippet('rn-flex-row', 'Flex Row', 'Horizontal layout.', 'row: {\n  flexDirection: "row",\n  alignItems: "center",\n  justifyContent: "center",\n}', 'javascript', ['Styling']),
          createSnippet('rn-absolute', 'Absolute', 'Positioning.', 'overlay: {\n  position: "absolute",\n  top: 0,\n  left: 0,\n  right: 0,\n  bottom: 0,\n}', 'javascript', ['Styling']),
          createSnippet('rn-shadow', 'Shadows', 'Elevation/Shadow.', 'card: {\n  // iOS\n  shadowColor: "#000",\n  shadowOffset: { width: 0, height: 2 },\n  shadowOpacity: 0.25,\n  // Android\n  elevation: 5,\n}', 'javascript', ['Styling']),
          createSnippet('rn-platform-style', 'Platform Styles', 'Conditional styles.', 'header: {\n  height: 60,\n  ...Platform.select({\n    ios: { paddingTop: 20 },\n    android: { paddingTop: 0 },\n  }),\n}', 'javascript', ['Styling']),
          createSnippet('rn-dimensions', 'Dimensions', 'Screen size.', 'const { width, height } = Dimensions.get("window");', 'javascript', ['Styling']),
          createSnippet('rn-pixel', 'PixelRatio', 'Pixel density.', 'const size = PixelRatio.getPixelSizeForLayoutSize(200);', 'javascript', ['Styling']),
          createSnippet('rn-transforms', 'Transforms', 'Rotate/Scale.', 'transform: [{ rotate: "45deg" }, { scale: 1.5 }]', 'javascript', ['Styling']),
        ]
      },
      {
        id: 'rn-navigation',
        title: 'React Navigation (v6)',
        snippets: [
          createSnippet('rn-nav-container', 'Setup', 'Root container.', 'import { NavigationContainer } from "@react-navigation/native";\n\nexport default function App() {\n  return <NavigationContainer>{/* Navigators */}</NavigationContainer>;\n}', 'javascript', ['Navigation']),
          createSnippet('rn-stack', 'Stack Navigator', 'Basic stack.', 'const Stack = createNativeStackNavigator();\n\n<Stack.Navigator>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Details" component={DetailsScreen} />\n</Stack.Navigator>', 'javascript', ['Navigation']),
          createSnippet('rn-tabs', 'Tab Navigator', 'Bottom tabs.', 'const Tab = createBottomTabNavigator();\n\n<Tab.Navigator>\n  <Tab.Screen name="Feed" component={Feed} />\n  <Tab.Screen name="Settings" component={Settings} />\n</Tab.Navigator>', 'javascript', ['Navigation']),
          createSnippet('rn-navigate', 'Navigate', 'Go to screen.', 'const navigation = useNavigation();\nnavigation.navigate("Details", { itemId: 86 });', 'javascript', ['Navigation']),
          createSnippet('rn-route', 'Route Params', 'Read params.', 'const route = useRoute();\nconst { itemId } = route.params;', 'javascript', ['Navigation']),
          createSnippet('rn-goback', 'Go Back', 'Pop screen.', 'navigation.goBack();', 'javascript', ['Navigation']),
          createSnippet('rn-reset', 'Reset History', 'Clear stack.', 'navigation.reset({\n  index: 0,\n  routes: [{ name: "Home" }],\n});', 'javascript', ['Navigation']),
          createSnippet('rn-header', 'Header Config', 'Customize title.', 'navigation.setOptions({\n  title: "Updated Title",\n  headerRight: () => <Button title="Save" />\n});', 'javascript', ['Navigation']),
          createSnippet('rn-drawer', 'Drawer Nav', 'Side menu.', 'const Drawer = createDrawerNavigator();\n\n<Drawer.Navigator>\n  <Drawer.Screen name="Feed" component={Feed} />\n</Drawer.Navigator>', 'javascript', ['Navigation']),
          createSnippet('rn-deep-link', 'Deep Linking', 'Config.', 'const linking = {\n  prefixes: ["myapp://"],\n  config: {\n    screens: {\n      Home: "home",\n      Details: "details/:id",\n    },\n  },\n};', 'javascript', ['Navigation'], Difficulty.Advanced),
        ]
      },
      {
        id: 'rn-device',
        title: 'Device & APIs',
        snippets: [
          createSnippet('rn-platform-api', 'Platform API', 'Check OS.', 'import { Platform } from "react-native";\nif (Platform.OS === "ios") { ... }', 'javascript', ['API']),
          createSnippet('rn-alert', 'Alert', 'Native dialog.', 'Alert.alert("Title", "Message", [\n  { text: "Cancel", style: "cancel" },\n  { text: "OK", onPress: () => console.log("OK") }\n]);', 'javascript', ['API']),
          createSnippet('rn-linking', 'Linking', 'Open URL.', 'Linking.openURL("https://google.com").catch(err => ...);', 'javascript', ['API']),
          createSnippet('rn-keyboard', 'Keyboard', 'Dismiss.', 'import { Keyboard } from "react-native";\nKeyboard.dismiss();', 'javascript', ['API']),
          createSnippet('rn-appstate', 'AppState', 'Foreground/Background.', 'const sub = AppState.addEventListener("change", nextState => {\n  if (nextState === "active") ...\n});', 'javascript', ['API']),
          createSnippet('rn-backhandler', 'BackHandler', 'Android back.', 'useEffect(() => {\n  const backAction = () => { /* handle */ return true; };\n  const bh = BackHandler.addEventListener("hardwareBackPress", backAction);\n  return () => bh.remove();\n}, []);', 'javascript', ['API']),
          createSnippet('rn-share', 'Share', 'Share dialog.', 'Share.share({\n  message: "Check this out!",\n  url: "https://example.com",\n});', 'javascript', ['API']),
          createSnippet('rn-vibration', 'Vibration', 'Haptic.', 'Vibration.vibrate(500); // 500ms', 'javascript', ['API']),
          createSnippet('rn-permissions', 'Permissions (Android)', 'Request.', 'const granted = await PermissionsAndroid.request(\n  PermissionsAndroid.PERMISSIONS.CAMERA\n);', 'javascript', ['API']),
          createSnippet('rn-toast', 'ToastAndroid', 'Android toast.', 'ToastAndroid.show("Done!", ToastAndroid.SHORT);', 'javascript', ['API']),
        ]
      },
      {
        id: 'rn-networking',
        title: 'Networking & Data',
        snippets: [
          createSnippet('rn-fetch-get', 'Fetch GET', 'Simple request.', 'fetch("https://api.com/data")\n  .then(res => res.json())\n  .then(data => setData(data));', 'javascript', ['Network']),
          createSnippet('rn-fetch-post', 'Fetch POST', 'Send data.', 'fetch(url, {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify(data)\n});', 'javascript', ['Network']),
          createSnippet('rn-async-set', 'AsyncStorage Set', 'Save data.', 'import AsyncStorage from "@react-native-async-storage/async-storage";\nawait AsyncStorage.setItem("key", "value");', 'javascript', ['Storage']),
          createSnippet('rn-async-get', 'AsyncStorage Get', 'Read data.', 'const value = await AsyncStorage.getItem("key");', 'javascript', ['Storage']),
          createSnippet('rn-async-obj', 'AsyncStorage Object', 'Save object.', 'const jsonValue = JSON.stringify(value);\nawait AsyncStorage.setItem("user", jsonValue);', 'javascript', ['Storage']),
          createSnippet('rn-refresh', 'RefreshControl', 'Pull to refresh.', '<ScrollView\n  refreshControl={\n    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />\n  }\n>...', 'javascript', ['UI']),
          createSnippet('rn-websocket', 'WebSocket', 'Realtime.', 'const ws = new WebSocket("ws://host.com/path");\nws.onopen = () => ws.send("Hello");\nws.onmessage = (e) => console.log(e.data);', 'javascript', ['Network'], Difficulty.Intermediate),
        ]
      },
      {
        id: 'rn-animation',
        title: 'Animations (Animated API)',
        snippets: [
          createSnippet('rn-anim-setup', 'Setup Value', 'Init value.', 'const fadeAnim = useRef(new Animated.Value(0)).current;', 'javascript', ['Animation']),
          createSnippet('rn-anim-timing', 'Timing', 'Simple fade.', 'Animated.timing(fadeAnim, {\n  toValue: 1,\n  duration: 1000,\n  useNativeDriver: true,\n}).start();', 'javascript', ['Animation']),
          createSnippet('rn-anim-spring', 'Spring', 'Bouncy.', 'Animated.spring(pan, {\n  toValue: {x: 0, y: 0},\n  useNativeDriver: true,\n}).start();', 'javascript', ['Animation']),
          createSnippet('rn-anim-interp', 'Interpolation', 'Map values.', 'const rotate = spinValue.interpolate({\n  inputRange: [0, 1],\n  outputRange: ["0deg", "360deg"]\n});', 'javascript', ['Animation'], Difficulty.Intermediate),
          createSnippet('rn-anim-seq', 'Sequence', 'Chained.', 'Animated.sequence([anim1, anim2]).start();', 'javascript', ['Animation']),
          createSnippet('rn-anim-parallel', 'Parallel', 'Concurrent.', 'Animated.parallel([anim1, anim2]).start();', 'javascript', ['Animation']),
          createSnippet('rn-layout-anim', 'LayoutAnimation', 'Global transition.', 'LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);\nsetState(newState);', 'javascript', ['Animation']),
        ]
      },
      {
        id: 'rn-advanced',
        title: 'Advanced & Performance',
        snippets: [
          createSnippet('rn-flatlist-opt', 'FlatList Optimization', 'Layout hints.', '<FlatList\n  getItemLayout={(data, index) => (\n    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}\n  )}\n  initialNumToRender={10}\n  maxToRenderPerBatch={10}\n  windowSize={5}\n/>', 'javascript', ['Performance'], Difficulty.Advanced),
          createSnippet('rn-memo', 'React.memo', 'Prevent re-renders.', 'const MyItem = React.memo(({ title }) => <Text>{title}</Text>);', 'javascript', ['Performance'], Difficulty.Intermediate),
          createSnippet('rn-interaction', 'InteractionManager', 'Defer task.', 'InteractionManager.runAfterInteractions(() => {\n  // Run heavy task after navigation anim finishes\n});', 'javascript', ['Performance'], Difficulty.Advanced),
          createSnippet('rn-native-mod', 'Native Modules', 'JS Interface.', 'import { NativeModules } from "react-native";\nconst { CalendarModule } = NativeModules;\nCalendarModule.createEvent("Party");', 'javascript', ['Native'], Difficulty.Advanced),
          createSnippet('rn-error', 'Error Boundary', 'Crash catch.', 'static getDerivedStateFromError(error) {\n  return { hasError: true };\n}', 'javascript', ['Advanced'], Difficulty.Intermediate),
          createSnippet('rn-hermes', 'Hermes Check', 'Engine check.', 'const isHermes = () => !!global.HermesInternal;', 'javascript', ['Advanced'], Difficulty.Intermediate),
          createSnippet('rn-pan', 'PanResponder', 'Gestures.', 'const panResponder = PanResponder.create({\n  onMoveShouldSetPanResponder: () => true,\n  onPanResponderMove: Animated.event([null, {dx: pan.x}])\n});', 'javascript', ['Gestures'], Difficulty.Advanced),
          createSnippet('rn-keyboard-hook', 'useKeyboard', 'Custom hook.', 'useEffect(() => {\n  const showSub = Keyboard.addListener("keyboardDidShow", onShow);\n  return () => showSub.remove();\n}, []);', 'javascript', ['Hooks'], Difficulty.Intermediate),
          createSnippet('rn-global-style', 'Global Styles', 'Theme.', 'const theme = { colors: { primary: "blue" } };\n<ThemeContext.Provider value={theme}>...', 'javascript', ['Styling'], Difficulty.Intermediate),
        ]
      }
    ]
  },
  // =========================================================================
  // Vue.js
  // =========================================================================
  {
    id: 'vue',
    name: 'Vue.js',
    slug: 'vue',
    iconName: 'Layers',
    type: 'Framework',
    description: 'The Progressive JavaScript Framework.',
    categories: [
      {
        id: 'vue-basics',
        title: 'Template & Reactivity',
        snippets: [
          createSnippet('vue-setup', 'Script Setup', 'SFC.', '<script setup>\nimport { ref } from "vue";\nconst count = ref(0);\n</script>', 'html', ['Basics']),
          createSnippet('vue-v-for', 'v-for', 'List.', '<li v-for="item in items">{{ item.text }}</li>', 'html', ['Directives']),
          createSnippet('vue-computed', 'Computed', 'Derived.', 'const double = computed(() => count.value * 2);', 'javascript', ['Reactivity']),
        ]
      },
      {
        id: 'vue-advanced',
        title: 'Advanced Vue',
        snippets: [
          createSnippet('vue-watch-effect', 'watchEffect', 'Auto tracking.', 'watchEffect(() => console.log(count.value));', 'javascript', ['Reactivity'], Difficulty.Intermediate),
          createSnippet('vue-composable', 'Composables', 'Reuse logic.', 'export function useMouse() { ... return { x, y } }', 'javascript', ['Advanced'], Difficulty.Advanced),
          createSnippet('vue-teleport', 'Teleport', 'Move DOM.', '<Teleport to="body">\n  <div class="modal">...</div>\n</Teleport>', 'html', ['Components'], Difficulty.Intermediate),
          createSnippet('vue-directives', 'Custom Directive', 'DOM access.', 'const vFocus = {\n  mounted: (el) => el.focus()\n}', 'javascript', ['Advanced'], Difficulty.Advanced),
          createSnippet('vue-provide-inject', 'Provide/Inject', 'DI.', 'provide("key", value);\nconst value = inject("key");', 'javascript', ['State'], Difficulty.Intermediate),
          createSnippet('vue-transition', 'Transitions', 'Animation.', '<Transition name="fade">\n  <p v-if="show">Hello</p>\n</Transition>', 'html', ['Animation'], Difficulty.Intermediate),
          createSnippet('vue-render', 'Render Function', 'JSX alternative.', 'import { h } from "vue";\nreturn () => h("div", "Hello")', 'javascript', ['Advanced'], Difficulty.Advanced),
        ]
      }
    ]
  },
  // =========================================================================
  // Angular
  // =========================================================================
  {
    id: 'angular',
    name: 'Angular',
    slug: 'angular',
    iconName: 'Hexagon',
    type: 'Framework',
    description: 'Platform for building mobile and desktop web applications.',
    categories: [
      {
        id: 'ng-basics',
        title: 'Components & Templates',
        snippets: [
          createSnippet('ng-comp', '@Component', 'Decorator.', '@Component({ ... }) class App {}', 'typescript', ['Basics']),
          createSnippet('ng-if', '*ngIf / @if', 'Conditional.', '@if(visible) { <div></div> }', 'html', ['Template']),
          createSnippet('ng-for', '*ngFor / @for', 'Loop.', '@for(item of items; track item.id) { ... }', 'html', ['Template']),
        ]
      },
      {
        id: 'ng-advanced',
        title: 'Advanced Angular',
        snippets: [
          createSnippet('ng-signals', 'Signals', 'Reactivity.', 'count = signal(0);\ndouble = computed(() => this.count() * 2);', 'typescript', ['Signals'], Difficulty.Intermediate),
          createSnippet('ng-rx-operators', 'RxJS Operators', 'Streams.', 'search$.pipe(\n  debounceTime(300),\n  distinctUntilChanged(),\n  switchMap(term => api.search(term))\n)', 'typescript', ['RxJS'], Difficulty.Advanced),
          createSnippet('ng-guards', 'Route Guards', 'Protection.', 'canActivate: [() => inject(Auth).isLoggedIn]', 'typescript', ['Routing'], Difficulty.Intermediate),
          createSnippet('ng-interceptors', 'Http Interceptor', 'Middleware.', 'export const authInterceptor: HttpInterceptorFn = (req, next) => ...', 'typescript', ['HTTP'], Difficulty.Advanced),
          createSnippet('ng-change-detect', 'OnPush Strategy', 'Performance.', 'changeDetection: ChangeDetectionStrategy.OnPush', 'typescript', ['Performance'], Difficulty.Advanced),
          createSnippet('ng-content-child', 'ContentChild', 'Projection.', '@ContentChild(TemplateRef) content: TemplateRef<any>;', 'typescript', ['Components'], Difficulty.Advanced),
          createSnippet('ng-di-tokens', 'Injection Tokens', 'Custom DI.', 'export const API_URL = new InjectionToken<string>("api");', 'typescript', ['DI'], Difficulty.Advanced),
        ]
      }
    ]
  },
  // =========================================================================
  // Python
  // =========================================================================
  {
    id: 'python',
    name: 'Python',
    slug: 'python',
    iconName: 'Terminal',
    type: 'Language',
    description: 'Versatile language for web, data science, and scripting.',
    categories: [
      {
        id: 'py-basics',
        title: 'Basics & Collections',
        snippets: [
          createSnippet('py-list-comp', 'List Comprehension', 'Concise lists.', '[x**2 for x in range(10) if x % 2 == 0]', 'python', ['Basics']),
          createSnippet('py-dict', 'Dictionary', 'Key-value.', 'd = {"name": "John", "age": 30}', 'python', ['Basics']),
          createSnippet('py-func', 'Functions', 'Def.', 'def greet(name):\n    return f"Hello {name}"', 'python', ['Basics']),
          createSnippet('py-lambda', 'Lambda', 'Anonymous func.', 'lambda x: x * 2', 'python', ['Functional']),
          createSnippet('py-args', 'Args/Kwargs', 'Variable arguments.', 'def func(*args, **kwargs):\n  print(args, kwargs)', 'python', ['Basics']),
        ]
      },
      {
        id: 'py-api',
        title: 'HTTP Requests (Requests)',
        snippets: [
          createSnippet('py-requests-get', 'GET Request', 'Simple fetch.', 'import requests\nresp = requests.get("https://api.com/users")', 'python', ['API']),
          createSnippet('py-requests-json', 'Response JSON', 'Parse body.', 'data = resp.json()', 'python', ['API']),
          createSnippet('py-requests-post', 'POST Request', 'Send JSON.', 'requests.post(url, json={"key": "value"})', 'python', ['API']),
          createSnippet('py-requests-auth', 'Authentication', 'Headers.', 'headers = {"Authorization": "Bearer TOKEN"}\nrequests.get(url, headers=headers)', 'python', ['API', 'Security']),
          createSnippet('py-requests-params', 'Query Params', 'URL args.', 'payload = {"key1": "value1", "key2": "value2"}\nr = requests.get(url, params=payload)', 'python', ['API']),
          createSnippet('py-requests-session', 'Session', 'Persist cookies.', 's = requests.Session()\ns.get("https://httpbin.org/cookies/set/sessioncookie/123456789")\nr = s.get("https://httpbin.org/cookies")', 'python', ['API'], Difficulty.Intermediate),
          createSnippet('py-httpx-async', 'Async Client (httpx)', 'Modern Async.', 'import httpx\nasync with httpx.AsyncClient() as client:\n    r = await client.get("https://www.example.com")', 'python', ['API', 'Async'], Difficulty.Advanced),
        ]
      },
      {
        id: 'py-numpy',
        title: 'Data Science: NumPy',
        snippets: [
          createSnippet('np-create', 'Create Array', 'From list.', 'import numpy as np\narr = np.array([1, 2, 3])', 'python', ['NumPy']),
          createSnippet('np-zeros', 'Zeros/Ones', 'Init array.', 'np.zeros((3,3))\nnp.ones(5)', 'python', ['NumPy']),
          createSnippet('np-arange', 'Arange', 'Range.', 'np.arange(0, 10, 2)', 'python', ['NumPy']),
          createSnippet('np-linspace', 'Linspace', 'Linear space.', 'np.linspace(0, 1, 5)', 'python', ['NumPy']),
          createSnippet('np-reshape', 'Reshape', 'Change dim.', 'arr.reshape(2, 3)', 'python', ['NumPy']),
          createSnippet('np-slice', 'Slicing', 'Subarray.', 'arr[0:2, 1]', 'python', ['NumPy']),
          createSnippet('np-filter', 'Boolean Indexing', 'Filter.', 'arr[arr > 5]', 'python', ['NumPy']),
          createSnippet('np-math', 'Math Ops', 'Vectorized.', 'arr * 2\narr.mean()\narr.sum()', 'python', ['NumPy']),
          createSnippet('np-dot', 'Dot Product', 'Matrix mult.', 'np.dot(a, b)', 'python', ['NumPy']),
          createSnippet('np-random', 'Random', 'Rand vals.', 'np.random.rand(3,2)', 'python', ['NumPy']),
        ]
      },
      {
        id: 'py-pandas',
        title: 'Data Science: Pandas',
        snippets: [
          createSnippet('pd-create', 'DataFrame', 'Create.', 'import pandas as pd\ndf = pd.DataFrame(data)', 'python', ['Pandas']),
          createSnippet('pd-read', 'Read CSV', 'Load data.', 'df = pd.read_csv("file.csv")', 'python', ['Pandas']),
          createSnippet('pd-inspect', 'Inspect', 'Peek.', 'df.head()\ndf.info()\ndf.describe()', 'python', ['Pandas']),
          createSnippet('pd-select', 'Selection', 'Rows/Cols.', 'df["col"]\ndf.iloc[0]\ndf.loc[df["age"] > 20]', 'python', ['Pandas']),
          createSnippet('pd-filter', 'Filtering', 'Conditional.', 'df[(df["a"] > 1) & (df["b"] < 5)]', 'python', ['Pandas']),
          createSnippet('pd-missing', 'Missing Data', 'Handle NA.', 'df.dropna()\ndf.fillna(0)', 'python', ['Pandas']),
          createSnippet('pd-group', 'GroupBy', 'Aggregation.', 'df.groupby("category").mean()', 'python', ['Pandas']),
          createSnippet('pd-merge', 'Merge', 'Join DFs.', 'pd.merge(df1, df2, on="id")', 'python', ['Pandas']),
          createSnippet('pd-pivot', 'Pivot Table', 'Reshape.', 'df.pivot_table(index="date", columns="type", values="val")', 'python', ['Pandas']),
          createSnippet('pd-apply', 'Apply', 'Transform.', 'df["col"].apply(lambda x: x*2)', 'python', ['Pandas']),
          createSnippet('pd-time', 'TimeSeries', 'Datetime.', 'pd.to_datetime(df["date"])', 'python', ['Pandas']),
        ]
      },
      {
        id: 'py-sklearn',
        title: 'Machine Learning: Scikit-learn',
        snippets: [
          createSnippet('sk-split', 'Train/Test Split', 'Split data.', 'from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y)', 'python', ['ML']),
          createSnippet('sk-scale', 'Scaling', 'Normalize.', 'from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)', 'python', ['ML']),
          createSnippet('sk-linear', 'Linear Regression', 'Model.', 'from sklearn.linear_model import LinearRegression\nmodel = LinearRegression().fit(X_train, y_train)', 'python', ['ML']),
          createSnippet('sk-predict', 'Predict', 'Inference.', 'preds = model.predict(X_test)', 'python', ['ML']),
          createSnippet('sk-metrics', 'Metrics', 'Evaluate.', 'from sklearn.metrics import accuracy_score\nacc = accuracy_score(y_true, y_pred)', 'python', ['ML']),
          createSnippet('sk-kmeans', 'K-Means', 'Clustering.', 'from sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=3).fit(X)', 'python', ['ML']),
          createSnippet('sk-pipeline', 'Pipeline', 'Chain steps.', 'from sklearn.pipeline import Pipeline\npipe = Pipeline([("scaler", scaler), ("svc", svc)])', 'python', ['ML'], Difficulty.Advanced),
          createSnippet('sk-grid', 'Grid Search', 'Tuning.', 'from sklearn.model_selection import GridSearchCV\ngrid = GridSearchCV(est, params).fit(X, y)', 'python', ['ML'], Difficulty.Advanced),
        ]
      },
      {
        id: 'py-web',
        title: 'Web Frameworks (Flask & Django)',
        snippets: [
          createSnippet('flask-app', 'Flask App', 'Minimal.', 'from flask import Flask\napp = Flask(__name__)\n@app.route("/")\ndef home(): return "Hi"', 'python', ['Flask']),
          createSnippet('flask-route', 'Flask Route', 'Params.', '@app.route("/user/<name>")\ndef user(name): ...', 'python', ['Flask']),
          createSnippet('flask-req', 'Flask Request', 'Data.', 'from flask import request\nval = request.args.get("key")', 'python', ['Flask']),
          createSnippet('dj-model', 'Django Model', 'ORM.', 'class Person(models.Model):\n    name = models.CharField(max_length=50)', 'python', ['Django']),
          createSnippet('dj-view', 'Django View', 'Fn view.', 'def index(req):\n    return HttpResponse("Hello")', 'python', ['Django']),
          createSnippet('dj-query', 'Django Query', 'DB access.', 'Person.objects.filter(age__gte=18)', 'python', ['Django']),
          createSnippet('dj-admin', 'Django Admin', 'Register.', '@admin.register(Person)\nclass PersonAdmin(admin.ModelAdmin): ...', 'python', ['Django']),
        ]
      },
      {
        id: 'py-async',
        title: 'AsyncIO & Concurrency',
        snippets: [
          createSnippet('py-async-run', 'Run Async', 'Start loop.', 'import asyncio\nasyncio.run(main())', 'python', ['Async']),
          createSnippet('py-async-func', 'Coroutine', 'Async def.', 'async def main():\n    await asyncio.sleep(1)', 'python', ['Async']),
          createSnippet('py-gather', 'Gather', 'Concurrent.', 'await asyncio.gather(task1(), task2())', 'python', ['Async']),
          createSnippet('py-task', 'Create Task', 'Background.', 'task = asyncio.create_task(coro())', 'python', ['Async']),
          createSnippet('py-wait', 'Wait For', 'Timeout.', 'await asyncio.wait_for(fut, timeout=1.0)', 'python', ['Async']),
          createSnippet('py-thread', 'To Thread', 'Blocking I/O.', 'await asyncio.to_thread(blocking_io)', 'python', ['Async'], Difficulty.Advanced),
        ]
      },
      {
        id: 'py-meta',
        title: 'Metaprogramming & Internals',
        snippets: [
          createSnippet('py-decorator', 'Decorator', 'Wrapper.', 'def my_dec(func):\n    def wrapper():\n        return func()\n    return wrapper', 'python', ['Meta']),
          createSnippet('py-args-dec', 'Decorator (Args)', 'With args.', 'def repeat(n):\n    def decorator(f): ...\n    return decorator', 'python', ['Meta'], Difficulty.Advanced),
          createSnippet('py-getattr', 'GetAttr', 'Dynamic access.', 'def __getattr__(self, name): ...', 'python', ['Meta'], Difficulty.Intermediate),
          createSnippet('py-type', 'Type()', 'Dynamic class.', 'MyClass = type("MyClass", (object,), {})', 'python', ['Meta'], Difficulty.Advanced),
          createSnippet('py-slots', '__slots__', 'Memory opt.', '__slots__ = ["x", "y"]', 'python', ['Internals'], Difficulty.Intermediate),
          createSnippet('py-descriptor', 'Descriptor', 'Attr logic.', 'class Ten:\n    def __get__(self, obj, objtype): return 10', 'python', ['Meta'], Difficulty.Advanced),
        ]
      },
      {
        id: 'py-perf',
        title: 'Performance & Optimization',
        snippets: [
          createSnippet('py-timeit', 'Timeit', 'Benchmark.', 'import timeit\ntimeit.timeit("f()", globals=globals())', 'python', ['Perf']),
          createSnippet('py-profile', 'cProfile', 'Profiling.', 'python -m cProfile script.py', 'bash', ['Perf']),
          createSnippet('py-lru', 'LRU Cache', 'Memoization.', 'from functools import lru_cache\n@lru_cache(maxsize=None)', 'python', ['Perf']),
          createSnippet('py-gen-exp', 'Generator Exp', 'Memory efficient.', '(x*x for x in range(1000))', 'python', ['Perf']),
          createSnippet('py-multiprocess', 'Multiprocessing', 'CPU bound.', 'from multiprocessing import Pool\nwith Pool(5) as p: ...', 'python', ['Perf'], Difficulty.Advanced),
        ]
      }
    ]
  },
  // =========================================================================
  // Java
  // =========================================================================
  {
    id: 'java',
    name: 'Java',
    slug: 'java',
    iconName: 'Coffee',
    type: 'Language',
    description: 'Object-oriented language used for enterprise applications.',
    categories: [
      {
        id: 'java-basics',
        title: 'Core Java',
        snippets: [
          createSnippet('java-class', 'Class Definition', 'OOP.', 'public class Car {\n    private String model;\n    public Car(String model) { this.model = model; }\n}', 'java', ['OOP']),
          createSnippet('java-collections', 'Collections', 'Lists/Maps.', 'List<String> list = new ArrayList<>();\nMap<String, Integer> map = new HashMap<>();', 'java', ['Collections']),
        ]
      },
      {
        id: 'java-api',
        title: 'HTTP Client (Java 11+)',
        snippets: [
          createSnippet('java-http-get', 'GET Request', 'Sync.', 'HttpClient client = HttpClient.newHttpClient();\nHttpRequest request = HttpRequest.newBuilder()\n  .uri(URI.create("https://api.com/users"))\n  .build();\nHttpResponse<String> response = client.send(request, BodyHandlers.ofString());', 'java', ['API']),
          createSnippet('java-http-async', 'Async GET', 'Non-blocking.', 'client.sendAsync(request, BodyHandlers.ofString())\n  .thenApply(HttpResponse::body)\n  .thenAccept(System.out::println);', 'java', ['API', 'Async']),
          createSnippet('java-http-post', 'POST Request', 'Sending data.', 'HttpRequest request = HttpRequest.newBuilder()\n  .uri(URI.create(url))\n  .header("Content-Type", "application/json")\n  .POST(BodyPublishers.ofString(json))\n  .build();', 'java', ['API']),
          createSnippet('java-url-conn', 'HttpURLConnection', 'Legacy.', 'URL url = new URL("http://example.com");\nHttpURLConnection con = (HttpURLConnection) url.openConnection();\ncon.setRequestMethod("GET");', 'java', ['Legacy'], Difficulty.Intermediate),
        ]
      },
      {
        id: 'java-advanced',
        title: 'Advanced Java',
        snippets: [
          createSnippet('java-streams', 'Streams API', 'Functional.', 'list.stream().filter(s -> s.startsWith("A")).map(String::toUpperCase).collect(Collectors.toList());', 'java', ['Functional'], Difficulty.Intermediate),
          createSnippet('java-optional', 'Optional', 'Null safety.', 'Optional.ofNullable(val).orElse("default");', 'java', ['Safety'], Difficulty.Intermediate),
          createSnippet('java-lambda', 'Lambda Expressions', 'Concise code.', '(x, y) -> x + y', 'java', ['Functional'], Difficulty.Intermediate),
          createSnippet('java-concurrency', 'CompletableFuture', 'Async.', 'CompletableFuture.supplyAsync(() -> fetch()).thenAccept(System.out::println);', 'java', ['Concurrency'], Difficulty.Advanced),
          createSnippet('java-generics', 'Generics', 'Type safety.', 'public <T> void print(T item) { ... }', 'java', ['Generics'], Difficulty.Advanced),
          createSnippet('java-reflection', 'Reflection', 'Runtime inspection.', 'Class<?> c = Class.forName("MyClass");\nMethod m = c.getDeclaredMethod("method");', 'java', ['Reflection'], Difficulty.Advanced),
        ]
      }
    ]
  },
  // =========================================================================
  // C++ (Massive Expansion)
  // =========================================================================
  {
    id: 'cpp',
    name: 'C++',
    slug: 'cpp',
    iconName: 'Code2',
    type: 'Language',
    description: 'High-performance compiled language suitable for system programming, game development, and real-time simulations.',
    categories: [
      {
        id: 'cpp-basics',
        title: 'Basics & Syntax',
        snippets: [
          createSnippet('cpp-main', 'Main Function', 'Entry point.', 'int main(int argc, char* argv[]) {\n  return 0;\n}', 'cpp', ['Basics']),
          createSnippet('cpp-io', 'Input/Output', 'iostream.', '#include <iostream>\nstd::cout << "Hello" << std::endl;\nstd::cin >> var;', 'cpp', ['IO']),
          createSnippet('cpp-ref', 'References', 'Alias to variable.', 'int x = 10;\nint& ref = x;\nref = 20; // x is now 20', 'cpp', ['Basics']),
          createSnippet('cpp-auto', 'Auto', 'Type inference.', 'auto x = 5;\nauto y = 3.14;\nauto ptr = &x;', 'cpp', ['Modern']),
          createSnippet('cpp-range-for', 'Range-based For', 'Loop.', 'for (const auto& item : container) {\n  // use item\n}', 'cpp', ['Loops']),
          createSnippet('cpp-enum-class', 'Enum Class', 'Scoped enum.', 'enum class Color { Red, Green, Blue };\nColor c = Color::Red;', 'cpp', ['Basics']),
          createSnippet('cpp-namespace', 'Namespace', 'Scope.', 'namespace MySpace {\n  void func() { ... }\n}\nMySpace::func();', 'cpp', ['Basics']),
          createSnippet('cpp-struct', 'Struct', 'POD type.', 'struct Point {\n  int x, y;\n};', 'cpp', ['Basics']),
        ]
      },
      {
        id: 'cpp-oop',
        title: 'Object-Oriented Programming',
        snippets: [
          createSnippet('cpp-class', 'Class', 'Encapsulation.', 'class MyClass {\nprivate:\n  int val;\npublic:\n  MyClass(int v) : val(v) {}\n  void set(int v) { val = v; }\n};', 'cpp', ['OOP']),
          createSnippet('cpp-inherit', 'Inheritance', 'Derived class.', 'class Base {};\nclass Derived : public Base {};', 'cpp', ['OOP']),
          createSnippet('cpp-polymorph', 'Polymorphism', 'Virtual functions.', 'class Base {\npublic:\n  virtual void foo() { ... }\n};\nclass Derived : public Base {\npublic:\n  void foo() override { ... }\n};', 'cpp', ['OOP']),
          createSnippet('cpp-abstract', 'Abstract Class', 'Pure virtual.', 'class Shape {\npublic:\n  virtual void draw() = 0;\n};', 'cpp', ['OOP']),
          createSnippet('cpp-ctor-deleg', 'Delegating Constructor', 'Reuse ctor.', 'class A {\npublic:\n  A() : A(0) {}\n  A(int x) { ... }\n};', 'cpp', ['OOP']),
          createSnippet('cpp-destruct', 'Virtual Destructor', 'Safety.', 'virtual ~Base() = default;', 'cpp', ['OOP']),
          createSnippet('cpp-friend', 'Friend', 'Access private.', 'friend void func(MyClass& obj);', 'cpp', ['OOP']),
          createSnippet('cpp-op-overload', 'Operator Overload', 'Custom ops.', 'MyType operator+(const MyType& other) { ... }', 'cpp', ['OOP']),
        ]
      },
      {
        id: 'cpp-memory',
        title: 'Memory Management',
        snippets: [
          createSnippet('cpp-new-delete', 'New/Delete', 'Raw memory.', 'int* p = new int(5);\ndelete p;', 'cpp', ['Memory']),
          createSnippet('cpp-unique-ptr', 'unique_ptr', 'Exclusive ownership.', 'std::unique_ptr<int> p = std::make_unique<int>(10);', 'cpp', ['Smart Pointers']),
          createSnippet('cpp-shared-ptr', 'shared_ptr', 'Shared ownership.', 'std::shared_ptr<int> p = std::make_shared<int>(10);', 'cpp', ['Smart Pointers']),
          createSnippet('cpp-weak-ptr', 'weak_ptr', 'Non-owning.', 'std::weak_ptr<int> wp = sp;', 'cpp', ['Smart Pointers']),
          createSnippet('cpp-move', 'Move Semantics', 'Transfer resources.', 'std::string a = "data";\nstd::string b = std::move(a);', 'cpp', ['Performance']),
          createSnippet('cpp-rule5', 'Rule of Five', 'Copy/Move.', 'class C {\n  ~C();\n  C(const C&);\n  C(C&&);\n  C& operator=(const C&);\n  C& operator=(C&&);\n};', 'cpp', ['OOP'], Difficulty.Advanced),
          createSnippet('cpp-placement-new', 'Placement New', 'Construct at addr.', 'new (address) MyClass();', 'cpp', ['Memory'], Difficulty.Advanced),
        ]
      },
      {
        id: 'cpp-stl-containers',
        title: 'STL Containers',
        snippets: [
          createSnippet('cpp-vector', 'std::vector', 'Dynamic array.', 'std::vector<int> v = {1, 2, 3};\nv.push_back(4);', 'cpp', ['STL']),
          createSnippet('cpp-array', 'std::array', 'Fixed array.', 'std::array<int, 3> a = {1, 2, 3};', 'cpp', ['STL']),
          createSnippet('cpp-map', 'std::map', 'Ordered dictionary.', 'std::map<string, int> m;\nm["key"] = 1;', 'cpp', ['STL']),
          createSnippet('cpp-unordered-map', 'unordered_map', 'Hash map.', 'std::unordered_map<string, int> m;', 'cpp', ['STL']),
          createSnippet('cpp-set', 'std::set', 'Unique sorted.', 'std::set<int> s;\ns.insert(5);', 'cpp', ['STL']),
          createSnippet('cpp-pair', 'std::pair', 'Two values.', 'auto p = std::make_pair(1, "a");', 'cpp', ['STL']),
          createSnippet('cpp-tuple', 'std::tuple', 'N values.', 'std::tuple<int, double, string> t(1, 3.14, "hi");\nauto [i, d, s] = t;', 'cpp', ['STL']),
          createSnippet('cpp-string-view', 'string_view', 'Non-owning string.', 'void f(std::string_view sv);', 'cpp', ['STL'], Difficulty.Intermediate),
          createSnippet('cpp-span', 'std::span', 'Contiguous view (C++20).', 'void func(std::span<int> data);', 'cpp', ['STL'], Difficulty.Advanced),
        ]
      },
      {
        id: 'cpp-stl-algo',
        title: 'STL Algorithms',
        snippets: [
          createSnippet('cpp-sort', 'Sort', 'Sorting.', 'std::sort(v.begin(), v.end());', 'cpp', ['Algorithms']),
          createSnippet('cpp-find', 'Find', 'Searching.', 'auto it = std::find(v.begin(), v.end(), 5);', 'cpp', ['Algorithms']),
          createSnippet('cpp-transform', 'Transform', 'Map.', 'std::transform(v.begin(), v.end(), v.begin(), [](int x){ return x*2; });', 'cpp', ['Algorithms']),
          createSnippet('cpp-accumulate', 'Accumulate', 'Reduce.', 'int sum = std::accumulate(v.begin(), v.end(), 0);', 'cpp', ['Algorithms']),
          createSnippet('cpp-count-if', 'Count If', 'Counting.', 'int n = std::count_if(v.begin(), v.end(), [](int i){ return i > 0; });', 'cpp', ['Algorithms']),
          createSnippet('cpp-binary-search', 'Binary Search', 'O(log n).', 'bool exists = std::binary_search(v.begin(), v.end(), 5);', 'cpp', ['Algorithms']),
          createSnippet('cpp-all-of', 'All Of', 'Predicate check.', 'bool all = std::all_of(v.begin(), v.end(), isPositive);', 'cpp', ['Algorithms']),
        ]
      },
      {
        id: 'cpp-modern',
        title: 'Modern C++ (11-17)',
        snippets: [
          createSnippet('cpp-lambda-capture', 'Lambda Capture', 'Closure.', '[=](){ return x; }; // Copy\n[&](){ x++; }; // Ref', 'cpp', ['Functional']),
          createSnippet('cpp-struct-binding', 'Structured Binding', 'Unpack.', 'auto [x, y] = point;', 'cpp', ['Modern'], Difficulty.Intermediate),
          createSnippet('cpp-optional', 'std::optional', 'Maybe value.', 'std::optional<int> ret;\nif (ret) val = *ret;', 'cpp', ['Modern'], Difficulty.Intermediate),
          createSnippet('cpp-variant', 'std::variant', 'Type-safe union.', 'std::variant<int, float> v = 10;\nint i = std::get<int>(v);', 'cpp', ['Modern'], Difficulty.Intermediate),
          createSnippet('cpp-any', 'std::any', 'Type erasure.', 'std::any a = 1;\na = std::string("hi");', 'cpp', ['Modern'], Difficulty.Intermediate),
          createSnippet('cpp-filesystem', 'Filesystem', 'Path ops.', 'if (std::filesystem::exists("file.txt")) ...', 'cpp', ['IO'], Difficulty.Intermediate),
          createSnippet('cpp-chrono', 'Chrono', 'Time.', 'auto now = std::chrono::system_clock::now();', 'cpp', ['Time']),
        ]
      },
      {
        id: 'cpp-20',
        title: 'C++20 Features',
        snippets: [
          createSnippet('cpp-concepts', 'Concepts', 'Template constraints.', 'template<typename T>\nrequires std::integral<T>\nT add(T a, T b) { return a + b; }', 'cpp', ['C++20'], Difficulty.Advanced),
          createSnippet('cpp-modules', 'Modules', 'Import.', 'import std.core;\nint main() { std::cout << "Hi"; }', 'cpp', ['C++20'], Difficulty.Advanced),
          createSnippet('cpp-ranges', 'Ranges', 'Views & pipelines.', 'auto v = vec | std::views::filter(even) | std::views::transform(sq);', 'cpp', ['C++20'], Difficulty.Advanced),
          createSnippet('cpp-coroutines', 'Coroutines', 'Async/Gen.', 'task<int> foo() { co_return 42; }', 'cpp', ['C++20'], Difficulty.Advanced),
          createSnippet('cpp-spaceship', 'Spaceship Op', '3-way comparison.', 'auto operator<=>(const C&) const = default;', 'cpp', ['C++20'], Difficulty.Intermediate),
          createSnippet('cpp-consteval', 'Consteval', 'Immediate function.', 'consteval int sq(int n) { return n * n; }', 'cpp', ['C++20'], Difficulty.Advanced),
          createSnippet('cpp-designated-init', 'Designated Init', 'Struct init.', 'Point p = { .x = 10, .y = 20 };', 'cpp', ['C++20']),
          createSnippet('cpp-starts-with', 'String starts_with', 'String util.', 'if (str.starts_with("prefix")) ...', 'cpp', ['C++20']),
        ]
      },
      {
        id: 'cpp-templates',
        title: 'Template Metaprogramming',
        snippets: [
          createSnippet('cpp-func-temp', 'Function Template', 'Generic func.', 'template <typename T> void f(T x);', 'cpp', ['Templates']),
          createSnippet('cpp-class-temp', 'Class Template', 'Generic class.', 'template <typename T> class Box { T val; };', 'cpp', ['Templates']),
          createSnippet('cpp-variadic', 'Variadic Templates', 'Arg pack.', 'template<typename... Args>\nvoid print(Args... args) { (cout << ... << args); }', 'cpp', ['Templates'], Difficulty.Advanced),
          createSnippet('cpp-fold', 'Fold Expressions', 'Pack expansion.', 'template<typename... Args>\nauto sum(Args... args) { return (... + args); }', 'cpp', ['Templates'], Difficulty.Advanced),
          createSnippet('cpp-sfinae', 'SFINAE', 'Enable if.', 'template <typename T, typename = std::enable_if_t<std::is_integral_v<T>>>\nvoid f(T x) {}', 'cpp', ['Templates'], Difficulty.Advanced),
          createSnippet('cpp-traits', 'Type Traits', 'Introspection.', 'static_assert(std::is_same_v<T, int>);', 'cpp', ['Templates'], Difficulty.Advanced),
          createSnippet('cpp-if-constexpr', 'If Constexpr', 'Compile-time branch.', 'if constexpr (std::is_pointer_v<T>) { ... }', 'cpp', ['Templates'], Difficulty.Advanced),
          createSnippet('cpp-decltype', 'Decltype', 'Type query.', 'decltype(x) y = x;', 'cpp', ['Templates']),
        ]
      },
      {
        id: 'cpp-concurrency',
        title: 'Concurrency',
        snippets: [
          createSnippet('cpp-thread', 'Thread', 'Spawn thread.', 'std::thread t([]{ ... });\nt.join();', 'cpp', ['Concurrency'], Difficulty.Intermediate),
          createSnippet('cpp-jthread', 'JThread', 'Auto-join thread (C++20).', 'std::jthread t([]{ ... });', 'cpp', ['Concurrency'], Difficulty.Intermediate),
          createSnippet('cpp-mutex', 'Mutex', 'Locking.', 'std::mutex m;\nm.lock(); ... m.unlock();', 'cpp', ['Concurrency'], Difficulty.Intermediate),
          createSnippet('cpp-lock-guard', 'Lock Guard', 'RAII Lock.', 'std::lock_guard<std::mutex> lg(m);', 'cpp', ['Concurrency'], Difficulty.Intermediate),
          createSnippet('cpp-atomic', 'Atomic', 'Thread-safe var.', 'std::atomic<int> counter(0);\ncounter++;', 'cpp', ['Concurrency'], Difficulty.Intermediate),
          createSnippet('cpp-async', 'Async', 'Future result.', 'auto fut = std::async(std::launch::async, func);\nauto res = fut.get();', 'cpp', ['Concurrency'], Difficulty.Intermediate),
          createSnippet('cpp-cond-var', 'Condition Variable', 'Signaling.', 'cv.wait(lk, []{ return ready; });\ncv.notify_one();', 'cpp', ['Concurrency'], Difficulty.Advanced),
          createSnippet('cpp-latch', 'Latch', 'Sync point (C++20).', 'std::latch work_done(threads_count);\nwork_done.arrive_and_wait();', 'cpp', ['Concurrency'], Difficulty.Advanced),
        ]
      },
      {
        id: 'cpp-perf',
        title: 'Performance & Optimization',
        snippets: [
          createSnippet('cpp-inline', 'Inline', 'Hint compiler.', 'inline int small_func() { ... }', 'cpp', ['Optimization']),
          createSnippet('cpp-constexpr', 'Constexpr', 'Compile time.', 'constexpr int fib(int n) { ... }', 'cpp', ['Optimization'], Difficulty.Intermediate),
          createSnippet('cpp-restrict', 'Restrict', 'Pointer aliasing.', 'int* __restrict__ a;', 'cpp', ['Optimization'], Difficulty.Advanced),
          createSnippet('cpp-likely', 'Likely/Unlikely', 'Branch pred (C++20).', 'if (x > 0) [[likely]] { ... }', 'cpp', ['Optimization'], Difficulty.Advanced),
          createSnippet('cpp-alignas', 'Alignment', 'Cache line.', 'struct alignas(64) Aligned { ... };', 'cpp', ['Optimization'], Difficulty.Advanced),
          createSnippet('cpp-bit-cast', 'Bit Cast', 'Reinterpret (C++20).', 'float f = 3.14;\nauto i = std::bit_cast<uint32_t>(f);', 'cpp', ['Optimization'], Difficulty.Advanced),
          createSnippet('cpp-rvo', 'RVO', 'Return Value Opt.', 'MyClass create() { return MyClass(); } // No copy', 'cpp', ['Optimization'], Difficulty.Intermediate),
          createSnippet('cpp-sso', 'SSO', 'Small String Opt.', '// std::string avoids alloc for short strings', 'cpp', ['Optimization'], Difficulty.Advanced),
        ]
      }
    ]
  },
  // =========================================================================
  // C#
  // =========================================================================
  {
    id: 'csharp',
    name: 'C#',
    slug: 'csharp',
    iconName: 'Hash',
    type: 'Language',
    description: 'Modern, object-oriented language by Microsoft.',
    categories: [
      {
        id: 'cs-basics',
        title: 'Core C#',
        snippets: [
          createSnippet('cs-props', 'Properties', 'Get/Set.', 'public int Age { get; set; }', 'csharp', ['OOP']),
          createSnippet('cs-linq-basic', 'LINQ Basic', 'Query.', 'var q = from c in customers where c.City == "London" select c;', 'csharp', ['LINQ']),
        ]
      },
      {
        id: 'cs-advanced',
        title: 'Advanced C#',
        snippets: [
          createSnippet('cs-async', 'Async/Await', 'Tasks.', 'public async Task<int> GetData() {\n  return await db.Fetch();\n}', 'csharp', ['Async'], Difficulty.Intermediate),
          createSnippet('cs-linq-adv', 'LINQ Methods', 'Fluent API.', 'list.Where(x => x > 5).Select(x => x * 2).ToList();', 'csharp', ['LINQ'], Difficulty.Intermediate),
          createSnippet('cs-delegates', 'Delegates/Events', 'Callbacks.', 'public delegate void Notify();\npublic event Notify ProcessCompleted;', 'csharp', ['Events'], Difficulty.Advanced),
          createSnippet('cs-generics', 'Generics', 'Constraints.', 'public class Repository<T> where T : class { ... }', 'csharp', ['Generics'], Difficulty.Advanced),
          createSnippet('cs-attributes', 'Attributes', 'Metadata.', '[Obsolete("Use NewMethod")]\npublic void OldMethod() { }', 'csharp', ['Meta'], Difficulty.Intermediate),
          createSnippet('cs-records', 'Records', 'Immutable data.', 'public record Person(string Name, int Age);', 'csharp', ['Data'], Difficulty.Intermediate),
        ]
      }
    ]
  },
  // =========================================================================
  // PHP
  // =========================================================================
  {
    id: 'php',
    name: 'PHP',
    slug: 'php',
    iconName: 'Server',
    type: 'Language',
    description: 'A popular general-purpose scripting language that is especially suited to web development.',
    categories: [
      {
        id: 'php-basics',
        title: 'Basics',
        snippets: [
          createSnippet('php-tags', 'PHP Tags', 'Standard tags.', '<?php ... ?>', 'php', ['Basics']),
          createSnippet('php-echo', 'Echo', 'Output string.', 'echo "Hello World";', 'php', ['Basics']),
          createSnippet('php-vars', 'Variables', 'Prefix with $.', '$txt = "Hello";\n$x = 5;\n$y = 10.5;', 'php', ['Basics']),
          createSnippet('php-comments', 'Comments', 'Single/Multi line.', '// Single line\n/* Multi-line\ncomment */', 'php', ['Basics']),
        ]
      },
      {
        id: 'php-strings',
        title: 'Strings',
        snippets: [
          createSnippet('php-strlen', 'String Length', 'Get length.', 'echo strlen("Hello world!");', 'php', ['Strings']),
          createSnippet('php-str-word-count', 'Word Count', 'Count words.', 'echo str_word_count("Hello world!");', 'php', ['Strings']),
          createSnippet('php-strrev', 'Reverse String', 'Reverse.', 'echo strrev("Hello world!");', 'php', ['Strings']),
          createSnippet('php-strpos', 'Search Text', 'Find position.', 'echo strpos("Hello world!", "world");', 'php', ['Strings']),
          createSnippet('php-str-replace', 'Replace Text', 'Replace substring.', 'echo str_replace("world", "Dolly", "Hello world!");', 'php', ['Strings']),
        ]
      },
      {
        id: 'php-arrays',
        title: 'Arrays',
        snippets: [
          createSnippet('php-array-indexed', 'Indexed Array', 'Numeric index.', '$cars = array("Volvo", "BMW", "Toyota");', 'php', ['Arrays']),
          createSnippet('php-array-assoc', 'Associative Array', 'Named keys.', '$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");', 'php', ['Arrays']),
          createSnippet('php-count', 'Count', 'Array length.', 'echo count($cars);', 'php', ['Arrays']),
          createSnippet('php-sort', 'Sort', 'Sort arrays.', 'sort($cars); // Ascending\nrsort($cars); // Descending\nasort($age); // Value ascending\nksort($age); // Key ascending', 'php', ['Arrays']),
        ]
      },
      {
        id: 'php-loops',
        title: 'Loops',
        snippets: [
          createSnippet('php-foreach', 'Foreach', 'Loop arrays.', 'foreach ($colors as $value) {\n  echo "$value <br>";\n}', 'php', ['Loops']),
          createSnippet('php-while', 'While', 'Loop condition.', 'while ($x <= 5) {\n  echo "The number is: $x <br>";\n  $x++;\n}', 'php', ['Loops']),
        ]
      },
      {
        id: 'php-functions',
        title: 'Functions',
        snippets: [
          createSnippet('php-function', 'Function', 'Define function.', 'function writeMsg() {\n  echo "Hello world!";\n}', 'php', ['Functions']),
          createSnippet('php-function-arg', 'Arguments', 'Pass values.', 'function familyName($fname) {\n  echo "$fname Refsnes.<br>";\n}', 'php', ['Functions']),
          createSnippet('php-return', 'Return', 'Return value.', 'function sum($x, $y) {\n  $z = $x + $y;\n  return $z;\n}', 'php', ['Functions']),
        ]
      },
      {
        id: 'php-superglobals',
        title: 'Superglobals',
        snippets: [
          createSnippet('php-post', '$_POST', 'Collect form data.', '$name = $_POST[\'fname\'];', 'php', ['Superglobals']),
          createSnippet('php-get', '$_GET', 'URL parameters.', 'echo "Study " . $_GET[\'subject\'] . " at " . $_GET[\'web\'];', 'php', ['Superglobals']),
          createSnippet('php-server', '$_SERVER', 'Headers/Paths.', 'echo $_SERVER[\'SERVER_NAME\'];', 'php', ['Superglobals']),
        ]
      }
    ]
  },
  // =========================================================================
  // Git
  // =========================================================================
  {
    id: 'git',
    name: 'Git',
    slug: 'git',
    iconName: 'GitBranch',
    type: 'Tool',
    description: 'Version Control System.',
    categories: [
      {
        id: 'git-basics',
        title: 'Common Commands',
        snippets: [
          createSnippet('git-flow', 'Workflow', 'Basic cycle.', 'git add .\ngit commit -m "WIP"\ngit push', 'bash', ['Basics']),
          createSnippet('git-branch', 'Branching', 'Management.', 'git checkout -b new-feature', 'bash', ['Basics']),
        ]
      },
      {
        id: 'git-advanced',
        title: 'Advanced Git',
        snippets: [
          createSnippet('git-rebase', 'Interactive Rebase', 'Clean history.', 'git rebase -i HEAD~3', 'bash', ['History'], Difficulty.Advanced),
          createSnippet('git-cherry', 'Cherry Pick', 'Copy commit.', 'git cherry-pick <commit-hash>', 'bash', ['History'], Difficulty.Intermediate),
          createSnippet('git-stash', 'Stash', 'Temp save.', 'git stash save "wip"\ngit stash pop', 'bash', ['Workflow'], Difficulty.Intermediate),
          createSnippet('git-reflog', 'Reflog', 'Recover lost.', 'git reflog\ngit reset --hard HEAD@{1}', 'bash', ['Recovery'], Difficulty.Advanced),
          createSnippet('git-bisect', 'Bisect', 'Find bug.', 'git bisect start\ngit bisect bad\ngit bisect good <hash>', 'bash', ['Debugging'], Difficulty.Advanced),
          createSnippet('git-submodule', 'Submodules', 'Nested repos.', 'git submodule add <url>', 'bash', ['Advanced'], Difficulty.Advanced),
        ]
      }
    ]
  },
  // =========================================================================
  // SQL
  // =========================================================================
  {
    id: 'sql',
    name: 'SQL',
    slug: 'sql',
    iconName: 'Database',
    type: 'Database',
    description: 'Structured Query Language.',
    categories: [
      {
        id: 'sql-basics',
        title: 'CRUD Operations',
        snippets: [
          createSnippet('sql-select', 'SELECT', 'Read.', 'SELECT * FROM users WHERE age > 18;', 'sql', ['CRUD']),
          createSnippet('sql-insert', 'INSERT', 'Create.', 'INSERT INTO users (name) VALUES ("Alice");', 'sql', ['CRUD']),
          createSnippet('sql-update', 'UPDATE', 'Modify.', 'UPDATE users SET age = 20 WHERE id = 1;', 'sql', ['CRUD']),
        ]
      },
      {
        id: 'sql-advanced',
        title: 'Advanced SQL',
        snippets: [
          createSnippet('sql-joins', 'Joins', 'Combine tables.', 'SELECT * FROM a INNER JOIN b ON a.id = b.a_id;', 'sql', ['Query'], Difficulty.Intermediate),
          createSnippet('sql-cte', 'CTE', 'With clause.', 'WITH Sales AS (SELECT ...) SELECT * FROM Sales;', 'sql', ['Advanced'], Difficulty.Intermediate),
          createSnippet('sql-window', 'Window Functions', 'Analytics.', 'ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)', 'sql', ['Analytics'], Difficulty.Advanced),
          createSnippet('sql-union', 'UNION', 'Combine results.', 'SELECT name FROM staff UNION SELECT name FROM customers;', 'sql', ['Query'], Difficulty.Intermediate),
          createSnippet('sql-case', 'CASE', 'Logic.', 'CASE WHEN age >= 18 THEN "Adult" ELSE "Minor" END', 'sql', ['Logic'], Difficulty.Intermediate),
          createSnippet('sql-index', 'Indexes', 'Performance.', 'CREATE INDEX idx_name ON users(name);', 'sql', ['Performance'], Difficulty.Advanced),
        ]
      }
    ]
  },
  // =========================================================================
  // Docker
  // =========================================================================
  {
    id: 'docker',
    name: 'Docker',
    slug: 'docker',
    iconName: 'Container',
    type: 'Tool',
    description: 'Containerization platform.',
    categories: [
      {
        id: 'docker-cli',
        title: 'Basic CLI',
        snippets: [
          createSnippet('docker-run', 'Run Container', 'Start.', 'docker run -d -p 80:80 nginx', 'bash', ['Basics']),
          createSnippet('docker-build', 'Build Image', 'Create.', 'docker build -t myapp .', 'bash', ['Basics']),
        ]
      },
      {
        id: 'docker-advanced',
        title: 'Advanced Docker',
        snippets: [
          createSnippet('docker-compose', 'Docker Compose', 'Multi-container.', 'version: "3"\nservices:\n  web:\n    build: .\n    ports: ["5000:5000"]', 'yaml', ['Compose'], Difficulty.Intermediate),
          createSnippet('docker-multistage', 'Multi-stage Build', 'Optimization.', 'FROM node AS builder\n...\nFROM nginx\nCOPY --from=builder ...', 'dockerfile', ['Optimization'], Difficulty.Advanced),
          createSnippet('docker-volumes', 'Volumes', 'Persistence.', 'docker volume create my_vol\ndocker run -v my_vol:/data ...', 'bash', ['Storage'], Difficulty.Intermediate),
          createSnippet('docker-network', 'Networks', 'Connectivity.', 'docker network create my_net\ndocker run --network my_net ...', 'bash', ['Networking'], Difficulty.Advanced),
          createSnippet('docker-clean', 'Prune', 'Cleanup.', 'docker system prune -a', 'bash', ['Maintenance'], Difficulty.Intermediate),
        ]
      }
    ]
  },
  // =========================================================================
  // Tailwind CSS
  // =========================================================================
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    slug: 'tailwind',
    iconName: 'Wind',
    type: 'Framework',
    description: 'A utility-first CSS framework packed with classes to build any design, directly in your markup.',
    categories: [
      {
        id: 'tw-setup',
        title: 'Setup & Configuration',
        snippets: [
          createSnippet('tw-vite-install', 'Vite Install (v4)', 'Using the Vite plugin.', 'npm add tailwindcss @tailwindcss/vite', 'bash', ['Setup', 'Vite']),
          createSnippet('tw-vite-config', 'Vite Config', 'vite.config.ts setup.', "import { defineConfig } from 'vite'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [\n    tailwindcss(),\n  ],\n})", 'typescript', ['Config', 'Vite']),
          createSnippet('tw-css-import', 'CSS Import (v4)', 'Import in main CSS.', '@import "tailwindcss";', 'css', ['Setup']),
          createSnippet('tw-install', 'Install (Standard)', 'npm install.', 'npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p', 'bash', ['Setup']),
          createSnippet('tw-config', 'Config File', 'tailwind.config.js', 'module.exports = {\n  content: ["./src/**/*.{js,jsx,ts,tsx}"],\n  theme: { extend: {} },\n  plugins: [],\n}', 'javascript', ['Config']),
          createSnippet('tw-directives', 'CSS Directives', 'Main CSS file.', '@tailwind base;\n@tailwind components;\n@tailwind utilities;', 'css', ['Setup']),
          createSnippet('tw-arbitrary', 'Arbitrary Values', 'Custom values.', 'w-[32rem]\nbg-[#bada55]\ngrid-cols-[1fr_500px_2fr]', 'html', ['JIT']),
        ]
      },
      {
        id: 'tw-layout',
        title: 'Layout & Flexbox/Grid',
        snippets: [
          createSnippet('tw-container', 'Container', 'Responsive container.', '<div class="container mx-auto px-4"></div>', 'html', ['Layout']),
          createSnippet('tw-display', 'Display', 'Block/Flex/Grid.', 'block, inline-block, flex, grid, hidden', 'html', ['Layout']),
          createSnippet('tw-position', 'Position', 'Positioning.', 'relative, absolute, fixed, sticky', 'html', ['Layout']),
          createSnippet('tw-z-index', 'Z-Index', 'Stack order.', 'z-0, z-10, z-20, z-30, z-40, z-50, z-auto', 'html', ['Layout']),
          createSnippet('tw-overflow', 'Overflow', 'Scroll handling.', 'overflow-hidden, overflow-scroll, overflow-auto', 'html', ['Layout']),
          createSnippet('tw-flex-dir', 'Flex Direction', 'Row/Col.', 'flex-row, flex-col, flex-row-reverse', 'html', ['Flexbox']),
          createSnippet('tw-flex-wrap', 'Flex Wrap', 'Wrapping.', 'flex-wrap, flex-nowrap, flex-wrap-reverse', 'html', ['Flexbox']),
          createSnippet('tw-justify', 'Justify Content', 'Main axis.', 'justify-start, justify-center, justify-between, justify-around', 'html', ['Flexbox']),
          createSnippet('tw-items', 'Align Items', 'Cross axis.', 'items-start, items-center, items-end, items-stretch', 'html', ['Flexbox']),
          createSnippet('tw-grid-cols', 'Grid Columns', 'Define cols.', 'grid-cols-1, grid-cols-2, grid-cols-12, grid-cols-none', 'html', ['Grid']),
          createSnippet('tw-grid-gap', 'Gap', 'Gutters.', 'gap-4, gap-x-2, gap-y-4', 'html', ['Grid']),
          createSnippet('tw-col-span', 'Column Span', 'Spanning.', 'col-span-2, col-span-full', 'html', ['Grid']),
        ]
      },
      {
        id: 'tw-spacing',
        title: 'Spacing & Sizing',
        snippets: [
          createSnippet('tw-padding', 'Padding', 'Inner space.', 'p-4, px-4 (horiz), py-4 (vert), pt-4 (top)', 'html', ['Spacing']),
          createSnippet('tw-margin', 'Margin', 'Outer space.', 'm-4, mx-auto, my-4, mt-4, -mt-4 (negative)', 'html', ['Spacing']),
          createSnippet('tw-space', 'Space Between', 'Children spacing.', 'space-x-4, space-y-4', 'html', ['Spacing']),
          createSnippet('tw-width', 'Width', 'Element width.', 'w-full, w-screen, w-1/2, w-auto, w-4', 'html', ['Sizing']),
          createSnippet('tw-height', 'Height', 'Element height.', 'h-full, h-screen, h-auto, h-4', 'html', ['Sizing']),
          createSnippet('tw-min-max', 'Min/Max', 'Constraints.', 'min-h-screen, max-w-lg, min-w-0', 'html', ['Sizing']),
        ]
      },
      {
        id: 'tw-typography',
        title: 'Typography',
        snippets: [
          createSnippet('tw-text-size', 'Font Size', 'Scale.', 'text-xs, text-sm, text-base, text-lg, text-xl, text-9xl', 'html', ['Typography']),
          createSnippet('tw-font-weight', 'Font Weight', 'Boldness.', 'font-thin, font-normal, font-bold, font-black', 'html', ['Typography']),
          createSnippet('tw-text-align', 'Text Align', 'Alignment.', 'text-left, text-center, text-right, text-justify', 'html', ['Typography']),
          createSnippet('tw-text-color', 'Text Color', 'Color palette.', 'text-white, text-gray-500, text-red-600', 'html', ['Typography']),
          createSnippet('tw-decoration', 'Decoration', 'Underline/Strike.', 'underline, line-through, no-underline', 'html', ['Typography']),
          createSnippet('tw-transform', 'Text Transform', 'Case.', 'uppercase, lowercase, capitalize', 'html', ['Typography']),
          createSnippet('tw-leading', 'Line Height', 'Spacing.', 'leading-none, leading-tight, leading-relaxed, leading-loose', 'html', ['Typography']),
          createSnippet('tw-tracking', 'Letter Spacing', 'Kerning.', 'tracking-tighter, tracking-wide, tracking-widest', 'html', ['Typography']),
          createSnippet('tw-truncate', 'Truncate', 'Overflow ellipsis.', 'truncate (overflow-hidden text-ellipsis whitespace-nowrap)', 'html', ['Typography']),
        ]
      },
      {
        id: 'tw-colors',
        title: 'Colors & Backgrounds',
        snippets: [
          createSnippet('tw-bg-color', 'Background Color', 'Fills.', 'bg-slate-500, bg-white, bg-transparent', 'html', ['Colors']),
          createSnippet('tw-bg-opacity', 'Background Opacity', 'Alpha.', 'bg-opacity-50, bg-opacity-75', 'html', ['Colors']),
          createSnippet('tw-gradient', 'Gradients', 'Linear.', 'bg-gradient-to-r from-cyan-500 to-blue-500', 'html', ['Colors']),
          createSnippet('tw-border-color', 'Border Color', 'Strokes.', 'border-gray-200, border-transparent', 'html', ['Colors']),
          createSnippet('tw-bg-image', 'Background Image', 'URL.', "bg-[url('/img/hero.jpg')]", 'html', ['JIT']),
          createSnippet('tw-bg-size', 'Background Size', 'Cover/Contain.', 'bg-cover, bg-contain, bg-auto', 'html', ['Backgrounds']),
        ]
      },
      {
        id: 'tw-borders',
        title: 'Borders & Effects',
        snippets: [
          createSnippet('tw-rounded', 'Border Radius', 'Corners.', 'rounded, rounded-md, rounded-full, rounded-t-lg', 'html', ['Borders']),
          createSnippet('tw-border-width', 'Border Width', 'Thickness.', 'border, border-2, border-t-4', 'html', ['Borders']),
          createSnippet('tw-border-style', 'Border Style', 'Type.', 'border-solid, border-dashed, border-dotted', 'html', ['Borders']),
          createSnippet('tw-shadow', 'Box Shadow', 'Elevation.', 'shadow, shadow-md, shadow-lg, shadow-inner, shadow-none', 'html', ['Effects']),
          createSnippet('tw-opacity', 'Opacity', 'Transparency.', 'opacity-0, opacity-50, opacity-100', 'html', ['Effects']),
          createSnippet('tw-blur', 'Blur Filter', 'Glassmorphism.', 'blur-sm, blur-lg, backdrop-blur-md', 'html', ['Effects']),
        ]
      },
      {
        id: 'tw-responsive',
        title: 'Responsive & States',
        snippets: [
          createSnippet('tw-breakpoints', 'Breakpoints', 'Media queries.', 'sm: (640px), md: (768px), lg: (1024px), xl: (1280px)', 'html', ['Responsive']),
          createSnippet('tw-responsive-usage', 'Responsive Usage', 'Example.', '<div class="w-full md:w-1/2 lg:w-1/3">', 'html', ['Responsive']),
          createSnippet('tw-hover', 'Hover State', 'Mouse over.', 'hover:bg-blue-600 hover:text-white', 'html', ['States']),
          createSnippet('tw-focus', 'Focus State', 'Input focus.', 'focus:ring-2 focus:ring-blue-500 focus:outline-none', 'html', ['States']),
          createSnippet('tw-active', 'Active State', 'Clicking.', 'active:bg-blue-700', 'html', ['States']),
          createSnippet('tw-group', 'Group Hover', 'Parent state.', '<div class="group"><p class="group-hover:text-blue-500">...</p></div>', 'html', ['States']),
          createSnippet('tw-dark', 'Dark Mode', 'Dark theme.', 'dark:bg-slate-900 dark:text-white', 'html', ['Dark Mode']),
        ]
      },
      {
        id: 'tw-interactivity',
        title: 'Interactivity & Transition',
        snippets: [
          createSnippet('tw-cursor', 'Cursor', 'Pointer type.', 'cursor-pointer, cursor-not-allowed, cursor-wait', 'html', ['Interactivity']),
          createSnippet('tw-select', 'User Select', 'Text selection.', 'select-none, select-text, select-all', 'html', ['Interactivity']),
          createSnippet('tw-pointer', 'Pointer Events', 'Clickable.', 'pointer-events-none, pointer-events-auto', 'html', ['Interactivity']),
          createSnippet('tw-transition', 'Transition', 'Animate changes.', 'transition-all duration-300 ease-in-out', 'html', ['Animation']),
          createSnippet('tw-animate', 'Animation', 'Keyframes.', 'animate-spin, animate-ping, animate-pulse, animate-bounce', 'html', ['Animation']),
          createSnippet('tw-transform', 'Transform', 'Scale/Rotate.', 'hover:scale-105 hover:rotate-3', 'html', ['Animation']),
        ]
      }
    ]
  },
  // =========================================================================
  // Unreal Engine 5
  // =========================================================================
  {
    id: 'unreal',
    name: 'Unreal Engine 5',
    slug: 'unreal',
    iconName: 'Gamepad2',
    type: 'Framework',
    description: 'The world\'s most open and advanced real-time 3D creation tool.',
    categories: [
      {
        id: 'ue-core-logging',
        title: 'Core Types & Logging',
        snippets: [
          createSnippet('ue-log-temp', 'LogTemp', 'Basic logging.', 'UE_LOG(LogTemp, Warning, TEXT("Your message here"));', 'cpp', ['Logging']),
          createSnippet('ue-log-fmt', 'Formatted Log', 'Log variables.', 'UE_LOG(LogTemp, Warning, TEXT("Value: %f"), MyFloat);', 'cpp', ['Logging']),
          createSnippet('ue-screen-msg', 'OnScreenDebugMessage', 'Print to screen.', 'if(GEngine)\n    GEngine->AddOnScreenDebugMessage(-1, 5.f, FColor::Red, TEXT("Hello"));', 'cpp', ['Logging']),
          createSnippet('ue-check', 'check()', 'Fatal assertion.', 'check(MyPtr != nullptr); // Crashes if false', 'cpp', ['Assertions']),
          createSnippet('ue-checkf', 'checkf()', 'Fatal with msg.', 'checkf(Val > 0, TEXT("Val must be positive"));', 'cpp', ['Assertions']),
          createSnippet('ue-ensure', 'ensure()', 'Non-fatal error.', 'if (ensure(MyPtr)) { ... }', 'cpp', ['Assertions']),
          createSnippet('ue-fstring-printf', 'FString::Printf', 'Format string.', 'FString Str = FString::Printf(TEXT("Val: %d"), MyInt);', 'cpp', ['Strings']),
          createSnippet('ue-fname', 'FName', 'Lightweight string.', 'FName Name = FName(TEXT("MySocket"));', 'cpp', ['Strings']),
          createSnippet('ue-ftext', 'FText', 'Localized string.', 'FText Txt = NSLOCTEXT("Namespace", "Key", "Text");', 'cpp', ['Strings']),
          createSnippet('ue-string-conv', 'Conversions', 'String types.', '*MyString (TCHAR*)\nMyName.ToString()\nMyText.ToString()', 'cpp', ['Strings']),
          createSnippet('ue-string-parse', 'ParseIntoArray', 'Split string.', 'TArray<FString> Out;\nStr.ParseIntoArray(Out, TEXT(","), true);', 'cpp', ['Strings']),
          createSnippet('ue-string-empty', 'IsEmpty', 'Check empty.', 'if (Str.IsEmpty()) ...', 'cpp', ['Strings']),
          createSnippet('ue-string-from-int', 'FromInt', 'Int to String.', 'FString::FromInt(MyInt)', 'cpp', ['Strings']),
          createSnippet('ue-string-sanitize', 'SanitizeFloat', 'Float to String.', 'FString::SanitizeFloat(MyFloat)', 'cpp', ['Strings']),
        ]
      },
      {
        id: 'ue-uobject',
        title: 'UObject & Memory',
        snippets: [
          createSnippet('ue-new-object', 'NewObject', 'Create UObject.', 'UMyObj* Obj = NewObject<UMyObj>(this);', 'cpp', ['Memory']),
          createSnippet('ue-is-valid', 'IsValid', 'Check validity.', 'if (IsValid(MyActor)) ...', 'cpp', ['Memory']),
          createSnippet('ue-class-default', 'GetDefaultObject', 'CDO access.', 'GetClass()->GetDefaultObject<UMyClass>();', 'cpp', ['Reflection']),
          createSnippet('ue-static-class', 'StaticClass', 'Get UClass.', 'UMyClass::StaticClass()', 'cpp', ['Reflection']),
          createSnippet('ue-cast', 'Cast', 'Safe casting.', 'AMyActor* MyActor = Cast<AMyActor>(OtherActor);', 'cpp', ['Casting']),
          createSnippet('ue-cast-checked', 'CastChecked', 'Crash if fail.', 'AMyActor* MyActor = CastChecked<AMyActor>(OtherActor);', 'cpp', ['Casting']),
          createSnippet('ue-weak-ptr', 'TWeakObjectPtr', 'Weak reference.', 'TWeakObjectPtr<AActor> WeakActor = MyActor;', 'cpp', ['Memory']),
          createSnippet('ue-soft-ptr', 'TSoftObjectPtr', 'Asset reference.', 'TSoftObjectPtr<UTexture> SoftTex;', 'cpp', ['Memory']),
          createSnippet('ue-load-obj', 'LoadObject', 'Sync load.', 'LoadObject<UTexture2D>(nullptr, TEXT("/Game/Tex.Tex"));', 'cpp', ['Assets']),
        ]
      },
      {
        id: 'ue-actors',
        title: 'Actors & Components',
        snippets: [
          createSnippet('ue-spawn', 'SpawnActor', 'Spawn in world.', 'GetWorld()->SpawnActor<AActor>(Class, Loc, Rot, Params);', 'cpp', ['Spawning']),
          createSnippet('ue-spawn-deferred', 'SpawnActorDeferred', 'Init before play.', 'auto A = GetWorld()->SpawnActorDeferred<AActor>(...);\nUGameplayStatics::FinishSpawningActor(A, Transform);', 'cpp', ['Spawning'], Difficulty.Advanced),
          createSnippet('ue-destroy', 'Destroy', 'Remove actor.', 'MyActor->Destroy();', 'cpp', ['Lifecycle']),
          createSnippet('ue-lifespan', 'SetLifeSpan', 'Auto destroy.', 'SetLifeSpan(5.0f);', 'cpp', ['Lifecycle']),
          createSnippet('ue-get-world', 'GetWorld', 'World context.', 'UWorld* World = GetWorld();', 'cpp', ['World']),
          createSnippet('ue-get-all-actors', 'GetAllActorsOfClass', 'Find all.', 'TArray<AActor*> Out;\nUGameplayStatics::GetAllActorsOfClass(GetWorld(), Class, Out);', 'cpp', ['Utilities']),
          createSnippet('ue-create-subobj', 'CreateDefaultSubobject', 'Constructor.', 'Mesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"));', 'cpp', ['Components']),
          createSnippet('ue-setup-attach', 'SetupAttachment', 'Hierarchy.', 'Mesh->SetupAttachment(RootComponent);', 'cpp', ['Components']),
          createSnippet('ue-register-comp', 'RegisterComponent', 'Runtime.', 'Comp->RegisterComponent();', 'cpp', ['Components']),
          createSnippet('ue-get-comp', 'GetComponentByClass', 'Find component.', 'Actor->GetComponentByClass(UMeshComponent::StaticClass());', 'cpp', ['Components']),
          createSnippet('ue-attachto', 'AttachToComponent', 'Runtime attach.', 'Item->AttachToComponent(Mesh, FAttachmentTransformRules::SnapToTarget);', 'cpp', ['Components']),
          createSnippet('ue-set-vis', 'SetVisibility', 'Hide/Show.', 'Comp->SetVisibility(true);', 'cpp', ['Components']),
          createSnippet('ue-set-hidden', 'SetHiddenInGame', 'Hide actor.', 'SetHiddenInGame(true);', 'cpp', ['Actors']),
          createSnippet('ue-tags', 'Actor Tags', 'Gameplay tags.', 'Actor->Tags.Add(FName("Enemy"));', 'cpp', ['Actors']),
        ]
      },
      {
        id: 'ue-macros',
        title: 'UFUNCTION & UPROPERTY',
        snippets: [
          createSnippet('ue-uprop-edit', 'EditAnywhere', 'Editor editable.', 'UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Stats")\nfloat Health;', 'cpp', ['Reflection']),
          createSnippet('ue-uprop-visible', 'VisibleAnywhere', 'Read only.', 'UPROPERTY(VisibleAnywhere)\nUStaticMeshComponent* Mesh;', 'cpp', ['Reflection']),
          createSnippet('ue-uprop-transient', 'Transient', 'No save.', 'UPROPERTY(Transient)\nint32 TempVal;', 'cpp', ['Reflection']),
          createSnippet('ue-uprop-rep', 'Replicated', 'Networking.', 'UPROPERTY(Replicated)\nfloat Health;', 'cpp', ['Networking']),
          createSnippet('ue-ufunc-call', 'BlueprintCallable', 'Call in BP.', 'UFUNCTION(BlueprintCallable, Category="Game")\nvoid Attack();', 'cpp', ['Reflection']),
          createSnippet('ue-ufunc-pure', 'BlueprintPure', 'No exec pin.', 'UFUNCTION(BlueprintPure)\nfloat GetHealth();', 'cpp', ['Reflection']),
          createSnippet('ue-ufunc-imp', 'BlueprintImplementableEvent', 'BP only.', 'UFUNCTION(BlueprintImplementableEvent)\nvoid OnHit();', 'cpp', ['Reflection']),
          createSnippet('ue-ufunc-native', 'BlueprintNativeEvent', 'C++ & BP.', 'UFUNCTION(BlueprintNativeEvent)\nvoid Interact();', 'cpp', ['Reflection']),
          createSnippet('ue-ufunc-server', 'Server', 'RPC.', 'UFUNCTION(Server, Reliable)\nvoid ServerFire();', 'cpp', ['Networking']),
          createSnippet('ue-ufunc-exec', 'Exec', 'Console cmd.', 'UFUNCTION(Exec)\nvoid Cheat();', 'cpp', ['Console']),
        ]
      },
      {
        id: 'ue-math',
        title: 'Math & Vectors',
        snippets: [
          createSnippet('ue-vector-zero', 'FVector::ZeroVector', '0,0,0.', 'FVector::ZeroVector', 'cpp', ['Math']),
          createSnippet('ue-vector-dist', 'Dist', 'Distance.', 'FVector::Dist(A, B)', 'cpp', ['Math']),
          createSnippet('ue-vector-distsq', 'DistSquared', 'Cheaper dist.', 'FVector::DistSquared(A, B)', 'cpp', ['Math']),
          createSnippet('ue-vector-norm', 'GetSafeNormal', 'Normalize.', 'Vec.GetSafeNormal()', 'cpp', ['Math']),
          createSnippet('ue-lerp', 'Lerp', 'Linear interp.', 'FMath::Lerp(Start, End, Alpha)', 'cpp', ['Math']),
          createSnippet('ue-interp-to', 'FInterpTo', 'Smooth float.', 'FMath::FInterpTo(Current, Target, DeltaTime, Speed)', 'cpp', ['Math']),
          createSnippet('ue-vinterp-to', 'VInterpTo', 'Smooth vector.', 'FMath::VInterpTo(Current, Target, DeltaTime, Speed)', 'cpp', ['Math']),
          createSnippet('ue-rinterp-to', 'RInterpTo', 'Smooth rot.', 'FMath::RInterpTo(Current, Target, DeltaTime, Speed)', 'cpp', ['Math']),
          createSnippet('ue-clamp', 'Clamp', 'Limit value.', 'FMath::Clamp(Val, Min, Max)', 'cpp', ['Math']),
          createSnippet('ue-rand', 'RandRange', 'Random float.', 'FMath::RandRange(0.f, 100.f)', 'cpp', ['Math']),
          createSnippet('ue-rotator', 'FRotator', 'Pitch,Yaw,Roll.', 'FRotator(Pitch, Yaw, Roll)', 'cpp', ['Math']),
          createSnippet('ue-quat', 'FQuat', 'Quaternion.', 'FQuat(Rotator)', 'cpp', ['Math']),
          createSnippet('ue-transform', 'FTransform', 'Loc,Rot,Scale.', 'FTransform(Rot, Loc, Scale)', 'cpp', ['Math']),
          createSnippet('ue-dot', 'DotProduct', 'Dot.', 'FVector::DotProduct(A, B)', 'cpp', ['Math']),
          createSnippet('ue-cross', 'CrossProduct', 'Cross.', 'FVector::CrossProduct(A, B)', 'cpp', ['Math']),
        ]
      },
      {
        id: 'ue-containers',
        title: 'Containers (TArray, TMap)',
        snippets: [
          createSnippet('ue-tarray-add', 'TArray Add', 'Append.', 'Arr.Add(Item);', 'cpp', ['Containers']),
          createSnippet('ue-tarray-num', 'Num', 'Count.', 'Arr.Num()', 'cpp', ['Containers']),
          createSnippet('ue-tarray-empty', 'Empty', 'Clear.', 'Arr.Empty();', 'cpp', ['Containers']),
          createSnippet('ue-tarray-contains', 'Contains', 'Check exist.', 'Arr.Contains(Item)', 'cpp', ['Containers']),
          createSnippet('ue-tarray-remove', 'Remove', 'Delete all.', 'Arr.Remove(Item);', 'cpp', ['Containers']),
          createSnippet('ue-tarray-removesingle', 'RemoveSingle', 'Delete one.', 'Arr.RemoveSingle(Item);', 'cpp', ['Containers']),
          createSnippet('ue-tarray-sort', 'Sort', 'Lambda sort.', 'Arr.Sort([](const A& a, const B& b) { return a < b; });', 'cpp', ['Containers']),
          createSnippet('ue-tarray-iter', 'Iterate', 'Range loop.', 'for (auto& Item : Arr) { ... }', 'cpp', ['Containers']),
          createSnippet('ue-tmap-add', 'TMap Add', 'Insert.', 'Map.Add(Key, Value);', 'cpp', ['Containers']),
          createSnippet('ue-tmap-find', 'Find', 'Get pointer.', 'Value* Val = Map.Find(Key);', 'cpp', ['Containers']),
          createSnippet('ue-tset-add', 'TSet Add', 'Unique.', 'Set.Add(Item);', 'cpp', ['Containers']),
        ]
      },
      {
        id: 'ue-gameplay',
        title: 'Gameplay & Input',
        snippets: [
          createSnippet('ue-pawn', 'GetPawn', 'Player Pawn.', 'GetWorld()->GetFirstPlayerController()->GetPawn();', 'cpp', ['Gameplay']),
          createSnippet('ue-pc', 'GetPlayerController', 'PC access.', 'UGameplayStatics::GetPlayerController(this, 0);', 'cpp', ['Gameplay']),
          createSnippet('ue-gamemode', 'GetGameMode', 'Rules.', 'GetWorld()->GetAuthGameMode();', 'cpp', ['Gameplay']),
          createSnippet('ue-gameinstance', 'GetGameInstance', 'Persist.', 'GetGameInstance();', 'cpp', ['Gameplay']),
          createSnippet('ue-open-level', 'OpenLevel', 'Load map.', 'UGameplayStatics::OpenLevel(this, "MapName");', 'cpp', ['Gameplay']),
          createSnippet('ue-input-bind', 'BindAction', 'Legacy input.', 'InputComponent->BindAction("Jump", IE_Pressed, this, &AChar::Jump);', 'cpp', ['Input']),
          createSnippet('ue-enhanced-bind', 'BindAction (Enhanced)', 'New input.', 'EnhancedInput->BindAction(JumpAction, ETriggerEvent::Triggered, this, &AChar::Jump);', 'cpp', ['Input']),
          createSnippet('ue-add-mapping', 'AddMappingContext', 'Enable input.', 'Subsystem->AddMappingContext(MappingContext, Priority);', 'cpp', ['Input']),
        ]
      },
      {
        id: 'ue-physics',
        title: 'Physics & Collision',
        snippets: [
          createSnippet('ue-linetrace', 'LineTrace', 'Raycast.', 'GetWorld()->LineTraceSingleByChannel(Hit, Start, End, ECC_Visibility, Params);', 'cpp', ['Physics']),
          createSnippet('ue-spheretrace', 'SphereTrace', 'Sweep.', 'UKismetSystemLibrary::SphereTraceSingle(...)', 'cpp', ['Physics']),
          createSnippet('ue-add-force', 'AddForce', 'Physics push.', 'Comp->AddForce(Vec * Strength);', 'cpp', ['Physics']),
          createSnippet('ue-add-impulse', 'AddImpulse', 'Instant push.', 'Comp->AddImpulse(Vec * Strength);', 'cpp', ['Physics']),
          createSnippet('ue-sim-phys', 'SetSimulatePhysics', 'Ragdoll.', 'Comp->SetSimulatePhysics(true);', 'cpp', ['Physics']),
          createSnippet('ue-collision', 'SetCollisionEnabled', 'Toggle col.', 'Comp->SetCollisionEnabled(ECollisionEnabled::QueryAndPhysics);', 'cpp', ['Physics']),
          createSnippet('ue-overlap', 'OnBeginOverlap', 'Trigger.', 'Comp->OnComponentBeginOverlap.AddDynamic(this, &AMyActor::OnOverlap);', 'cpp', ['Physics']),
          createSnippet('ue-hit', 'OnHit', 'Collision.', 'Comp->OnComponentHit.AddDynamic(this, &AMyActor::OnHit);', 'cpp', ['Physics']),
        ]
      },
      {
        id: 'ue-async',
        title: 'Timers & Delegates',
        snippets: [
          createSnippet('ue-timer-set', 'SetTimer', 'Delay.', 'GetWorldTimerManager().SetTimer(Handle, this, &AMyActor::Func, 1.0f, true);', 'cpp', ['Timers']),
          createSnippet('ue-timer-lambda', 'SetTimer Lambda', 'Anon func.', 'GetWorldTimerManager().SetTimer(Handle, [](){ ... }, 1.0f, false);', 'cpp', ['Timers']),
          createSnippet('ue-timer-clear', 'ClearTimer', 'Stop.', 'GetWorldTimerManager().ClearTimer(Handle);', 'cpp', ['Timers']),
          createSnippet('ue-delegate-decl', 'DECLARE_DELEGATE', 'Single.', 'DECLARE_DELEGATE_OneParam(FMyDel, int32);', 'cpp', ['Delegates']),
          createSnippet('ue-delegate-multi', 'DECLARE_MULTICAST', 'Multi.', 'DECLARE_DYNAMIC_MULTICAST_DELEGATE(FMyEvent);', 'cpp', ['Delegates']),
          createSnippet('ue-broadcast', 'Broadcast', 'Fire event.', 'MyDelegate.Broadcast();', 'cpp', ['Delegates']),
          createSnippet('ue-bind-uobject', 'BindUObject', 'Bind C++.', 'Del.BindUObject(this, &AMyClass::Func);', 'cpp', ['Delegates']),
        ]
      },
      {
        id: 'ue-console',
        title: 'Console Commands',
        snippets: [
          createSnippet('ue-stat-fps', 'stat fps', 'Show FPS.', 'stat fps', 'bash', ['Profiling']),
          createSnippet('ue-stat-unit', 'stat unit', 'Frame times.', 'stat unit', 'bash', ['Profiling']),
          createSnippet('ue-show-collision', 'show collision', 'Debug col.', 'show collision', 'bash', ['Debug']),
          createSnippet('ue-show-bounds', 'show bounds', 'Debug bounds.', 'show bounds', 'bash', ['Debug']),
          createSnippet('ue-slomo', 'slomo', 'Time scale.', 'slomo 0.1', 'bash', ['Cheats']),
          createSnippet('ue-highres', 'HighResShot', 'Screenshot.', 'HighResShot 2', 'bash', ['Tools']),
          createSnippet('ue-obj-list', 'obj list', 'Memory dump.', 'obj list class=Actor', 'bash', ['Profiling']),
          createSnippet('ue-view-wire', 'viewmode wireframe', 'Wireframe.', 'viewmode wireframe', 'bash', ['Render']),
          createSnippet('ue-view-unlit', 'viewmode unlit', 'No lights.', 'viewmode unlit', 'bash', ['Render']),
          createSnippet('ue-recompile', 'recompile', 'Live coding.', 'LiveCoding.Compile', 'bash', ['Tools']),
        ]
      }
    ]
  }
];