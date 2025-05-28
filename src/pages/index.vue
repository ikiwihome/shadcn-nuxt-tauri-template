<template>
  <div class="container space-y-12 py-8">
    <!-- 按钮组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Button 按钮</h2>
      <div class="flex gap-4 flex-wrap">
        <!-- 主要按钮 -->
        <Button variant="default">主要按钮</Button>
        <!-- 破坏性按钮 -->
        <Button variant="destructive">危险按钮</Button>
        <!-- 轮廓按钮 -->
        <Button variant="outline">轮廓按钮</Button>
        <!-- 次要按钮 -->
        <Button variant="secondary">次要按钮</Button>
        <!-- 幽灵按钮 -->
        <Button variant="ghost">幽灵按钮</Button>
        <!-- 链接按钮 -->
        <Button variant="link">链接按钮</Button>
      </div>
    </section>

    <!-- 输入框组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Input 输入框</h2>
      <div class="flex flex-col gap-2 w-64">
        <Label for="demo-input">用户名</Label>
        <Input id="demo-input" v-model="inputValue" placeholder="请输入用户名" />
      </div>
    </section>

    <!-- 标签组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Label 标签</h2>
      <div class="flex flex-col gap-2">
        <Label>普通标签</Label>
        <Label class="text-red-500">自定义样式标签</Label>
      </div>
    </section>

    <!-- 单选框组组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">RadioGroup 单选框组</h2>
      <RadioGroup v-model="radioValue" class="flex gap-6">
        <RadioGroupItem value="a" id="radio-a" />
        <Label for="radio-a">选项A</Label>
        <RadioGroupItem value="b" id="radio-b" />
        <Label for="radio-b">选项B</Label>
      </RadioGroup>
      <div class="mt-2 text-sm text-gray-500">当前选择：{{ radioValue }}</div>
    </section>

    <!-- 下拉选择组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Select 下拉选择</h2>
      <Select v-model="selectValue">
        <SelectTrigger class="w-48">
          <SelectValue placeholder="请选择" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana">香蕉</SelectItem>
          <SelectItem value="orange">橙子</SelectItem>
        </SelectContent>
      </Select>
      <div class="mt-2 text-sm text-gray-500">当前选择：{{ selectValue }}</div>
    </section>

    <!-- 开关组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Switch 开关</h2>
      <div class="flex items-center gap-4">
        <Switch v-model="switchValue" />
        <span>{{ switchValue ? '开' : '关' }}</span>
      </div>
    </section>

    <!-- 表格组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Table 表格</h2>
      <Table class="w-full max-w-2xl">
        <TableCaption>示例数据表</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>姓名</TableHead>
            <TableHead>年龄</TableHead>
            <TableHead>城市</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>张三</TableCell>
            <TableCell>28</TableCell>
            <TableCell>北京</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>李四</TableCell>
            <TableCell>32</TableCell>
            <TableCell>上海</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>

    <!-- Tooltip 组件案例 -->
    <section>
      <h2 class="text-xl font-bold mb-4">Tooltip 提示</h2>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button>鼠标悬停显示提示</Button>
          </TooltipTrigger>
          <TooltipContent>这是一个提示内容</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </section>
  </div>
</template>

<script setup lang="ts">
// 导入所有UI组件
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '~/components/ui/select'
import { Switch } from '~/components/ui/switch'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableCaption, TableFooter } from '~/components/ui/table'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '~/components/ui/tooltip'
import { ref } from 'vue'

// 输入框双向绑定
const inputValue = ref('')
// 单选框组双向绑定
const radioValue = ref('a')
// 下拉选择双向绑定
const selectValue = ref('apple')
// 开关双向绑定
const switchValue = ref(false)
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
}
</style>
