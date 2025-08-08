'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, ArrowRight, Clock, Brain, CheckCircle, X, Play, Pause, RotateCcw, Star } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect } from "react"

const questionsByLevel = {
junior: [
  {
    id: 1,
    question: "Что такое тестирование? Чем отличается QA от QC?",
    category: "Основы",
    difficulty: "Junior",
    timeLimit: 180,
    sampleAnswer: "Тестирование - это процесс выполнения программы с целью обнаружения ошибок. QA (Quality Assurance) - обеспечение качества, процесс предотвращения дефектов. QC (Quality Control) - контроль качества, процесс обнаружения дефектов в готовом продукте.",
    keyPoints: ["Определение тестирования", "Различие QA/QC", "Процессы качества"]
  },
  {
    id: 2,
    question: "Назовите основные принципы тестирования.",
    category: "Теория",
    difficulty: "Junior",
    timeLimit: 240,
    sampleAnswer: "1) Тестирование показывает наличие дефектов, но не их отсутствие. 2) Исчерпывающее тестирование невозможно. 3) Раннее тестирование экономит время и деньги. 4) Скопление дефектов. 5) Парадокс пестицида. 6) Тестирование зависит от контекста. 7) Заблуждение об отсутствии ошибок.",
    keyPoints: ["7 принципов тестирования", "Понимание ограничений", "Контекстность тестирования"]
  },
  {
    id: 3,
    question: "Как бы вы тестировали лифт?",
    category: "Практика",
    difficulty: "Junior",
    timeLimit: 300,
    sampleAnswer: "Функциональное тестирование: проверка кнопок, движения между этажами, открытия/закрытия дверей. Безопасность: аварийная остановка, перегрузка, датчики препятствий. Производительность: время ожидания, скорость движения. Удобство: освещение, звуковые сигналы, доступность для людей с ограниченными возможностями.",
    keyPoints: ["Функциональность", "Безопасность", "Производительность", "Удобство использования"]
  }
],
middle: [
  {
    id: 4,
    question: "Объясните разницу между Smoke, Sanity и Regression тестированием.",
    category: "Типы тестирования",
    difficulty: "Middle",
    timeLimit: 240,
    sampleAnswer: "Smoke testing - базовая проверка основной функциональности после новой сборки. Sanity testing - узконаправленная проверка конкретной функциональности после минорных изменений. Regression testing - повторное тестирование для проверки, что изменения не сломали существующую функциональность.",
    keyPoints: ["Цели каждого типа", "Когда применяется", "Объем тестирования"]
  },
  {
    id: 5,
    question: "Как вы тестируете REST API? Какие инструменты используете?",
    category: "API тестирование",
    difficulty: "Middle",
    timeLimit: 300,
    sampleAnswer: "Тестирую HTTP методы (GET, POST, PUT, DELETE), проверяю статус коды, валидирую JSON схему, тестирую аутентификацию и авторизацию. Инструменты: Postman для ручного тестирования, Newman для автоматизации, REST Assured для Java, requests для Python. Проверяю производительность, безопасность, обработку ошибок.",
    keyPoints: ["HTTP методы", "Валидация ответов", "Инструменты", "Безопасность API"]
  }
],
senior: [
  {
    id: 6,
    question: "Как вы организуете процесс тестирования в команде? Какие метрики используете?",
    category: "Процессы",
    difficulty: "Senior",
    timeLimit: 360,
    sampleAnswer: "Организую процесс согласно STLC, внедряю shift-left подход, настраиваю CI/CD пайплайны. Метрики: покрытие требований, плотность дефектов, время обнаружения и исправления багов, автоматизация coverage. Провожу ретроспективы, менторю junior'ов, участвую в планировании спринтов.",
    keyPoints: ["STLC процесс", "Shift-left", "Метрики качества", "Лидерство"]
  }
]
}

export default function InterviewSimulatorPage() {
const [selectedLevel, setSelectedLevel] = useState<'junior' | 'middle' | 'senior'>('junior')
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
const [userAnswer, setUserAnswer] = useState('')
const [timeLeft, setTimeLeft] = useState(0)
const [isActive, setIsActive] = useState(false)
const [showAnswer, setShowAnswer] = useState(false)
const [sessionStarted, setSessionStarted] = useState(false)
const [score, setScore] = useState(0)
const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])

const currentQuestions = questionsByLevel[selectedLevel]
const currentQuestion = currentQuestions[currentQuestionIndex]

useEffect(() => {
  let interval: NodeJS.Timeout | null = null
  if (isActive && timeLeft > 0) {
    interval = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1)
    }, 1000)
  } else if (timeLeft === 0 && isActive) {
    setIsActive(false)
    setShowAnswer(true)
  }
  return () => {
    if (interval) clearInterval(interval)
  }
}, [isActive, timeLeft])

const startQuestion = () => {
  setTimeLeft(currentQuestion.timeLimit)
  setIsActive(true)
  setShowAnswer(false)
  setUserAnswer('')
  setSessionStarted(true)
}

const pauseTimer = () => {
  setIsActive(!isActive)
}

const submitAnswer = () => {
  setIsActive(false)
  setShowAnswer(true)
  if (!answeredQuestions.includes(currentQuestion.id)) {
    setAnsweredQuestions([...answeredQuestions, currentQuestion.id])
    // Простая оценка на основе длины ответа и оставшегося времени
    const answerScore = Math.min(100, (userAnswer.length / 10) + (timeLeft / currentQuestion.timeLimit * 50))
    setScore(score + answerScore)
  }
}

const nextQuestion = () => {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setShowAnswer(false)
    setUserAnswer('')
    setIsActive(false)
    setTimeLeft(0)
  }
}

const resetSession = () => {
  setCurrentQuestionIndex(0)
  setUserAnswer('')
  setTimeLeft(0)
  setIsActive(false)
  setShowAnswer(false)
  setSessionStarted(false)
  setScore(0)
  setAnsweredQuestions([])
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const getTimeColor = () => {
  const percentage = (timeLeft / currentQuestion.timeLimit) * 100
  if (percentage > 50) return "text-green-600"
  if (percentage > 25) return "text-yellow-600"
  return "text-red-600"
}

return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
    {/* Header */}
    <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Симулятор собеседования
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Тренируйтесь отвечать на вопросы QA собеседований
            </p>
          </div>
        </div>
      </header>

    <div className="container mx-auto px-4 py-8">
      {!sessionStarted ? (
        /* Setup Screen */
        <div className="max-w-2xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-blue-600" />
                Выберите уровень сложности
              </CardTitle>
              <CardDescription>
                Вопросы адаптированы под ваш уровень опыта
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {Object.entries(questionsByLevel).map(([level, questions]) => (
                  <Card 
                    key={level}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedLevel === level 
                        ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedLevel(level as 'junior' | 'middle' | 'senior')}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-lg font-bold capitalize mb-2">{level}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                        {questions.length} вопросов
                      </div>
                      <Badge variant={selectedLevel === level ? "default" : "secondary"}>
                        {level === 'junior' && '0-2 года опыта'}
                        {level === 'middle' && '2-5 лет опыта'}
                        {level === 'senior' && '5+ лет опыта'}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button 
                onClick={startQuestion} 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                size="lg"
              >
                <Play className="w-4 h-4 mr-2" />
                Начать симуляцию
              </Button>
            </CardContent>
          </Card>

          {/* Preview Questions */}
          <Card>
            <CardHeader>
              <CardTitle>Примеры вопросов уровня {selectedLevel}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {questionsByLevel[selectedLevel].slice(0, 3).map((q, index) => (
                  <div key={q.id} className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{q.category}</Badge>
                      <Badge variant="secondary">{formatTime(q.timeLimit)}</Badge>
                    </div>
                    <p className="text-sm">{q.question}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        /* Interview Session */
        <div className="max-w-4xl mx-auto">
          {/* Progress and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {currentQuestionIndex + 1}/{currentQuestions.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Вопрос</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold ${getTimeColor()}`}>
                  {formatTime(timeLeft)}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Осталось</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(score / Math.max(answeredQuestions.length, 1))}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Средний балл</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {answeredQuestions.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Отвечено</div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Bar */}
          <Progress 
            value={(currentQuestionIndex / currentQuestions.length) * 100} 
            className="h-2 mb-6" 
          />

          {/* Current Question */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{currentQuestion.category}</Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    {currentQuestion.difficulty}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={pauseTimer}
                    disabled={!sessionStarted || timeLeft === 0}
                  >
                    {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetSession}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardTitle className="text-xl mt-4">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!showAnswer ? (
                <div className="space-y-4">
                  <Textarea
                    placeholder="Введите ваш ответ здесь..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="min-h-32"
                    disabled={!isActive && timeLeft === 0}
                  />
                  <div className="flex gap-2">
                    {!isActive && timeLeft === 0 ? (
                      <Button onClick={startQuestion} className="bg-green-600 hover:bg-green-700">
                        <Play className="w-4 h-4 mr-2" />
                        Начать отвечать
                      </Button>
                    ) : (
                      <Button 
                        onClick={submitAnswer}
                        disabled={!userAnswer.trim() || !isActive}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Отправить ответ
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                /* Answer Review */
                <div className="space-y-6">
                  <Alert>
                    <Star className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Ваш ответ:</strong>
                      <div className="mt-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        {userAnswer || "Ответ не предоставлен"}
                      </div>
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Примерный ответ:</strong>
                      <div className="mt-2 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                        {currentQuestion.sampleAnswer}
                      </div>
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-medium mb-2">Ключевые моменты для ответа:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentQuestion.keyPoints.map((point, index) => (
                        <Badge key={index} variant="outline">
                          {point}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {currentQuestionIndex < currentQuestions.length - 1 ? (
                      <Button onClick={nextQuestion}>
                        Следующий вопрос
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button onClick={resetSession} className="bg-green-600 hover:bg-green-700">
                        Завершить симуляцию
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  </div>
)
}
